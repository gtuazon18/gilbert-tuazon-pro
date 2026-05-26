# Homepage Fintel Gallery Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Move the Fintelligence image gallery from the project gallery page into the homepage bottom gallery section.

**Architecture:** Update the homepage gallery section to use a dedicated list of `Fintel` image assets and render them through the existing carousel UI. Simplify the `/gallery` page so it stays a project list without the Fintelligence image-gallery variants.

**Tech Stack:** React, TypeScript, Framer Motion, existing Embla carousel wrapper, Vite

---

### Task 1: Replace homepage list gallery with Fintel image carousel

**Files:**
- Modify: `src/pages/Index.tsx`
- Verify: `npm run build`

- [ ] **Step 1: Add a dedicated Fintel image list and carousel imports**
- [ ] **Step 2: Replace the list-style `GallerySection` markup with image slides**
- [ ] **Step 3: Keep the section in the homepage bottom slot and preserve current section-card styling**

### Task 2: Remove Fintel image-gallery entries from the project gallery page

**Files:**
- Modify: `src/pages/Gallery.tsx`
- Verify: `npm run build`

- [ ] **Step 1: Remove the Fintelligence image-gallery variants from the page data**
- [ ] **Step 2: Keep one standard `Fintelligence` project entry in the project gallery list**
- [ ] **Step 3: Ensure the page still renders as a text-first project gallery**

### Task 3: Verify the change

**Files:**
- Verify only

- [ ] **Step 1: Run `npm run build`**
- [ ] **Step 2: Confirm the build completes without TypeScript or Vite errors**
