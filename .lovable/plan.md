# Refactoring & Optimization Plan

The site is a small, static, content-driven marketing app (TanStack Start, no backend, no queries). The work below is grouped by impact and can be shipped incrementally — each step is independent and safe to stop after.

---

## Step 1 — Shared page layout component (structural cleanup)

**Problem.** Every route repeats the same shell:
`<div className="min-h-screen flex flex-col"> <SiteHeader /> <main> … </main> <SiteFooter /> </div>`.
It's duplicated across ~12 route files and drifts (some use `bg-white`, some `bg-charcoal`).

**Change.** Create `src/components/page-shell.tsx`:

```tsx
<PageShell background="light|dark"> {children} </PageShell>
```

Replace the repeated shell in all routes. Removes ~10 lines per route and centralizes the light/dark switch.

---

## Step 2 — Product/category data model consolidation

**Problem.** Three parallel datasets (`publicite-products`, `signaletique-products`, `stands-products`) plus three near-identical route files (`publicite.publicite.*`, `publicite.signaletique.*`, `stands.*`) each with its own listing + detail component.

**Change.**
- Unify into `src/data/products.ts` with a `category` field.
- Extract two reusable components: `ProductGrid` and `ProductDetail`.
- Collapse the three detail routes into one dynamic route `/{category}/$product` (or keep URLs and make each route file 5 lines that forwards to the shared components).

Cuts ~500 lines and makes adding a new category a one-line change.

---

## Step 3 — Hero slider extraction

**Problem.** `src/routes/index.tsx` is 180 lines, mostly slider logic (state, refs, autoplay, transitions, dots, arrows).

**Change.** Move to `src/components/hero-slider.tsx` with props `{ slides, intervalMs }`. Home route becomes ~30 lines. Enables reuse and unit-testing the slider.

While there:
- Replace autoplay `setInterval` with a `pause-when-tab-hidden` guard (`document.visibilityState`) so it stops eating CPU in background tabs.
- Add `prefers-reduced-motion` check to disable auto-advance for users who opt out.

---

## Step 4 — Image performance pass (already partially done)

**Done.** LCP preload, `fetchpriority`/`decoding` on hero, `decoding="async"` on lazy gallery images, header logo dimensions.

**Remaining.**
- Add explicit `width`/`height` (or `aspect-ratio` CSS) to every gallery `<img>` to eliminate layout shift (CLS).
- Generate responsive variants via `vite-imagetools` (`?w=400;800;1600&format=webp&as=srcset`) and use `srcset`/`sizes` so mobile clients don't download 1.2 MB hero files.
- Convert `divers-15.jpeg` and `divers-main.jpeg` to `.webp` (the rest of the library is already webp).

---

## Step 5 — Design token cleanup

**Problem.** Colors are referenced three different ways across the codebase:
`text-[color:var(--brand-orange)]`, `bg-[var(--brand-orange)]`, and inline `#…` fallbacks from the dark-mode hardening pass.

**Change.**
- Register brand tokens in the Tailwind theme (`@theme` block in `src/styles.css`) so classes become `text-brand-orange` / `bg-brand-charcoal`.
- Remove the arbitrary-value syntax across all files with a single codemod pass.
- Keep the `color-scheme: only light` + hex fallbacks (needed for Chrome auto-dark).

Result: shorter class names, one source of truth for the palette.

---

## Step 6 — SEO & metadata pass

**Problem.** Several route files ship only a `title` (no description, no `og:*`, no canonical). Product detail pages don't emit `og:image` from their own hero.

**Change.**
- Add full `head()` to every route: `title`, `description`, `og:title`, `og:description`, `og:url`, `twitter:card`, canonical link.
- Product/category detail routes: derive `og:image` from `loaderData.product.image`.
- Add `public/robots.txt` and a dynamic `src/routes/sitemap[.]xml.ts` enumerating all static routes + all products/categories.
- Root JSON-LD: `Organization` with address/phone (already in the footer).

---

## Step 7 — Accessibility polish

- Slider arrow buttons: keep the visible focus ring (currently overridden by hover styles).
- Mobile menu button: add `aria-expanded={open}` and `aria-controls`.
- Hero `<h1>` cycles per slide — good, but ensure only one `h1` per page on other routes (currently most have one, verify).
- Contact form (if present) — associate labels, add `aria-describedby` for errors.
- Replace `min-h-screen` with `min-h-dvh` on mobile-first layouts to avoid the iOS URL-bar jump.

---

## Step 8 — Bundle & build hygiene

- Audit `lucide-react` imports — already tree-shakeable, but confirm no `import * as Icons` sneaks in.
- Split the product data file so route chunks only pull the category they need (currently the whole `publicite-products` array ships to every publicité detail page).
- Add a `<link rel="preconnect">` for the R2 asset host so image DNS resolves in parallel with HTML parse.

---

## Step 9 — Developer ergonomics

- Add `scripts/check-assets.ts` that fails CI if any `*.asset.json` is orphaned (not imported anywhere) or any import references a missing asset.
- Extract magic strings (phone, email, address) into `src/data/contact.ts`, consumed by footer + contact page + JSON-LD.

---

## Suggested execution order

1. Steps 1–3 first (structural refactor — biggest LOC reduction, unlocks the rest).
2. Steps 4 & 6 next (user-visible: performance + SEO).
3. Steps 5, 7, 8, 9 as polish.

Shall I start with Step 1 (shared `PageShell` + slider extraction)?
