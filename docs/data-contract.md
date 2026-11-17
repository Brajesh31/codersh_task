# 🧾 Employee data contract

## 🎯 Purpose and trust boundary

The directory consumes one JSON array from `public/employeesData.json`. The same file is delivered to every visitor, so its schema must be designed for public demonstration data only. This contract describes what the current frontend accepts. It is not a private HR record format or a backend validation guarantee.

## 📦 Record schema

| Property | Required | Accepted type | Rules and use |
| --- | --- | --- | --- |
| `id` | Yes | string or finite number | Must not be empty; must be unique after string conversion; React list key |
| `name` | Yes | string | Must contain a non-whitespace character; shown on card and dialog |
| `email` | Yes | string | Must contain a non-whitespace character; shown and searched; sample records use `example.invalid` |
| `department` | Yes | string | Must contain a non-whitespace character; exact-match filter value |
| `photo` | No | string | HTTPS URL or root-relative path only; other schemes and protocol-relative URLs are discarded |
| `contact` | No | string or number | Converted to a string for display; should be empty in public sample data |
| `salary` | No | displayable value | Legacy/demo-only UI field; never include in the public sample dataset |

## ✅ Normalization rules

`normalizeEmployees(payload)` applies these rules:

1. The top-level payload must be an array. A different value throws a `TypeError` and the page displays its load-error state.
2. Non-object rows and arrays masquerading as records are skipped.
3. IDs must be non-empty strings or finite numbers. Duplicate IDs are skipped after the first accepted record.
4. Name, email, and department must be non-empty strings after trimming whitespace.
5. Accepted name, email, and department values are trimmed before rendering and filtering.
6. Missing or non-string photo values become an empty string. Only HTTPS URLs and root-relative paths are retained. `javascript:`, `data:`, `file:`, FTP, and protocol-relative URLs are not accepted.
7. String and numeric contact values are converted to strings. Other contact values become an empty string.
8. If rows are skipped, the UI displays a non-blocking warning while retaining valid rows.

The validator is deliberately defensive. It does not prove that an email address belongs to a person, verify remote image ownership, or enforce employment data correctness.

## 🧪 Example

The example below is synthetic. The reserved `.invalid` domain is intentionally non-routable.

```json
[
  {
    "id": 101,
    "name": "Alex Example",
    "photo": "",
    "department": "Frontend Developer",
    "email": "alex@example.invalid",
    "contact": ""
  }
]
```

## 🔎 Search and filtering

Search is case-insensitive and checks the trimmed employee name and email. Department selection uses exact equality against the configured labels in `src/Views/Pages/Home.jsx`. This is intentionally simple for the current five-department demo. A future data-driven selector should derive distinct department values from normalized records and define ordering.

## 🔐 Privacy rules

- Keep `public/employeesData.json` synthetic.
- Do not include real names, contact details, salaries, home addresses, staff identifiers, or confidential employment information.
- Do not assume hidden UI fields are private. All fields in the JSON remain downloadable.
- Do not store sensitive employee details in localStorage.
- Review the production `dist/employeesData.json` artifact before deployment.

Related guidance: [Data validation](data-validation.md), [Data flow](data-flow.md), [Privacy](privacy.md), and [Security](security.md).
