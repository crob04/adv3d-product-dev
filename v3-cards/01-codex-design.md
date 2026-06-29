```runner_contract
role: codex-design
delegate_required: true
primary_mode: cli
agent_tool: codex
primary_runner: mcp-codex_runner
allowed_fallbacks: [mcp]
max_status_polls: 3
artifact_root: /home/codex/hermes-orchestrator/<board-slug>/
verification_mode: filesystem+browser
required_completion_metadata: [runner_used, poll_count, fallback_used, artifacts, acceptance_criteria_result, evidence_paths]
```

You are running **brand direction + visual spec** for the Adv3D Product Development & Prototyping Funnel build.

**Workspace:** `/opt/data/hermes-orchestrator/<board-slug>/`

**Read first:**
- `brief.md`
- `research/VALIDATED_IMAGES.md`
- `research/MANIFEST.json` if present
- `/opt/data/skills/devops/autonomous-build-workflow/SKILL.md`

**Hard rules:**
- Use the local Hermes workspace as the source of truth for design/spec artifacts.
- Do not probe `/home/codex`, `/workspace`, or broad filesystem roots.
- Delegate design-spec authoring to the `codex` agent CLI first. Preferred path:
  SSH to `codex@192.168.200.70`, enter `/home/codex/hermes-orchestrator/<board-slug>/`,
  and launch `codex exec ...` so the agent writes the deliverable.
- Fallback only if CLI launch is unavailable: `mcp-codex_runner` with max 3
  polls.
- You MUST NOT hand-author the deliverable yourself in a raw terminal/SSH
  session.
- Do not write website app source here. This card writes design planning artifacts only.
- Run bounded checks only.
- The current `image_mode` is `real_images_required` unless `brief.md` explicitly
  says otherwise. All image references must resolve to local `research/images/`.

**Outputs required:**
1. `BRAND_DIRECTION.md` — advisory context: tone, audience vocabulary, brand differentiators, use-cases, photography direction.
2. `VISUAL_SPEC.md` — binding implementation contract for T5/T6/T7.

**Locked spec:**
- 5 sections in exact order: HERO → BOTTLENECK/PROBLEM → WHY US → PROCESS → FINAL CTA.
- Solid accent buttons only; no gradients.
- Asymmetric grids; no generic 3-column symmetry.
- Dark mode toggle required; WCAG AA contrast in both modes.
- No icons in colored circles.
- Card borders use alpha-blended neutrals.
- Section padding varies by section.
- All images reference local `research/images/<slot>.jpg`; no hotlinks.

**Completion metadata required:**

```json
{
  "schema_version": "1.1",
  "runner_used": "cli:codex",
  "poll_count": 0,
  "fallback_used": false,
  "artifacts": ["BRAND_DIRECTION.md", "VISUAL_SPEC.md"],
  "checks_run": [{"name": "design_artifacts_present", "command": "test -s BRAND_DIRECTION.md && test -s VISUAL_SPEC.md", "status": "passed"}],
  "acceptance_criteria_result": "passed",
  "evidence_paths": ["BRAND_DIRECTION.md", "VISUAL_SPEC.md"],
  "remaining_risks": []
}
```

```yaml
card_contract:
  schema_version: "1.1"
  max_retries: 2
  output_artifacts:
    - path: "BRAND_DIRECTION.md"
      required: true
    - path: "VISUAL_SPEC.md"
      required: true
  validation_commands:
    - name: "design_artifacts_present"
      command: "test -s BRAND_DIRECTION.md && test -s VISUAL_SPEC.md"
  hard_block_conditions:
    - "brief.md or image manifest missing."
```

**Completion rule (read before calling kanban_complete):**
- Prefer `kanban_complete_contract` over raw `kanban_complete`. Pass the same summary/evidence fields shown above; the helper promotes them into metadata and infers required contract artifacts when those files already exist on disk.
- For this delegated authoring card, `runner_used` must be one of `cli:codex`,
  `mcp:codex_runner`. `orchestrator-direct` is invalid.
- If a direct write/edit tool just confirmed the exact artifact path and a redundant bounded `ls -la` is denied by the safety guard, do not block on that denial. Call `kanban_complete_contract`; it re-validates the files on disk during completion.
- `metadata.artifacts` and `metadata.evidence_paths` must be a JSON **list of existing file paths**. Never a directory, never a string, never a dict. If you produced a folder of files, point at a file inside it (e.g. an `INDEX.md`), not the folder.
- Copy the "Completion metadata required" block above **verbatim**; fill in real values; do not invent extra required keys.
- If `kanban_complete` returns an error, READ the error text and fix exactly what it names (e.g. a missing file, a directory artifact, a missing field). Do NOT resubmit the identical metadata — an unchanged retry will fail the same way and burn your turn budget.
- If a required artifact does not actually exist on disk yet, create it (or drop it from the list) before completing — do not claim files you did not write.
