# 📦 Dependency inventory

## Runtime dependencies
| Package | Purpose in the codebase |
| --- | --- |
| `react` | UI component model |
| `react-dom` | Browser rendering |
| `react-router-dom` | Root client-side route |
| `axios` | Fetching the static JSON asset |

## Development dependencies
| Package | Purpose |
| --- | --- |
| `vite` | Dev server and production build |
| `@vitejs/plugin-react` | React support in Vite |
| `eslint` | Static linting |
| `@eslint/js`, `globals` | ESLint base rules and environment globals |
| `eslint-plugin-react-hooks` | Hook correctness checks |
| `eslint-plugin-react-refresh` | React Fast Refresh checks |
| `@types/react`, `@types/react-dom` | React type declarations available to tooling |

The Node.js test runner is built into Node and adds no package dependency.

## Dependency policy
- Prefer platform APIs and existing packages when they are sufficient.
- Add runtime dependencies only for a concrete feature.
- Update `package-lock.json` with npm when dependency metadata changes.
- Review release notes, maintenance status, license, and known vulnerabilities before adding packages.
- Use Dependabot and dependency-review to surface update and license/security changes.
