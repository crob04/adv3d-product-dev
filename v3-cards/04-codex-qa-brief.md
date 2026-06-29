```runner_contract
role: codex-qa
delegate_required: false
primary_mode: direct
agent_tool: none
primary_runner: none
allowed_fallbacks: []
max_status_polls: 0
artifact_root: /opt/data/hermes-orchestrator/<board-slug>/
verification_mode: filesystem
required_completion_metadata: [artifacts, acceptance_criteria_result, evidence_paths]
```

You are running **brief QA** for the Adv3D Product Development & Prototyping Funnel build.

**Workspace:** `/opt/data/hermes-orchestrator/<board-slug>/`

**Read first:**
- `brief.md`
- `COPY_BRIEF.md`
- `BRAND_DIRECTION.md`
- `VISUAL_SPEC.md`
- `research/REFERENCES.md`

**Hard rules:**
- Use local `/opt/data/hermes-orchestrator/<board-slug>/` files as source of truth.
- Do not probe `/home/codex`, `/workspace`, or broad filesystem roots.
- Only hard failures block. Soft issues go into `warnings` metadata.
- Run bounded checks only.
- The current `image_mode=real_images_required` unless `brief.md` explicitly
  says otherwise; flag any contradictory upstream artifact.

**Write:** `evidence/qa-report-brief.md`

**Hard checks:**
- `COPY_BRIEF.md`, `BRAND_DIRECTION.md`, and `VISUAL_SPEC.md` are non-empty.
- `COPY_BRIEF.md` covers all 5 required page sections.
- Hero copy is an actual headline, not a direction note.
- Required CTA copy appears.
- At least 5 Q10 inversion terms appear naturally.
- No forbidden positioning appears as live copy.

**Completion metadata required:**

```json
{
  "schema_version": "1.1",
  "artifacts": ["evidence/qa-report-brief.md"],
  "checks_run": [{"name": "brief_qa_report_present", "command": "test -s evidence/qa-report-brief.md", "status": "passed"}],
  "acceptance_criteria_result": "passed",
  "evidence_paths": ["evidence/qa-report-brief.md"],
  "remaining_risks": []
}
```

```yaml
card_contract:
  schema_version: "1.1"
  max_retries: 2
  output_artifacts:
    - path: "evidence/qa-report-brief.md"
      required: true
  validation_commands:
    - name: "brief_qa_report_present"
      command: "test -s evidence/qa-report-brief.md"
  hard_block_conditions:
    - "Missing COPY_BRIEF.md, BRAND_DIRECTION.md, or VISUAL_SPEC.md."
```

**Completion rule (read before calling kanban_complete):**
- Prefer `kanban_complete_contract` over raw `kanban_complete`. Pass the same summary/evidence fields shown above; the helper promotes them into metadata and infers required contract artifacts when those files already exist on disk.
- If a direct write/edit tool just confirmed the exact artifact path and a redundant bounded `ls -la` is denied by the safety guard, do not block on that denial. Call `kanban_complete_contract`; it re-validates the files on disk during completion.
- `metadata.artifacts` and `metadata.evidence_paths` must be a JSON **list of existing file paths**. Never a directory, never a string, never a dict. If you produced a folder of files, point at a file inside it (e.g. an `INDEX.md`), not the folder.
- Copy the "Completion metadata required" block above **verbatim**; fill in real values; do not invent extra required keys.
- If `kanban_complete` returns an error, READ the error text and fix exactly what it names (e.g. a missing file, a directory artifact, a missing field). Do NOT resubmit the identical metadata — an unchanged retry will fail the same way and burn your turn budget.
- If a required artifact does not actually exist on disk yet, create it (or drop it from the list) before completing — do not claim files you did not write.
