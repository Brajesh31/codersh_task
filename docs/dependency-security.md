# 📦 Dependency security

## Automated controls
- Dependabot checks npm and GitHub Actions dependencies on a weekly schedule.
- Dependency Review checks proposed dependency changes in pull requests.
- CodeQL analyzes the JavaScript/TypeScript source.
- CI installs from the lockfile, lints, tests, and builds.
- Security Scan runs Gitleaks and an npm production-dependency audit.

## Full dependency audits
The production-only audit is not the same as a full development-toolchain audit. The full `npm ci` output on the previous dependency set reported 23 advisories (2 low, 3 moderate, 17 high, 1 critical), which included development dependencies. The old Vite 6.3.5 range was affected by multiple Vite advisories. The Vite 8.3.8 and `@vitejs/plugin-react` 6.3.0 upgrade is a coordinated pair: plugin 6 requires Vite 8, and Vite 8 requires Node 20.19+ or 22.12+. Confirm the full current result with `npm audit` after installation. Do not infer that all dependency findings are cleared merely because the production-only scan passes.

## Maintainer review
1. Confirm the package and version are actually needed.
2. Review release notes and maintenance status.
3. Review license and transitive dependency footprint.
4. Run `npm audit` and inspect advisory applicability.
5. Run lint, tests, and production build after updating.
6. Inspect the lockfile diff for unexpected changes.

Do not accept updates blindly. A low-risk patch may still cause a behavior regression; a security fix should be validated before deployment.
