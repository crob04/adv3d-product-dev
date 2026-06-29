```runner_contract
role: codex-copywriter
delegate_required: true
primary_mode: cli
agent_tool: codex
primary_runner: mcp-codex_runner
allowed_fallbacks: [mcp]
max_status_polls: 3
artifact_root: /home/codex/hermes-orchestrator/<board-slug>/
verification_mode: filesystem
required_completion_metadata: [runner_used, poll_count, fallback_used, artifacts, acceptance_criteria_result, evidence_paths]
```

You are running the **copywriting** stage for the Adv3D Product Development & Prototyping Funnel build.

**READ FIRST from the local worker workspace, not the dev-server wrapper:**
1. `brief.md`
2. `SOURCE_COPY.md`
3. `BRAND_DIRECTION.md`
4. `VISUAL_SPEC.md`
5. `research/REFERENCES.md`
6. `research/VALIDATED_IMAGES.md`

**Workspace:** `/opt/data/hermes-orchestrator/<board-slug>/`

**Hard rules:**
- Use the local `/opt/data/hermes-orchestrator/<board-slug>/` workspace as source of truth.
- Do not probe `/home/codex`, `/workspace`, or broad filesystem roots.
- Do not call MCP wrapper tools for read-only discovery; the required files are already local.
- `SOURCE_COPY.md` is pre-staged into both the Hermes and dev-container board
  workspaces. Do not rediscover the source copy from `/opt/data/builds/`,
  `/home/codex/builds`, or any sibling directory.
- Delegate copy authoring to the `codex` agent CLI first using the exact keyed
  route below. Do not improvise SSH discovery, inspect random SSH configs, or
  try alternate auth paths before the approved key path.
- Fallback only if CLI launch is unavailable: `mcp-codex_runner` with max 3
  polls.
- Do not hand-author the deliverable yourself in a raw terminal/SSH session.
- Run only bounded checks that complete in under 10 seconds.
- If a required input is missing, `kanban_block` with the exact missing path list.

**Exact CLI delegation contract for this card:**
1. Verify the known-good keyed path first, with no substitutions:

```bash
test -r /opt/data/ssh/codex_devcontainer_openssh
ssh -i /opt/data/ssh/codex_devcontainer_openssh \
  -o BatchMode=yes \
  -o StrictHostKeyChecking=accept-new \
  -o UserKnownHostsFile=/dev/null \
  codex@192.168.200.70 \
  'cd ~/hermes-orchestrator/<board-slug>/ && command -v codex >/dev/null && test -s brief.md && test -s SOURCE_COPY.md && test -s BRAND_DIRECTION.md && test -s VISUAL_SPEC.md && test -s research/REFERENCES.md && test -s research/VALIDATED_IMAGES.md'
```

2. Write the full copywriter prompt locally to `.codex-t3-prompt.txt` in the
   Hermes board workspace. Prompt files are allowed; the website deliverable is
   not.
3. Copy that prompt to the dev container using the same key:

```bash
scp -i /opt/data/ssh/codex_devcontainer_openssh \
  -o StrictHostKeyChecking=accept-new \
  -o UserKnownHostsFile=/dev/null \
  .codex-t3-prompt.txt \
  codex@192.168.200.70:/tmp/codex-t3-prompt.txt
```

4. Launch the delegated writer using this exact command pattern:

```bash
ssh -i /opt/data/ssh/codex_devcontainer_openssh \
  -o BatchMode=yes \
  -o StrictHostKeyChecking=accept-new \
  -o UserKnownHostsFile=/dev/null \
  codex@192.168.200.70 \
  'cd ~/hermes-orchestrator/<board-slug>/ && codex exec --full-auto "$(cat /tmp/codex-t3-prompt.txt)"'
```

5. If steps 1-4 succeed, do not run any other SSH command, do not inspect
   `/root/.ssh`, `~/.ssh`, or `/opt/data/.ssh`, and do not switch to MCP.
6. Only if one of the exact commands above fails with a non-zero exit code may
   you use `mcp-codex_runner` as bounded fallback. Record the failing command
   and stderr in `fallback_reason`.

**Output:** `COPY_BRIEF.md` — section-by-section copy spec for all 5 sections.

**Copy rules:**
- Source copy verbatim unless it violates the brief.
- Voice: founder-to-founder technical credibility.
- Hero headline must be outcome-first, preferably: "From CAD File to Functional Prototype — Without the 6-Week Wait."
- Q10 inversion terms such as production-grade, biocompatible, FDA, ISO 13485, design controls, pilot production, NDA-ready, CAD file, DFM, quote in 24 hours, and functional prototype must appear naturally.
- Forbidden positioning: industrial, aerospace, automotive, hobby, maker, drone, cosplay, Warhammer, mass production, tooling fees, contract manufacturer, production line, Tier 1.
- CTA copy: "Book a Discovery Call" and "Upload Your Project Files → Get a Quote in 24 Hours".
- Avoid generic SaaS phrasing.
- `image_mode` defaults to `real_images_required`; copy must not imply
  placeholders are acceptable unless `brief.md` explicitly says
  `placeholders_allowed`.

**Acceptance:**
- `COPY_BRIEF.md` exists and is non-empty.
- All 5 sections are covered.
- Required inversion terms appear at least 5 times total.
- Forbidden-positioning grep returns 0, except inside an explicit "forbidden words audit" section if you include one.

**Completion metadata required:**
Call `kanban_complete` with metadata shaped like:

```json
{
  "schema_version": "1.1",
  "runner_used": "cli:codex",
  "poll_count": 0,
  "fallback_used": false,
  "artifacts": ["COPY_BRIEF.md"],
  "checks_run": [
    {
      "name": "copy_brief_present",
      "command": "test -s COPY_BRIEF.md",
      "status": "passed"
    }
  ],
  "acceptance_criteria_result": "passed",
  "evidence_paths": ["COPY_BRIEF.md"],
  "remaining_risks": []
}
```

```yaml
card_contract:
  schema_version: "1.1"
  max_retries: 2
  output_artifacts:
    - path: "COPY_BRIEF.md"
      required: true
  validation_commands:
    - name: "copy_brief_present"
      command: "test -s COPY_BRIEF.md"
  hard_block_conditions:
    - "Missing brief.md, SOURCE_COPY.md, BRAND_DIRECTION.md, VISUAL_SPEC.md, or research inputs."
  scope_change_protocol:
    action: "block with missing paths; do not invent missing source copy"
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
