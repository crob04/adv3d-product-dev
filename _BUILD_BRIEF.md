BUILD THE ADV3D PRODUCT DEV FUNNEL — single-page Next.js 15 + Tailwind app.

## Workspace
Work entirely in `/home/codex/hermes-orchestrator/adv3d-product-dev-funnel-v2/`.

Specs are already in this directory. Read them all up front:
- `brief.md` (project rules)
- `COPY_BRIEF.md` (verbatim copy you MUST use)
- `BRAND_DIRECTION.md` (voice/imagery guidance)
- `VISUAL_SPEC.md` (binary contract — 38 QA checks; class strings are EXACT)

Images are in `research/images/*.jpg` (12 files, all JPGs).

## Stack
- Next.js 15 (App Router)
- React 19
- Tailwind CSS 3.4 with `darkMode: "class"`
- TypeScript
- Static-renderable (no Payload, no DB, no Brevo at build time)
- Fontshare fonts (Cabinet Grotesk display + Satoshi body) via `<link>` tags in `app/layout.tsx`

## Files to create (in this exact order)

### 1. `package.json`
```json
{
  "name": "adv3d-product-dev",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "next": "^15.4.11",
    "react": "^19.1.0",
    "react-dom": "^19.1.0"
  },
  "devDependencies": {
    "@types/node": "^22.8.1",
    "@types/react": "^19.0.0",
    "@types/react-dom": "^19.0.0",
    "autoprefixer": "^10.4.20",
    "eslint": "^9.13.0",
    "eslint-config-next": "^15.0.0",
    "postcss": "^8.4.47",
    "tailwindcss": "^3.4.14",
    "typescript": "^5.6.3"
  }
}
```

### 2. `tsconfig.json`
Standard Next.js 15 tsconfig (strict, paths `@/*` -> `./`).

### 3. `next.config.js`
```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
};
module.exports = nextConfig;
```

### 4. `postcss.config.mjs`
```js
export default { plugins: { tailwindcss: {}, autoprefixer: {} } };
```

### 5. `tailwind.config.ts`
USE THIS EXACT CONFIG (matches VISUAL_SPEC.md SECTION A + the v2 spacing tokens):

```ts
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: "#F4EFE7",
          primary: "#8C5B37",
          "primary-hover": "#73492B",
          text: "#182127",
          muted: "#5B666E",
          surface: "#FFF9F2",
          border: "rgba(24, 33, 39, 0.12)",
        },
        "brand-dark": {
          bg: "#0F1518",
          primary: "#C48758",
          "primary-hover": "#D59A6A",
          text: "#ECF0EA",
          muted: "#A7B0AE",
          surface: "#172026",
          border: "rgba(236, 240, 234, 0.14)",
        },
      },
      fontFamily: {
        display: ['"Cabinet Grotesk"', "ui-sans-serif", "system-ui", "sans-serif"],
        body: ['"Satoshi"', "ui-sans-serif", "system-ui", "sans-serif"],
      },
      spacing: {
        "18": "4.5rem",
        "22": "5.5rem",
        "28": "7rem",
        "30": "7.5rem",
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      boxShadow: {
        panel: "0 18px 48px rgba(20, 28, 33, 0.08)",
        "panel-dark": "0 20px 56px rgba(0, 0, 0, 0.36)",
      },
    },
  },
  plugins: [],
};
export default config;
```

### 6. `app/globals.css`
Tailwind layers + base styles. Include the dark-mode bootstrap inline-inject script via `<script>` in layout.

### 7. `app/layout.tsx`
- `<html lang="en" suppressHydrationWarning>`
- `<head>`:
  - `<link rel="preconnect" href="https://api.fontshare.com" />`
  - `<link rel="stylesheet" href="https://api.fontshare.com/v2/css?f[]=cabinet-grotesk@400,500,700,800&f[]=satoshi@400,500,700&display=swap" />`
  - `<script dangerouslySetInnerHTML>` containing the dark-mode bootstrap: read localStorage `adv3d-theme` and add `dark` class to `<html>`.
