# 🌟 Product overview

## What the product is
Employee Directory is a small browser-based directory for a fixed sample dataset. It provides a card-oriented view of employees, supports searching by name or email, narrows by department, and opens a detail dialog for a selected record.

It is a front-end demonstration, not a human-resources information system. The application has no server-side identity, permissions, employee write operations, workflow approvals, audit trail, or database.

## Intended value
- Reduce friction when scanning a small team list.
- Let a visitor find a known employee using familiar text search.
- Provide a concise summary and a focused detail view.
- Demonstrate React component composition and client-side data processing.
- Keep onboarding simple through Vite and an npm lockfile.

## Primary user flow
1. Visitor opens the root route.
2. The application requests the public JSON asset.
3. Valid records are normalized and displayed.
4. Visitor searches by name/email or filters by department.
5. Visitor activates a card to inspect a profile.
6. Visitor closes the dialog and returns to the results.

## Data and privacy model
All records originate in a public static asset. Every field in that file is retrievable by a visitor who can access the website. The project must use synthetic or explicitly authorized public data. Client-side filtering is not a privacy control.

## Success criteria for this demo
- Install and build with the committed lockfile.
- Render valid records without malformed-row crashes.
- Search and exact department filtering behave consistently.
- Empty, loading, and request-failure states are understandable.
- Core controls work with a keyboard.
- Documentation describes the implemented system honestly.

## Non-goals
Private employee administration, authentication, payroll, attendance, record editing, data exports, workflow approvals, and organization-wide integrations are outside the current scope.
