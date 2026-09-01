# Today's Work: Page Content First, Keyword Interlinking Second

## Answering the question first

Yes. Every page is written individually. Each service entry has its own intro, bullets and
FAQ set, and the four water-heater pages have their own long-form sections. Nothing is
copied word-for-word from the old site and no body text is shared between slugs, so there is
no duplicate-content risk.

What's missing is the second half: when a page mentions toilets, faucets, sewer lines or hard
water, it's plain text today. Those mentions should link to the page that owns that topic.

## Phase 1 - Load the remaining pages (do this first)

Bring the rest of the catalog up to the depth the four water-heater pages now have, using the
old-site screenshots as source material, rewritten in our voice on the existing slugs.

Order of attack:

1. Plumbing core: drain cleaning, sewer services, sewer line repair, hydrojetting, video
   camera inspections, leak detection, emergency plumbing, plumbing repairs.
2. Fixtures and remodel: fixture plumbing and its children, toilet repair, toilet
   installation, faucet/sink/shower work, garbage disposal, kitchen and bath remodeling.
3. Water quality and lines: water softener, water treatment, water purification, water line
   plumbing, piping and repiping, gas line, backflow, grease trap, commercial.
4. Remaining water heaters: electric water heaters brought to the same depth as the other four.

Each page gets: 3 to 5 headed long-form sections, a symptom or benefit list with bolded
lead-ins, and 6 to 8 FAQs flowing into the existing FAQPage schema. All of it runs through the
existing `sections` field on `ServiceEntry` and the existing `ServicePageTemplate`, so no
layout or styling changes.

Rules kept throughout: no prices, no financing, no trenchless, no 24/7 claims, phone
209.838.1000, CA Lic. #953726 (C-36), 37+ years, founded 2010, "209 & 350" geo phrasing.

## Phase 2 - Contextual internal linking

Once the pages carry their content, add a single keyword-to-page map plus a renderer that
turns the first mention of a keyword in a paragraph into a link to the canonical page for
that topic.

Rules that keep it clean and Google-safe:

1. **One link per keyword per page.** First mention only; later mentions stay plain text.
2. **Never self-link.** A page never links a keyword pointing at itself.
3. **Caps.** Max 2 links per paragraph, max 8 per page, so the copy reads like copy.
4. **Longest phrase wins.** "tankless water heater" beats "water heater".
5. **Descriptive anchor text.** The anchor is the real phrase in the sentence, so anchors
   vary naturally instead of repeating one exact-match string.

### Keyword map (starting set)

Roughly 40 phrase groups, for example:

- toilet, toilet repair, running toilet, clogged toilet -> /plumbing-services/kitchen-bath-remodeling/toilet-repair/
- new toilet, toilet installation -> /plumbing-services/toilet-installation/
- faucet, dripping faucet -> /plumbing-services/fixture-plumbing/fixture-repair/faucet-repair/
- clogged drain, drain cleaning, slow drain -> /plumbing-services/drain-cleaning/
- sewer line, sewer backup -> /plumbing-services/sewer-line-repair/
- camera inspection -> /plumbing-services/video-camera-inspections/
- hydrojetting -> /plumbing-services/hydrojetting/
- gas line -> /plumbing-services/gas-line/
- repipe, repiping, galvanized pipe -> /plumbing-services/piping-repiping/
- water leak, leak detection, slab leak -> /plumbing-services/leak-detection/
- hard water, water softener, scale -> /plumbing-services/water-softener-repair-installation/
- garbage disposal -> /plumbing-services/garbage-disposal-repair/
- emergency plumber, burst pipe -> /plumbing-services/emergency-plumbing/
- water heater, tank replacement -> /water-heaters/water-heater-installation/
- tankless -> /water-heaters/tankless-water-heaters/
- flush the tank, annual flush, sediment -> /water-heaters/water-heater-flushing/
- electric water heater, heat pump -> /water-heaters/electric-water-heaters/
- no hot water, pilot light, thermocouple -> /water-heaters/water-heater-repair/
- commercial -> /plumbing-services/commercial-plumbing/
- backflow -> /plumbing-services/backflow-prevention-testing/
- City names (Modesto, Turlock, Oakdale, Riverbank, Ripon, Manteca, Lathrop, Salida) ->
  their /areas-we-serve/{city}/ pages, one city link per page max.

### Where linking is applied

- Service and water-heater long-form sections and list items.
- Service page intro paragraphs.
- City page body prose.
- Blog post bodies (this is where interlinking earns the most).

Not applied in: headings, hero H1 area, FAQ answers (kept clean for schema extraction),
JSON-LD, llms.txt, nav or footer.

### Content additions in the same pass

A short "Related services" line at the bottom of each long-form body where the topic hands
off naturally, for example flushing pointing to repair and installation, and tankless
pointing to gas line work.

## Technical notes

- Phase 1 is data-only: new `sections` and longer `faqs` arrays in `src/lib/services.ts`.
  `ServicePageTemplate` already renders both.
- Phase 2 adds `src/lib/interlink.ts`: the keyword map plus `linkify(text, { currentPath })`
  returning `ReactNode[]`. Matching is word-boundary and case-insensitive, skips text already
  inside a link, and honors the per-paragraph/per-page caps through a counter passed into the
  render.
- `ServicePageTemplate.tsx`, the city template and the blog post route render body paragraphs
  and list text through `linkify` instead of raw strings.
- Internal links use `<Link to>` where the route is static-typed, and trailing-slash `href`
  for the splat-based service routes, matching what those pages do today.
- No styling change: links inherit the existing accent hover treatment already used in body
  copy.
- No changes to slugs, canonicals, sitemap or schema in either phase.
