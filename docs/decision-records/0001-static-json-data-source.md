# ADR 0001: Static JSON as the employee data source

- **Status:** Accepted for the current demo
- **Date:** 2026-11-17

## Context

The application loads a small example directory from `public/employeesData.json`. It does not have a server or database.

## Decision

Keep the static JSON source for the current lightweight demonstration. Use synthetic/public-safe data only and make the public nature of the asset explicit.

## Consequences

- No backend setup, credentials, or database service is required.
- The browser downloads the entire dataset.
- No writes or role-based restrictions are possible.
- A production employee system with confidential data requires a protected backend and authorization model.

## Revisit when

The project needs private employee data, employee editing, audit history, multi-user administration, or server-side permissions.
