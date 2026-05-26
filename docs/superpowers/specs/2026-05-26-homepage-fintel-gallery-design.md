# Homepage Fintel Gallery Design

## Goal
Add a simple homepage gallery section above the footer using the images from `public/Fintel`.

## Current State
- `src/pages/Index.tsx` currently has no homepage gallery section.
- `public/Fintel` contains eight gallery images ready to use.

## Desired Behavior
- Add a homepage `Gallery` section above the footer.
- Use only the images in `public/Fintel`.
- Make the gallery horizontally scrollable without left/right arrow buttons.
- Add a subtle image zoom on hover.

## Design
### Homepage
- Add a `Gallery` section back to `src/pages/Index.tsx`.
- Define a small `fintelGalleryImages` array using the eight files in `public/Fintel`.
- Render the images as a horizontal scroll row with `overflow-x-auto`.
- Use rounded cards, cover cropping, and a slightly stronger hover zoom.
- Place the section directly above the footer.

## Verification
- Run `npm run build` to confirm the homepage compiles successfully.
