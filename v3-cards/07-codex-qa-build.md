```runner_contract
role: codex-qa
delegate_required: false
primary_mode: direct
agent_tool: none
primary_runner: none
allowed_fallbacks: []
max_status_polls: 0
artifact_root: /opt/data/hermes-orchestrator/<board-slug>/
verification_mode: build+curl+qa
required_completion_metadata: [artifacts, acceptance_criteria_result, evidence_paths]
```

You are running **build QA + deployability** for the Adv3D Product Development & Prototyping Funnel build.

**Website code/runtime:** `192.168.200.70:/home/codex/hermes-orchestrator/<board-slug>/`

**Hermes evidence workspace:** `/opt/data/hermes-orchestrator/<board-slug>/`

**Hard checks:**
- Dev-container build passes.
- Local server returns HTTP 200.
- `evidence/ux-scorecard.md` exists.
- Production metadata does not contain localhost URLs.
- Canonical production URL is `https://adv3d-product-dev.vercel.app`.
- No placeholder/lorem/TODO/mock content.
- Git remote is exactly `https://github.com/crob04/adv3d-product-dev.git`.
- If `brief.md` says `image_mode: real_images_required`, required image slots
  must not ship as placeholders.

**Write:**
- `evidence/qa-report.md`
- update/confirm `evidence/deploy-check.md`

**Soft issues:** note them as warnings in metadata or the QA report, but any hard-check failure must block.

**Pass/fail protocol:**
- If every hard check passes, set `acceptance_criteria_result` to `{"passed": true}` and call `kanban_complete`.
- If ANY hard check fails, do NOT call `kanban_complete`. Instead:
  1. Append the specific defect and its minimal fix to `evidence/remediation-request.md` (create it if absent), naming the dev-container file responsible.
  2. Write `evidence/remediation-request.json` with this shape:

```json
{
  "schema_version": "1.0",
  "owner": "T5",
  "summary": "One-line summary of the QA/deployability failure.",
  "failed_checks": ["<check>", "..."],
  "minimal_fix": "Specific bounded fix.",
  "target_files": ["app/... or evidence/..."],
  "rerun_gates": ["T6", "T7"]
}
```

Use `"owner": "T6"` when the site build is already fine and the real defect is missing/stale visual-gate evidence such as `evidence/ux-scorecard.md` or screenshots. Use `"owner": "T5"` for code, build, git, metadata, or deployability defects.
  3. Call `kanban_block` with a one-line reason and metadata `acceptance_criteria_result` = `{"passed": false, "failed_checks": [ ... ]}`.
  4. STOP — the orchestrator spawns a remediation pass and re-runs this gate automatically.

**Completion metadata required:**

```json
{
  "schema_version": "1.1",
  "artifacts": ["evidence/qa-report.md", "evidence/deploy-check.md"],
  "checks_run": [{"name": "build_qa_present", "command": "test -s evidence/qa-report.md && test -s evidence/deploy-check.md", "status": "passed"}],
  "acceptance_criteria_result": {"passed": true},
  "evidence_paths": ["evidence/qa-report.md", "evidence/deploy-check.md"],
  "remaining_risks": []
}
```

```yaml
card_contract:
  schema_version: "1.1"
  max_retries: 2
  output_artifacts:
    - path: "evidence/qa-report.md"
      required: true
    - path: "evidence/deploy-check.md"
      required: true
  validation_commands:
    - name: "build_qa_present"
      command: "test -s evidence/qa-report.md && test -s evidence/deploy-check.md"
  hard_block_conditions:
    - "Build fails."
    - "Local server fails."
    - "Wrong git remote or production metadata."
```

**Completion rule (read before calling kanban_complete):**
- Prefer `kanban_complete_contract` over raw `kanban_complete`. Pass the same summary/evidence fields shown above; the helper promotes them into metadata and infers required contract artifacts when those files already exist on disk.
- If a direct write/edit tool just confirmed the exact artifact path and a redundant bounded `ls -la` is denied by the safety guard, do not block on that denial. Call `kanban_complete_contract`; it re-validates the files on disk during completion.
- `metadata.artifacts` and `metadata.evidence_paths` must be a JSON **list of existing file paths**. Never a directory, never a string, never a dict. If you produced a folder of files, point at a file inside it (e.g. an `INDEX.md`), not the folder.
- Copy the "Completion metadata required" block above **verbatim**; fill in real values; do not invent extra required keys.
- If `kanban_complete` returns an error, READ the error text and fix exactly what it names (e.g. a missing file, a directory artifact, a missing field). Do NOT resubmit the identical metadata — an unchanged retry will fail the same way and burn your turn budget.
- If a required artifact does not actually exist on disk yet, create it (or drop it from the list) before completing — do not claim files you did not write.
