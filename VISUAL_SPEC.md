# Adv3D Product Development Funnel
## Visual Spec

This document is a binary implementation contract for T5 (`minimax-coder`), T6 (`codex-design`), and T7 (`codex-qa`).

If implementation deviates from this spec, the page fails visual review.

Reference intent:

- warm
- trustworthy
- engineering-grade
- B2B medical-device prototyping
- no hobby-shop cues
- no glossy SaaS gradients

Implementation note:

- Tailwind dark mode must use `darkMode: "class"`.
- Use local images only from `research/images/`.
- Keep the page to exactly 5 content sections in the order defined below.

## SECTION A - Tailwind Config Extension

Use this exact `extend` block inside `tailwind.config.ts` or equivalent Tailwind config.
Do not rename token keys.

```ts
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
}
```

### Token Intent

- `brand.bg`: warm off-white page field; never pure white.
- `brand.primary`: restrained copper-brown action color; serious, not playful.
- `brand.primary-hover`: darker copper for hover only.
- `brand.text`: deep slate for high-legibility body copy.
- `brand.muted`: secondary body/support text.
- `brand.surface`: slightly elevated warm card/panel tone.
- `brand.border`: alpha-blended neutral border for cards and image frames.
- `brand-dark.bg`: charcoal dark mode backdrop.
- `brand-dark.primary`: warmer lifted CTA tone for dark mode.
- `brand-dark.surface`: raised dark panels, not black voids.

### Non-Negotiable Color Rules

- No purple accents.
- No bright cyan accents.
- No button gradients.
- No colored left-border card accents.
- Border color must stay neutral in both modes.

## SECTION B - Font Loading

Display font:

- `Cabinet Grotesk`

Body font:

- `Satoshi`

Add these exact tags to `app/layout.tsx` inside `<head>`:

```html
<link rel="preconnect" href="https://api.fontshare.com" />
<link
  rel="stylesheet"
  href="https://api.fontshare.com/v2/css?f[]=cabinet-grotesk@400,500,700,800&f[]=satoshi@400,500,700&display=swap"
/>
```

### Font Rules

- All `h1`, `h2`, `h3`, CTA text, and eyebrow numerals use `font-display`.
- Body copy, nav links, trust lines, and list text use `font-body`.
- Headline tracking stays slightly tight; do not use wide uppercase letterspacing for major headings.
- Body copy should sit between `text-base` and `text-lg`, never below `text-sm` for core section copy.

## SECTION C - Component Specs

All class strings below are exact.
Minor additions are allowed only for responsive visibility or image/object-fit behavior.
Do not remove or replace the listed classes.

### 1. Primary CTA Button

Use for:

- hero primary CTA
- final CTA primary action

Exact class string:

```txt
inline-flex items-center justify-center rounded-[1.125rem] bg-brand-primary px-6 py-3.5 font-display text-sm font-semibold tracking-[0.01em] text-white transition-colors duration-200 hover:bg-brand-primary-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary/30 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-bg dark:bg-brand-dark-primary dark:hover:bg-brand-dark-primary-hover dark:focus-visible:ring-brand-dark-primary/35 dark:focus-visible:ring-offset-brand-dark-bg
```

Structural constraints:

- Solid fill only.
- No gradient classes.
- No icon-only version.
- Button text must be left-to-right readable sentence case.
- Primary CTA text must be `Book a Discovery Call` verbatim.

### 2. Secondary / Ghost Button

Use for:

- hero upload CTA
- final CTA upload CTA

Exact class string:

```txt
inline-flex items-center justify-center rounded-[1.125rem] border border-brand-border bg-brand-surface px-6 py-3.5 font-display text-sm font-semibold tracking-[0.01em] text-brand-text transition-colors duration-200 hover:border-brand-primary hover:text-brand-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary/20 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-bg dark:border-brand-dark-border dark:bg-brand-dark-surface dark:text-brand-dark-text dark:hover:border-brand-dark-primary dark:hover:text-brand-dark-primary dark:focus-visible:ring-brand-dark-primary/30 dark:focus-visible:ring-offset-brand-dark-bg
```

Structural constraints:

- Must remain transparent/surface-based, not filled primary color.
- No arrow in a separate colored chip.
- Secondary CTA text must be `Upload Your Project Files → Get a Quote in 24 Hours` verbatim.

### 3. Navigation Bar

Exact class string for nav shell:

```txt
sticky top-0 z-50 border-b border-transparent bg-brand-bg/70 backdrop-blur-md transition-[background-color,border-color,box-shadow] duration-300 data-[scrolled=true]:border-brand-border data-[scrolled=true]:bg-brand-bg/92 data-[scrolled=true]:shadow-[0_12px_30px_rgba(20,28,33,0.06)] dark:bg-brand-dark-bg/72 dark:data-[scrolled=true]:border-brand-dark-border dark:data-[scrolled=true]:bg-brand-dark-bg/90 dark:data-[scrolled=true]:shadow-[0_16px_36px_rgba(0,0,0,0.32)]
```

