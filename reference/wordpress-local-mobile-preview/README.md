# Local WordPress mobile preview reference (2026-09-24)

This folder records the current **local-only** Rena's Rentals mobile design work. It is reference material for the next chat, not a deployment or an active part of the static website in this repository.

## Current local preview

- The phone header keeps the blue theme and puts a compact Apply Now button beside the menu.
- The six quick-feature buttons under the homepage hero and the early contact block are hidden on phones. The contact block shares a Beaver Builder row with the listings, so only its four modules are hidden; all seven property cards remain visible.
- Each phone property card uses its existing gallery data for a full-width image with previous/next controls, swipe navigation, and a photo count. It shows availability and a fallback `Aug 15, 2027` date, street address plus `San Diego, California 92115`, compact beds/baths/parking facts, a single SDSU walking-distance line, and See Details / Apply Now side by side.
- Price, pets, square footage, heart/favorite control, old benefit list, and extra detail/amenity/lease sections are omitted from the phone cards. See Details is intentionally a visual placeholder. Apply Now retains each existing listing destination.
- The current spacing pass uses 9px between the image and card content, 8px between most card sections, 3px top/bottom padding in the facts row, 4px top/bottom padding in the description, 5px below the buttons, and a 6px gap between cards. Buttons remain 44px tall.

## Editable source and limits

`rena-site-improvements/` is a copy of the local WordPress plugin. Its `assets/mobile-cards.css` and `assets/mobile-cards.js` produce the phone cards from the existing Beaver Builder listing modules and Listing Gallery image data; those editable modules remain unchanged. On desktop the original cards remain visible. The local WordPress database also holds homepage layout and global styles, which are **not** contained in this folder. Prior local versions are backed up privately outside the public website directory.

This reference has not been applied to the live WordPress site, imported into the static site, or validated against production. Verify the local WordPress state before continuing or deploying. The next design decision is what See Details should open.

## Verification at this checkpoint

All seven phone cards were checked at 320px and 390px; no card or fact-row overflow was observed. The original desktop cards were checked at 1100px. The repository spacing preference is recorded in the root `AGENTS.md`.
