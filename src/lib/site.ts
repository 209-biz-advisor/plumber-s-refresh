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
