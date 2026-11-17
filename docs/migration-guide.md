# 🔀 Migration guide

There is currently no released migration path because the application has no database or versioned external API.

## Changing the employee JSON schema
- Update [data-contract.md](data-contract.md).
- Update `normalizeEmployees` and its unit tests.
- Update sample JSON.
- Update filter logic or components that read the changed field.
- Review the data privacy implications.
- Rebuild and inspect the published static asset.

## Moving to a backend in the future
Treat that as a new architecture project. Design identity, authorization, database schema, validation, error contract, audit logging, retention, backups, deployment, and migration from public static data before implementation. Do not simply point the frontend at a private-looking URL without server access checks.
