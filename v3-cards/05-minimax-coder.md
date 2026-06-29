```runner_contract
role: minimax-coder
delegate_required: true
primary_mode: cli
agent_tool: opencode
agent: coder
primary_runner: mcp-opencode_runner
allowed_fallbacks: [mcp]
max_status_polls: 3
artifact_root: /home/codex/hermes-orchestrator/<board-slug>/
verification_mode: build+curl
required_completion_metadata: [runner_used, poll_count, fallback_used, artifacts, acceptance_criteria_result, evidence_paths]
```

You are running the **frontend implementation** stage for the Adv3D Product Development & Prototyping Funnel build.

**Critical boundary:** write website application source code only on the dev container at `192.168.200.70`, under:

`/home/codex/hermes-orchestrator/<board-slug>/`

Hermes `/opt/data/hermes-orchestrator/<board-slug>/` is for specs, copied assets, and evidence only. Do not create `package.json`, `app/`, `src/`, `pages/`, or framework source files inside Hermes.

**Read first from Hermes:**
- `/opt/data/hermes-orchestrator/<board-slug>/brief.md`
- `/opt/data/hermes-orchestrator/<board-slug>/COPY_BRIEF.md`
- `/opt/data/hermes-orchestrator/<board-slug>/BRAND_DIRECTION.md`
- `/opt/data/hermes-orchestrator/<board-slug>/VISUAL_SPEC.md`
- `/opt/data/hermes-orchestrator/<board-slug>/research/VALIDATED_IMAGES.md`
- `/opt/data/hermes-orchestrator/<board-slug>/evidence/qa-report-brief.md`

**Dev-server workflow:**
- SSH to `codex@192.168.200.70` with `/opt/data/ssh/codex_devcontainer_openssh`.
- Use `/home/codex/hermes-orchestrator/<board-slug>/` as the repo/worktree.
- Copy needed specs/assets from Hermes to the dev container if missing.
- Delegate implementation to the `opencode` `coder` agent first using the
  exact keyed route below. Do not improvise SSH discovery or alternate auth
  paths before the approved key path.
- Fallback only if CLI launch is unavailable: `mcp-opencode_runner` with max 3
  polls.
- You MUST NOT hand-author the application source yourself in a raw
  terminal/SSH session.
- Build the website there using the existing approved template/repo process.
- Push to `https://github.com/crob04/adv3d-product-dev.git`; do not create version-suffix repos.
- Run build and local HTTP check on the dev container.
- Treat `image_mode=real_images_required` as the default unless `brief.md`
  explicitly says `placeholders_allowed`. Required slots must use the staged
  real assets, not placeholder `<div>` blocks.

**Exact CLI delegation contract for this card:**
1. Verify the known-good keyed path first, with no substitutions:

```bash
test -r /opt/data/ssh/codex_devcontainer_openssh
ssh -i /opt/data/ssh/codex_devcontainer_openssh \
  -o BatchMode=yes \
  -o StrictHostKeyChecking=accept-new \
  -o UserKnownHostsFile=/dev/null \
  codex@192.168.200.70 \
  'cd ~/hermes-orchestrator/<board-slug>/ && command -v opencode >/dev/null && test -s brief.md && test -s COPY_BRIEF.md && test -s BRAND_DIRECTION.md && test -s VISUAL_SPEC.md && test -s research/VALIDATED_IMAGES.md'
```

2. Write the full build prompt locally to `.opencode-t5-prompt.md` in the
   Hermes board workspace.
3. Copy that prompt into the dev-container board workspace using the same key:

```bash
scp -i /opt/data/ssh/codex_devcontainer_openssh \
  -o StrictHostKeyChecking=accept-new \
  -o UserKnownHostsFile=/dev/null \
  .opencode-t5-prompt.md \
  codex@192.168.200.70:/home/codex/hermes-orchestrator/<board-slug>/.opencode-t5-prompt.md
```

4. Launch the delegated coder using this exact command pattern:

```bash
ssh -i /opt/data/ssh/codex_devcontainer_openssh \
  -o BatchMode=yes \
  -o StrictHostKeyChecking=accept-new \
  -o UserKnownHostsFile=/dev/null \
  codex@192.168.200.70 \
  'cd ~/hermes-orchestrator/<board-slug>/ && PROMPT=$(cat .opencode-t5-prompt.md) && opencode run --agent coder --format default --title "T5 site build" "$PROMPT" 2>&1 | tee .opencode-t5-output.txt'
```

5. If steps 1-4 succeed, do not run any other SSH command, do not inspect
   `/root/.ssh`, `~/.ssh`, or `/opt/data/.ssh`, and do not switch to MCP.
6. Only if one of the exact commands above fails with a non-zero exit code may
   you use `mcp-opencode_runner` as bounded fallback. Record the failing
   command and stderr in `fallback_reason`.

**Required evidence written back to Hermes:**
- `evidence/build-report.md`
- `evidence/deploy-check.md`
- `evidence/git-commit.txt`

**Checkpoint discipline (avoid running out of turns):**
- As soon as the site builds cleanly the FIRST time, immediately commit, push, and write `evidence/git-commit.txt` — before any polish iteration.
- After each subsequent change, re-commit and re-push. Never leave finished work uncommitted while you continue refining.
- Write `evidence/build-report.md` and `evidence/deploy-check.md` as soon as the first successful build + local HTTP check exist, then update them.

**Completion metadata required:**

```json
{
  "schema_version": "1.1",
  "runner_used": "cli:opencode",
  "poll_count": 0,
  "fallback_used": false,
  "artifacts": ["evidence/build-report.md", "evidence/deploy-check.md", "evidence/git-commit.txt"],
  "checks_run": [{"name": "dev_build_passed", "command": "test -s evidence/build-report.md && test -s evidence/deploy-check.md", "status": "passed"}],
  "acceptance_criteria_result": "passed",
  "evidence_paths": ["evidence/build-report.md", "evidence/deploy-check.md", "evidence/git-commit.txt"],
  "remaining_risks": []
}
```

```yaml
card_contract:
  schema_version: "1.1"
  max_retries: 2
  output_artifacts:
    - path: "evidence/build-report.md"
      required: true
    - path: "evidence/deploy-check.md"
      required: true
    - path: "evidence/git-commit.txt"
      required: true
  validation_commands:
    - name: "dev_build_passed"
      command: "test -s evidence/build-report.md && test -s evidence/deploy-check.md && test -s evidence/git-commit.txt"
  hard_block_conditions:
    - "Required copy/design/QA input missing."
    - "Website source would need to be written inside Hermes instead of the dev container."
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
