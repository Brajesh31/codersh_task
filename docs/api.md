# API Reference

## Application API status

The project has no custom HTTP API, server, or database. The frontend uses Axios to request one public static JSON asset from the Vite site: `./employeesData.json`, backed by `public/employeesData.json`.

That file is a static download, not an authenticated endpoint. Anyone who can reach the deployed app can request the complete dataset. The current UI reads records with `id`, `name`, `photo`, `department`, `email`, `contact`, and `salary` fields.

## Frontend interactions

- Search matches `name` or `email`, case-insensitively.
- Department selection filters using `department.includes(selectedDept)`.
- Clicking a card opens a detail modal.
- Search and department selection are saved in localStorage under `savedSearchTerm` and `savedDepartment`.

## Future API work

If employee records become private or editable, design a backend with authentication, authorization, validation, privacy rules, and pagination. Document methods, payloads, errors, and access requirements before replacing the public JSON file.
