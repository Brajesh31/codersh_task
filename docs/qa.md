# ✅ Quality assurance

## Quality objectives
The directory must load the public dataset, reject malformed input safely, provide predictable search/filter behavior, preserve keyboard access, and generate a deployable static bundle.

## Test layers
| Layer | Current coverage | Evidence |
| --- | --- | --- |
| Unit | Data normalization and filtering | `tests/employeeData.test.js` |
| Static analysis | JavaScript/JSX lint | ESLint in CI |
| Build | Vite production bundle | CI build job |
| Documentation | Local Markdown links and file checks | Python validation workflows |
| Browser integration | Manual smoke test only | Checklist in `docs/testing.md` |
| Accessibility | Manual checks recommended; no audit result | `docs/accessibility-testing.md` |

## Defect severity
Treat unintended publication of personal data or secrets as urgent. Treat a broken production build or a page that cannot load as high priority. Search/filter or layout regressions are normal defects unless they block core use. Minor copy/spacing issues can be scheduled.

Do not label tests as passing until their current run has succeeded.
