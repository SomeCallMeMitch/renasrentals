# Listing Gallery 0.2.0 Debugging Handoff

**Historical snapshot: 2026-08-20. Published to this public repository: 2026-09-24.** This is a concise, public-safe version of the original local debugging handoff. Confirm current production behavior before treating any observation here as current.

## Starting point

- The Rena's Rentals WordPress site was restored to GoDaddy Managed WordPress with WPvivid on August 20. The migrated site displayed the intended local build.
- Listing Gallery **0.2.0** and its records migrated. The original handoff said the plugin mostly worked, but it did **not** describe an exact defect or a PHP error. Obtain the current symptom and log evidence before diagnosing.
- Galleries are edited in **WordPress Dashboard → Listing Galleries**. Beaver Builder hosts the `[listing_gallery id="..."]` shortcode.
- The code authority is [SomeCallMeMitch/listing-gallery](https://github.com/SomeCallMeMitch/listing-gallery), `main`, at commit `f239ee5` when this handoff was written. Recheck the current branch/version. An older local `feature/gallery-layout-options` worktree labels itself **0.1.0**; do not install it over 0.2.0.

## Data and behavior to preserve

- The custom post type is `listing_gallery`; the shortcode is `listing_gallery`.
- Ordered attachment IDs are stored in `_listing_gallery_image_ids`; gallery settings are in `_listing_gallery_settings`.
- The first valid image is primary. Removing an image from a gallery should remove only its gallery reference, not the Media Library item.
- **Featured Mosaic** displays up to five visible tiles and opens the full image set in bundled PhotoSwipe. **Full Collage** displays all images.
- Edit existing gallery records in place so page shortcode IDs remain stable. August records included IDs 391 (5005), 392 (5005 Studio), 393 (5005 Cottage), 394 (5011), 395 (5013), 396 (5051), and 397 (5053), plus two test/other records. Verify current IDs and statuses in WordPress.

## Diagnostic sequence

1. Get the exact gallery ID and page URL; expected and actual behavior; reproduction steps; device, browser, and viewport; screenshot or recording; and whether it occurs on GoDaddy, local WordPress, or both.
2. If there is a PHP error, capture the exact message, stack trace, log timestamp, and triggering action. Do not assume migration or the gallery plugin caused it.
3. Confirm a current GoDaddy backup before changing production. Check that the active plugin/version is correct and that the affected gallery is published with valid image attachments.
4. Confirm the page uses the intended shortcode once. Inspect the browser console and Network for CSS/JS/image failures, mixed content, failed requests, or stale local URLs. Clear GoDaddy and Beaver Builder caches when stale output is suspected.
5. Reproduce locally when possible. Compare against the current canonical plugin repository, not the obsolete 0.1.0 worktree.
6. Fix in the canonical plugin repository, test there, then update production only after a current backup and an authorized deployment. Verify affected and unaffected gallery IDs afterward.

Do not replace GoDaddy-managed configuration, cache, or platform plugins; rewrite Beaver Builder serialized data directly; create replacement gallery records; or delete Media Library images merely to remove them from one gallery.

For hosting context, read [WORDPRESS_GODADDY_MIGRATION_HANDOFF.md](WORDPRESS_GODADDY_MIGRATION_HANDOFF.md). The complete original debugging notes remain in the local project folder; private host details are intentionally omitted here.