- `<body className="font-body bg-brand-bg text-brand-text dark:bg-brand-dark-bg dark:text-brand-dark-text antialiased">`
- Metadata: title, description (use COPY_BRIEF §1 subhead + trust line).

### 8. `app/page.tsx`
Import and render `<Nav />`, then `<main>` containing `<Hero />`, `<Bottleneck />`, `<WhyUs />`, `<Process />`, `<FinalCta />` in that order. That's it. No sixth section.

### 9. Components — use EXACT class strings from VISUAL_SPEC.md

#### `components/Nav.tsx`
- Sticky nav, brand-bg with backdrop-blur, becomes opaque + bordered on scroll.
- Left: wordmark "Advanc3D" (font-display).
- Center: anchor links for 5 sections (#hero, #problem, #why, #process, #cta).
- Right: dark-mode toggle (sun/moon SVG), primary CTA "Book a Discovery Call".
- Class for nav shell (VISUAL_SPEC §C.3):
  ```
  sticky top-0 z-50 border-b border-transparent bg-brand-bg/70 backdrop-blur-md transition-[background-color,border-color,box-shadow] duration-300 data-[scrolled=true]:border-brand-border data-[scrolled=true]:bg-brand-bg/92 data-[scrolled=true]:shadow-[0_12px_30px_rgba(20,28,33,0.06)] dark:bg-brand-dark-bg/72 dark:data-[scrolled=true]:border-brand-dark-border dark:data-[scrolled=true]:bg-brand-dark-bg/90 dark:data-[scrolled=true]:shadow-[0_16px_36px_rgba(0,0,0,0.32)]
  ```
- Use `"use client"` + small `useEffect` to track scroll (toggle data-scrolled attribute).

#### `components/Hero.tsx`
- Section padding: `py-24 md:py-30`
- Outer grid: `grid gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(420px,0.95fr)] lg:items-center`
- Left column: eyebrow `ADVANC3D PRODUCT DEVELOPMENT`, h1 headline VERBATIM (COPY_BRIEF §1 line 19), subhead VERBATIM (COPY_BRIEF §1 line 20), CTA stack, trust line VERBATIM.
- Right column: image panel with class `overflow-hidden rounded-5xl border border-brand-border bg-brand-surface shadow-panel dark:border-brand-dark-border dark:bg-brand-dark-surface dark:shadow-panel-dark`, `<Image src="/research/images/hero.jpg" ...>`.
- Primary CTA: `Book a Discovery Call` (VISUAL_SPEC §C.1 class).
- Secondary CTA: `Upload Your Project Files → Get a Quote in 24 Hours` (VISUAL_SPEC §C.2 class).
- Trust line: `NDA-ready. US-based. HP MJF, SLA, FDM, and TPU in-house.`
- Both CTAs link to `+1-CALENDLY-URL` and `+1-UPLOAD-DESTINATION`.

#### `components/Bottleneck.tsx`
- Section id `id="problem"`, padding `py-16 md:py-20`.
- Eyebrow `THE BOTTLENECK`, headline VERBATIM (COPY_BRIEF §2 line 29, includes "Production Vendors" not "Contract Manufacturers").
- Body copy VERBATIM (COPY_BRIEF §2 line 30).
- 4 friction bullets as a structured list with subtle numbering.
- Two image panels: problem-cad (lead) and problem-warp (secondary), smaller, cropped tight. Use the card style.

#### `components/WhyUs.tsx`
- Section id `id="why"`, padding `py-20 md:py-24`.
- Eyebrow `WHY US`, headline VERBATIM (COPY_BRIEF §3 line 36).
- Asymmetric layout: `grid gap-6 lg:grid-cols-12`. Lead card `lg:col-span-7`, supporting stack `lg:col-span-5`. NO `grid-cols-3`.
- Lead pillar: "Design Collaboration" (COPY_BRIEF §3 line 37).
- Pillar 1: "Material Flexibility" (line 38).
- Pillar 2: "Short-Run Production" (line 39).
- 4 materials-grid images used as small mosaic tiles inside the lead or supporting cards.
- Card style (VISUAL_SPEC §C.6): `rounded-4xl border border-brand-border bg-brand-surface p-6 shadow-panel dark:border-brand-dark-border dark:bg-brand-dark-surface dark:shadow-panel-dark`

#### `components/Process.tsx`
- Section id `id="process"`, padding `py-18 md:py-22`.
- Eyebrow `HOW IT WORKS`, headline VERBATIM (COPY_BRIEF §4 line 45).
- 4 numbered steps (COPY_BRIEF §4 lines 46-49). Step 4 is text-only (no image) per spec.
- 3 images: process-1, process-2, process-3 used in steps 1, 2, 3.
- Layout: 2x2 grid on desktop, vertical on mobile. Numbered label `01`, `02`, `03`, `04` per step.

#### `components/FinalCta.tsx`
- Section id `id="cta"`, padding `py-20 md:py-28`.
- Headline VERBATIM (COPY_BRIEF §5 line 54).
- Lede paragraph VERBATIM (line 55).
- Primary CTA `Book a Discovery Call`, secondary CTA `Upload Your Project Files → Get a Quote in 24 Hours`.
- Trust footer VERBATIM (line 58).
- Right-side image: `cta-wearable-calipers.jpg` in the framed panel.
- Two-column or asymmetric layout (NOT centered).

### 10. Image assets
Copy `research/images/*.jpg` to `public/research/images/` (keep filenames identical). 12 files.

### 11. `.gitignore`
```
node_modules
.next
out
.vercel
.DS_Store
.env*.local
*.tsbuildinfo
next-env.d.ts
```

### 12. `README.md`
Short description, stack list, deploy URL `https://adv3d-product-dev.vercel.app`, repo URL `https://github.com/crob04/adv3d-product-dev`.

## Build & verify
1. Run `npm install` (set registry to default if needed; ignore lockfile drift).
2. Run `npm run build`. Must exit 0.
3. Run `npx next start -p 3001 &` then `curl -s http://localhost:3001/ -o /tmp/landing.html && head -c 2000 /tmp/landing.html`. Verify hero headline "From CAD File to Functional Prototype" is in the HTML.
4. Grep checks (must all return non-empty / pass):
   - `grep -c "From CAD File to Functional Prototype" app/page.tsx` → >= 1
   - `grep -c "Book a Discovery Call" app/page.tsx components/*.tsx` → >= 2
   - `grep -c "Upload Your Project Files" app/page.tsx components/*.tsx` → >= 2
   - `grep -c "NDA-ready" components/Hero.tsx` → >= 1
   - `grep -c "Production Vendors" components/Bottleneck.tsx` → >= 1
   - `grep -ciE "industrial|aerospace|automotive|hobby|maker|drone|cosplay|warhammer|mass production|tooling fees|contract manufacturer|production line|tier 1" app/page.tsx components/*.tsx` → 0
   - `grep -cE "bg-gradient|from-|via-|to-" components/Hero.tsx components/FinalCta.tsx` → 0

## Commit & push
After build is green:
1. `git add -A`
2. `git commit -m "v2 build: per COPY_BRIEF + VISUAL_SPEC + BRAND_DIRECTION"` (attribution will be crob04 because we set user.name/user.email per-repo).
3. `git push origin main --force-with-lease` (since remote has v19 build, force push is required to overwrite).

If push fails because the branch is protected, report the exact error — do NOT bypass with --force.

## STOP and REPORT when:
- Build is green (npm run build exits 0)
- curl returns HTML with hero headline
- All grep checks pass
- Commit SHA captured
- Push succeeded

Report at the end: SHA, last 30 lines of build output, curl status code, all grep results, file count, total source LOC.

DO NOT skip the build. DO NOT skip the push. The orchestrator depends on a green build and a successful push for downstream T6/T7/T8.