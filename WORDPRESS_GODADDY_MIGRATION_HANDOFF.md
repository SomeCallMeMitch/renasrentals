# WordPress and GoDaddy Migration Handoff

**Historical snapshot: 2026-08-20. Published to this public repository: 2026-09-24.** This is a concise, public-safe version of the original local migration record. It does **not** establish the current live website, DNS, PHP error, or deployment state. Verify those independently.

## What was confirmed on August 20

- The completed local Rena's Rentals WordPress site was restored into GoDaddy Managed Hosting for WordPress Basic using a full **WPvivid Database + Files** backup.
- The GoDaddy temporary site displayed the migrated site after the restore.
- The custom **Listing Gallery 0.2.0** plugin and gallery records migrated. A separate gallery issue remained to diagnose; see [LISTING_GALLERY_DEBUG_HANDOFF.md](LISTING_GALLERY_DEBUG_HANDOFF.md).
- The original handoff did **not** confirm final-domain/DNS cutover, full production validation, or removal of public migration artifacts. Do not assume those are still outstanding or completed today.

## Migration lessons

- WPvivid restore succeeded from inside WordPress. The backup was transferred using FileZilla because the browser upload limit observed on GoDaddy was 100 MB.
- Duplicator Lite was attempted first but could not obtain database credentials from GoDaddy's managed configuration. Its older migration plan is historical and should not be restarted on the basis of this handoff.
- GoDaddy's own `wp-config.php`, platform plugins, and cache configuration must remain authoritative.
- Beaver Builder page content and settings are stored in the WordPress database. A static website Git checkout does not by itself represent all WordPress page content.
- Keep the local WordPress installation and the Netlify copy available as rollback sources until the current production state and backup are verified.

## Verification needed before further WordPress work

1. Identify the current live host and verify the final domain, HTTPS, redirects, and current WordPress/PHP versions. Do not infer them from the August snapshot.
2. Confirm a recent GoDaddy backup and check whether any installer or migration archives remain publicly accessible.
3. Check desktop and mobile pages, Beaver Builder editing, property cards, galleries/lightboxes, videos, FAQ, images, links, and browser console/network.
4. Diagnose any reported PHP error from its **current exact message, timestamp, affected page/action, logs, and reproduction steps**. The August migration record did not document a specific current PHP error.
5. If routes fail, inspect permalinks and caching. Use serialized-safe tools for any WordPress/Beaver URL replacement; do not run plain-text SQL replacements.
6. Make no production migration, updater, plugin, or DNS changes merely because this historical record recommends a step. Confirm the current state and the user's intended change first.

## Related source

- Static website repository: `SomeCallMeMitch/renasrentals` (this repository).
- Canonical custom gallery plugin repository: [SomeCallMeMitch/listing-gallery](https://github.com/SomeCallMeMitch/listing-gallery), version 0.2.0 at the August handoff.
- The full original migration record remains in the local project folder; its private infrastructure identifiers and archive details are intentionally omitted here.
