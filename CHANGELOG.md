# 📦 Changelog

This changelog records repository-visible changes from the enhancement work onward. Earlier history remains available in Git and is not reconstructed here.

## [Unreleased]

### 🔧 Build toolchain
- Upgraded Vite to 8.3.8 and the official React plugin to 6.3.0 as a coordinated compatible pair.
- Documented the supported Node.js runtime floor (20.19 or 22.12+).


### 🐙 GitHub Actions maintenance
- Upgraded checkout, setup-node, setup-python, artifact upload, CodeQL, and dependency-review workflows to Node.js 24-compatible major releases.
- Re-ran CI, documentation validation, dependency audit, Gitleaks, and CodeQL successfully on the updated workflow commit.

### 🔐 Security and dependency remediation
- Removed the unused Axios and React Router runtime dependencies and their vulnerable transitive packages; the single-screen app now uses the browser Fetch API.
- Regenerated the npm lockfile from the packages still required by the app and verified installation, tests, lint, and build through CI.

### ✨ Added
- Extracted employee dataset normalization and filtering into a testable utility module.
- Added Node.js built-in unit tests for required fields, duplicate IDs, optional values, search, and department filtering.
- Added CI for lint, tests, and production build.
- Added CodeQL, dependency review, Dependabot, and documentation validation workflows.
- Added project-specific architecture, data-flow, deployment, security-boundary, banner, and logo SVG assets.
- Expanded documentation, issue forms, and engineering templates.

### 🛠️ Changed
- Reworked the directory layout and profile dialog for responsive and keyboard use.
- Added explicit loading, empty, error, retry, and malformed-record messaging.
- Made the static JSON URL respect Vite's configured base path.
- Changed README timestamp automation to manual dispatch to prevent hourly commit churn.

### 🔐 Security and privacy
- Documented that the static employee JSON is public and must never contain confidential employee records.
- Clarified that no authentication, authorization, database, or private API exists.

### ⚠️ Known limitations
- No browser end-to-end suite or screen-reader certification is included.
- The dataset and third-party image rights require review before public production use.
