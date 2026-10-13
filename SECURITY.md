# Security Policy

## Supported versions

No release or support matrix is published. Reports should identify the affected commit or current default branch. This prototype has not received a security audit.

## Reporting a vulnerability

Do not publish exploit details, credentials, or private employee information in a public issue. Use GitHub's private vulnerability reporting for this repository when available. Otherwise, contact `@brajesh31` privately through the contact method on the GitHub profile. Include the affected file, impact, reproduction steps, and a safe way to follow up. A maintainer will coordinate a response when possible; no response-time guarantee is made.

Ordinary UI bugs can be reported publicly. Do not send real credentials as proof.

## Data and security notes

- `public/employeesData.json` is served as a public static file. The entire dataset, including contact and salary fields, is readable by site visitors.
- Treat the included employee-like records as sample data. Replace them with synthetic or explicitly authorized records before public deployment.
- Employee photos are loaded from external image providers; verify their usage rights and availability.
- Search and department choices are stored in browser localStorage on the current device.
- The application has no authentication, authorization, API server, or database.
- Do not add private API keys to Vite `VITE_*` variables; they are included in browser assets.
