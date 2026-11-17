# 🔐 Dependency security and supply-chain controls

## Current security posture

The current lockfile is built from the package manifest and the application has no production npm dependencies beyond React and React DOM. The latest completed security workflow run for the dependency set installed 146 packages and reported:

| Audit scope | Result | Meaning |
| --- | ---: | --- |
| Full dependency tree | 5 high, 0 critical, 0 moderate, 0 low | Development-toolchain findings remain |
| Production dependencies | 0 vulnerabilities | `npm audit --omit=dev --audit-level=high` passed |
| Secret scan | Passed | Gitleaks found no reportable secret in the scanned history/working tree |

The five high findings are reported by npm against development tooling and its dependency graph, including the Vite/React plugin path, `fdir`, `tinyglobby`, and `picomatch`. The underlying GitHub advisory that can be identified directly is [GHSA-fc5q-39xc-vjpf](https://github.com/advisories/GHSA-fc5q-39xc-vjpf), which describes a ReDoS issue in Picomatch through version 4.0.7. The currently locked Picomatch version is 4.0.7. As of 18 November 2026, no fixed upstream Picomatch release is present in the npm version history. The issue is therefore recorded as open, not treated as remediated.

The security workflow prints the complete npm audit summary and package-level advisory information into the workflow logs and job summary. It fails on any critical finding in the complete dependency tree and separately enforces a high-severity threshold for production dependencies. High-severity development findings remain visible as a warning until the upstream dependency chain has a compatible fix.

## Coordinated toolchain

| Package | Locked version | Role |
| --- | ---: | --- |
| `vite` | 8.3.8 | Development server and production bundler |
| `@vitejs/plugin-react` | 6.3.0 | Vite React transform / refresh integration |
| `eslint` | 10.15.0 | JavaScript and JSX static analysis |
| `@eslint/js` | 10.0.1 | ESLint recommended JavaScript configuration |
| `eslint-plugin-react-hooks` | 7.1.1 | React Hooks and compiler-related lint checks |
| `react` / `react-dom` | 19.1.0 | Runtime UI libraries |

The Vite 8 and official React plugin 6 versions are kept as a compatible pair. ESLint 10's runtime support is reflected in `.nvmrc` and `package.json`: Node 20.19+, 22.13+, or 24+. The default local pin is Node 22.13.0.

## Automated controls

- **Dependabot** checks npm packages and GitHub Actions dependencies weekly.
- **Dependency Review** inspects dependency changes in pull requests.
- **CodeQL** analyzes the JavaScript source.
- **CI** installs from the lockfile, runs ESLint, runs the Node test suite, builds production assets, and uploads the bundle.
- **Repository validation** checks the package/lockfile root metadata, required scripts, synthetic data contract, and SVG XML.
- **Documentation validation** checks local Markdown links and image references.
- **Security Scan** reports the full npm audit, fails on critical findings, enforces a production-dependency high threshold, and runs Gitleaks.
- **Lockfile Sync** regenerates `package-lock.json` when the package manifest changes, then commits the synchronized lockfile to `main`.

## Maintainer procedure

1. Inspect the package path and transitive chain shown in the audit.
2. Read the upstream advisory and package maintainer's fix status.
3. Prefer a compatible upstream patched release.
4. Do not accept an npm-suggested major downgrade without checking compatibility. A suggestion to move Vite 8 back to Vite 6 is not a safe automatic fix for this repository's current Vite 8 configuration.
5. After changing dependencies, run `npm ci`, `npm audit`, `npm run lint`, `npm test`, and `npm run build`.
6. Review the lockfile diff and current GitHub Actions results.
7. Update this page and the repository checklist with the actual audit result.

## Client-side security boundaries

- Vite `VITE_*` variables are public after bundling. Never place secrets in them.
- `public/employeesData.json` is downloaded by every site visitor. Its records must remain synthetic and must not contain personal contact details, compensation, addresses, or staff-only information.
- Search filters and hidden fields are not access control.
- The application has no authentication, authorization, backend, database, or private employee store.
- The employee JSON validator is input hygiene for the UI, not a server-side security boundary.

## Known follow-up work

- 🟡 Track the Picomatch ReDoS advisory until an upstream release fixes the affected version range.
- 🟡 Re-run full `npm audit` after every relevant transitive dependency release.
- 🟡 Add browser-level regression tests when a maintained test runner is selected.
- 🟡 Complete a manual accessibility review with keyboard-only operation and screen readers before making a conformance claim.

A passing production audit does not mean the complete development dependency tree is vulnerability-free. The remaining development-only findings are disclosed above and in the Security Scan job summary.
