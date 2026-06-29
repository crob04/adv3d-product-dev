# References — Adv3D Product Development & Prototyping Funnel

**Project:** Adv3D Product Development & Prototyping (adv3d-product-dev-funnel-v2)
**Stage:** T2 — references & terminology (downstream of T1 image preflight)
**Audience:** medical-device startups, inventor teams, engineering groups
**Author:** opencode researcher agent (read-only, web-grounded)
**Date:** 2026-06-28

---

## 1. Reference visual benchmark (in-brief)

### https://opservices.advanc3dinc.com/  *(primary visual benchmark)*
- **Headline structure:** "High-Performance, Patient-Ready O&P Interventions" / "Stronger sockets. Lighter orthoses. Faster turnaround. Better Outcomes." plus overline "US-Based Digital Prosthetic & Orthotic Fabrication."
- **Primary CTA:** "Get a Fabrication Quote" + "Connect With Our Team" (paired, equal weight).
- **Photography:** Warm product-on-white (Nitro socket, orthosis, flexible liner) + one workshop-printer shot (Formlabs Fuse) + one CAD lattice render. Warm workshop lighting — explicitly NOT cleanroom.
- **Vocabulary:** additive manufacturing, HP MJF, Formlabs SLS, PA-12 nylon, TPU elastomers, Class VI biocompatibility, design-to-finish, bridge production, short-run production, ready-to-fit.
- **Section order:** Hero → THE PROBLEM (4 sub-bullets) → WHY US (4 pillars) → WHAT YOU GET → THE PROCESS (4 steps) → CAPABILITY → final contact form.
- **Why it matters:** The build must clone this layout almost 1:1 — it parallels the 5-section v2 brief.

### https://advanc3dinc.com/  *(parent brand site)*
- **Headline structure:** "3D Printed Prosthetics, Orthotics, Industrial, and Consumer Goods for Prototyping or Production" / "Proudly Made in the USA."
- **Primary CTA:** "Learn More / Contact Us" (single soft CTA).
- **Photography:** Single hero shot of an MJF-printed sample on dark workshop background — sets the warm-industrial palette token.
- **Vocabulary:** Multi Jet Fusion, filament deposition modeling, post-processing (dyeing, blast media), biologically safe interfaces, Foreign Trade Zone, 24/7 operation, US-based.
- **Why it matters:** Validates photography direction (warm workshop, not cleanroom) and the trust language ("Proudly Made in the USA," "25+ years additive experience") the v2 trust footer should echo.

---

## 2. Competitor / niche reference URLs

### https://www.fictiv.com/medical  *(closest niche peer)*
- **Headline structure:** "Accelerating Development & Scaling Production" with overline "Fictiv for Medical" — subhead naming diagnostic & surgical equipment, imaging instruments, pharma delivery systems.
- **CTA:** "Talk to Our Team" primary; "Get Instant Quote" in nav.
- **Photography:** Sterile B2B/SaaS — clean medical imagery, no workshop. Plenty of white space.
- **Vocabulary:** ISO 13485 manufacturing partners, FDA Class 1/2, 10x tighter tolerances (±0.0001 in), PEEK / PC-ISO / ULTEM / 17-4 PH SS, Prototype → EVT → DVT → PVT → Production, biocompatible, production-grade, low-volume manufacturing.
- **Why it matters:** Best reference for the "medtech dev lifecycle" vocabulary to add credibility to the HOW IT WORKS section (EVT/DVT/PVT) without violating Q10 forbidden. Models the "from prototype to production" arc that mirrors the WHY US pillar.

### https://www.protolabs.com/industries/medical/  *(enterprise heavyweight)*
- **Headline structure:** "Accelerating Medical Device Prototyping and Production" / "Get to market faster and streamline your supply chain…"
- **CTA:** "Upload a Part" + "Start Production Quote" + persistent "Get Instant Quote" header button.
- **Trust bar (under hero):** "ISO 9001:2015 | ISO 13485:2016 | ITAR."
- **Photography:** Clean isolated parts on white; light, polished, corporate.
- **Vocabulary:** rapid prototyping, low-volume production (no MOQ), on-demand production, CMM, FAI, DIR, PPAP, material certificates, REACH/RoHS, Prop 65, PEEK, PEI/Ultem, medical-grade silicone, MicroFine, microfluidics, EVT/DVT/PVT, applications list (handheld devices, surgical instruments, drill guides, bone models, prosthetics, microfluidics, wearables, cartridges).
- **Why it matters:** Sets the bar for the ISO 13485 / FDA trust block. Their "quality measures" module (CMM, FAI, CoC, etc.) is the gold standard the trust footer + WHY US pillar should gesture at — minus heavy compliance jargon that doesn't fit a startup/scale-up audience.

