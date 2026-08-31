/**
 * Canonical production host. The .net domain is staging only; every canonical,
 * og:url, sitemap entry and JSON-LD @id points at the production .com host so the
 * domain swap resolves 1:1 with what Google already has indexed.
 */
export const SITE_URL = "https://www.mainlineplumber.com";

/** Absolute canonical URL for a path. Production uses trailing slashes. */
export function canonical(path: string): string {
  if (path === "/") return `${SITE_URL}/`;
  const clean = `/${path.replace(/^\/+/, "").replace(/\/+$/, "")}/`;
  return `${SITE_URL}${clean}`;
}

export const OG_IMAGE = `${SITE_URL}/og-cover.png`;

/** California contractor license (C-36 Plumbing classification). */
export const LICENSE_NUMBER = "953726";
export const LICENSE_LABEL = `CA Lic. #${LICENSE_NUMBER} (C-36 Plumbing)`;
export const LICENSE_SHORT = `Licensed, Bonded & Insured · CA C-36 Lic. #${LICENSE_NUMBER}`;

/** Canonical business phone. 209.838.1000 is the only number used site-wide. */
export const PHONE_DISPLAY = "209.838.1000";
export const PHONE_TEL = "tel:+12098381000";
export const PHONE_SCHEMA = "+1-209-838-1000";
