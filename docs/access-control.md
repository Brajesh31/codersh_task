# 🚫 Access-control status

## Current status: not implemented
The employee directory has no authenticated users, roles, permissions, protected routes, server-side authorization, or private API. All site visitors receive the same public assets.

The department selector is a display filter. The search field is a display filter. Neither restricts access to records. A visitor can request `employeesData.json` directly and inspect every field.

## Required design if access control is added
- Trusted server-side user identity.
- Explicit roles or resource permissions.
- Authorization checks for every protected read/write.
- Least-privilege access and secure session lifecycle.
- Server-side data minimization.
- Audit trails for privileged operations.
- Tests for denied as well as permitted access.

Do not add a frontend-only password prompt and describe it as access control.
