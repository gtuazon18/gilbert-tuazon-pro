# Homepage Fintel Gallery Design

## Goal
Move the Fintelligence image gallery experience from the project gallery page to the homepage bottom gallery section.

## Current State
- `src/pages/Index.tsx` renders a text-based "Gallery" list using project metadata.
- `src/pages/Gallery.tsx` includes multiple Fintelligence entries that use images from `public/Fintel`.

## Desired Behavior
- The homepage bottom `Gallery` section should render only the `public/Fintel` images.
- The homepage section should feel like an image slider/carousel rather than a project list.
- The `/gallery` page should stop using the Fintelligence image entries as part of the project gallery.
- The `/gallery` page should remain a normal project gallery list.

## Design
### Homepage
- Replace the current list-based gallery block in `src/pages/Index.tsx` with a horizontal image carousel.
- Use the existing carousel UI component from `src/components/ui/carousel.tsx`.
- Render the eight `public/Fintel/*.jpeg` assets as image cards with rounded corners and cover cropping.
- Keep the section in the same homepage location near the bottom.

### Project Gallery Page
- Remove the extra Fintelligence image-gallery variants from `src/pages/Gallery.tsx`.
- Keep a single `Fintelligence` project entry in the project gallery, but do not render it as an image-led gallery item.

## Verification
- Run `npm run build` to confirm the updated homepage and gallery page compile successfully.
