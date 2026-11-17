# 🧪 Testing and quality

## Automated checks
- `npm run lint`: ESLint.
- `npm test`: Node built-in unit tests for employee data helpers.
- `npm run build`: Vite production bundle.
- `python scripts/validate_repo.py`: required paths, package scripts, JSON and SVG checks.
- `python scripts/validate_docs.py`: local Markdown links.
- GitHub Actions runs lint, tests, build, documentation checks, CodeQL, dependency review, and secret/dependency scanning.

A successful unit test run does not prove the full browser UI or accessibility behavior.

## Unit tests currently cover
- Array payload validation.
- Malformed rows and duplicate IDs.
- Optional field defaults and numeric contact normalization.
- Case-insensitive name and email search.
- Exact department filtering.
- Combined search and department filtering.
- Blank filters.

## Manual smoke-test checklist
- [ ] Loading state appears before records.
- [ ] Five synthetic sample records render.
- [ ] Invalid/duplicate rows are skipped and warning appears.
- [ ] Failed JSON request shows retry.
- [ ] Search works for names and emails, without case sensitivity.
- [ ] Department filtering uses exact matching.
- [ ] Clear filters resets both controls.
- [ ] Cards work by keyboard and pointer.
- [ ] Dialog closes with close button, backdrop, and Escape.
- [ ] Focus returns to the card that opened the dialog.
- [ ] Empty photo values show initials.
- [ ] Layout remains usable on a narrow viewport.
- [ ] Reduced-motion preference is respected.

## Future test coverage
Add component/browser tests for loading/retry, dialog focus behavior, and real browser layout. Do not claim E2E coverage until such a suite is configured.
