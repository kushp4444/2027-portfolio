# 2027-portfolio

Kush Patel's portfolio site. Next.js 16 + React 19 + TypeScript, statically
exported so it can be hosted anywhere (Vercel, Netlify, GitHub Pages, …).

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
```

## Build

```bash
npm run build    # static output in ./out/
```

Deploy the contents of `out/` as a static site.

## Stack

- Next.js 16 (app router, `output: "export"`)
- Tailwind CSS v4 (`@theme` tokens in `app/globals.css`)
- [motion](https://motion.dev) (package `motion`) for animation
- [lenis](https://lenis.darkroom.engineering) for smooth scrolling
- lucide-react for icons
- next/font (Archivo, Instrument Serif italic, JetBrains Mono)

## Content

All copy lives in `lib/content.ts` — experience, projects, contact links.
Design tokens (palette, fonts) are CSS variables in `app/globals.css`, so the
palette can be retuned in one place. Theme is class-based (`.dark` on
`<html>`), defaulting to dark, persisted in `localStorage` as `kp-theme`.

## Notes

- LinkedIn URL is not filled in yet — see the `TODO` in `lib/content.ts`
  (`profile.linkedin`). The contact section renders "Link pending" until set.
- Reduced-motion (`prefers-reduced-motion`) disables Lenis, the custom
  cursor, the mesh canvas animation, and the preloader delay.
- The custom cursor only activates on fine pointers (desktop).
