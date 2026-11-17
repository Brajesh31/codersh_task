# 🌿 Branching strategy

## 1. Default branch

The repository's default branch is main. It contains the canonical project state and is the branch used by CI, CodeQL, documentation validation, and security workflows.

## 2. Change categories

| Change | Suggested branch name |
| --- | --- |
| New user-facing capability | feat/short-description |
| Defect correction | fix/short-description |
| Documentation | docs/short-description |
| Dependency maintenance | chore/deps-package-or-purpose |
| Tests and quality | test/short-description |
| Security remediation | security/short-description |

Use short, lowercase, hyphen-separated names. Avoid long-lived branches that diverge substantially from main.

## 3. Maintainer direct commits

The repository owner may make focused maintenance commits directly to main when the change is understood, scoped, and independently verified. This is the workflow used for authorized repository maintenance in this project.

Direct commits should not bypass tests or conceal incomplete work. For higher-risk changes, use a reviewable branch and a pull request so the diff can be examined before integration.

## 4. External contributions

External contributors should follow CONTRIBUTING.md and submit changes for review. Do not assume write access to main. A branch or pull request is not accepted until relevant checks pass and the maintainer has reviewed data exposure and scope.

## 5. Branch hygiene

- Keep one coherent purpose per branch.
- Sync with main before final verification.
- Do not force-push shared branches without coordination.
- Do not commit build output, secrets, local environment files, or real employee data.
- Delete merged topic branches when no longer needed.
- Record breaking data-contract changes and migration needs.

## 6. Release tags

Create release tags only from a verified main commit. See docs/release-process.md and docs/versioning.md.
