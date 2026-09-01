import { useCallback, useEffect, useState } from "react";
import { Cookie, X, ShieldCheck } from "lucide-react";
import {
  ALL_OFF,
  ALL_ON,
  CATEGORY_LABELS,
  OPEN_PREFERENCES_EVENT,
  type ConsentCategory,
  hasGlobalOptOut,
  readConsent,
  writeConsent,
} from "@/lib/consent";

const ORDER: ConsentCategory[] = ["necessary", "analytics", "personalization", "marketing"];

function Toggle({
  checked,
  disabled,
  onChange,
  label,
}: {
  checked: boolean;
  disabled?: boolean;
  onChange: (v: boolean) => void;
  label: string;
}) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      aria-label={label}
      disabled={disabled}
      onClick={() => onChange(!checked)}
      className={[
        "relative inline-flex h-6 w-11 shrink-0 items-center rounded-full transition-colors",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange focus-visible:ring-offset-2",
        checked ? "bg-brand-orange" : "bg-muted-foreground/35",
        disabled ? "cursor-not-allowed opacity-60" : "cursor-pointer",
      ].join(" ")}
    >
      <span
        className={[
          "inline-block size-5 rounded-full bg-white shadow transition-transform",
          checked ? "translate-x-[22px]" : "translate-x-0.5",
        ].join(" ")}
      />
    </button>
  );
}

/**
 * California-facing cookie consent banner and preference center.
 *
 * Rendered only after hydration so the stored decision can never cause a
 * server/client markup mismatch. Non-necessary categories stay off until the
 * visitor opts in, and a Global Privacy Control signal is recorded as an
 * opt-out of sale/sharing without requiring any interaction.
 */
