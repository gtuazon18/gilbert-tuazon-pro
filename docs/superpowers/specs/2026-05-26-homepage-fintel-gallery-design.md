# Homepage Mixed Gallery Design

## Goal
Keep a single image gallery experience on the homepage bottom section and make it easy to expand with images from multiple projects over time.

## Current State
- `src/pages/Index.tsx` now renders a homepage image carousel using only `public/Fintel` assets.
- `src/pages/Gallery.tsx` is a separate project-list page, which creates naming overlap with the homepage `Gallery` section.

## Desired Behavior
- The homepage bottom `Gallery` section should remain the only visible image gallery experience.
- The homepage gallery should use a mixed image data source so more projects can be added later.
- The Fintelligence-only helper copy should be removed.
- The `/gallery` page should remain a normal project-list page and not compete visually with the homepage image gallery.

## Design
### Homepage
- Keep the homepage `Gallery` section as a horizontal image carousel.
- Use the existing carousel UI component from `src/components/ui/carousel.tsx`.
- Replace the Fintel-only array with a generic image collection structure that can include images from different projects.
- Continue rendering cards with rounded corners and cover cropping.
- Keep the section in the same homepage location near the bottom.
- Remove the extra descriptive sentence so the heading stands on its own.

### Project Gallery Page
- Keep `/gallery` as a text-first project-list page.
- Do not add a second image-gallery treatment there.

## Verification
- Run `npm run build` to confirm the updated homepage and gallery page compile successfully.
