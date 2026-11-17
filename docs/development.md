# 💻 Development

## Scripts

| Command | Purpose |
| --- | --- |
| `npm ci` | Install exact lockfile dependencies |
| `npm run dev` | Start Vite with hot reload |
| `npm run lint` | Run ESLint |
| `npm test` | Run Node's built-in unit tests |
| `npm run build` | Build static files in `dist/` |
| `npm run preview` | Preview the built site locally |

Python repository checks:
```bash
python scripts/validate_repo.py
python scripts/validate_docs.py
```

## Change workflow
1. Read the relevant docs and inspect existing behavior.
2. Define acceptance criteria and data/privacy implications.
3. Install using `npm ci`.
4. Make a focused change.
5. Add or update tests for changed behavior.
6. Run lint, unit tests, build, and relevant Python checks.
7. Manually exercise affected browser interactions.
8. Review the full diff for secrets, personal data, generated assets, and unrelated changes.
9. Update relevant docs and diagrams.

## Data conventions
A record needs a unique non-empty ID, a non-empty string name, a string email, and a string department. Photo is optional and defaults to an empty string. Contact is optional and normalized when supplied, but the public sample intentionally omits contact and salary values. Use only synthetic or explicitly authorized data.

## Accessibility
Cards are semantic buttons. The dialog supports Escape and a basic focus loop/restoration. Verify actual keyboard, screen-reader, contrast, zoom/reflow, and reduced-motion behavior; code structure alone is not proof of compliance.
