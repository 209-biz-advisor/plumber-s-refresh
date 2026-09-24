import { useEffect, useRef } from "react";

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
  const frameRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const src = "https://links.mainlineplumber.com/js/form_embed.js";
    if (!document.querySelector(`script[src="${src}"]`)) {
      const s = document.createElement("script");
      s.src = src;
      s.async = true;
      document.body.appendChild(s);
    }
  }, []);

  /**
   * The HighLevel loader parks an inline iframe off-screen until that frame
   * reports its height. When two embeds of the same form share a page, the
   * loader sometimes leaves the second one parked, which collapses the card.
   * Nudge any parked frame back into the layout so the form always shows.
   */
  useEffect(() => {
    const frame = frameRef.current;
    if (!frame) return;

    let rescues = 0;
    const revealIfParked = () => {
      const style = window.getComputedStyle(frame);
      const parked =
        style.visibility === "hidden" || style.position === "absolute" || style.opacity === "0";
      if (!parked || rescues >= 6) return;
      rescues += 1;
      frame.style.position = "relative";
      frame.style.left = "auto";
      frame.style.top = "auto";
      frame.style.opacity = "1";
      frame.style.visibility = "visible";
      frame.style.pointerEvents = "auto";
      frame.style.width = "100%";
    };

    const observer = new MutationObserver(revealIfParked);
    observer.observe(frame, { attributes: true, attributeFilter: ["style"] });
    const timers = [1200, 2500, 5000, 9000, 15000].map((ms) => window.setTimeout(revealIfParked, ms));

    return () => {
      observer.disconnect();
      timers.forEach((id) => window.clearTimeout(id));
    };
  }, []);

  const iframeId = `inline-${FORM_ID}-${instanceId}`;

  return (
    <div
      className={`bg-white rounded-2xl p-2 md:p-3 border border-border ${className}`}
      style={{ boxShadow: "var(--shadow-elegant)" }}
    >
      <iframe
        ref={frameRef}
        src={`https://links.mainlineplumber.com/widget/form/${FORM_ID}`}
        style={{ width: "100%", height: "1101px", border: "none", borderRadius: "8px" }}
        id={iframeId}
        data-layout="{'id':'INLINE'}"
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name="Form 1"
        data-height="1101"
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
