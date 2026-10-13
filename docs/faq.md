# FAQ

## Is there a backend or database?

No. The app fetches a static JSON file and filters it in the browser.

## Are employee records private?

No. `public/employeesData.json` is downloadable by every site visitor, including fields not shown in a card. Never place real confidential employee details in it.

## What is saved in localStorage?

Only the search text (`savedSearchTerm`) and selected department (`savedDepartment`). Employee records and modal selection are not saved.

## How do I run the project?

Run `npm ci` and `npm run dev` from the root, then open the Vite URL. See [installation.md](installation.md).

## How do I build for hosting?

Run `npm run build`; publish the generated `dist/` directory. See [deployment.md](deployment.md).

## What does the MIT license cover?

It covers the original application code and documentation in the scope described in [LICENSE](../LICENSE). It excludes the sample employee dataset, third-party photo URLs, and starter artwork whose rights are separate or unconfirmed.
