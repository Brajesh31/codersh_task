# 🚦 Quality gates

## Required automated gates
| Gate | Command/workflow | Expected outcome |
| --- | --- | --- |
| Dependency install | `npm ci` | Lockfile installs consistently |
| Lint | `npm run lint` | No ESLint errors |
| Unit tests | `npm test` | All Node tests pass |
| Production build | `npm run build` | Vite creates `dist/` |
| Docs links | `python scripts/validate_docs.py` | No broken local Markdown links |
| Repository assets | `python scripts/validate_repo.py` | Required files/JSON/SVG are valid |

## Release gate
Before publishing, inspect the production data asset and confirm every record is safe to expose. Manually test the directory and dialog. A green CI result does not prove data privacy, image licensing, or WCAG conformance.

## Failure policy
Fix a failed required check before merging or publishing. If a check is intentionally unavailable, document the reason and the manual evidence used instead.
