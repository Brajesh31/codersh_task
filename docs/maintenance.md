# 🛠️ Maintenance guide

## Routine cadence
- Review dependency and action updates weekly.
- Run CI on each change.
- Review the public dataset before every deployment.
- Recheck broken image/asset links periodically.
- Review known issues and roadmap when behavior changes.
- Keep documentation links synchronized with the documentation hub.

## Code maintenance
Keep data normalization and filtering pure and tested. Keep state ownership in the Home page unless the UI grows enough to justify extraction. Avoid dependencies without clear benefit.

## Data maintenance
Treat `public/employeesData.json` as public. Keep synthetic records, unique IDs, and the documented property types. Do not use private organizational data.

## Ownership
The repository owner is responsible for merge, release, and security response decisions. No formal SLA or secondary on-call maintainer is declared.
