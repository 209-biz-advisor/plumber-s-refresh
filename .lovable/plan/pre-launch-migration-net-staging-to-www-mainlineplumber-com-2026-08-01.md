# Pre-Launch Migration: .net Staging to www.mainlineplumber.com

Goal: make the route tree, URLs, metadata and schema of this build an exact match for what Google already has indexed on the Scorpion site, so flipping the domain preserves authority instead of resetting it.

## Audit findings (current build vs indexed production)

Current build has 16 URLs: `/`, `/about`, `/services`, `/contact`, `/areas-we-serve`, plus 11 city pages. Production has ~140 indexed URLs.

What is wrong today for a domain swap:
- **URL structure mismatch on every page.** Production uses deep, trailing-slash paths (`/about-us/`, `/plumbing-services/drain-cleaning/`, `/water-heaters/tankless-water-heaters/`). Nothing in this build matches except the city slugs.
- **~45 service URLs have no page here.** All plumbing-services and water-heaters children are currently one flat `/services` page.
- **Authority content missing entirely:** blog (30 posts + year/month/category archives), `/reviews/`, `/coupons/`, `/about-us/faq/`, `/photo-gallery/`, `/about-us/video-center/`.
- **Escalon city URL mismatch:** production indexes `/areas-we-serve/escalon-plumber-emergency-plumbing-water-heater-/`, this build uses `/areas-we-serve/escalon`.
- **Canonicals, og:url and sitemap all hardcoded to mainlineplumber.net**, plus a non-canonical `og:image` pointing at a Lovable preview R2 URL.
- **Sitemap emits a generated-today `<lastmod>` on every URL**, which is a false freshness signal.
- **Crawl depth / internal linking:** header nav points "Drain Cleaning" and "Water Heaters" at `/services`; there is no service hub tree, no breadcrumb UI, and no city-to-service cross-linking.
- **Schema gaps:** no Service schema per service page, no FAQPage, no BreadcrumbList on the new deep routes, no Review/AggregateRating surface.

## Phase 1 — Domain and URL foundation (Critical)

1. Switch the canonical host to `https://www.mainlineplumber.com` everywhere: root head, every route `head()`, sitemap `BASE_URL`, robots.txt, llms.txt, llms-full.txt, JSON-LD `url`/`@id`.
2. Set router `trailingSlash: "always"` so every canonical URL ends in `/`, matching production exactly.
3. Rename existing routes to production paths: `/about` to `/about-us/`, `/services` to `/plumbing-services/`, `/contact` to `/contact-us/`. Add 301s from the old `.net` paths.
4. Keep `/areas-we-serve/` and the 11 city slugs as-is; add the long Escalon URL as the canonical Escalon page with `/areas-we-serve/escalon/` 301ing into it.
5. Replace the preview-R2 `og:image` with a real hosted brand image on the production domain.
6. Remove generated `<lastmod>` from the sitemap; keep per-URL values only where a real content date exists.

## Phase 2 — Service tree, full parity (Critical/High)

Build every indexed service URL as a real page with unique copy, unique metadata, H1, and Service schema.

`/plumbing-services/` hub with children: drain-cleaning, emergency-plumbing, plumbing-repairs, leak-detection, gas-line (+ gas-line-installation), piping-repiping, frozen-pipe-repair, plumbing-inspections, plumbing-maintenance, hydrojetting, sewer-services, sewer-line-repair, trenchless-sewer-line-replacement, video-camera-inspections, commercial-plumbing, kitchen-bath-remodeling (+ toilet-repair), water-softener-repair-installation, water-treatment-systems, water-purification-systems, toilet-installation, garbage-disposal-repair, garbage-disposal-installation, backflow-prevention-testing, grease-trap-cleaning, water-line-plumbing, fixture-plumbing (+ fixture-repair, fixture-repair/sink-repair, fixture-repair/faucet-repair, faucet-installation, shower-installation, sink-installation).

`/water-heaters/` hub with children: water-heater-installation, water-heater-repair, tankless-water-heaters, water-heater-flushing. Plus new electric and hybrid heat-pump pages to carry the water-heater push already in the copy.

Each page gets: hero with phone CTA, symptom list, process, local proof, FAQ block with FAQPage schema, BreadcrumbList, related-services links, and city links.

## Phase 3 — Authority content parity (High)

- `/blog/` index, `/blog/categories/{slug}/` (11 categories), `/blog/{year}/`, `/blog/{year}/{month}/`, and all ~30 post URLs recreated at their exact production paths with rewritten, expanded copy and Article schema.
- `/reviews/` with Review + AggregateRating schema.
- `/coupons/` fed by the existing specials data.
- `/about-us/faq/` with FAQPage schema.
- `/photo-gallery/` plus `/photo-gallery/plumbing-work/` and `/photo-gallery/team/`.
- `/about-us/video-center/`, `/about-us/video-center/videos/`, `/about-us/video-center/videos/about-our-company/`.
- `/site-map/` HTML sitemap for crawl-depth flattening.

## Phase 4 — Retire and redirect (High)

- `/templates/`, `/templates/home/`, `/templates/general/` and `/nps-survey/thank-you/`: Scorpion artifacts, `noindex` and 301 to the closest real page rather than recreating.
- Any remaining old `.net` path 301s to its `.com` equivalent.
- Produce a full old-URL to new-URL redirect table as a deliverable so nothing 404s on cutover.

## Phase 5 — Navigation, IA and conversion (High/Medium)

- Header nav rewired to real destinations with dropdowns for Plumbing Services and Water Heaters; add Reviews and Coupons.
- Visible breadcrumb component on every non-home route, matched to BreadcrumbList schema.
- Footer expanded into a link map: top services, water heaters, all cities, authority pages.
- Every service page links up to its hub, sideways to siblings, and down to city pages; every city page links to the top services. Max crawl depth 3.

## Phase 6 — Technical hygiene (Medium/Low)

- Unique title/description/og per URL, no duplicates across ~140 pages.
- Alt text audit on every image; single H1 per page; correct H2/H3 nesting.
- Image sizing/lazy-loading and font-loading pass for Core Web Vitals.
- Mobile and accessibility pass: tap targets, contrast, focus states, form labels, aria on the mobile menu.
- robots.txt, llms.txt and llms-full.txt rewritten to the .com host and the full page index.
- Sitemap regenerated from the route tree so it stays in sync.

## Technical notes

- All new routes are TanStack Start file routes under `src/routes/`, with service and blog content driven by typed data modules (`src/lib/services.ts`, `src/lib/blog.ts`) consumed by dynamic route templates, mirroring the existing `service-cities.ts` pattern.
- Trailing-slash canonicalization via router config plus a redirect layer, so `/about-us` and `/about-us/` never both serve 200.
- Schema is composed per route in `head()`: LocalBusiness/Plumber sitewide, Service on service routes, FAQPage where FAQs render, BreadcrumbList on all deep routes, Article on posts, Review/AggregateRating on `/reviews/`.
- No backend needed; everything is static content and schema.

## Sequencing

Phase 1 first and alone, since it is the piece that actually makes the domain flip safe. Phases 2 and 3 are large content builds and will run in batches. The redirect table from Phase 4 ships before cutover.