### https://www.xometry.com/medical-and-dental/  *(marketplace model)*
- **Headline structure:** "Manufacturing on Demand for the Medical Industry" / "Trusted by Over 86% of the Fortune 500 Medical Products and Equipment Companies."
- **CTA:** "Get an Instant Quote" + "Talk to Our Team."
- **Photography:** Stock medical imagery (clinician with imaging device, Galen Robotics surgical robot), enterprise-feeling, blue/white palette.
- **Vocabulary:** Massive Network Capacity (5,000 manufacturers, 49 states), Instant Quoting Engine, NDA agreements with the network, ISO 13485 / IATF / AS9100 / ITAR, CoCs, material & process lot traceability, ventilator parts, surgical planning models, low-volume high-precision runs, custom fixturing, PPE.
- **Why it matters:** Models the "NDA-ready" trust signal in a single phrase ("Strict NDA agreements with our network protect your privacy") and the applications-grid layout that maps to our materials-grid slot. Shows the language to repel objection #2 (NDA / IP).

### Note on Star Rapid
- WebFetch to https://www.starrapid.com/ failed (transport error). Dropped from final reference set — not blocking; coverage from Fictiv + Protolabs + Xometry + in-benchmark sites is sufficient for the T2 deliverable.

---

## 3. Terminology glossary

(One line per term, alphabetical. A non-engineer buyer should be able to parse each definition.)

- **3D Printing / Additive Manufacturing:** Building a part layer by layer from a digital file instead of cutting or molding it — faster for prototypes and low volumes than traditional methods.
- **3–7 business days:** Standard turnaround window from file acceptance to parts shipped for short-run and prototype jobs.
- **Bench testing:** In-lab functional and durability testing of a prototype on a workbench, before any human or animal trial.
- **Biocompatible (USP / ISO 10993 Class VI):** A material certified safe for contact with skin, tissue, or bodily fluids — required for anything that touches a patient.
- **CAD file (Computer-Aided Design):** The digital 3D model an engineer exports from SolidWorks, Fusion, Onshape, etc.
- **Clinical validation:** Testing the device in (or for) an actual clinical setting to confirm it works as intended for its medical use.
- **Design controls (FDA 21 CFR 820.30):** The documented, traceable process the FDA requires medical-device makers to follow when designing, verifying, and validating a product.
- **Design-for-Manufacturability (DFM):** Reviewing a CAD file before production to flag features that are hard to print, machine, or assemble — and proposing fixes.
- **Delamination:** When 3D-printed layers peel apart from each other — a key prototype failure mode we guard against with process and material choice.
- **End-use / production-intent:** A part designed to actually ship in a finished product, not just to look right in a demo.
- **Engineering-grade / production-grade:** Material and process strong enough for functional testing, regulatory submission, or pilot production — stronger than "looks-like" or display-only parts.
- **EVT / DVT / PVT:** Engineering / Design / Production Validation Testing — the three medtech prototype stages between "first article" and "ship to customer."
- **FDA (U.S. Food and Drug Administration):** The U.S. regulator that classifies (Class I, II, III) and clears medical devices before they can be sold.
- **FDM (Fused Deposition Modeling):** FFF-style 3D printing using a melted thermoplastic filament — best for early, low-cost, larger prototypes.
- **Functional prototype:** A working part you can actually test, fit, or iterate on — not just a display model.
- **HP MJF (Multi Jet Fusion):** HP's powder-bed nylon process that yields strong, accurate, near-isotropic parts — the workhorse for short-run medical devices.
- **ISO 13485:2016:** The international quality-management standard specifically for medical-device manufacturing — the trust badge medtech buyers ask for first.
- **Material selection:** Choosing the right resin, nylon, or elastomer for the part's mechanical, thermal, and biocompatibility requirements.
- **MOQ (Minimum Order Quantity):** The smallest batch a shop will run — at Adv3D we keep this low so early-stage teams aren't forced to buy 1,000 parts to test one.
- **NDA-ready:** Willing and able to sign a Non-Disclosure Agreement before you share any protected CAD, IP, or clinical files.
- **PA-12 nylon:** The default HP MJF material — strong, slightly flexible, and biocompatibility-capable for skin-contact devices.
- **Pilot production:** A short, controlled manufacturing run (tens to a few hundred parts) used to validate a design before full production.
- **Post-processing:** Everything that happens after a part comes off the printer — bead blasting, dyeing, polishing, machining critical interfaces, insert installation.
- **Prototype:** A physical part built to test, fit-check, or demo a design before committing to production tooling.
- **Quote in 24 hours:** Our promise to return a written, itemized quote within one business day of a complete file submission.
- **Short-run production:** A small batch run (typically 5–500 parts) that uses production-grade materials and processes without the cost of hard tooling.
- **SLA (Stereolithography):** Resin-based 3D printing that produces very smooth, high-resolution parts — ideal for fit-and-finish verification and small medical housings.
- **STL / STEP:** The two most common 3D file formats a manufacturer accepts. STL = mesh (for printing); STEP = solid model (for quoting, machining, inspection).
- **Tolerances:** How far a finished dimension is allowed to drift from the CAD number — e.g., ±0.005 in. Tighter tolerances mean higher cost and longer lead time.
- **TPU (Thermoplastic Polyurethane):** A flexible, rubber-like 3D-printable elastomer used for gaskets, wearables, and patient-contact cushioning.

