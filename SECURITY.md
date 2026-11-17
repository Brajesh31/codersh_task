# 🔐 Security Policy

## Supported versions
There is no published release/support matrix. Security reports should identify the affected commit or the current `main` branch. This prototype has not received an independent security audit.

## Private vulnerability reporting
Use [GitHub private vulnerability reporting](https://github.com/Brajesh31/codersh_task/security/advisories/new) where it is enabled. Do not publish exploit steps, credentials, private employee information, or unpatched vulnerability details in a public issue. If private reporting is unavailable, contact the repository owner privately via the contact method on the `@brajesh31` GitHub profile.

Include the affected path/commit, impact, reproduction details, and a safe contact method. A response-time guarantee is not offered. Coordinated disclosure should allow time for investigation and a fix before public details are released.

## Security boundaries and current risks
- `public/employeesData.json` is downloadable by every visitor. It must contain only synthetic or expressly authorized public data.
- The application has no authentication, authorization, server, database, or protected API.
- Browser filtering is presentation behavior, not access control.
- Local storage is user-controlled and must not contain secrets or sensitive employee records.
- Vite `VITE_*` values are exposed to the browser and must never hold private secrets.
- External photo hosts can observe requests and may change or remove assets.
- Dependency vulnerabilities should be reviewed through Dependabot, dependency review, and npm audit.

## Maintainer response process
1. Acknowledge and privately clarify the report where possible.
2. Reproduce against the stated commit without exposing sensitive records.
3. Assess impact, affected versions, and whether public data or code execution is involved.
4. Prepare a focused fix and regression check.
5. Coordinate disclosure and publish a concise advisory when appropriate.
6. Record lessons and update the threat/risk documentation.

See [docs/security.md](docs/security.md), [docs/threat-model.md](docs/threat-model.md), and [docs/incident-response.md](docs/incident-response.md).
