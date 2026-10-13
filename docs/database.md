# Database and Persistence

## Current state

There is no database. Employee records are stored in `public/employeesData.json`, a static file served to all site visitors. The app cannot create or update employees.

The browser stores only the search term and selected department in localStorage under `savedSearchTerm` and `savedDepartment`. This persists on the current browser/device and is not shared with a server.

## Privacy requirements

Do not place confidential employee records in the public JSON file. Contact information and salaries in a static asset are available to anyone who can access the site. Before adding persistent employee management, define authentication, authorization, retention, deletion, backup, and migration requirements and use a protected server-side store.
