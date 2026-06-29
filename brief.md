# Adv3D Product Dev & Prototyping Funnel — Build Brief (v2)

> **Status:** v2 build (fresh rebuild on autonomous-build-workflow, 2026-06-27)
> **Operator intent:** "We need to build and deploy another marketing funnel variant for ADV3D."
> **Source copy:** `/opt/data/builds/adv3d_product_dev_funnel_copy.md`
> **Workflow skill:** `/opt/data/skills/devops/autonomous-build-workflow/SKILL.md` (READ THIS FIRST — defines the contract every worker must obey)
> **Reference visual benchmark:** `https://opservices.advanc3dinc.com/`
> **Image mode:** `real_images_required` unless an operator explicitly changes this field to `placeholders_allowed`

## 1. Project

**Name:** Adv3D Product Development & Prototyping Funnel
**Audience:** Medical device startups, inventors, engineering teams
**Goal:** Book a discovery call / upload project details
**Third funnel** alongside live `adv3d-hobbyist-funnel.vercel.app` and `adv3d-b2b.vercel.app`. This build is parallel — does not replace either.

## 2. Repo, workspace, deploy

- **Source template:** `https://github.com/crob04/adv3d-funnel-template` (Next.js 15 + Payload 3 + Tailwind + Postgres + Brevo)
- **Target repo:** `https://github.com/crob04/adv3d-product-dev` (NEW private repo)
- **Workspace orchestrator:** `/opt/data/hermes-orchestrator/adv3d-product-dev-funnel-v2/`
- **Workspace dev server:** `~/hermes-orchestrator/adv3d-product-dev-funnel-v2/`
- **Deploy:** Vercel → `https://adv3d-product-dev.vercel.app`

## 3. Stack (locked)

Next.js 15 (App Router) + Payload 3 + Tailwind + Postgres + Brevo, `USE_MOCK_DATA=true` during build.

Committer: `crob04 <45148987+crob04@users.noreply.github.com>` (per-repo, NOT global).

## 4. Sections (per source copy doc)

5 sections, single landing page:
1. **HERO** — "From CAD File to Functional Prototype — Without the 6-Week Wait."
2. **THE BOTTLENECK (PROBLEM)** — "Most Contract Manufacturers Are Built for Volume. Your Prototype Isn't."
3. **WHY US** — "Built for Iteration. Priced for Early Stage. Ready for Production." + 3 value pillars
4. **HOW IT WORKS (PROCESS)** — 4 steps
5. **FINAL CTA** — "Your Next Iteration Shouldn't Take 6 Weeks."

## 5. Primary CTAs

- **Primary:** `Book a Discovery Call`
- **Secondary:** `Upload Your Project Files → Get a Quote in 24 Hours`
- **Trust line:** `NDA-ready. US-based. HP MJF, SLA, FDM, and TPU in-house.`
- **Trust footer:** `US-based | HP MJF + SLA + FDM + TPU | NDA-ready | Short-run & pilot production | Biocompatible materials available`

CTA destinations: deferred placeholders `+1-CALENDLY-URL` and `+1-UPLOAD-DESTINATION` (operator wires post-deploy).

## 6. Visual benchmark

- Structural: `https://opservices.advanc3dinc.com/`
- Photography: warm workshop lighting (per copy doc — NOT cleanroom)
- Researcher images pre-staged at `research/images/` (12 files, all valid JPEGs)

## 7. Trust / proof

- Logo: `https://advanc3dinc.com/wp-content/uploads/2023/04/Advanced3D-jpg-LogoSmall-CROP.jpg` (pre-staged as `research/images/logo.jpg`)
- Real testimonials / case studies: NONE — new vertical. Honest scaffold.

## 8. Intake (Q1-Q11) — carried from v1