Required structure:

- Left: logo lockup and/or text wordmark.
- Center or right: compact anchor links for the 5 sections or the major internal waypoints.
- Right: dark-mode toggle and at least one CTA.
- Dark-mode toggle is required in nav, always visible at `md` and above, still reachable on mobile.

Dark-mode toggle button class string:

```txt
inline-flex h-10 w-10 items-center justify-center rounded-full border border-brand-border bg-brand-surface text-brand-text transition-colors duration-200 hover:border-brand-primary hover:text-brand-primary dark:border-brand-dark-border dark:bg-brand-dark-surface dark:text-brand-dark-text dark:hover:border-brand-dark-primary dark:hover:text-brand-dark-primary
```

Nav behavior constraints:

- Sticky from first paint.
- Scroll state adds border and shadow.
- No oversized hero-overlap transparent gimmick.
- No center-stacked mobile-only identity treatment.

### 4. Hero Section Layout

Required section spacing:

```txt
py-24 md:py-30
```

Required outer layout class string:

```txt
grid gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(420px,0.95fr)] lg:items-center
```

Required text column constraints:

- Left-aligned only.
- Headline max width approx `max-w-2xl`.
- CTA stack left-aligned, horizontal at `sm` and above.
- Trust line directly below CTA group.

Required image panel class string:

```txt
overflow-hidden rounded-5xl border border-brand-border bg-brand-surface shadow-panel dark:border-brand-dark-border dark:bg-brand-dark-surface dark:shadow-panel-dark
```

Hero constraints:

- Two-column or asymmetric split only.
- No centered-everything hero.
- No full-screen empty space.
- Outcome-first headline, not process-first or feature-first.
- Hero must include one primary CTA, one secondary CTA, and the trust line.

### 5. Feature / Proof Section Layout

This applies to `WHY US`.

Required section spacing:

```txt
py-20 md:py-24
```

Required outer layout class string:

```txt
grid gap-6 lg:grid-cols-12
```

Required internal composition:

- Lead pillar card: `lg:col-span-7`
- Supporting pillar stack: `lg:col-span-5`
- Supporting pillar stack contains two vertically stacked cards with `grid gap-6`
- Third pillar may live in the lead card lower zone or the right stack, but the section must not resolve into three equal columns

Acceptable pattern:

- one large editorial card plus two smaller stacked cards
- or one wide lead panel with a materials mosaic and two smaller proof cards beside it

Forbidden pattern:

- `grid-cols-3`
- three same-width cards in one row
- three identical icon cards with equal emphasis

### 6. Card Style

Exact card class string:

```txt
rounded-4xl border border-brand-border bg-brand-surface p-6 shadow-panel dark:border-brand-dark-border dark:bg-brand-dark-surface dark:shadow-panel-dark
```

Card constraints:

- Border must use alpha-blended neutral token, not solid brand color.
- Radius must feel substantial and calm.
- Shadow must stay soft and broad, never glossy.
- No colored left-border accent.
- No icons in colored circle backgrounds.
- If icons are used at all, use monochrome line icons or small numeric labels on transparent/neutral surfaces only.

### 7. Section Spacing

Use these exact section paddings:

- HERO: `py-24 md:py-30`
- THE BOTTLENECK / PROBLEM: `py-16 md:py-20`
- WHY US: `py-20 md:py-24`
- HOW IT WORKS: `py-18 md:py-22`
- FINAL CTA: `py-20 md:py-28`

Spacing constraints:

- Padding must vary between sections.
- Hero gets the most top/bottom room.
- Problem is tighter than hero.
- How It Works is tighter than Why Us.
- Final CTA is roomy but still secondary to hero.

## SECTION D - Section Order Checklist

The page must contain exactly these 5 sections in exactly this order.
No sixth section.
No FAQ.
No testimonials.
No separate proof band.

### 1. HERO

What it does:

- Frames the outcome: move from CAD file to functional prototype without the six-week wait.
- Establishes speed, engineering credibility, and conversion paths immediately.

What it must not do:

- Must not center all content.
- Must not lead with machine/process lists before the outcome.
- Must not oversell with hype language.

### 2. THE BOTTLENECK / PROBLEM

What it does:

- Agitates wait-time pain, tolerance/delamination risk, and the mismatch between early-stage prototype needs and volume-oriented vendors.

What it must not do:

- Must not introduce the full solution stack yet.
- Must not duplicate the hero CTA stack in full.
- Must not read like a competitor-comparison rant.

