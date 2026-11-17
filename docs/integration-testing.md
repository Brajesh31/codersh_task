# 🔗 Integration testing

No automated browser/component integration suite is currently installed. The following interactions should be verified manually until a browser test framework is introduced.

## Current manual integration path
1. Start Vite with `npm run dev`.
2. Confirm the JSON request returns 200 and valid rows display.
3. Search by a name and by an email fragment.
4. Select a department and combine it with search.
5. Clear filters and verify the full list returns.
6. Open a profile, tab through its controls, close with Escape, and verify focus restoration.
7. Temporarily rename or invalidate the JSON file in a local working copy, confirm error and retry, then restore it.

## Future automation
Choose a React testing library and browser runner based on project need. A useful integration test should assert user-facing roles and accessible names rather than implementation-specific state variables.
