# Troubleshooting

## Employee cards do not appear

- Confirm `npm run dev` started successfully and use the URL printed by Vite.
- Check the browser network panel for a request to `employeesData.json` and confirm it returns JSON.
- The current code logs fetch errors to the console but does not show an in-page error message.

## Images do not load

The dataset references external image providers. Check network access, the image URL, and browser console/network errors. The directory does not download or proxy these photos.

## Search seems incomplete

Search checks only the employee name and email and lowercases both strings. It does not search department, contact number, or salary.

## Department filter behaves unexpectedly

The filter uses `department.includes(selectedDept)`. The current options are full department names, but a shorter selection would match any department containing that substring.

## Search/filter values return after reload

This is expected. The selected search term and department are stored in localStorage. Clear those controls or remove `savedSearchTerm` and `savedDepartment` from the site's localStorage to reset saved preferences.

## Modal does not close as expected

Click the backdrop or the close button. Clicking inside the modal content is stopped from closing the backdrop. Escape-key behavior and focus management are not currently implemented.

## Build or lint issues

Run `npm run build` and `npm run lint` from the repository root. Include the command and relevant error output in an issue, after removing local paths and private data. There is no test script.
