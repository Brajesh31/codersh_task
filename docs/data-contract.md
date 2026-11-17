# 🧾 Employee data contract

## Current record shape

The sample records currently use the following properties:

| Property | Expected shape | Notes |
| --- | --- | --- |
| `id` | string or number | Required, unique within the dataset, used as the React key |
| `name` | string | Required, displayed and searched |
| `email` | string | Required, displayed and searched |
| `department` | string | Required, exact match against the department selector |
| `photo` | string | Optional remote image URL |
| `contact` | string or number | Optional display value |
| `salary` | number or displayable value | Optional demonstration field |

## Validation behavior

The frontend accepts only an array. It skips records that are not objects, are missing required identity/search fields, or duplicate an earlier ID. Optional photo and contact values are normalized to empty strings. The loader warns when records are skipped.

This is defensive UI validation, not a complete data-governance or server-side validation boundary.

## Example

```json
[
  {
    "id": 101,
    "name": "Alex Example",
    "photo": "",
    "department": "Frontend Developer",
    "email": "alex@example.invalid",
    "contact": "",
    "salary": 0
  }
]
```

Use synthetic data in examples. Never commit real employee contact information or compensation data.

## Search and filtering

Search is case-insensitive and checks name and email. Department filtering uses exact department equality. The currently supported department labels are defined in `src/Views/Pages/Home.jsx`; keep that list consistent with the dataset or derive it from validated records in a future improvement.
