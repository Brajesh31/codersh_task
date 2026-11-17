# 🚀 Release and delivery process

## 1. Current release status

The package version is currently 0.0.0 and no formal public release is claimed. The process below defines what should be done before a first tagged release. It does not imply a release cadence or an existing production deployment.

## 2. Release readiness gates

| Gate | Required evidence |
| --- | --- |
| Source integrity | Reviewed diff and known commit SHA |
| Dependency state | npm ci succeeds and full npm audit findings are reviewed |
| Lint | npm run lint passes |
| Unit tests | npm test passes |
| Production bundle | npm run build succeeds |
| Repository validation | python scripts/validate_repo.py passes |
| Documentation | python scripts/validate_docs.py passes |
| Static analysis | Latest CodeQL run reviewed |
| Secret scanning | Gitleaks run reviewed |
| Public data review | Built dist/employeesData.json contains approved synthetic or authorized fields only |
| Browser review | Root route, search, filter, dialog, error/retry, and responsive layout smoke-tested |
| Accessibility | Keyboard, focus, reduced motion, and relevant assistive-technology checks recorded |
| Rollback | Known-good artifact or commit identified |

A passing workflow does not replace data, browser, legal, or accessibility review.

## 3. Release procedure

1. Select the exact source commit for the release.
2. Review all changes since the previous release, if one exists.
3. Update CHANGELOG.md with additions, changes, fixes, security notices, and known limitations.
4. Update the package version and regenerate the lockfile with npm.
5. Verify the committed manifest and lockfile are synchronized.
6. Run the required local and GitHub Actions checks.
7. Build and inspect dist/, including the public JSON asset and asset paths.
8. Confirm the target static host and fallback configuration, if deployment is intended.
9. Create a Git tag only after all release gates are accepted.
10. Publish a GitHub Release only when a real artifact and notes are ready.

## 4. Versioning

Use semantic versioning when public releases begin:
- **MAJOR:** incompatible user-visible behavior or data contract change.
- **MINOR:** backward-compatible functionality.
- **PATCH:** compatible fixes and documentation corrections.

The current 0.0.0 development version should not be represented as a published release.

## 5. Static deployment

The expected artifact is the Vite dist/ directory. Publish the complete artifact as one unit, including HTML, hashed JS/CSS assets, favicon, and employeesData.json. Do not mix assets from different builds.

No production host is selected in this repository. A provider-specific workflow should be added only after the host, credentials model, and rollback behavior are known.

## 6. Rollback

Restore a complete known-good artifact from one commit. Restore HTML, assets, and the employee JSON together. If private data was exposed, follow the incident response process: reverting the current deployment does not erase Git history, forks, caches, or copies already downloaded.

Use the rollback checklist in docs/templates/rollback-checklist.md.

## 7. Release records

For each actual release, record the version and tag, commit SHA, date, user-visible changes, test and security workflow evidence, known limitations, deployment artifact and provider if applicable, and rollback reference.

Do not create a release record with placeholder dates or unverified metrics.
