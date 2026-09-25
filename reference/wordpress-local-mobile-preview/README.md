# Local WordPress mobile preview reference (2026-09-24)

This folder records the current **local-only** Rena's Rentals mobile design work. It is reference material for the next chat, not a deployment or an active part of the static website in this repository.

## Current local preview

- The phone header keeps the blue theme and puts a compact Apply Now button beside the menu.
- The six quick-feature buttons under the homepage hero and the early contact block are hidden on phones. The contact block shares a Beaver Builder row with the listings, so only its four modules are hidden; all seven property cards remain visible.
- Each phone property card uses its existing gallery data for a full-width image with previous/next controls, swipe navigation, and a photo count. It shows availability and a fallback `Aug 15, 2027` date, street address plus `San Diego, California 92115`, compact beds/baths/parking facts, a single SDSU walking-distance line, and See Details / Apply Now side by side.
- The availability label and date now sit on one line in a compact light-green badge. “Available” is slightly larger than the date; the calendar icon was removed to keep the line from wrapping beside the address.
- Price, pets, square footage, heart/favorite control, old benefit list, and extra detail/amenity/lease sections are omitted from the phone cards. See Details is intentionally a visual placeholder. Apply Now retains each existing listing destination.
- The current spacing pass uses 9px between the image and card content, 8px between most card sections, 3px top/bottom padding in the facts row, 4px top/bottom padding in the description, 5px below the buttons, and a 6px gap between cards. Buttons remain 44px tall.

## Editable source and limits

`rena-site-improvements/` is a copy of the local WordPress plugin. Its `assets/mobile-cards.css` and `assets/mobile-cards.js` produce the phone cards from the existing Beaver Builder listing modules and Listing Gallery image data; those editable modules remain unchanged. On desktop the original cards remain visible. The local WordPress database also holds homepage layout and global styles, which are **not** contained in this folder. Prior local versions are backed up privately outside the public website directory.

### Beaver Builder editability

The current phone cards are **not fully editable in Beaver Builder**. The mobile script reads the Beaver Builder address, availability label/date text, bedroom/bathroom/parking facts, and existing Apply link, so changes to those source values can flow into the phone card. If the source has no date, the script inserts the fixed fallback `Aug 15, 2027`. Photos come from existing Listing Gallery data, whose editing interface should be verified separately.

The green badge, font sizes, spacing, card layout, photo controls, button labels, fixed `San Diego, California 92115` line, and generated SDSU walking-distance headline are defined in this plugin's CSS/JavaScript. Beaver Builder's editor shows the underlying modules while the script skips creating its mobile cards in edit mode. Changing those presentation elements requires editing the plugin or rebuilding them as native Beaver Builder elements.

This reference has not been applied to the live WordPress site, imported into the static site, or validated against production. Verify the local WordPress state before continuing or deploying. The next design decision is what See Details should open.

## Verification at this checkpoint

All seven phone cards were checked at 320px and 390px; no card, badge, or fact-row overflow was observed. The availability label and date stayed on one line at both widths. The original desktop cards were checked at 1100px before this badge-only change; desktop styling was not modified. The repository spacing preference is recorded in the root `AGENTS.md`.
