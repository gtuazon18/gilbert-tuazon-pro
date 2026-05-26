# Homepage Fintel Gallery Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a simple homepage gallery section above the footer using only the `public/Fintel` images.

**Architecture:** Define a small local array of `public/Fintel` assets in `src/pages/Index.tsx` and render them in a horizontal scroll row with hover zoom. Keep the rest of the homepage structure unchanged.

**Tech Stack:** React, TypeScript, Framer Motion, existing Embla carousel wrapper, Vite

---

### Task 1: Add homepage Fintel gallery section

**Files:**
- Modify: `src/pages/Index.tsx`
- Verify: `npm run build`

- [ ] **Step 1: Add a `fintelGalleryImages` array using the eight `public/Fintel` files**
- [ ] **Step 2: Render a `Gallery` section above the footer with horizontal scrolling**
- [ ] **Step 3: Add hover zoom and keep arrow buttons out of the UI**

### Task 2: Verify the change

**Files:**
- Verify only

- [ ] **Step 1: Run `npm run build`**
- [ ] **Step 2: Confirm the build completes without TypeScript or Vite errors**
