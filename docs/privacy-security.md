# 🔐 Privacy and security

## Public dataset warning

Anything under Vite's `public/` directory is copied into the production output and can be downloaded directly. The sample file currently includes names, email addresses, contact values, salaries, and remote photo URLs. Hiding a field in React would not protect it.

Before public deployment:
1. Replace sample information with synthetic records or data that is explicitly authorized for public release.
2. Remove personal contact details and salary values unless public disclosure is intentional and approved.
3. Confirm image licenses and avoid linking to personal images without permission.
4. Review the deployed asset, not only the rendered UI, to confirm no unintended fields remain.

## Current security boundary

The application has no authentication or authorization, and no server-side data store. Browser-side filtering is not access control. Local storage is a user-controlled convenience store, not a secure vault.

## Client configuration

Variables with the Vite `VITE_` prefix are compiled into browser-delivered code. Never put passwords, API secrets, private tokens, or database credentials in a Vite client environment variable.

## Reporting a vulnerability

Please follow the private reporting instructions in [SECURITY.md](../SECURITY.md). Do not publish exploitable vulnerability details or personal data in an ordinary issue.
