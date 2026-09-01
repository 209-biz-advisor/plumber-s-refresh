# Contextual Internal Linking (Keyword Interlinking)

## Answering the first question

Yes. Every page in the catalog is written individually. Each service entry has its own
intro, its own bullet list, its own FAQ set, and the four water-heater pages have their own
long-form sections. Nothing is copied word-for-word from the old site, and no section text
is shared between pages, so there is no duplicate-content risk between slugs.

What is missing is the second half of what you're describing: right now when a page mentions
toilets, faucets, sewer lines or hard water, it's plain text. Those mentions should be links
to the page that owns that topic.

## What to build

A single keyword-to-page map plus a renderer that turns the first mention of a keyword in a
paragraph into a link to the canonical page for that topic.

Rules that keep it clean and Google-safe:

1. **One link per keyword per page.** First mention only; later mentions stay plain text.
2. **Never self-link.** A page never links a keyword that points at itself.
3. **Cap per paragraph and per page.** Max 2 links per paragraph, max 8 per page, so the
   copy still reads like copy and not like a link farm.
4. **Longest phrase wins.** "tankless water heater" links to the tankless page, not to the
   water-heater hub, because the longer phrase is matched first.
5. **Descriptive anchor text.** The anchor is the real phrase in the sentence, so anchors
   vary naturally across the site instead of repeating one exact-match string.

## Keyword map (starting set)

Roughly 40 phrase groups pointing at the pages that own them, for example:

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

## Where linking is applied

- Service and water-heater page long-form sections and list items.
- Service page intro paragraphs.
- City page body prose.
- Blog post bodies (this is where interlinking earns the most).

Not applied in: headings, hero H1 area, FAQ answers (kept clean for schema extraction),
JSON-LD, llms.txt, nav, or footer.

## Content additions in the same pass

Beyond auto-linking, a short "Related services" line is added to the bottom of each
long-form body where the topic naturally hands off, for example the flushing page pointing
to repair and installation, and the tankless page pointing to gas line work.

## Technical notes

- New `src/lib/interlink.ts`: the keyword map, plus `linkify(text, { currentPath })`
  returning `ReactNode[]`. Matching is word-boundary and case-insensitive, skips text
  already inside a link, and honors the per-paragraph/per-page caps via a counter passed
  through the render.
- `src/components/ServicePageTemplate.tsx` renders section paragraphs and list text through
  `linkify` instead of raw strings. Same for the city template and the blog post route.
- Internal links use `<Link to>` where the route is static-typed, and trailing-slash `href`
  for the splat-based service routes, matching what those pages already do today.
- No styling change: links inherit the existing accent hover treatment already used in body
  copy, so the pages look the same with underlined key phrases.
- No changes to slugs, canonicals, sitemap or schema.
