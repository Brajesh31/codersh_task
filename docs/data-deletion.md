# 🗑️ Data deletion

## Current browser preferences
The search and department preferences can be removed by clearing site data in the browser. The app's Clear filters button sets both values to empty strings; those empty preferences remain stored.

## Removing a record from the current public dataset
Edit `public/employeesData.json`, remove the authorized sample entry, run the tests/build, review `dist/employeesData.json`, and redeploy. This changes the current published version but does not automatically remove older Git commits, forks, caches, or third-party copies.

## Sensitive data already published
Treat exposure as an incident. Remove it from the live site, restrict further exposure where possible, assess whether Git history cleanup is needed, and notify affected stakeholders through an appropriate channel. Rotate any exposed credentials. Do not assume deleting the latest file removes every historical copy.
