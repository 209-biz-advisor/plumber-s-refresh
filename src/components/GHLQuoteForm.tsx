import { useEffect } from "react";

/**
 * HighLevel (GHL) inline quote form embed.
 * The companion script auto-resizes the iframe via postMessage, so it must
 * be loaded once on the client after hydration.
 */
export function GHLQuoteForm({ className = "" }: { className?: string }) {
  useEffect(() => {
    const src = "https://links.mainlineplumber.com/js/form_embed.js";
    if (!document.querySelector(`script[src="${src}"]`)) {
      const s = document.createElement("script");
      s.src = src;
      s.async = true;
      document.body.appendChild(s);
    }
  }, []);

  return (
    <div
      className={`bg-white rounded-2xl p-2 md:p-3 border border-border ${className}`}
      style={{ boxShadow: "var(--shadow-elegant)" }}
    >
      <iframe
        src="https://links.mainlineplumber.com/widget/form/XAUh0YCVe0721IdMKPrL"
        style={{ width: "100%", height: "781px", border: "none", borderRadius: "8px" }}
        id="inline-XAUh0YCVe0721IdMKPrL"
        data-layout="{'id':'INLINE'}"
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name="Form 1"
        data-height="781"
        data-layout-iframe-id="inline-XAUh0YCVe0721IdMKPrL"
        data-form-id="XAUh0YCVe0721IdMKPrL"
        data-cookie-consent="true"
        data-cookie-consent-provider="auto"
        title="Request service from Mainline Plumbing"
        loading="lazy"
      />
    </div>
  );
}
