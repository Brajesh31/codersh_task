# 🎯 Scope and limitations

## Included in the current scope
- One browser route at `/`.
- A static employee dataset in `public/employeesData.json`.
- Defensive client-side record normalization.
- Case-insensitive search over name and email.
- Exact department filtering using the current supported department list.
- Employee summary cards and a detail dialog.
- Browser-local persistence for search and department preferences.
- Responsive styling, keyboard-operable cards, and dialog focus handling.

## Explicitly excluded
| Capability | Why it is out of scope today |
| --- | --- |
| Login and account management | No identity provider or backend exists |
| Roles and authorization | No trusted server or protected resource exists |
| Database and migrations | Data is a static JSON asset |
| Employee creation/edit/delete | No write endpoint or persistence layer exists |
| Payroll or attendance | Not part of the current UI/data model |
| Audit logging | No server-side event store exists |
| File upload | No upload service or storage policy exists |
| API integrations/webhooks | No custom application API exists |
| Multi-tenant administration | No organization or tenant model exists |

## Boundary change criteria
Any proposal crossing these boundaries must include a threat model, privacy assessment, data lifecycle, authorization design, infrastructure cost, migration plan, and operational ownership. Do not present a frontend-only control as a security boundary.
