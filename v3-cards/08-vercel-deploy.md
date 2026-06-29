```runner_contract
role: vercel-deploy
delegate_required: false
primary_mode: direct
agent_tool: none
primary_runner: none
allowed_fallbacks: []
max_status_polls: 0
artifact_root: /opt/data/hermes-orchestrator/<board-slug>/
verification_mode: deploy+http
required_completion_metadata: [artifacts, acceptance_criteria_result, evidence_paths]
```

You are running the **Vercel deploy** stage for the Adv3D Product Development & Prototyping Funnel build.

**Website repo/runtime:** `192.168.200.70:/home/codex/hermes-orchestrator/<board-slug>/`

**Hermes evidence workspace:** `/opt/data/hermes-orchestrator/<board-slug>/`

**Preflight gate — run BEFORE any deploy or git step.**

PRIMARY (structured, authoritative) check — do this first:
- Run `kanban_show` (or `kanban_list`) for the T6 and T7 cards and read each one's latest-run completion metadata `acceptance_criteria_result`. Both must show `passed: true` (object form) — or a string that clearly says passed and not failed.
- If either gate's structured verdict is missing or not passed, do NOT deploy: call `kanban_block` with reason "deploy preflight: upstream gate verdict not passed" and STOP.

SECONDARY (supporting evidence) check — only after the structured check passes:
- `evidence/deploy-authorization.json` exists and sets `authorized: true` for this funnel run.
- `evidence/ux-scorecard.md` exists and its last `Verdict:` line reads `Verdict: PASS`.
- `evidence/qa-report.md` exists and reports no unresolved hard failure.
- If the supporting evidence contradicts the structured verdict, trust neither — `kanban_block` with the same reason and STOP.

You should normally never block here: the gates re-run until they pass before you are dispatched, and the orchestrator's `deploy_guard` enforces the same structured rule at the DB level. This is a deterministic safety net against shipping a failed build.

**Hard preconditions:**
- Hermes `evidence/qa-report.md`, `evidence/deploy-check.md`, and `evidence/ux-scorecard.md` exist.
- Dev-container git remote is exactly `https://github.com/crob04/adv3d-product-dev.git`.
- `git status --porcelain` is empty before deploy.
- `git fetch origin main` succeeds and `git rev-parse HEAD` exactly matches `git rev-parse origin/main`.
- `evidence/git-commit.txt` exists and its commit hash exactly matches `git rev-parse HEAD`.
- If `brief.md` says `image_mode: real_images_required`, required image slots
  must not ship as placeholders.

**Deploy from the dev container only:**
- SSH to `codex@192.168.200.70`.
- Run `vercel link --yes` and `vercel deploy --prod --yes` inside `/home/codex/hermes-orchestrator/<board-slug>/`.
- Verify `https://adv3d-product-dev.vercel.app` returns HTTP 200 and current page content.

**Write back to Hermes:**
- `evidence/deploy-url.txt`
- `evidence/deploy-final.md`
- refresh `evidence/deploy-check.md` with the deployed commit, git parity result, and public URL verification result

**Completion metadata required:**

```json
{
  "schema_version": "1.1",
  "artifacts": ["evidence/deploy-url.txt", "evidence/deploy-final.md", "evidence/deploy-check.md"],
  "checks_run": [{"name": "production_url_200", "command": "test -s evidence/deploy-url.txt && test -s evidence/deploy-final.md && test -s evidence/deploy-check.md", "status": "passed"}],
  "acceptance_criteria_result": {"passed": true, "public_url": "https://adv3d-product-dev.vercel.app"},
  "evidence_paths": ["evidence/deploy-url.txt", "evidence/deploy-final.md", "evidence/deploy-check.md"],
  "remaining_risks": []
}
```

```yaml
card_contract:
  schema_version: "1.1"
  max_retries: 2
  output_artifacts:
    - path: "evidence/deploy-url.txt"
      required: true
    - path: "evidence/deploy-final.md"
      required: true
    - path: "evidence/deploy-check.md"
      required: true
  validation_commands:
    - name: "production_url_200"
      command: "test -s evidence/deploy-url.txt && test -s evidence/deploy-final.md && test -s evidence/deploy-check.md"
  hard_block_conditions:
    - "QA evidence missing."
    - "deploy-authorization.json missing or false."
    - "Git parity with origin/main is not exact."
    - "Vercel deploy fails."
    - "Production URL does not return current site."
```

**Completion rule (read before calling kanban_complete):**
- Prefer `kanban_complete_contract` over raw `kanban_complete`. Pass the same summary/evidence fields shown above; the helper promotes them into metadata and infers required contract artifacts when those files already exist on disk.
- If a direct write/edit tool just confirmed the exact artifact path and a redundant bounded `ls -la` is denied by the safety guard, do not block on that denial. Call `kanban_complete_contract`; it re-validates the files on disk during completion.
- `metadata.artifacts` and `metadata.evidence_paths` must be a JSON **list of existing file paths**. Never a directory, never a string, never a dict. If you produced a folder of files, point at a file inside it (e.g. an `INDEX.md`), not the folder.
- Copy the "Completion metadata required" block above **verbatim**; fill in real values; do not invent extra required keys.
- If `kanban_complete` returns an error, READ the error text and fix exactly what it names (e.g. a missing file, a directory artifact, a missing field). Do NOT resubmit the identical metadata — an unchanged retry will fail the same way and burn your turn budget.
- If a required artifact does not actually exist on disk yet, create it (or drop it from the list) before completing — do not claim files you did not write.
