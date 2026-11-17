# 🔎 Data privacy

## Data collected or processed by the app
- The browser fetches the full employee JSON file.
- The page processes employee values in memory to search and filter.
- The browser stores the search term and department selection locally.
- The browser requests external image resources for non-empty photo URLs.

## Data not sent by application code
There is no custom application API, account service, analytics pipeline, or telemetry integration in the current codebase. Static hosting and image providers may still process normal network request metadata under their own policies.

## Data minimization
Use only the fields needed for the demo. Avoid personal phone numbers and compensation fields. Remove any values that are not intended for public disclosure. Local filtering is not a privacy measure because the entire JSON is already delivered to the browser.