export function CookieConsent() {
  const [mounted, setMounted] = useState(false);
  const [showBanner, setShowBanner] = useState(false);
  const [showPanel, setShowPanel] = useState(false);
  const [gpc, setGpc] = useState(false);
  const [draft, setDraft] = useState<Record<ConsentCategory, boolean>>(ALL_OFF);

  useEffect(() => {
    setMounted(true);
    const signal = hasGlobalOptOut();
    setGpc(signal);
    const stored = readConsent();
    if (stored) {
      setDraft(stored.categories);
      return;
    }
    if (signal) {
      // Honor GPC/DNT immediately as an opt-out of sale and sharing.
      const state = writeConsent(ALL_OFF, "gpc");
      setDraft(state.categories);
    }
    setShowBanner(true);
  }, []);

  useEffect(() => {
    const open = () => {
      setDraft(readConsent()?.categories ?? ALL_OFF);
      setShowPanel(true);
      setShowBanner(false);
    };
    window.addEventListener(OPEN_PREFERENCES_EVENT, open);
    return () => window.removeEventListener(OPEN_PREFERENCES_EVENT, open);
  }, []);

  const commit = useCallback(
    (categories: Record<ConsentCategory, boolean>, method: "accept-all" | "reject-all" | "custom") => {
      writeConsent(categories, method);
      setDraft({ ...categories, necessary: true });
      setShowBanner(false);
      setShowPanel(false);
    },
    [],
  );

  if (!mounted || (!showBanner && !showPanel)) return null;

  return (
    <>
      {showBanner && !showPanel && (
        <div
          role="dialog"
          aria-modal="false"
          aria-label="Cookie consent"
          className="fixed inset-x-0 bottom-0 z-50 border-t-4 border-brand-orange bg-navy-deep text-white shadow-2xl"
        >
          <div className="container-x py-5 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex gap-3 max-w-3xl">
              <Cookie className="size-6 text-accent shrink-0 mt-0.5" aria-hidden="true" />
              <p className="text-sm text-white/85">
                We use cookies to run this site, understand how visitors use our service and city
                pages, and measure our advertising. Under California law you can accept, reject, or
                choose which categories you allow. Only strictly necessary cookies load until you
                decide.{" "}
                <a href="/cookie-policy/" className="font-semibold text-accent hover:underline">
                  Read our Cookie Policy
                </a>
                .
              </p>
            </div>
            <div className="flex flex-wrap gap-2 shrink-0">
              <button type="button" onClick={() => commit(ALL_ON, "accept-all")} className="btn-primary">
                Accept All
              </button>
              <button
                type="button"
                onClick={() => commit(ALL_OFF, "reject-all")}
                className="inline-flex items-center justify-center rounded-md border border-white/40 px-4 py-2 text-sm font-semibold text-white hover:bg-white/10"
              >
                Reject All
              </button>
              <button
                type="button"
                onClick={() => {
                  setDraft(readConsent()?.categories ?? ALL_OFF);
                  setShowPanel(true);
                }}
                className="inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-semibold text-accent underline hover:text-white"
              >
                Manage Preferences
              </button>
            </div>
          </div>
        </div>
      )}

      {showPanel && (
        <div className="fixed inset-0 z-[60] flex items-end justify-center bg-black/60 p-0 sm:items-center sm:p-4">
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="cookie-prefs-title"
            className="w-full max-w-2xl max-h-[92vh] overflow-y-auto rounded-t-xl sm:rounded-xl bg-background shadow-2xl"
          >
            <div className="flex items-start justify-between gap-4 border-b border-border bg-navy-deep px-6 py-5 text-white sm:rounded-t-xl">
              <div>
                <h2 id="cookie-prefs-title" className="font-display text-xl uppercase tracking-wide">
                  Cookie Preferences
                </h2>
                <p className="mt-1 text-sm text-white/75">
                  Choose which cookies Mainline Plumbing Inc. may use. Your choice is saved on this
                  device and you can change it any time.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setShowPanel(false)}
                aria-label="Close cookie preferences"
                className="rounded-md p-1 text-white/70 hover:bg-white/10 hover:text-white"
              >
                <X className="size-5" />
              </button>
            </div>

            <div className="px-6 py-5 space-y-4">
              {gpc && (
                <div className="rounded-r border-l-4 border-brand-orange bg-muted/60 p-4 text-sm">
                  <p className="font-semibold text-navy">Global Privacy Control detected</p>
                  <p className="mt-1 text-muted-foreground">
                    Your browser is sending an opt-out preference signal, so we have already
                    recorded an opt-out of the sale or sharing of your personal information. You can
                    still opt in below if you choose.
                  </p>
                </div>
              )}

              {ORDER.map((key) => {
                const meta = CATEGORY_LABELS[key];
                return (
                  <div key={key} className="rounded-lg border border-border p-4">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="font-bold text-navy">{meta.name}</p>
                        {meta.alwaysOn && (
                          <span className="mt-1 inline-block rounded bg-muted px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                            Always active
                          </span>
                        )}
                      </div>
                      <Toggle
                        label={meta.name}
                        checked={meta.alwaysOn ? true : draft[key]}
                        disabled={meta.alwaysOn}
                        onChange={(v) => setDraft((d) => ({ ...d, [key]: v }))}
                      />
                    </div>
                    <p className="mt-2 text-sm text-muted-foreground">{meta.summary}</p>
                  </div>
                );
              })}

              <p className="flex items-start gap-2 text-xs text-muted-foreground">
                <ShieldCheck className="size-4 text-brand-orange shrink-0 mt-0.5" />
                <span>
                  Turning off Advertising &amp; Targeting is treated as your request to opt out of
                  the sale and sharing of personal information under the CCPA and CPRA. Details are
                  in our{" "}
                  <a href="/cookie-policy/" className="font-semibold text-brand-orange hover:underline">
                    Cookie Policy
                  </a>{" "}
                  and{" "}
                  <a href="/privacy-policy/" className="font-semibold text-brand-orange hover:underline">
                    Privacy Policy
                  </a>
                  .
                </span>
              </p>
            </div>

            <div className="flex flex-wrap gap-2 border-t border-border bg-muted/40 px-6 py-4">
              <button type="button" onClick={() => commit(draft, "custom")} className="btn-primary">
                Save My Choices
              </button>
              <button
                type="button"
                onClick={() => commit(ALL_ON, "accept-all")}
                className="inline-flex items-center justify-center rounded-md border border-navy/25 px-4 py-2 text-sm font-semibold text-navy hover:bg-muted"
              >
                Accept All
              </button>
              <button
                type="button"
                onClick={() => commit(ALL_OFF, "reject-all")}
                className="inline-flex items-center justify-center rounded-md border border-navy/25 px-4 py-2 text-sm font-semibold text-navy hover:bg-muted"
              >
                Reject All
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
