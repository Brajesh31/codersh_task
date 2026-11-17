# 🗄️ Database and persistence

## Current state
There is no database or server-side record store. Employee records live in `public/employeesData.json`, which is published as a static asset. The app cannot create or update employees.

The browser stores only the search term and selected department in localStorage. Those values remain on the current browser/device and are not synchronized to a server.

## Privacy
Every field in the public JSON is downloadable. The current sample uses synthetic names and reserved example.invalid email addresses, with no phone, salary, or remote photo values. Do not replace it with confidential employee records.

## Future database requirements
If employee management is introduced, define authentication, authorization, schema, validation, migration, retention, deletion, backups, restore testing, audit events, and operational ownership. Use the [database schema template](templates/database-schema-template.md) as a planning aid; do not treat it as an existing schema.
