# Property Gallery Asset Plan

## Source Pages

Photos were collected from the old Rena's Rentals property pages:

- 5005: https://www.renasrentals.com/5005-63rd-st
- 5011: https://www.renasrentals.com/5011-63rd-st
- 5013: https://www.renasrentals.com/5013-63rd-st

## Asset Folders

The new gallery assets live under:

```text
assets/property-galleries/
  manifest.json
  5005/
    5005-01.jpg
    ...
  5011/
    5011-01.jpg
    ...
  5013/
    5013-01.jpg
    ...
```

Current counts:

- 5005: 26 photos
- 5011: 24 photos
- 5013: 23 photos

The existing flat `assets/property-01.jpg` style files are still untouched for the current live page. The new folders are intended for the property-specific gallery build.

## Manifest

`assets/property-galleries/manifest.json` maps each image to:

- `property`
- `index`
- `file`
- `sourcePage`
- `sourceMedia`

This keeps the source traceable and lets the gallery UI be generated from data rather than hard-coded image lists.

## Recommended Gallery UI

Use property-specific galleries launched directly from each home card.

Each property card should show:

- large hero image
- 3 to 4 thumbnails from that same property
- accurate photo count, for example `View 26 Photos`
- bed, bath, parking badges
- `View 5005 Photos`
- `Watch 5005 Video Tour`
- `Text About 5005`

On mobile, the gallery should open as a full-screen lightbox:

```text
5005 63rd St
Kitchen · 1 of 26

[large image]

[Previous] [Next]
[Text Rena About 5005]
```

## Implementation Steps

1. Add a gallery data layer from `manifest.json` or convert the manifest into a `PROPERTY_GALLERIES` object in `script-v2.js`.
2. Add `photos` metadata to each property, including the first 3 to 4 preview thumbnails.
3. Replace the current card photo jump with a property-specific gallery button.
4. Build a reusable gallery modal with:
   - selected property id
   - selected image index
   - next/previous controls
   - keyboard Escape and arrow support
   - body scroll lock
   - sticky text CTA
5. Keep the existing global comparison gallery only if it is reframed as `Compare Spaces`.
6. Add practical captions and categories after visual review:
   - kitchen
   - bedrooms
   - bathrooms
   - living/common space
   - outdoor
   - exterior/parking

## Notes

- Do not show photo counts until the visible gallery uses the full property-specific photo set.
- Use lazy loading for non-hero images.
- Keep the text CTA inside the gallery because photo browsing is a high-intent moment.
