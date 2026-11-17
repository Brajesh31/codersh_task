# 🧪 Unit testing

The repository uses Node's built-in `node:test` and `node:assert/strict`; no test dependency is required.

## Location
`tests/employeeData.test.js` exercises the pure functions in `src/lib/employeeData.js`.

## Run
```bash
npm test
```

## Existing scenarios
- Valid array input and optional defaults.
- Non-array payload rejection.
- Malformed row and duplicate ID filtering.
- Numeric contact normalization.
- Case-insensitive name and email search.
- Exact department matching.
- Combined search and department filtering.
- Blank filters.

## Adding a test
Use a descriptive test name, small synthetic records, and assertions on observable outputs. Include both positive and negative cases. Do not put actual employee records in fixtures. If the helper begins to use browser APIs or React, keep its pure logic separate so the Node test runner can still execute it without a browser.
