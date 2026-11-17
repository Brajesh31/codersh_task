# 🐞 Debugging guide

## Blank page
Open the browser Console for runtime errors. Confirm the root element exists in `index.html` and that the entry script resolves.

## Dataset does not load
Use the Network panel and inspect the request to `employeesData.json`. Verify the file exists in `public/` and the response is valid JSON. When deployed under a path prefix, check the Vite base path.

## No search matches
Confirm the JSON row contains non-empty string `name` and `email`. Search matches only those fields. Department matching is exact and uses the current selector values.

## Profile does not open
Check that the card button receives an `onSelect` callback and that the selected employee state is set. Use keyboard activation to test the semantic button.

## Dialog focus issues
Check whether the close control receives initial focus, whether Escape is handled, and whether the previously focused element still exists when the dialog unmounts.

## Safe diagnostics
Do not paste actual employee records or localStorage contents into public issues. Redact names, email, contact numbers, and salary information.
