# Form Consolidation & Emergency CTA Plan

## Goal
Move from multiple disconnected forms to one consistent, HighLevel-connected lead form across the site, add a "How did you hear about us?" field, and add an Emergency Plumbing Repairs conversion section near the bottom of key pages.

## Current state (from audit)
- `GHLQuoteForm` (HighLevel iframe embed) is used only on the Home hero.
- `QuickQuoteForm` is used on 8 route/template files: city pages, service pages, water-heaters hub, plumbing-services hub, FAQ, Coupons, Reviews, and Contact hero.
- Two additional hand-rolled inline forms exist on Home and Contact, duplicating fields and logic.
- Footer has no form.

## Proposed approach

### 1. Choose the single primary form
Use `GHLQuoteForm` (the HighLevel embed) as the one form everywhere because it already posts leads into the existing CRM.

- Replace `QuickQuoteForm` hero instances on city pages, service pages, and Contact with `GHLQuoteForm`.
- Keep `QuickQuoteForm` component in the codebase but remove it from active routes; it becomes available for future use if the HighLevel form is ever unavailable.
- Remove the duplicate inline hand-rolled forms on Home and Contact to eliminate field/logic duplication.

### 2. Add "How did you hear about us?"
Because the HighLevel form is an iframe, the field must be added inside the HighLevel form builder itself.

- Step A: Confirm whether the HighLevel form `XAUh0YCVe0721IdMKPrL` already contains a "How did you hear about us?" dropdown.
- Step B: If it does not, add it in HighLevel.
- Step C: The embed will automatically reflect the new field; no code change is needed beyond verifying the iframe still renders correctly.

### 3. Create a reusable Emergency Repairs CTA section
Build `src/components/EmergencyRepairsCTA.tsx` that renders:
- Headline: "Emergency Plumbing Repairs" (with optional city substitution).
- Subheadline about fast response and the 209 & 350 coverage area.
- The primary `GHLQuoteForm`.
- A prominent click-to-call button: 209.838.1000.
- Trust line: license #953726, bonded/insured, 201 Google reviews.

Place this section near the bottom (above `SiteFooter`) on:
- Home (`/`)
- Plumbing Services hub (`/plumbing-services/`)
- Individual service pages (via `ServicePageTemplate`)
- Water Heaters hub (`/water-heaters/`)
- Individual water-heater pages (via `ServicePageTemplate`)
- Contact (`/contact-us/`)
- City pages (`/areas-we-serve/$city/`)
- Areas We Serve index (`/areas-we-serve/`)

### 4. Update page-specific copy where needed
- Replace any remaining "Request Service" hero copy with "Request Emergency Service" or "Get Help Now" on pages where the emergency CTA is added.
- Ensure the emergency section does not duplicate the page's existing hero form in a way that feels redundant; adjust hero copy to focus on education/authority while the bottom section owns conversion.

### 5. Verify and test
- Confirm `GHLQuoteForm` renders correctly on every page where it is added.
- Test the HighLevel form submission path once after adding the "How did you hear about us?" field.
- Run TypeScript check and verify representative routes return HTTP 200.

## Open decision before build
Do you want to:
1. **Use the HighLevel embed everywhere** (recommended — simplest, one real submission path), or
2. **Keep the styled `QuickQuoteForm` everywhere and wire it to HighLevel** (more design control, but requires a backend server function and API integration)?

If you choose option 1, the only action needed from your side is adding the "How did you hear about us?" field inside HighLevel; the rest is code-only.
