# 🚨 Incident response

This is a lightweight response guide for repository maintainers. It does not replace an organization's formal incident plan.

## Trigger examples
- Confidential employee data was committed or published.
- A credential or repository token was exposed.
- A dependency or workflow compromise is suspected.
- A serious vulnerability affects the deployed static site.

## Response sequence
```mermaid
flowchart TD
  A[Report or detect issue] --> B[Classify severity and scope]
  B --> C[Contain exposure]
  C --> D[Preserve safe evidence]
  D --> E[Identify affected commits and assets]
  E --> F[Fix, rotate, remove or replace]
  F --> G[Verify build and public artifacts]
  G --> H[Communicate and document lessons]
```

## Data exposure
Remove unsafe data from the published asset, redeploy, and consider Git history cleanup where necessary. A new commit alone does not remove the old value from history, forks, or caches. Coordinate history rewriting carefully and rotate any exposed credentials.

## Communications
Use private channels for sensitive details. Do not paste affected employee records into issues or incident logs. Record what happened, impact, containment, corrective action, and follow-up owner.
