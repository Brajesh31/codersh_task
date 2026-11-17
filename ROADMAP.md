# 🧭 Roadmap

This roadmap is directional. It has no delivery dates and does not imply that proposed work is already implemented.

## ✅ Current baseline
- [x] React/Vite single-page employee directory.
- [x] Public JSON dataset with defensive client normalization.
- [x] Name/email search and department filtering.
- [x] Employee card and accessible profile dialog improvements.
- [x] Local preference persistence with storage-failure tolerance.
- [x] Unit tests for data normalization and filtering.
- [x] Lint, test, and production-build CI.
- [x] Project documentation and SVG architecture assets.

## 🔜 Near-term priorities
1. **Privacy-safe data:** replace personal-looking sample values with synthetic records and confirm photo usage rights.
2. **Browser tests:** introduce a browser test framework for search, retry, modal focus behavior, and responsive states.
3. **Data-driven departments:** derive filter options from validated records and handle unknown departments.
4. **Accessibility verification:** test with keyboard-only interaction and at least one screen reader, then record observed results.
5. **Visual verification:** capture real desktop and mobile screenshots from a verified build.

## 🏗️ Larger future work
- Introduce an API and protected data store only if authenticated employee management becomes a real requirement.
- Add identity, role-based authorization, audit logging, and server-side validation as one coordinated backend design.
- Add server-side pagination and search if the dataset grows beyond a small static directory.

## 🚫 Explicitly out of scope today
There is currently no backend, database, sign-in, employee creation/editing, attendance, payroll management, file upload, or integration API. These are not promised features.
