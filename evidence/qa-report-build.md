# QA Report — Adv3D Product Dev Funnel Build

**Date:** 2026-06-29T00:25:15Z
**Profile:** minimax-coder
**Build runner:** mcp_opencode_runner (agent code-worker, 2 runs) + direct SSH for build/verify
**Total elapsed:** ~5 minutes for code authoring; build + verify ~30s

## Build summary

- 5 section components authored per VISUAL_SPEC §C + COPY_BRIEF
- Exact class strings from spec applied (no creative deviation)
- Forbidden phrases: 0
- Gradient utilities on CTAs: 0
- npm install: 357 packages, 14s, exit 0
- npm run build: exit 0, 4 static pages generated
- Local HTTP check: HTTP 200, 46529 bytes

## Spec compliance (DEPLOY-* hard checks)

- DEPLOY-01: npm run build exits 0 — PASS
- DEPLOY-02: Local HTTP 200 from `npx next start -p 3001` — PASS
- DEPLOY-03: Hero headline matches COPY_BRIEF §1 verbatim — PASS
- DEPLOY-04: 5 sections rendered in order (hero/problem/why/process/cta) — PASS

## Spec compliance (COPY-01 hard check)

- COPY-01: All copy from COPY_BRIEF applied verbatim (hero headline, sub, CTAs, trust line, trust footer, bottleneck headline, why-us heading, process steps, final CTA headline+body) — PASS

## Spec compliance (BRIEF-01 hard check)

- BRIEF-01: Single-page Next.js 15 + Tailwind with 5 sections — PASS

## Spec compliance (HERO-01 hard check)

- HERO-01: Hero headline "From CAD File to Functional Prototype — Without the 6-Week Wait." rendered — PASS

## Remaining items

- Vercel deploy is operator-gated (downstream card, not in this worker scope).
- Visual-gate review by codex-design recommended after operator "go".
