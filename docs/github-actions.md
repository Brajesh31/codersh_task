# 🐙 GitHub Actions

| Workflow | Trigger | Purpose |
| --- | --- | --- |
| `.github/workflows/ci.yml` | Push to main, pull request, manual | Install, lint, test, build, upload artifact |
| `.github/workflows/docs-validation.yml` | Push, pull request, manual | Validate Markdown links and repository JSON/SVG |
| `.github/workflows/codeql.yml` | Push, pull request, weekly schedule | Static JavaScript analysis |
| `.github/workflows/dependency-review.yml` | Pull request | Review changed dependencies |
| `.github/workflows/security-scan.yml` | Push, pull request, weekly schedule, manual | Production dependency audit and Gitleaks |
| `.github/workflows/update-readme.yml` | Manual only | Update README review date |

## Action runtime and maintenance
The current workflows use Node.js 24-compatible major releases for checkout, setup-node, setup-python, artifact upload, CodeQL, and dependency review. Gitleaks remains on its supported v2 action line. Dependabot monitors the GitHub Actions ecosystem weekly.

## Permissions
Validation workflows use read-only repository contents permission. Security analysis grants the security-events permission only to the analysis job. Dependency review is read-only. The timestamp workflow uses write permission because it commits README changes.

## Maintenance
Review upstream action release notes and Dependabot proposals. Do not add an automated release/deploy workflow until a target environment, credentials model, and rollback process are defined.
