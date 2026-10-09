# ace2lab.github.io Workspace Rules

Master rules governing the public GitHub Pages website for ACE² Lab.

---

## 1. Autonomous Deployment Invariant

- **Public Deployment Exception**: As the official public web repository for ACE² Lab, autonomous `git push origin main` is permitted immediately after successful verification.
- **Pre-Push Verification Gate**: Autonomous push requires:
  1. `npm run lint:style-contract` passed (100% style contract compliance)
  2. `npm run lint:prettier` passed (formatting validation)
  3. Clean git tree and commit with required attribution trailers
- **Rollback & Safety**: If `git push` fails or remote rejects the push, halt immediately and report transparently without forced push (`--force` strictly prohibited).

---

## 2. Dual-Agent Commit Attribution

- Every commit authored by Antigravity or Claude Code must carry the designated `Co-Authored-By` trailer:
  - Antigravity: `Co-Authored-By: Antigravity <antigravity@noreply.local>`
  - Claude Code: `Co-Authored-By: Claude <noreply@anthropic.com>`
