# 📦 Dependency inventory

## Runtime dependencies
| Package | Purpose in the codebase |
| --- | --- |
| `react` | UI component model |
| `react-dom` | Browser rendering |
The browser's built-in Fetch API retrieves the static JSON asset. No routing or HTTP client package is needed for the current single-screen application.

## Development dependencies
| Package | Purpose |
| --- | --- |
| `vite` | Dev server and production build |
| `@vitejs/plugin-react` | React support in Vite |
| `eslint` | Static linting |
| `@eslint/js`, `globals` | ESLint base rules and environment globals |
| `eslint-plugin-react-hooks` | Hook correctness checks |
| `eslint-plugin-react-refresh` | React Fast Refresh checks |

The Node.js test runner and browser Fetch API are built into their respective runtimes and add no package dependency.

## Dependency policy
- Prefer platform APIs and existing packages when they are sufficient.
- Add runtime dependencies only for a concrete feature.
- Update `package-lock.json` with npm when dependency metadata changes.
- Review release notes, maintenance status, license, and known vulnerabilities before adding packages.
- Use Dependabot and dependency-review to surface update and license/security changes.
