# 5005 63rd St property-details template — next-chat handoff (2026-09-24)

## Client decision

The client supplied a visual reference for the full property-details page and wants **5005 63rd St built first on the local WordPress site**. Tune that first page with the client until it is right, then reuse the approved structure as the template for the other properties.

Reference image: [5005 property-details template reference](reference/property-details/5005-property-details-template-reference.jpg).

This work is still **local-only**. No property-details page has been built yet, and nothing in this handoff authorizes a production deployment.

## Non-negotiable desktop rule

**Do not change the existing desktop version.** The new property-details presentation is for mobile. Keep existing desktop Beaver Builder modules/layout intact and isolate new presentation behavior to the phone breakpoint (the current project uses `max-width: 767px`) or an equivalently safe mobile-only scope. Verify desktop again after every mobile step; use roughly 1100px as the regression check.

Do not replace shared/global desktop CSS to achieve the mobile design.

## Editing boundary

The existing repository rule still applies:

- **All visible property-specific text must be editable in Beaver Builder.**
- **Property images must stay in the custom Listing Gallery plugin.**
- CSS/JavaScript may control layout, icons, counts derived from gallery data, modal/gallery behavior, and responsive styling.
- Do **not** hardcode an address, availability/date, lease type, rent, surcharge, distance copy, description, features, button text, video URL, Apply URL, or other property-specific copy into the presentation plugin.
- The Apply destination must remain editable in Beaver Builder.
- The new details-page destination used by the mobile card's **See Details** action should also be Beaver Builder-editable rather than a property-specific URL embedded in JavaScript.

Verify at least one Beaver Builder text field and one action URL change in the rendered page before claiming the template is complete.

## 5005 starting property data already recorded

The current public-safe Beaver Builder card snapshot records:

- Address: **5005 63rd St**
- Available date: **Aug 15, 2027**
- Location: **San Diego, California 92115**
- Bedrooms: **5**
- Bathrooms: **4**
- Parking value: **4**
- Current card headline: **5 BD, 4 BA, 10-minute walk to SDSU.**

Source: [beaver-builder-mobile-card-copy.json](reference/wordpress-local-mobile-preview/beaver-builder-mobile-card-copy.json). The local WordPress database is authoritative; inspect it before editing.

## Visual target from the client

Match the supplied reference closely while keeping the site's blue theme and compact spacing. The intended order is:

1. **Photo mosaic / gallery hero**
   - One large lead photo and two supporting photos.
   - A photo-count badge on the lead image.
   - A **View all photos** control over the lower supporting image.
   - Counts must be derived from Listing Gallery rather than typed as a hardcoded number.
   - On very narrow phones, adapt the mosaic safely so it never causes horizontal overflow.

2. **Primary property summary**
   - Large address.
   - Compact Available status badge.
   - A blue line for bedroom/bathroom count and lease type.
   - One short descriptive/location line below it.

3. **Rent / proximity panel**
   - Light-blue panel.
   - Large monthly rent on the left.
   - Additional-person charge underneath when applicable.
   - SDSU walking/proximity statement on the right with a walking icon.
   - All monetary and proximity wording must be Beaver Builder-editable.

4. **Three key-fact tiles**
   - Bedrooms.
   - Bathrooms.
   - Parking spaces.
   - Use compact icon-led cards similar to the reference.

5. **Property Features**
   - Two-column checklist using the orange check-circle treatment from the reference.
   - The reference image currently shows: Gourmet kitchen, Spacious living area, Large backyard with BBQ, Washer and dryer, Dual central A/C, Gardener included.
   - Enter these as Beaver Builder-editable content; do not encode the list in CSS/JS.

6. **Primary actions**
   - **View Photos**
   - **Watch Video**
   - **Apply**
   - Keep controls at least 44px tall.
   - View Photos should open/use the Listing Gallery photos.
   - Watch Video should use an editable property-specific video URL.
   - Apply should use the existing editable Beaver Builder destination.

The supplied reference image visually shows **5BR / 4BA**, **Full-Home Lease**, **$7,450 / month**, **Each additional person is $600**, and **Short walk to SDSU** for 5005. Treat these as first-pass reference values to enter through Beaver Builder, not as constants in plugin code. If the current local Beaver Builder page contains newer authoritative values, preserve/use those instead and flag the difference to the client.

## Mobile card → details page

The client has now chosen the overall behavior that was previously open: **See Details should lead to a full property-details page for that property.** Start by wiring only the first 5005 card once the 5005 details-page URL/slug exists and the destination can remain editable. Do not wire the other cards until the template is approved.

## Build sequence for the next chat

1. Read `AGENTS.md`, `HANDOFF_INDEX.md`, this file, and the existing local-preview README.
2. Use Computer / local browser access to inspect the current local WordPress 5005 card and Beaver Builder structure before changing anything.
3. Create the 5005 mobile details page in a small first pass that follows the supplied reference.
4. Keep original desktop content untouched and hide/show only with mobile-scoped presentation rules as needed.
5. Check narrow phone widths (at least 320px and 390px) for overflow and compact spacing.
6. Check desktop around 1100px to confirm it is unchanged.
7. Review the first pass with the client before building other properties.
8. After each accepted step, update this handoff or a linked dated file, update `HANDOFF_INDEX.md`, commit/push, and remotely verify the result as required by `AGENTS.md`.

## Reference implementation context

The current local mobile-card presentation source is mirrored at:

- `reference/wordpress-local-mobile-preview/rena-site-improvements/assets/mobile-cards.js`
- `reference/wordpress-local-mobile-preview/rena-site-improvements/assets/mobile-cards.css`
- `reference/wordpress-local-mobile-preview/rena-site-improvements/modules/mobile-card-copy/`

Those files are reference copies of local WordPress work. The active Beaver Builder values live in the local WordPress database, and property photos live in Listing Gallery.

## Open items

- Exact WordPress page slug/URL for the 5005 details page should be chosen/confirmed during local implementation.
- Confirm any local property values that differ from the supplied reference before overwriting them.
- The template is **not approved yet**; 5005 must be reviewed and adjusted with the client first.
