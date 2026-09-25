# Property details page — next-chat handoff (2026-09-24)

## Start here

The client wants to design the **property details page together in the next chat**. The details page has **not** been built. Begin with the current local WordPress mobile preview and the client's next design instructions. Work in small, reviewable local steps. The current See Details control on each mobile card is intentionally a visual placeholder; decide its destination with the client as part of the details-page work. Do not treat the older design brief as a finished page specification or deploy this local work to production without the client's direction.

Read [AGENTS.md](AGENTS.md), [HANDOFF_INDEX.md](HANDOFF_INDEX.md), [the current local preview reference](reference/wordpress-local-mobile-preview/README.md), and [the earlier mobile-flow brief](MOBILE_PROPERTY_PAGE_REDESIGN_HANDOFF.md). The earlier brief describes possible detail-page sections; later card decisions supersede its card-specific facts and actions.

## The requirement that was missed

**All visible property text must be editable in Beaver Builder. Property images must stay in the custom Listing Gallery plugin.** This applies to the upcoming details page as well as the current cards. CSS/JavaScript can control layout and interactions, but must not supply property-specific addresses, availability dates, location lines, descriptions, facts, section copy, button text, or fallback values. Keep the Apply destination editable in Beaver Builder. Verify that editing a Beaver Builder field changes the rendered page before claiming this requirement is met.

The previous assistant failed to record this primary instruction in the repo and built the first mobile-card version with hardcoded date, location, walking-distance sentence, and button text. It then had to correct that mistake. The correction is now in the local WordPress site: seven Beaver Builder **Mobile Card Copy** modules hold the added card text; existing Beaver Builder modules provide address, availability status, bed/bath numbers, and Apply link; Listing Gallery provides the photos. The repo now states the rule in `AGENTS.md` and contains the presentation plugin source plus a [public-safe snapshot of the seven copy modules](reference/wordpress-local-mobile-preview/beaver-builder-mobile-card-copy.json). **Do not repeat the hardcoding or assume that a plugin-generated field is Beaver Builder editable.**

## Current local design

- Blue theme, compact vertical spacing. The mobile header has a small Apply Now button beside the menu; six decorative buttons under the hero and the early contact block are hidden on phones.
- Seven mobile property cards remain. Each has a full-width swipeable Listing Gallery image with arrows/count, a compact green Available/date badge, address and location, Beds/Baths/Parking, one short SDSU summary, and two side-by-side controls: See Details and Apply Now.
- The current card omits pets, square footage, and price. It also omits expandable Details, Amenities, and Lease sections; those were **not** requested for the card. Earlier ideas for the full details page include short bullet sections and Watch Video inside View Details, with optional Amenities/Lease sections and a compact mobile contact action. Confirm the client's choices before implementing them.
- All seven cards were checked locally after the Beaver Builder correction. The cards rendered at narrow phone width without horizontal overflow, while the original desktop cards remained visible at desktop width. The live site has not received this redesign.

## Decisions to make with the client

The destination for See Details, the content and order of each full property page, whether to use expandable sections, where the video link belongs, which contact actions to show, and the desktop treatment are still open. The client said they will work through the page in the next chat; use their new direction to resolve these items rather than treating the example screenshot as a finished specification. Keep the site's blue theme and compact spacing.

## Where the work lives

The local WordPress database holds the Beaver Builder page and the seven Mobile Card Copy instances. The repository cannot reproduce those database changes from plugin files alone. Its [local preview reference](reference/wordpress-local-mobile-preview/README.md) explains the editing points, and its `rena-site-improvements/` folder contains a **reference copy** of the local presentation plugin. Listing Gallery is a separate plugin and is the image source; edit photo sets in WordPress Dashboard → Listing Galleries. Before moving the design to another WordPress site, transfer/recreate the Beaver Builder content as well as the plugin, then verify both on that target.

After each details-page step, update this handoff or a linked dated document, commit/push it, and verify the remote GitHub file as required by `AGENTS.md`. Record any Beaver Builder database-only content in a public-safe repo snapshot so the next chat can see what was done. Do not publish credentials, private backups, or database exports.


## Client-selected 5005 template direction (later on 2026-09-24)

The client has now supplied and selected a concrete visual target for the details page. **5005 63rd St will be built first on the local WordPress site, reviewed with the client, and then used as the template for the remaining properties.** The design reference, field requirements, action behavior, and mobile-only/desktop-preservation rules are recorded in [PROPERTY_DETAILS_5005_TEMPLATE_HANDOFF.md](PROPERTY_DETAILS_5005_TEMPLATE_HANDOFF.md).

This resolves several previously open decisions: See Details is intended to lead to a full property page, the first page to build is 5005, and the current desktop version must remain unchanged. The exact local WordPress page slug/URL is still to be chosen during implementation.