### 3. WHY US

What it does:

- States the three value pillars and proves why Adv3D is the right partner: engineering-grade iteration, NDA-ready collaboration, and bridge-to-pilot capability.

What it must not do:

- Must not simply restate the problem copy.
- Must not use a generic three-column icon grid.
- Must not rely on testimonials or invented social proof.

### 4. HOW IT WORKS (PROCESS - 4 STEPS)

What it does:

- Makes the path from file submission to delivered prototype feel orderly and low-friction.
- Shows a four-step process that reduces uncertainty.

What it must not do:

- Must not become a long technical SOP.
- Must not use a centered timeline with floating decorative lines.
- Must not imply instant automation with no review.

### 5. FINAL CTA

What it does:

- Converts the visitor with the two locked CTA options and the strongest late-stage trust language.

What it must not do:

- Must not add a new product story or another feature list.
- Must not introduce testimonials, FAQs, or a contact-form-only dead end.
- Must not weaken CTA copy into generic labels.

## SECTION E - Image Slot Manifest

All page imagery must use these local assets.
Do not hotlink.
Do not substitute placeholders.
Do not source remote backup images.

| Slot | Local Path | Section | Role | Treatment |
|---|---|---|---|---|
| hero | `research/images/hero.jpg` | HERO | primary right-column hero image | Keep full-width within framed panel; preserve machine detail. |
| problem-cad | `research/images/problem-cad.jpg` | THE BOTTLENECK / PROBLEM | lead problem image | Use as the clearer file/design reference image. |
| problem-warp | `research/images/problem-warp.jpg` | THE BOTTLENECK / PROBLEM | secondary support image | Crop tighter if needed so the frame reads as process/mechanical detail rather than repetition. |
| materials-grid-1 | `research/images/materials-grid-1.jpg` | WHY US | support mosaic tile 1 | Small tile only; de-emphasize literal subject if needed through crop. |
| materials-grid-2 | `research/images/materials-grid-2.jpg` | WHY US | support mosaic tile 2 | Use as warm material/amber texture tile. |
| materials-grid-3 | `research/images/materials-grid-3.jpg` | WHY US | support mosaic tile 3 | Use only as secondary editorial texture; never hero-scale. |
| materials-grid-4 | `research/images/materials-grid-4.jpg` | WHY US | support mosaic tile 4 | Use as small crop or abstract supporting tile only. |
| process-1 | `research/images/process-1.jpg` | HOW IT WORKS | step 1 or step 2 image | Best fit for file review / workstation review. |
| process-2 | `research/images/process-2.jpg` | HOW IT WORKS | step 3 image | Strong fit for active fabrication/manufacture step. |
| process-3 | `research/images/process-3.jpg` | HOW IT WORKS | step 4 support image or side panel | Use as monochrome mechanics image; keep secondary. |
| cta-wearable-calipers | `research/images/cta-wearable-calipers.jpg` | FINAL CTA | precision/measurement closing image | Use as the right-side CTA proof image. |
| logo | `research/images/logo.jpg` | HERO / NAV | brand mark support asset | Use in nav/hero brand lockup only if legible at small size; otherwise retain text wordmark and place the local logo asset in a subtle supporting role without hotlink substitution. |

### Section-Level Image Assignment Summary

- HERO: `logo`, `hero`
- THE BOTTLENECK / PROBLEM: `problem-cad`, `problem-warp`
- WHY US: `materials-grid-1`, `materials-grid-2`, `materials-grid-3`, `materials-grid-4`
- HOW IT WORKS: `process-1`, `process-2`, `process-3`
- FINAL CTA: `cta-wearable-calipers`

### Process-Step Image Constraint

There are 4 process steps but only 3 process image slots.
That is intentional.

Implementation rule:

- Step 4 is allowed to be a text-led card with a numeric label and no dedicated image.
- Do not invent `process-4.jpg`.
- Do not duplicate a process image just to fake a fourth asset.

## SECTION F - Binary QA Checklist

Every item below is pass/fail.
If any item fails, the page fails the visual contract.

