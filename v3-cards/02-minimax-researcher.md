```runner_contract
role: minimax-researcher
delegate_required: true
primary_mode: cli
agent_tool: opencode
agent: researcher
primary_runner: mcp-opencode_runner
allowed_fallbacks: [mcp]
max_status_polls: 3
artifact_root: /home/codex/hermes-orchestrator/<board-slug>/
verification_mode: filesystem+web
required_completion_metadata: [runner_used, poll_count, fallback_used, artifacts, acceptance_criteria_result, evidence_paths]
```

You are running the **references + image manifest verification** stage for the Adv3D Product Development & Prototyping Funnel build.

**READ FIRST:**
1. `/opt/data/builds/adv3d-product-dev-funnel/brief.md`
2. `/opt/data/skills/devops/autonomous-build-workflow/SKILL.md`

**Workspace:** `~/hermes-orchestrator/<board-slug>/`

**Inputs pre-staged by the orchestrator:**
- `brief.md`
- `research/VALIDATED_IMAGES.md`
- `research/images/` with the validated JPEG set and logo

**Hard rule:** do not redo image sourcing, reslot images, run bulk visual review, or download replacement assets unless one of the required files is actually missing or zero bytes. The orchestrator preflight is authoritative for this card.

**Delegation rule:** launch the `opencode` researcher agent first. Preferred
path: SSH to `codex@192.168.200.70`, enter
`/home/codex/hermes-orchestrator/<board-slug>/`, and run
`opencode run --agent researcher ...` so the agent writes the research output.
Fallback only if CLI launch is unavailable: `mcp-opencode_runner` with max 3
polls. Do not hand-author the deliverable yourself in a raw terminal/SSH
session.

**Bounded verification only:**
- Run short `test`, `find`, `stat`, `wc`, or `head` commands only.
- Do not run a shell command expected to take more than 10 seconds.
- Do not cat secret files.
- If the pre-staged manifest or image set is missing, `kanban_block` with a concise missing-path list.

**Outputs to produce:**
1. `research/REFERENCES.md` with 3-5 competitor/reference URLs, screenshot descriptions if available, terminology glossary, and audience expectation notes.
2. Confirm `research/VALIDATED_IMAGES.md` exists and references the current image set.
3. Treat `image_mode=real_images_required` as the default unless `brief.md`
   explicitly opts into placeholders.

**Acceptance:**
- `research/REFERENCES.md` exists and is non-empty.
- `research/VALIDATED_IMAGES.md` exists and is non-empty.
- `research/images/logo.jpg` exists and is non-empty.
- `research/images/` contains at least 10 non-empty `.jpg` files.

**Completion metadata required:**
Call `kanban_complete` with metadata shaped like:

```json
{
  "schema_version": "1.1",
  "runner_used": "cli:opencode",
  "poll_count": 0,
  "fallback_used": false,
  "artifacts": [
    "research/REFERENCES.md",
    "research/VALIDATED_IMAGES.md",
    "research/images/logo.jpg"
  ],
  "checks_run": [
    {
      "name": "research_artifacts_present",
      "command": "test -s research/REFERENCES.md && test -s research/VALIDATED_IMAGES.md && test -s research/images/logo.jpg && test $(find research/images -maxdepth 1 -type f -name '*.jpg' -size +0c | wc -l) -ge 10",
      "status": "passed"
    }
  ],
  "acceptance_criteria_result": "passed",
  "evidence_paths": [
    "research/REFERENCES.md",
    "research/VALIDATED_IMAGES.md"
  ],
  "remaining_risks": []
}
```

```yaml
card_contract:
  schema_version: "1.1"
  max_retries: 2
  output_artifacts:
    - path: "research/REFERENCES.md"
      required: true
    - path: "research/VALIDATED_IMAGES.md"
      required: true
    - path: "research/images/logo.jpg"
      required: true
  validation_commands:
    - name: "research_artifacts_present"
      command: "test -s research/REFERENCES.md && test -s research/VALIDATED_IMAGES.md && test -s research/images/logo.jpg && test $(find research/images -maxdepth 1 -type f -name '*.jpg' -size +0c | wc -l) -ge 10"
  hard_block_conditions:
    - "Pre-staged manifest or required image set is missing."
  scope_change_protocol:
    action: "block with missing paths; do not re-source assets unless explicitly asked"
```

**Completion rule (read before calling kanban_complete):**
- Prefer `kanban_complete_contract` over raw `kanban_complete`. Pass the same summary/evidence fields shown above; the helper promotes them into metadata and infers required contract artifacts when those files already exist on disk.
- For this delegated authoring card, `runner_used` must be one of
  `cli:opencode`, `mcp:opencode_runner`. `orchestrator-direct` is invalid.
- If a direct write/edit tool just confirmed the exact artifact path and a redundant bounded `ls -la` is denied by the safety guard, do not block on that denial. Call `kanban_complete_contract`; it re-validates the files on disk during completion.
- `metadata.artifacts` and `metadata.evidence_paths` must be a JSON **list of existing file paths**. Never a directory, never a string, never a dict. If you produced a folder of files, point at a file inside it (e.g. an `INDEX.md`), not the folder.
- Copy the "Completion metadata required" block above **verbatim**; fill in real values; do not invent extra required keys.
- If `kanban_complete` returns an error, READ the error text and fix exactly what it names (e.g. a missing file, a directory artifact, a missing field). Do NOT resubmit the identical metadata — an unchanged retry will fail the same way and burn your turn budget.
- If a required artifact does not actually exist on disk yet, create it (or drop it from the list) before completing — do not claim files you did not write.
