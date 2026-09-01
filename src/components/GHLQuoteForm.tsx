import { useEffect } from "react";

const FORM_ID = "XAUh0YCVe0721IdMKPrL";

/**
 * HighLevel (GHL) inline quote form embed.
 * The companion script auto-resizes the iframe via postMessage, so it must
 * be loaded once on the client after hydration.
 *
 * When a page renders more than one embed (hero + bottom emergency CTA), pass a
 * distinct `instanceId` so each iframe keeps a unique DOM id and auto-resizes
 * independently.
 */
export function GHLQuoteForm({
  className = "",
  instanceId = "hero",
}: {
  className?: string;
  instanceId?: string;
}) {
  useEffect(() => {
    const src = "https://links.mainlineplumber.com/js/form_embed.js";
    if (!document.querySelector(`script[src="${src}"]`)) {
      const s = document.createElement("script");
      s.src = src;
      s.async = true;
      document.body.appendChild(s);
    }
  }, []);

  const iframeId = `inline-${FORM_ID}-${instanceId}`;

  return (
    <div
      className={`bg-white rounded-2xl p-2 md:p-3 border border-border ${className}`}
      style={{ boxShadow: "var(--shadow-elegant)" }}
    >
      <iframe
        src={`https://links.mainlineplumber.com/widget/form/${FORM_ID}`}
        style={{ width: "100%", height: "781px", border: "none", borderRadius: "8px" }}
        id={iframeId}
        data-layout="{'id':'INLINE'}"
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name="Form 1"
        data-height="781"
        data-layout-iframe-id={iframeId}
        data-form-id={FORM_ID}
        data-cookie-consent="true"
        data-cookie-consent-provider="auto"
        title="Request service from Mainline Plumbing"
        loading="lazy"
      />
    </div>
  );
}
