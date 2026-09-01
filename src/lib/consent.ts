/**
 * Cookie consent state for California (CCPA/CPRA) compliance.
 *
 * Categories are opt-in except "necessary". Nothing in the "analytics",
 * "marketing" or "personalization" buckets may fire until the visitor has
 * granted that bucket. Global Privacy Control (GPC) and legacy DNT headers are
 * treated as a valid opt-out of sale/sharing, so those buckets default to off
 * and a fresh GPC signal is recorded as an opt-out without any banner clicks.
 */

export const CONSENT_STORAGE_KEY = "mlp-cookie-consent-v1";
export const CONSENT_VERSION = 1;

export type ConsentCategory = "necessary" | "analytics" | "marketing" | "personalization";

export type ConsentState = {
  version: number;
  /** ISO timestamp of the visitor's decision. */
  updatedAt: string;
  /** How the decision was made, retained as our record of consent. */
  method: "accept-all" | "reject-all" | "custom" | "gpc";
  /** True when the browser sent a Global Privacy Control / DNT signal. */
  gpc: boolean;
  categories: Record<ConsentCategory, boolean>;
};

export const CATEGORY_LABELS: Record<
  ConsentCategory,
  { name: string; summary: string; alwaysOn?: boolean }
> = {
  necessary: {
    name: "Strictly Necessary",
    summary:
      "Required for the site to work: page routing, security, load balancing, form submission and remembering your cookie choices. These cannot be switched off.",
    alwaysOn: true,
  },
  analytics: {
    name: "Analytics & Performance",
    summary:
      "Helps us count visits, see which service and city pages are useful, and find broken or slow pages. Aggregated reporting only.",
  },
  marketing: {
    name: "Advertising & Targeting",
    summary:
      "Used to measure ad performance and show Mainline Plumbing ads to people who have visited the site. This is the category California law treats as sharing for cross-context behavioral advertising.",
  },
  personalization: {
    name: "Functional & Personalization",
    summary:
      "Remembers preferences such as your service area, form entries and chat or quote-request sessions so you do not have to re-enter them.",
  },
};

export const ALL_OFF: Record<ConsentCategory, boolean> = {
  necessary: true,
  analytics: false,
  marketing: false,
  personalization: false,
};

export const ALL_ON: Record<ConsentCategory, boolean> = {
  necessary: true,
  analytics: true,
  marketing: true,
  personalization: true,
};

/** True when the browser is broadcasting an opt-out preference signal. */
export function hasGlobalOptOut(): boolean {
  if (typeof window === "undefined") return false;
  const nav = window.navigator as Navigator & {
    globalPrivacyControl?: boolean;
    doNotTrack?: string;
    msDoNotTrack?: string;
  };
  if (nav.globalPrivacyControl === true) return true;
  const dnt = nav.doNotTrack ?? nav.msDoNotTrack ?? (window as unknown as { doNotTrack?: string }).doNotTrack;
  return dnt === "1" || dnt === "yes";
}

export function readConsent(): ConsentState | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(CONSENT_STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as ConsentState;
    if (!parsed || parsed.version !== CONSENT_VERSION || !parsed.categories) return null;
    return { ...parsed, categories: { ...ALL_OFF, ...parsed.categories, necessary: true } };
  } catch {
    return null;
  }
}

export const CONSENT_EVENT = "mlp:consent-change";

export function writeConsent(
  categories: Record<ConsentCategory, boolean>,
  method: ConsentState["method"],
): ConsentState {
  const state: ConsentState = {
    version: CONSENT_VERSION,
    updatedAt: new Date().toISOString(),
    method,
    gpc: hasGlobalOptOut(),
    categories: { ...categories, necessary: true },
  };
  try {
    window.localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(state));
  } catch {
    /* storage blocked: consent applies for this page view only */
  }
  window.dispatchEvent(new CustomEvent<ConsentState>(CONSENT_EVENT, { detail: state }));
  return state;
}

/** Opens the preferences panel from anywhere (footer link, policy page button). */
export const OPEN_PREFERENCES_EVENT = "mlp:open-cookie-preferences";

export function openCookiePreferences() {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new Event(OPEN_PREFERENCES_EVENT));
}

/** Guard for any script or pixel before it loads. */
export function hasConsent(category: ConsentCategory): boolean {
  if (category === "necessary") return true;
  return readConsent()?.categories[category] === true;
}