---

## 4. Audience expectation notes

Visitors from **medical-device startups, inventor teams, and engineering groups** will scan this page in under 30 seconds looking for **four proof points in this order**:

1. **"Are they NDA-ready? — can I send my IP?"**
2. **"Are they US-based and ISO 13485 fluent?"**
3. **"Can they do my exact processes (HP MJF / SLA / FDM / TPU) and biocompatible materials?"**
4. **"Will they actually deliver a functional prototype in days, not weeks — and can I grow with them into pilot production?"**

A visible NDA callout (Fictiv / Xometry model), a trust bar with ISO 13485 + US-based under the hero (Protolabs model), a materials grid naming MJF / SLA / FDM / TPU and biocompatible, and a clear "quote in 24 hours, 3–7 business days" turnaround line satisfy all four.

### Top three objections (defuse explicitly, not in fine print)

- **(a) Tolerance / delamination** — call out process discipline and material selection in WHY US, not in fine-print spec.
- **(b) NDA / IP** — surface "NDA-ready" in the hero trust line AND in a short trust block, not buried in a footer.
- **(c) Scale with me to pilot** — make the prototype → pilot production arc obvious in both HOW IT WORKS and WHY US pillars ("Priced for Early Stage. Ready for Production.").

### Photography direction
Keep the warm-workshop, product-in-hand feel from opservices.advanc3dinc.com — **no cleanroom, no stock-clinician imagery, no aerospace / drone / maker cues.**

---

## 5. Q9 hero outcome (verbatim from brief)

> "After using Advanc3D, I finally have a functional prototype in my hands before my next investor meeting — and an NDA-ready partner I can iterate with through pilot production."

---

## 6. Q10 inversion lists (verbatim from brief)

### REQUIRED phrases
production-grade, engineering-grade, end-use, biocompatible, FDA, ISO 13485, design controls, pilot production, NDA-ready, medical device, prototype, functional prototype, CAD file, additive manufacturing, DFM, design-for-manufacturability, production-intent, material selection.

### FORBIDDEN phrases
industrial, aerospace, automotive, hobby, maker, drone, cosplay, Warhammer, mass production, tooling fees, contract manufacturer, production line, Tier 1.

---

## 7. Sources consulted

| URL | Used for | Status |
|---|---|---|
| https://opservices.advanc3dinc.com/ | Primary visual benchmark | Fetched |
| https://advanc3dinc.com/ | Parent brand / photography direction | Fetched |
| https://www.fictiv.com/medical | Closest niche peer — vocabulary + EVT/DVT/PVT | Fetched |
| https://www.protolabs.com/industries/medical/ | Trust-bar / ISO 13485 reference | Fetched |
| https://www.xometry.com/medical-and-dental/ | NDA-ready phrasing / applications grid | Fetched |
| https://www.xometry.com/ | Marketplace homepage | Fetched |
| https://www.starrapid.com/ | Dropped — transport error | Failed |

**Glossary cross-checked against brief.md Q7 vocabulary** — all 26 terms in Q7 appear in §3 (some are rolled into longer entries like "Engineering-grade / production-grade" for readability).

---

## 8. Open questions for downstream workers

- T3/T4 (copywriter + design) should pick **one** of the trust-bar patterns: Protolabs-style ISO 13485 + US-based line under the hero, OR Xometry-style "NDA-ready" callout in the hero trust line. Don't try to do both in the same slot.
- T6 (coder) should keep `next.config.js` `images.remotePatterns` empty for project images — all 12 slots in `research/VALIDATED_IMAGES.md` are local files.
- T4 (design) — confirm the warm-workshop palette token before committing. Opservices.advanc3dinc.com is the visual anchor; Xometry's blue/white palette should be rejected.