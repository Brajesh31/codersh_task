# 🧰 Operations guide

## Routine operation
The application is a static site. Operations consist primarily of reviewing source changes, running CI, building the site, publishing `dist/`, and confirming that the static JSON asset contains safe public sample data.

## Routine checklist
- Review GitHub Actions and security alerts.
- Review Dependabot changes.
- Validate JSON and local documentation links.
- Check third-party image references and rights.
- Rebuild and inspect `dist/`.
- Test the deployed root route and data request.
- Keep the last known-good deployment available.

## Not required today
There are no database migrations, backend processes, queue workers, service secrets, scheduled data pipelines, or production application servers to operate.
