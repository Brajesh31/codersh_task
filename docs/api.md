# 🔌 API reference and current status

## No custom application API
The project has no server, custom HTTP API, database, webhook, or authenticated endpoint. The frontend uses Axios to request the static asset at `${import.meta.env.BASE_URL}employeesData.json`, backed by `public/employeesData.json`.

This is a public static file request, not an authenticated API. Anyone who can access the site can request the complete file.

## Current record contract
Required fields are `id`, `name`, `email`, and `department`. Optional `photo` defaults to an empty string. Optional `contact` is normalized to a string if present. The current privacy-safe sample uses no contact, salary, or remote photo values.

## Frontend behavior
- Search matches name or email, case-insensitively.
- Department filter uses exact string equality.
- The page opens a profile dialog for the selected record.
- Search and department preferences use localStorage keys `savedSearchTerm` and `savedDepartment`.

## Future API work
If protected employee records or editing are required, design server-side authentication, authorization, validation, data minimization, rate limits, error responses, and auditability before replacing the static file. Use [API template](templates/api-documentation-template.md) once real endpoints exist.
