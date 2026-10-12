# Align Business Search Data and AI Reference Files

## Requested outcome
Use the supplied details for all six comparable Modesto plumbing businesses in both hidden structured data and the AI reference files. Assign every listed business the same `$$` price category as Mainline.

## Changes
1. Add each competitor’s supplied telephone number and complete postal address alongside its existing name and website: Tony’s Plumbing, DeHart, Valley View, Noble, Roto-Rooter Modesto, and Herk’s.
2. Set `priceRange: "$$"` on all six competitor nodes. Mainline’s root and city-page structured data already use `$$`; retain and verify those values.
3. Update the comparable-provider sections of `llms.txt` and `llms-full.txt` with matching names, websites, phones, addresses, and the `$$` category. Explain that the category is standardized at the owner’s request, not a verified comparison of actual charges.
4. Keep Mainline’s phone, address, license, apex domain, and existing business name unchanged. Competitor numbers belong only to their clearly identified records, never Mainline’s contact information.

## Safeguards
- No visible page prices, new comparison page, or changes to forms, chat, or design.
- Treat uploaded competitor details as owner-supplied, not independently verified.
- Keep competitor entities separate from Mainline: no competitor `sameAs` links, invented ratings, or superiority claims.
- Leave robots and sitemap unchanged because no pages or crawl rules are being added.

## Technical details
- Extend the shared competitor records and JSON-LD mapping in `src/lib/entities.ts`, which is already used by the root and city-page schemas.
- Emit addresses as schema.org `PostalAddress` objects, including `addressCountry: "US"`.
- Update `public/llms.txt` and `public/llms-full.txt` consistently.
- Record the narrow exception allowing owner-requested `$$` categories and competitor contact details in machine-readable reference content, while preserving the ban on visible service pricing.

## Verification
- Inspect rendered JSON-LD on Home and a city page for all six complete competitor records and `$$` on Mainline and every competitor.
- Fetch both AI reference files and confirm they match the supplied details.
- Check for accidental changes to Mainline’s contact data and confirm the updated site has no build or runtime errors.