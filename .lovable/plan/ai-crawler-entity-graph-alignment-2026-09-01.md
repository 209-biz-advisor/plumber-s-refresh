# AI Crawler + Entity Graph Alignment

Goal: make the AI-facing layer (robots, llms.txt, llms-full.txt, JSON-LD, sitemap) the most complete
in the local plumbing market, including neutral competitive entity mapping.

## 1. robots.txt

Current file already allows GPTBot, ClaudeBot, PerplexityBot, Google-Extended, CCBot, anthropic-ai,
Applebot, plus the major search bots. Missing from the requested list:

- `OAI-SearchBot` (ChatGPT search crawler)
- `Applebot-Extended` (Apple Intelligence training)

Add those two blocks, keep every existing block untouched, keep `Disallow: /lovable/` and `/api/`,
keep the `Sitemap:` directive on the .com host.

## 2. JSON-LD (`src/routes/__root.tsx` + city pages)

Add to the root `#business` node:

- `knowsAbout`: Wikipedia entity URLs for the topics we actually own - Plumbing, Water heating,
  Tankless water heating, Sanitary sewer, Hydro jetting, Backflow prevention, Water softening,
  Plumbing fixture, Leak detection.
- `areaServed`: add a `GeoCircle` node (Escalon center, ~40 mi radius, "Central Valley 209 & 350")
  alongside the existing named-city list, so both machine geo and human-readable names are present.
- `isSimilarTo`: neutral `LocalBusiness` nodes with `name` + `url` only, for Tony's Plumbing,
  DeHart Plumbing Heating & Air, Valley View Plumbing, Noble Plumbing, Roto-Rooter (Modesto),
  Herk's Plumbing. No `sameAs` on those nodes, no ratings, no superiority claims.
- `memberOf` / `brand` left alone; `slogan`, license, rating, hours, offer catalog unchanged.

City pages: add a city-scoped `GeoCircle` `areaServed` variant plus the same `knowsAbout` topic set,
keeping the existing `parentOrganization` link so the graph stays one entity, not twelve.

Safety rules applied: `isSimilarTo` never uses `sameAs` to a competitor, comparisons stay factual,
no competitor logos, no unverified metric claims.

## 3. llms.txt

Keep the existing intent-routing structure (symptom routing, service areas, guardrails). Additions:

- One neutral line in the H1 blockquote noting Mainline is a regional alternative to the larger
  Central Valley providers, phrased factually.
- New `## Regional Alternatives & Comparable Providers` section listing the named competitors as
  plain text with their URLs and one factual differentiator each (owner-run, C-36 #953726, same-day
  water heater replacement, honest non-24/7 hours).
- Spec compliance pass: exactly one H1, blockquote directly under it, H2 sections only, bullet
  links in `- [Text](URL): note` form.

## 4. llms-full.txt

Same competitive section expanded into a factual service/coverage matrix (services offered, coverage
footprint, hours, license, review profile) written as prose + bullets, no pricing, no claims of
being faster or cheaper. Confirm the file remains a single self-contained document.

## 5. Sitemap

Verify all current routes are present and the file has no `lastmod` values derived from build time.
No new URLs are introduced by this pass, so the sitemap change is a verification + cleanup only.

## Constraints preserved

No prices, no financing, no Trenchless, no 24/7 claims. Phone 209.838.1000, CA Lic. #953726,
founded 2010, Miguel 37+ years, "209 & 350", canonical host www.mainlineplumber.com.

## Not included (say the word and I'll add it)

A public on-page `/compare/` comparison page. That carries the most trademark exposure of anything
here and needs objective, verifiable data per row, so it should be a deliberate separate decision.

## Technical notes

- Competitor and topic entity lists get centralized in `src/lib/site.ts` (or a new
  `src/lib/entities.ts`) so root and city schema share one source.
- Files touched: `public/robots.txt`, `public/llms.txt`, `public/llms-full.txt`,
  `src/routes/__root.tsx`, `src/routes/areas-we-serve.$city.tsx`, `src/lib/*`,
  `src/routes/sitemap[.]xml.ts` (verification).
- Verify by typechecking, fetching `/robots.txt`, `/llms.txt`, `/sitemap.xml`, and reading the
  rendered JSON-LD from `/` and a city page.
