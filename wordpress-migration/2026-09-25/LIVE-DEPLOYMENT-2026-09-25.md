# Rena's Rentals: local site to live site

The chosen version is the entire current local WordPress site, including its desktop layout, mobile layout, Beaver Builder pages, media, and site plugin. Do not install `rena-site-improvements-1.0.2.zip` or the `REVIEW-ONLY` ZIP as a WordPress plugin.

## Ready to transfer

- Source: local WordPress at `http://localhost:10004/`
- Destination: `https://renasrentals.com/`
- Fresh WPvivid full backup: task `wpvivid-b1707fe2a6b6e`
- Status: completed successfully and locked in WPvivid
- Contents: one file of 208,373,531 bytes (about 199 MB); the package and its nested ZIP files passed CRC checks
- All seven details-page slugs, the `rena-site-improvements` plugin, and the new back links are included
- File: `C:\Users\field\Local Sites\renas-rentals-local-test\app\public\wp-content\wpvividbackups\localhost_wpvivid-b1707fe2a6b6e_2026-09-26-03-32_backup_all.zip`
- [Checksums and complete filenames](./LOCAL-TO-LIVE-BACKUP-2026-09-25.json)

## Live deployment

1. Sign in to the live site's WordPress dashboard at `https://renasrentals.com/wp-admin/`.
2. Create a **fresh, full live-site backup** in WPvivid. Download or otherwise preserve it separately so it remains available if the live restore must be reversed. The existing older backup is useful but may miss recent live changes.
3. In the live WPvivid **Backup & Restore > Upload** area, upload the single file named above. If browser upload is limited by the server, transfer it to the live site's `/wp-content/wpvividbackups/` folder by SFTP instead.
4. Confirm that WPvivid recognizes the file as a complete backup. Select **Restore** for that backup. This replaces the live database, theme, plugins, uploads, and content with the current local version. The restore will log the admin out; sign back in with the credentials stored in the local site's backup.
5. Check the live desktop and mobile homepage; open all seven **See Details** links; test each **Back to Available Homes** link, phone back navigation, photo galleries, video modals, Text Us, and Apply. The 5005 Apply destination intentionally remains its current TenantCloud link.
6. Open one details page with Beaver Builder and verify that its content can still be edited. If any page returns a 404, save **Settings > Permalinks** once to refresh the routes.

WPvivid's [manual migration guide](https://docs.wpvivid.com/migration-site-a-to-site-b-via-local.html) documents the multiple-file upload, restore, replacement behavior, and permalink recovery.