| # | Q | A |
|---|---|---|
| 1 | Existing site | None for THIS audience |
| 2 | Single / multi | Single landing page |
| 3 | CMS | Payload 3, USE_MOCK_DATA=true |
| 4 | Aesthetic | Match opservices.advanc3dinc.com + warm workshop photography |
| 5 | Constraints | Vercel default deploy |
| 6 | Repo + deploy | NEW `crob04/adv3d-product-dev` → Vercel |
| 7 | Vocabulary | CAD file, DFM, STL/STEP, biocompatible, FDA, ISO 13485, design controls, MOQ, short-run, pilot production, HP MJF, TPU, SLA, FDM, post-processing, tolerances, delamination, bench testing, clinical validation, NDA-ready, quote in 24 hours, 3–7 business days |
| 8 | Top 3 objections | (1) tolerance / delamination, (2) NDA / IP, (3) scale with me to pilot |
| 9 | Hero outcome | "After using Advanc3D, I finally have a functional prototype in my hands before my next investor meeting — and an NDA-ready partner I can iterate with through pilot production." |
| 10 | Q10 inversion | REQUIRED (not forbidden): production-grade, engineering-grade, end-use, biocompatible, FDA, ISO 13485, design controls, pilot production, NDA-ready, medical device, prototype, functional prototype, CAD file, additive manufacturing, DFM, design-for-manufacturability, production-intent, material selection. FORBIDDEN: industrial, aerospace, automotive, hobby, maker, drone, cosplay, Warhammer, mass production, tooling fees, contract manufacturer, production line, Tier 1 |
| 11 | Assets | Logo pre-staged; 11 hero/process/materials/problem/cta images pre-staged at `research/images/` |

## 9. Worker contract — REQUIRED READING

Every worker MUST obey the autonomous workflow contract appended to its SOUL.md:
- Authoring roles (`codex-design`, `codex-copywriter`, `minimax-researcher`, `minimax-coder`): SSH to the dev server and launch the appropriate agent CLI first (`codex exec ...` or `opencode run --agent ...`). MCP wrapper is fallback only.
- Hermes/orchestrator MUST NOT hand-author the website code/content itself in a raw terminal/SSH session.
- Polling discipline: max 3 `check_status` calls on MCP fallback, then `ls -la` directly
- Filesystem verification: MANDATORY `ls -la <artifact>` before `kanban_complete`
- Input verification: MANDATORY `ls -la <input>` before `kanban_create`
- Any-pass-with-warnings: hard checks (DEPLOY-*, COPY-01, BRIEF-01, HERO-01) BLOCK; soft checks warn but don't block
- CWD vs workspace_path: cd to workspace_path before any filesystem check
- Target repo: pre-push `git remote -v` verification EXACT match
- Visual gate: inspect DEV SERVER FIRST, fall back to public URL only if confirmed
- Image policy: when `image_mode=real_images_required`, placeholders are a hard failure for T5/T6/T7/T8

## 10. Acceptance criteria

1. UX reviewer score ≥ 8.5/10
2. All 5 sections present in correct order
3. Browser QA passes at 375/768/1440/1920 px
4. All COPY-* checks pass (with Q10 inversions honored)
5. ≥ 5 of Q7 vocabulary terms in rendered copy
6. CTA buttons verbatim
7. All 8 Advanc3D audit questions YES
8. All 5 deployability checks pass
9. Zero forbidden phrases in shipped site (minus Q10 inversions)
10. Production URL = `https://adv3d-product-dev.vercel.app` (Vercel-assigned)
11. Repo = `crob04/adv3d-product-dev` (no version suffix)

## 11. Dispatch order

| # | Card | Profile | Depends on | Operator-gated? |
|---|---|---|---|---|
| T1 | brand direction + visual spec | codex-design | — | no |
| T2 | references + image sourcing | minimax-researcher | — | no (already pre-staged) |
| T3 | COPY_BRIEF.md | codex-copywriter | T1, T2 | no |
| T4 | brief QA | codex-qa | T3 | no (any-pass-with-warnings) |
| T5 | build the site | minimax-coder | T4 | no |
| T6 | visual gate | codex-design | T5 | no |
| T7 | build QA + deployability | codex-qa | T5 | no (any-pass-with-warnings) |
| T8 | vercel-deploy | vercel-deploy | T6, T7 | no |
