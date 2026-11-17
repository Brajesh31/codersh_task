# 🛠️ Maintainer guide

## Routine maintenance
- Review open issues for reproducibility, privacy, and scope.
- Keep Node/npm runtime assumptions and lockfile consistent.
- Review Dependabot and dependency-review proposals.
- Inspect CodeQL alerts and resolve actionable findings.
- Check the CI and documentation-validation workflows after changes.
- Keep the README and documentation hub aligned with actual source code.

## Data release review
Before any public release, inspect `public/employeesData.json` and the built `dist/employeesData.json`. Confirm every field is synthetic or expressly authorized. Confirm external photo rights and availability.

## Release practice
Use a focused change set, update the changelog, run tests and build, inspect the artifact, and create a Git tag only after a release decision. There is no automated release pipeline at present.

## Incident practice
For a data exposure or security report, preserve evidence, restrict public disclosure, determine the affected build/data, coordinate a correction, and update [incident response](incident-response.md). Do not promise response times that cannot be met.
