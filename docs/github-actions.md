# 🐙 GitHub Actions

| Workflow | Trigger | Purpose |
| --- | --- | --- |
| `.github/workflows/ci.yml` | Push to main, pull request, manual | Install, lint, test, build, upload artifact |
| `.github/workflows/docs-validation.yml` | Push, pull request, manual | Validate Markdown links, JSON, SVG, required paths |
| `.github/workflows/codeql.yml` | Push, pull request, weekly schedule | Static code analysis |
| `.github/workflows/dependency-review.yml` | Pull request | Review changed dependencies |
| `.github/workflows/update-readme.yml` | Manual only | Update README review date |

## Permissions
Validation workflows use read-only repository contents permission. Security analysis grants the security-events permission only to the analysis job. Dependency review is read-only. The timestamp workflow uses write permission because it commits README changes.

## Maintenance
Check the workflow run after changing npm scripts or source paths. Review third-party action updates. Do not add an automated release/deploy workflow until a target environment, credentials model, and rollback process are defined.
