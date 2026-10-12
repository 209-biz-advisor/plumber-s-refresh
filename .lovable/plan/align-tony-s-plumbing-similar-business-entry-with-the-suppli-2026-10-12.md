# Align Tony's Plumbing "similar business" entry with the supplied structure

## What's off today
Our Tony's Plumbing entry in the search data differs from your snippet in two ways:
1. It is typed as a generic `LocalBusiness`, not `Plumber`.
2. It has no `image`.

Name, website, phone, address and $$ are already present and stay as they are.

## Changes
- Change the type to `Plumber` for all six comparable businesses (they're all plumbing companies, so this keeps them consistent).
- Add an optional image field to each comparable business, and give Tony's Plumbing the BBB image URL you supplied.
- The other five get no image for now. Send me their image links and I'll add them the same way.
- Image only goes in the search data. Nothing changes on the visible site.

## Technical details
- `src/lib/entities.ts`: add `image?: string` to `SimilarBusiness`, set it on Tony's record, and have `similarToNodes()` emit `"@type": "Plumber"` plus `image` when present. This covers both the home page and city page JSON-LD.
- `public/llms.txt` / `public/llms-full.txt`: no image line needed, so leave them as they are. The names, contacts and $$ already match.
- Check that Tony's node renders with `Plumber` + `image` in the page HTML, and that the build passes.
