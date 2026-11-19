# Live WordPress homepage: slider and mobile navigation follow-up

**Status: guidance only; mobile issues remain unverified and no production changes were performed by ChatGPT.**
**Date: November 18, 2026.**

## Current production context

- Rena's Rentals is being maintained in the **live GoDaddy-hosted WordPress/Beaver Builder site**, not the older local WordPress version or static site copy. The contents of this repository are historical references unless independently confirmed on the live site.
- The user reported a very large blank area below the header and two hero regions. They removed the second slider/hero area in Beaver Builder and reported that this **fixed the blank area**.
- The homepage shortcode had been `[smartslider3 slider="1"]`, referencing Smart Slider's **Tutorial Slider**. The user changed it to `[smartslider3 slider="2"]`, referencing **Home (ID 2)**, and enabled autoplay. The user reports that the Home slider now rotates on desktop but **does not rotate on mobile**.
- The user's screenshot of Smart Slider Home (ID 2) shows eight published slide thumbnails, including two copies of the same campus-map graphic. This is an editable project owned by the WordPress Smart Slider plugin, not the static repository.
- The live homepage publicly exposes header navigation labeled Homes, Photos, Availability, FAQ, and Apply Now, with buttons labeled `Open menu` and `Close menu`. The user wants the unused **mobile hamburger menu removed**. The exact site-header implementation and mobile rendered CSS have not yet been independently inspected.

## Next steps / safe diagnostic sequence

1. In WordPress Smart Slider → Home → Autoplay, check whether **Stop on click** is on. The official Smart Slider documentation says this also stops autoplay on **touch**. Disable Stop on click to test; preserve normal desktop settings. Source: https://smartslider.helpscoutdocs.com/article/1807-slider-settings-autoplay
2. On an actual phone, open a private/incognito session. Test (a) manual swipe through all eight slides, (b) whether new client photos appear, (c) automatic advancement before touching. If new slides do not appear, investigate separate mobile hero implementation or stale GoDaddy/mobile cache rather than assuming autoplay settings are the only issue.
3. For a reversible test hiding the mobile hamburger toggles (not deleting menu data), consider the exact observed selectors in sitewide Additional CSS:
   ```css
   @media (max-width: 767px) {
     header button[aria-label="Open menu"],
     header button[aria-label="Close menu"] {
       display: none !important;
     }
   }
   ```
   This CSS is **proposed, not deployed**. It should be verified on actual mobile homepage and property detail pages, especially that Apply Now remains visible and the closed navigation drawer does not occupy space.
4. If the user wants to edit/keep some menu links instead of removing the hamburger, locate the header menu in the WordPress Site Editor or whichever custom HTML/template currently renders it, and modify navigation at its source.
5. After any live change, check phone and desktop, slider autoplay, manual swipe, page layout, header CTA, and property detail pages. Verify GoDaddy cache if needed.

## Scope boundary

**No plugin code, WordPress settings, CSS, site navigation, or live page was changed by ChatGPT during this review.** Browser access was read-only. The user's own earlier removal/shortcode adjustment is only known from their messages. Do not treat this handoff as proof a production fix is deployed.
