import { useEffect, useRef, useState } from "react";
import { CONSENT_EVENT, hasConsent, readConsent, type ConsentState } from "@/lib/consent";

const WIDGET_ID = "6a96f11ceb06b512c2dd3ccb";
const SCRIPT_SRC = "https://widgets.leadconnectorhq.com/loader.js";
const RESOURCES_URL = "https://widgets.leadconnectorhq.com/chat-widget/loader.js";

function injectWidget() {
  if (typeof document === "undefined") return;
  if (document.getElementById(`lc-chat-${WIDGET_ID}`)) return;

  const script = document.createElement("script");
  script.id = `lc-chat-${WIDGET_ID}`;
  script.src = SCRIPT_SRC;
  script.async = true;
  script.setAttribute("data-resources-url", RESOURCES_URL);
  script.setAttribute("data-widget-id", WIDGET_ID);
  document.body.appendChild(script);
}

/**
 * LeadConnector (HighLevel) chat widget.
 *
 * The chat widget is a third-party personalization tool that may remember
 * session state and pre-fill details. It is only loaded when the visitor has
 * granted the "personalization" cookie category, or after they later grant it
 * through the cookie banner. If consent is revoked, the already-loaded widget
 * remains for the current page but no new script is injected on future loads.
 */
export function ChatWidget() {
  const [canLoad, setCanLoad] = useState(false);
  const mounted = useRef(false);

  useEffect(() => {
    mounted.current = true;
    setCanLoad(hasConsent("personalization"));

    const handleConsent = (e: Event) => {
      const detail = (e as CustomEvent<ConsentState>).detail;
      if (mounted.current && detail?.categories?.personalization) {
        setCanLoad(true);
        injectWidget();
      }
    };

    window.addEventListener(CONSENT_EVENT, handleConsent);
    return () => {
      mounted.current = false;
      window.removeEventListener(CONSENT_EVENT, handleConsent);
    };
  }, []);

  useEffect(() => {
    if (canLoad) injectWidget();
  }, [canLoad]);

  return null;
}

/** Hydration-safe wrapper that reads stored consent on the first client render. */
export function ChatWidgetClient() {
  const [hydrated, setHydrated] = useState(false);
  useEffect(() => setHydrated(true), []);
  if (!hydrated) return null;
  return <ChatWidget />;
}
