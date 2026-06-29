# Deploy Check — Adv3D Product Dev Funnel

**Date:** 2026-06-29T01:16:00Z
**Local server:** npx next start -p 3001
**HTTP status:** 200
**Landing HTML size:** 46529 bytes

## Render-time grep checks (raw occurrence counts on minified HTML, all on single line)

| Check | Expected | Actual | Pass |
|---|---|---|---|
| Hero headline "From CAD File to Functional Prototype" | >=1 | 4 | YES |
| Primary CTA "Book a Discovery Call" | >=2 (Hero+FinalCta) | 5 | YES |
| Secondary CTA "Upload Your Project Files" | >=2 (Hero+FinalCta) | 4 | YES |
| Hero trust line "NDA-ready. US-based. HP MJF, SLA, FDM, and TPU in-house." | >=1 | 4 | YES |
| Trust footer (full string with &amp; HTML entity) | >=1 | 1 | YES |
| Bottleneck headline "Production Vendors" | >=1 | 2 | YES |
| Forbidden phrases (industrial/aerospace/automotive/hobby/maker/drone/cosplay/warhammer/mass production/tooling fees/contract manufacturer/production line/tier 1) | 0 | 0 | YES |
| Gradient utilities on CTA components (Hero.tsx, FinalCta.tsx) | 0 | 0 | YES |

## Sections (in render order)

1. section id="hero"
2. section id="problem" (Bottleneck)
3. section id="why" (Why Us)
4. section id="process" (Process)
5. section id="cta" (Final CTA)

## Image references (rendered HTML)

- /research/images/hero.jpg
- /research/images/problem-cad.jpg
- /research/images/problem-warp.jpg
- /research/images/materials-grid-1.jpg
- /research/images/materials-grid-2.jpg
- /research/images/materials-grid-3.jpg
- /research/images/materials-grid-4.jpg
- /research/images/process-1.jpg
- /research/images/process-2.jpg
- /research/images/process-3.jpg
- /research/images/cta-wearable-calipers.jpg

## Warnings

- None. All required strings present, no forbidden phrases, no gradient utilities on CTA components.

