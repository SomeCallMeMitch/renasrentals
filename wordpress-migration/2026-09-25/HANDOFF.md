# Rena's Rentals WordPress migration handoff

**State as of September 25, 2026:** local work is complete and the user selected the current local site as the version to publish. The live restore has not started.

## User's selected outcome

Publish the current local WordPress site as a whole. That means the live desktop and mobile experience should both match local. The user specifically confirmed: “leave it as it is currently on the local site.”

The property detail pages and the current homepage are editable with Beaver Builder. The local homepage's mobile **See Details** links point to their matching individual pages. Existing browser back navigation works through standard page routes.

## Completed local details pages

| Property | Local WordPress page | Path |
| --- | ---: | --- |
| 5005 63rd St main house | 510 | `/5005-63rd-st-details/` |
| 5005 63rd St studio | 512 | `/5005-63rd-st-studio-details/` |
| 5005 63rd St cottage | 513 | `/5005-63rd-st-cottage-details/` |
| 5011 63rd St | 514 | `/5011-63rd-st-details/` |
| 5013 63rd St | 515 | `/5013-63rd-st-details/` |
| 5051 63rd St | 516 | `/5051-63rd-st-details/` |
| 5053 63rd St | 517 | `/5053-63rd-st-details/` |

The design fixes include less-rounded buttons, larger Open Floorplan text, more spacing around price/features/checklist sections, the property-card bedroom/bath/parking boxes, green availability and logo-green checks, **Text Us** in place of **View Photos**, and working video modals. The 5005 Apply button keeps its current TenantCloud URL at the user's request, even though TenantCloud previously reported that listing as inactive.

Shared WordPress plugin source and Beaver Builder exports are in this directory. `rena-site-improvements/assets/5005-details.css` and `.js` are retained historical assets; the active plugin does not enqueue those unused files. Treat the exports as data, not a plugin installer. Local page IDs may differ after restore.

## Backup ready for migration

- WPvivid completed and locked task: `wpvivid-d43bd03c6de99`
- Backup file: `localhost_wpvivid-d43bd03c6de99_2026-09-26-03-07_backup_all.zip`
- Size: 208,368,877 bytes
- It passed ZIP CRC checks, includes all seven detail slugs and `rena-site-improvements`, and excludes three obsolete backup archives.
- SHA-256 and backup metadata are in `LOCAL-TO-LIVE-BACKUP-2026-09-25.json`.
- The 199 MB backup is intentionally not checked into Git. On the build machine it is at `C:\Users\field\Local Sites\renas-rentals-local-test\app\public\wp-content\wpvividbackups\localhost_wpvivid-d43bd03c6de99_2026-09-26-03-07_backup_all.zip`. If the new account runs on another computer, copy the ZIP separately and verify its SHA-256 from the JSON manifest.

## Next action: publish after live WordPress access

The live WordPress dashboard was signed out when last checked. After access is available:

1. Make and keep a fresh full backup of the live site so live changes since the older restore point can be recovered.
2. In live WordPress, open **WPvivid → Backup & Restore → Upload** and upload the single ZIP above.
3. Confirm WPvivid lists it as a complete backup, then restore that backup.
4. The restore replaces the live database, theme, plugins, uploads, and content with local. It logs the admin out; log back in with the local site's WordPress credentials.
5. Check desktop and mobile homepages, all seven detail links, galleries, video, Text Us, Apply, and Beaver Builder editing. If a page 404s, save **Settings → Permalinks** once.

See `LIVE-DEPLOYMENT-2026-09-25.md` for the detailed checklist. WPvivid's official [manual migration instructions](https://docs.wpvivid.com/migration-site-a-to-site-b-via-local.html) confirm how to upload/restore and that the restore replaces the destination site content.

## Previous failure to avoid

The live **Rena Site Update 1.0.2** updater was run on September 24. Its homepage apply action was followed by WordPress's critical-error page; WPvivid restored the earlier site. The exact PHP fatal was not captured, so the root cause remains unknown. Do not run that updater again, and do not upload the `REVIEW-ONLY` ZIP as a WordPress plugin. Use the full WPvivid backup above for the selected whole-site migration.

## Repository note

This migration handoff records WordPress/local work; it does not merge any of the existing uncommitted palette-preview changes in the repository. Keep those changes separate when continuing other work.
