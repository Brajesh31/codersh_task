# 📦 Dependency security

## Automated controls
- Dependabot checks npm and GitHub Actions dependencies on a weekly schedule.
- Dependency Review checks proposed dependency changes in pull requests.
- CodeQL analyzes the JavaScript/TypeScript source.
- CI installs from the lockfile, lints, tests, and builds.

## Maintainer review
1. Confirm the package and version are actually needed.
2. Review release notes and maintenance status.
3. Review license and transitive dependency footprint.
4. Run `npm audit` and inspect advisory applicability.
5. Run lint, tests, and production build after updating.
6. Inspect the lockfile diff for unexpected changes.

Do not accept updates blindly. A low-risk patch may still cause a behavior regression; a security fix should be validated before deployment.
