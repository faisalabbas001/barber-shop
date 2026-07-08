# Noir & Blade — Premium Barbershop Landing Page

Built with Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS v4,
Framer Motion and Lucide icons.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Structure

```
app/            Root layout, page, global styles
components/     Reusable UI primitives (navbar, footer, ui/*)
sections/       One file per landing page section (Hero, Services, ...)
constants/      Static content/data (services, team, pricing, gallery, faq)
types/          Shared TypeScript types
lib/            Utility helpers (cn className merger)
public/images/  Replace the placeholder picsum.photos URLs in
                constants/data.ts with real photography here.
```

## Notes

- Images currently point to picsum.photos placeholders with a
  grayscale/sepia duotone filter applied in CSS. Swap the `IMG()` helper
  usages in `constants/data.ts` for real barbershop photography (or
  local files served from `public/images/` via `next/image`) before
  shipping to production.
- Design tokens (colors, fonts) live in `app/globals.css` under `@theme`.
- Every section component that uses hooks/animation is marked
  `"use client"`; `app/page.tsx` itself stays a server component.
"# barber-shop" 
