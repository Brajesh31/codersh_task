# 🗃️ Data governance

## 1. Purpose and current scope

This project contains a small, public JSON sample used by a browser-only directory. The current data governance model is intentionally restrictive: use synthetic demonstration records, keep fields minimal, and do not treat the repository as an HR record system.

## 2. Data ownership and source of truth

| Data | Current source | Responsibility |
| --- | --- | --- |
| Employee demo records | public/employeesData.json | Repository maintainer reviews changes |
| Required field rules | docs/data-contract.md and src/lib/employeeData.js | Maintainer keeps docs, tests, and implementation aligned |
| Department labels | Frontend selector values | Maintainer updates UI and documentation together |
| Search and department preferences | Visitor browser localStorage | Visitor controls their browser storage |

There is no data ingestion pipeline, HR integration, authoritative employee source, or database.

## 3. Data classification

| Classification | Example | Allowed in current repository? |
| --- | --- | --- |
| Synthetic demo data | Names such as Alex Example and reserved example.invalid email | Yes |
| Public, expressly authorized information | Data with documented permission and purpose | Only after review and approval |
| Personal employee information | Personal email, phone, address, compensation | No |
| Confidential or restricted HR data | Internal IDs, reviews, payroll, medical or disciplinary information | No |
| Secrets and credentials | API keys, passwords, tokens | Never |

The fact that a value is hidden in the UI does not make it private. All JSON properties in public/ are downloadable.

## 4. Data quality rules

- Every record must have a unique non-empty string or finite numeric ID.
- Name, email, and department are required non-empty strings.
- Required text is trimmed before rendering.
- Optional photos are restricted by the client helper to HTTPS or root-relative URLs.
- The checked-in public example should use example.invalid email addresses.
- The sample must not contain contact, salary, phone, or address properties.
- Duplicate IDs and malformed records must be rejected by validation.

## 5. Change control

When the schema changes:
1. Record why the field is needed.
2. Identify whether the field is public or sensitive.
3. Update the data contract and this governance page.
4. Update the normalizer and unit tests.
5. Update synthetic example records.
6. Update UI display, search/filter behavior, and diagrams.
7. Run repository validation, tests, and production build.
8. Inspect the built dist/employeesData.json before publication.

## 6. Retention and deletion

The data file is version controlled. Removing a value from the current file does not erase old commits, forks, clones, caches, or downloaded copies. Follow docs/data-retention.md and the incident-response process for accidental disclosure.

## 7. Future transition to real employee data

Confidential employee management would require a new architecture with server-side authentication, authorization, validation, logging, retention controls, backup/recovery, and privacy review. Adding a database alone would not solve these requirements.

## 8. Governance review checklist

- [ ] Purpose and data owner are documented.
- [ ] Only minimum necessary fields are collected.
- [ ] Public/private classification is recorded.
- [ ] Source and permission are known.
- [ ] Retention and deletion behavior are understood.
- [ ] Validators and tests enforce the data contract.
- [ ] Published output has been inspected.
