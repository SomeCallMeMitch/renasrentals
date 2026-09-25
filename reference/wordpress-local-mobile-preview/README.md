# Local WordPress mobile preview reference (2026-09-24)

This folder records the current **local-only** Rena's Rentals mobile design work. It is reference material for the next chat, not a deployment or an active part of the static website in this repository.

## Current local preview

- The phone header keeps the blue theme and puts a compact Apply Now button beside the menu.
- The six quick-feature buttons under the homepage hero and the early contact block are hidden on phones. The contact block shares a Beaver Builder row with the listings, so only its four modules are hidden; all seven property cards remain visible.
- Each phone property card uses Listing Gallery image data for a full-width image with previous/next controls, swipe navigation, and a photo count. Its address, availability, date, location, facts, description, button text, and Apply destination now come from Beaver Builder. The current editable date is `Aug 15, 2027` on each local card.
- The availability label and date now sit on one line in a compact light-green badge. “Available” is slightly larger than the date; the calendar icon was removed to keep the line from wrapping beside the address.
- Price, pets, square footage, heart/favorite control, old benefit list, and extra detail/amenity/lease sections are omitted from the phone cards. See Details is intentionally a visual placeholder. Apply Now retains each existing listing destination.
- The current spacing pass uses 9px between the image and card content, 8px between most card sections, 3px top/bottom padding in the facts row, 4px top/bottom padding in the description, 5px below the buttons, and a 6px gap between cards. Buttons remain 44px tall.

## Editable source and limits

`rena-site-improvements/` is a copy of the local WordPress plugin. Its `assets/mobile-cards.css` and `assets/mobile-cards.js` control the phone presentation and use existing Listing Gallery image data. On desktop the original Beaver Builder cards remain visible. The local WordPress database holds the Beaver Builder content, which is **not** contained in this folder. The initial editable values are recorded in [beaver-builder-mobile-card-copy.json](beaver-builder-mobile-card-copy.json). A private backup of the front page and the prior plugin was made before this correction.

### Editing the phone card text

On the local front page in Beaver Builder, edit each property's **Mobile Card Copy** module for available date, city/state/ZIP, fact labels, parking display, one-line description, optional second description, and the two button labels. Edit the existing Heading module for the street address, Button Group for availability status, Box for bedroom/bathroom numbers, and the existing Apply button for its link. These are Beaver Builder fields; the phone script reads them and does not insert a property-specific fallback date or sentence.

The seven Mobile Card Copy instances are in the **local WordPress database**. Publishing the plugin files alone to another WordPress site will not create those Beaver Builder modules there; recreate their fields from the JSON snapshot or migrate the Beaver Builder page content through an approved process before enabling the new phone script.

Edit photos in **WordPress Dashboard → Listing Galleries**. Beaver Builder hosts the gallery shortcode; the phone card reads that plugin's image data. CSS/JavaScript still control colors, spacing, icons, carousel behavior, and image-derived counts. The source module appears in Beaver Builder edit mode but is hidden from visitors; the phone card is generated only outside edit mode. See Details remains a nonfunctional design placeholder.

This reference has not been applied to the live WordPress site, imported into the static site, or validated against production. Verify the local WordPress state before continuing or deploying. The next design decision is what See Details should open.

The client plans to design the details page collaboratively in a new chat. Start with [PROPERTY_DETAILS_PAGE_NEXT_CHAT_HANDOFF.md](../../PROPERTY_DETAILS_PAGE_NEXT_CHAT_HANDOFF.md).

## Verification at this checkpoint

All seven phone cards rendered with Beaver Builder source modules after the correction. At 320px the badge and page had no horizontal overflow; at 1100px the original desktop cards remained visible while the new copy modules were hidden. The repository editing rule and spacing preference are recorded in the root `AGENTS.md`.
