# 🧰 Troubleshooting

## Employee cards do not appear
- Confirm Vite started successfully and use the URL printed by the terminal.
- Check the browser Network panel for `employeesData.json`.
- Confirm the response is valid JSON and starts with an array.
- Check the page for an error/retry message or a warning that malformed records were skipped.

## Data request fails after deployment
Verify that the static JSON asset was copied into `dist/` and that the Vite base path matches the deployment subdirectory. The app constructs the request using `import.meta.env.BASE_URL`.

## Some records are missing
The normalizer skips non-object rows, rows without valid ID/name/email/department fields, and duplicate IDs. Check the fixture and run `npm test`.

## Search seems incomplete
Search checks employee name and email only. It trims the query and compares case-insensitively. It does not search department, contact, or salary.

## Department filter does not include a new value
The current selector uses a fixed department list in `Home.jsx`. Add the new department there or implement a data-driven list and update tests/docs.

## Images are not shown
The current privacy-safe sample intentionally leaves photo values empty, so initials fallbacks are expected. If a licensed photo URL is added, test its availability, alt-text behavior, and rights.

## Dialog behavior
Use the close button, backdrop, or Escape. If focus behavior is incorrect, test with keyboard-only navigation and inspect the modal's focusable elements.

## Run checks
```bash
npm run lint
npm test
npm run build
python scripts/validate_repo.py
python scripts/validate_docs.py
``