1. `tailwind.config.*` contains all light tokens from SECTION A under `brand`: `bg`, `primary`, `primary-hover`, `text`, `muted`, `surface`, `border`.
2. `tailwind.config.*` contains all dark tokens from SECTION A under `brand-dark`: `bg`, `primary`, `primary-hover`, `text`, `muted`, `surface`, `border`.
3. `tailwind.config.*` contains `fontFamily.display` with `Cabinet Grotesk` and `fontFamily.body` with `Satoshi`.
4. `app/layout.tsx` includes the Fontshare `<link rel="preconnect" href="https://api.fontshare.com" />` tag and the stylesheet link from SECTION B.
5. No button uses any gradient utility; grep for `bg-gradient`, `from-`, `via-`, and `to-` on CTA/button components returns `0` matches.
6. Primary CTA text `Book a Discovery Call` appears verbatim in HERO and FINAL CTA.
7. Secondary CTA text `Upload Your Project Files → Get a Quote in 24 Hours` appears verbatim.
8. Trust line `NDA-ready. US-based. HP MJF, SLA, FDM, and TPU in-house.` appears on the page.
9. Trust footer `US-based | HP MJF + SLA + FDM + TPU | NDA-ready | Short-run & pilot production | Biocompatible materials available` appears on the page verbatim.
10. Hero headline is outcome-first, not feature-first: it references the result of getting a functional prototype or avoiding the six-week wait before listing processes or machines.
11. The page has exactly 5 major content sections matching SECTION D order: HERO, THE BOTTLENECK / PROBLEM, WHY US, HOW IT WORKS, FINAL CTA.
12. No separate FAQ, testimonial, proof, or capability section exists as a sixth band.
13. No `grid-cols-3` layout is used for the WHY US pillar area or any equal three-card feature row.
14. WHY US uses an asymmetric layout such as `lg:grid-cols-12` with unequal column spans; three equal columns fail.
15. No icons appear inside colored circular backgrounds; grep for combined icon wrappers using circular brand-colored utilities returns `0` matches.
16. No card uses a colored left border accent; grep for `border-l-`, `border-l-[`, or left-edge accent classes on card components returns `0` relevant matches.
17. Card borders use neutral alpha-blended tokens from SECTION A, not solid brand colors.
18. Body copy blocks are left-aligned in all sections; large paragraph groups do not use `text-center` at `md` and above.
19. Navigation is sticky, includes a dark-mode toggle, and the toggle changes the `dark` class state on the root element or configured theme target.
20. Dark mode is fully implemented, not partially skinned: background, surface, text, border, and button states all switch to the `brand-dark` token set.
21. WCAG AA contrast is met in both light and dark mode for body text, headings, CTA buttons, and nav links.
22. All content images reference local `research/images/<slot>.jpg` assets or local imported equivalents; no content image hotlinks appear in rendered markup.
23. All 12 image slots from SECTION E are used somewhere in the page or page chrome; no placeholder text, placeholder block, or empty image shell is visible.
24. No visible placeholder copy appears: grep/render checks for `lorem`, `placeholder`, `coming soon`, `sample text`, or `dummy` return `0`.
25. `USE_MOCK_DATA=true` does not appear in any committed env config by T6/T7 gate; temporary build-time use is not acceptable for final visual QA.
26. At least 5 Q7 vocabulary terms appear in rendered copy from this set: `CAD file`, `DFM`, `biocompatible`, `FDA`, `ISO 13485`, `design controls`, `NDA-ready`, `HP MJF`, `TPU`, `SLA`, `FDM`, `pilot production`, `quote in 24 hours`.
27. No forbidden Q10 phrases from `brief.md` appear anywhere in rendered page copy.
28. Hero uses a left-aligned two-column or asymmetric split layout; a centered single-column hero fails.
29. Hero includes exactly one primary CTA style and one secondary CTA style above the trust line; neither CTA is reduced to `Learn More` or `Get Started`.
30. Section paddings match SECTION C exactly: HERO `py-24 md:py-30`, PROBLEM `py-16 md:py-20`, WHY US `py-20 md:py-24`, HOW IT WORKS `py-18 md:py-22`, FINAL CTA `py-20 md:py-28`.
31. The FINAL CTA includes the closing measurement/proof image from `research/images/cta-wearable-calipers.jpg`.
32. The HOW IT WORKS section contains 4 numbered steps; it does not invent a fourth process image.
33. The problem section uses both `problem-cad` and `problem-warp` assets and keeps them secondary to the problem copy, not as decorative background wallpaper.
34. No button, card, or section heading uses rainbow, mesh, aurora, or glassmorphism effects.
35. No testimonial quotes, star ratings, or fabricated client logos are introduced.
36. No page section uses a flat pure-white background edge to edge; warm neutrals or dark-mode charcoal must remain the dominant fields.
37. No image is clipped into a circle; image treatments stay rectangular with controlled radius.
38. The nav, hero, cards, and final CTA all use the brand border/surface system instead of unrelated default Tailwind gray utilities where brand tokens should apply.

## Locked Implementation Summary

If a build agent needs a shorthand:

- warm off-white + charcoal + copper palette
- Cabinet Grotesk display, Satoshi body
- solid buttons only
- sticky nav with dark toggle
- left-aligned asymmetric hero
- asymmetric WHY US section, never three equal columns
- neutral bordered cards
- exactly 5 sections
- local staged images only
