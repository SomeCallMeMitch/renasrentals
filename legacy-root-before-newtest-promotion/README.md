# Legacy root before `/newtest` promotion

This folder preserves the root homepage files that were deployed before the
`/newtest` site was promoted on August 12, 2026:

- `index.html`
- `script-v2.js`
- `styles-v2.css`
- `assets/property-galleries/manifest.json` (the only overlapping asset file
  whose contents changed during the asset merge)

All other files shared by the old root and `/newtest` were byte-identical. The
root-only assets were retained in `/assets`, so no image files were deleted by
the promotion.

To roll back, copy these three homepage files to the repository root and merge
the included `assets` folder back over `/assets`.
