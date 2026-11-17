# 🔐 Privacy and security

## Public dataset boundary
Anything under Vite's `public/` directory is copied into the production output and can be downloaded directly. The current sample data has synthetic names and reserved `@example.invalid` email addresses; it intentionally omits contact numbers, salary values, and remote portraits.

Any additional data field placed in the public JSON becomes accessible to visitors, even if the React interface does not display it. Do not use this pattern for private employee records.

## Current security boundary
The application has no authentication or authorization and no server-side data store. Browser filtering is not access control. localStorage is user-controlled convenience storage, not a secure vault.

## Client configuration
Vite `VITE_*` variables are compiled into browser-delivered code. Never put passwords, API secrets, private tokens, or database credentials in client variables.

## External resources
The privacy-safe sample currently has empty photo fields and does not make profile-image requests. If a remote image is added, review the provider, rights, request metadata, and fallback behavior.

## Reporting
Follow [SECURITY.md](../SECURITY.md). Do not publish exploit details, credentials, or personal data in an ordinary issue.
