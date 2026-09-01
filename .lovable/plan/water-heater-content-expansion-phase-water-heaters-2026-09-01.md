# Water Heater Content Expansion (Phase: Water Heaters)

Repurpose the long-form content from the old site's four water heater pages into our current design, rewritten in our voice (not word-for-word), keeping the SEO/AEO/GEO/RAG signals and the existing slugs so the .com URL architecture still matches 1:1.

## Pages covered (slugs unchanged)

- /water-heaters/water-heater-installation/ (replacement, signs you need one, efficiency upgrade, Modesto climate)
- /water-heaters/water-heater-repair/ (signs it needs repair, repair vs replace, maintenance, "no job too small")
- /water-heaters/tankless-water-heaters/ (benefits, repair, install requirements, gas/venting/electrical, climate sizing)
- /water-heaters/water-heater-flushing/ (how often, why flush, how a pro helps, four benefits)

Existing pages `/water-heaters/electric-water-heaters/` and the hub keep their current content; the hub gets short teaser lines pulled from the new copy.

## What changes on each page

The page keeps today's layout: navy hero with the HighLevel form, What's Included, FAQ, internal linking, Emergency CTA, footer. New content slots in as additional styled sections between "What's Included" and the FAQ:

1. **Deep-content body** - 3 to 5 headed sections of rewritten prose in our existing typography (navy H2/H3, muted body, orange rule accents), mirroring the old page's H2 structure so the same queries are answered.
2. **Signs / symptom list** - checkmark list with bolded lead-ins (e.g. "Rusty water:", "Rumbling tank:"), which is what feeds AEO and RAG extraction.
3. **Expanded FAQ** - grow from 2 questions to 6 to 8 per page, matching the old page's question set in our own wording, and continue emitting FAQPage JSON-LD.
4. **Local geo phrasing** - Escalon, Modesto, Turlock, Stanislaus and San Joaquin County, "209 & 350" woven into headings and body the way the old Modesto-focused copy did.

Rules kept: no prices, no financing, no trenchless, no 24/7 claims, phone always 209.838.1000, CA Lic. #953726, 37+ years / founded 2010.

## Technical notes

- Extend `ServiceEntry` in `src/lib/services.ts` with two optional fields: `sections?: { heading: string; body: string[]; list?: { lead?: string; text: string }[] }[]` and keep `faqs` as-is (just longer arrays). Optional means the other 30+ services render exactly as they do now.
- `src/components/ServicePageTemplate.tsx` renders `sections` when present, using existing tokens and utility classes only (no new colors).
- FAQ JSON-LD in `src/routes/water-heaters.$.tsx` already maps `faqs`, so longer FAQ sets flow through automatically.
- Sitemap, robots, llms.txt and llms-full.txt need no URL changes; llms-full.txt gets refreshed one-line summaries for the four pages.
- Screenshots are reference only; no images from them are embedded.

## After approval

Same treatment, page by page, for the plumbing services screenshots you send next (drain cleaning, sewer, fixture plumbing, etc.).
