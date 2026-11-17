# 📦 Changelog

This changelog records repository-visible changes from the enhancement work onward. Earlier history remains available in Git and is not reconstructed here.

## [Unreleased]

### 🔧 Build toolchain
- Upgraded Vite to 8.3.8 and the official React plugin to 6.3.0 as a coordinated compatible pair.
- Set `.nvmrc` to Node 22.13.0 and documented the supported Node.js ranges (20.19+, 22.13+, or 24+).
- Upgraded ESLint to 10.15.0, `@eslint/js` to 10.0.1, and `eslint-plugin-react-hooks` to 7.1.1.
- Updated vulnerable transitive development packages and synchronized a 177-package lockfile with `package.json`.
- Added automated lockfile synchronization after package manifest changes, including install, lint, unit-test, build, and dependency-gate verification before commit.
- Exercised the lockfile synchronization workflow successfully on the current main branch.
- Recorded the remaining development-tooling audit findings: five high-severity npm entries, zero critical/moderate/low, and zero production dependency vulnerabilities.


### 🐙 GitHub Actions maintenance
- Upgraded checkout, setup-node, setup-python, artifact upload, CodeQL, and dependency-review workflows to Node.js 24-compatible major releases.
- Re-ran CI, documentation validation, dependency audit, Gitleaks, and CodeQL successfully on the updated workflow commit.

### 🔐 Security and dependency remediation
- Removed unused Axios and React Router runtime dependencies and their vulnerable transitive packages; the single-screen app now uses the browser Fetch API.
- Removed unused React type declaration packages because the repository contains JavaScript/JSX and does not compile TypeScript.
- Regenerated the npm lockfile from the packages still required by the app and verified installation, tests, lint, and build through CI.

### ✨ Added
- Extracted employee dataset normalization and filtering into a testable utility module.
- Added Node.js built-in unit tests for required fields, duplicate IDs, optional values, search, and department filtering.
- Added CI for lint, tests, and production build.
- Added CodeQL, dependency review, Dependabot, and documentation validation workflows.
- Added project-specific architecture, data-flow, deployment, security-boundary, banner, and logo SVG assets.
- Expanded documentation, issue forms, and engineering templates.

### 🛠️ Changed
- Tightened the repository validator to check package/lockfile consistency, supported scripts, finite and unique employee IDs, required non-empty strings, privacy-safe public data, and SVG validity.
- Reworked the directory layout and profile dialog for responsive and keyboard use.
- Added explicit loading, empty, error, retry, and malformed-record messaging.
- Made the static JSON URL respect Vite's configured base path.
- Changed README timestamp automation to manual dispatch to prevent hourly commit churn.

### 🔐 Security and privacy
- Documented that the static employee JSON is public and must never contain confidential employee records.
- Clarified that no authentication, authorization, database, or private API exists.

### ⚠️ Known limitations
- The full npm audit still reports five high-severity entries in the Vite development dependency graph, including Picomatch GHSA-fc5q-39xc-vjpf. The production dependency audit is clean; do not treat the full development dependency tree as vulnerability-free.
- No browser end-to-end suite or screen-reader certification is included.
- The dataset and third-party image rights require review before public production use.
