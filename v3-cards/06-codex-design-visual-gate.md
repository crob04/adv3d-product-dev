```runner_contract
role: codex-design
delegate_required: false
primary_mode: direct
agent_tool: none
primary_runner: none
allowed_fallbacks: []
max_status_polls: 0
artifact_root: /opt/data/hermes-orchestrator/<board-slug>/
verification_mode: browser+screenshots
required_completion_metadata: [artifacts, acceptance_criteria_result, evidence_paths]
```

You are running the **visual gate** for the Adv3D Product Development & Prototyping Funnel build.

**Website source/runtime lives on dev container:** `192.168.200.70:/home/codex/hermes-orchestrator/<board-slug>/`

**Hermes workspace for specs/evidence:** `/opt/data/hermes-orchestrator/<board-slug>/`

**Read first:**
- Hermes `VISUAL_SPEC.md`
- Hermes `COPY_BRIEF.md`
- Hermes `evidence/build-report.md`

**Procedure:**
- Start or verify the dev-container local server for the built site.
- Inspect the dev server first, not public Vercel.
- Capture screenshots at mobile (390px), tablet (768px), desktop (1440x900), and wide desktop (1920x1080).
- Save screenshots under Hermes `evidence/screenshots/` and write a `evidence/screenshots/INDEX.md` that lists every screenshot file you saved.
- Write `evidence/ux-scorecard.md` scoring polish, spacing, hierarchy, typography, mobile, image credibility, CTA clarity, trust, and consistency with the sibling Advanc3D site. End it with a line `Verdict: PASS` or `Verdict: FAIL`.

**Hard checks — MEASURE these, do not eyeball:**
- Both hero CTAs ("Book a Discovery Call" and "Upload Your Project Files") are fully visible and NOT clipped at 1440x900 AND 1920x1080.
- The hero H1 does not overlap or push the CTA buttons off-screen.
- No element overflows the viewport horizontally at 390px mobile.
- If `brief.md` says `image_mode: real_images_required`, required image slots
  must render real staged assets rather than placeholder blocks.

**If ALL hard checks pass:**
1. Set `acceptance_criteria_result` to `{"passed": true}`.
2. Call `kanban_complete` with the metadata below.

**If ANY hard check FAILS — do NOT call kanban_complete:**
1. Write `evidence/remediation-request.md` containing, precisely:
   - Each failing check.
   - The dev-container file (and class/line if known) responsible, e.g. `app/components/Hero.tsx`.
   - The specific minimal fix, e.g. "change hero H1 class `lg:text-7xl` to `lg:text-6xl`".
2. Write `evidence/remediation-request.json` with this shape:

```json
{
  "schema_version": "1.0",
  "owner": "T5",
  "summary": "One-line summary of the visual failure.",
  "failed_checks": ["<check>", "..."],
  "minimal_fix": "Specific bounded code/content fix.",
  "target_files": ["app/components/Hero.tsx"],
  "rerun_gates": ["T6", "T7"]
}
```

Use `"owner": "T6"` only when the site is already visually correct and the real defect is missing or stale visual evidence that T6 itself must refresh.
3. Call `kanban_block` with a one-line reason summarizing the failure and include metadata `acceptance_criteria_result` = `{"passed": false, "failed_checks": ["<check>", ...]}`.
4. STOP. The orchestrator will spawn a bounded remediation pass and re-run this gate automatically — do not attempt to fix the site yourself.

**Completion metadata required (pass case only):**

```json
{
  "schema_version": "1.1",
  "artifacts": ["evidence/ux-scorecard.md", "evidence/screenshots/INDEX.md"],
  "checks_run": [{"name": "ux_scorecard_present", "command": "test -s evidence/ux-scorecard.md", "status": "passed"}],
  "acceptance_criteria_result": {"passed": true},
  "evidence_paths": ["evidence/ux-scorecard.md", "evidence/screenshots/INDEX.md"],
  "remaining_risks": []
}
```

```yaml
card_contract:
  schema_version: "1.1"
  max_retries: 2
  output_artifacts:
    - path: "evidence/ux-scorecard.md"
      required: true
    - path: "evidence/screenshots/INDEX.md"
      required: true
  validation_commands:
    - name: "ux_scorecard_present"
      command: "test -s evidence/ux-scorecard.md"
  hard_block_conditions:
    - "Dev server cannot serve the current build."
    - "Critical visual or mobile failure."
```

**Completion rule (read before calling kanban_complete):**
- Prefer `kanban_complete_contract` over raw `kanban_complete`. Pass the same summary/evidence fields shown above; the helper promotes them into metadata and infers required contract artifacts when those files already exist on disk.
- If a direct write/edit tool just confirmed the exact artifact path and a redundant bounded `ls -la` is denied by the safety guard, do not block on that denial. Call `kanban_complete_contract`; it re-validates the files on disk during completion.
- `metadata.artifacts` and `metadata.evidence_paths` must be a JSON **list of existing file paths**. Never a directory, never a string, never a dict. If you produced a folder of files, point at a file inside it (e.g. an `INDEX.md`), not the folder.
- Copy the "Completion metadata required" block above **verbatim**; fill in real values; do not invent extra required keys.
- If `kanban_complete` returns an error, READ the error text and fix exactly what it names (e.g. a missing file, a directory artifact, a missing field). Do NOT resubmit the identical metadata — an unchanged retry will fail the same way and burn your turn budget.
- If a required artifact does not actually exist on disk yet, create it (or drop it from the list) before completing — do not claim files you did not write.
