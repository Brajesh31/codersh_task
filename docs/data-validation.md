# ✅ Data validation and normalization

## 1. 📥 Dataset-level contract

The frontend fetches `employeesData.json` from the Vite public asset path. The response must be valid JSON whose top-level value is an array. HTTP failures, malformed JSON, or a non-array payload are treated as load failures. The user sees an error message and can retry.

## 2. 🧩 Record-level rules

The pure helper in `src/lib/employeeData.js` accepts a row only when:

- It is a plain object-like record, not `null` and not an array.
- Its ID is a non-empty string or finite number.
- Its name, email, and department are non-empty strings after trimming.
- Its ID has not already appeared in the accepted data.

The first accepted occurrence of an ID wins. Later duplicates are skipped. This keeps rendered React keys stable within the current response.

## 3. 🖼️ Optional photo source policy

A photo can be an HTTPS URL or a root-relative path beginning with one slash. Protocol-relative URLs and alternate schemes such as `javascript:`, `data:`, `file:`, or FTP are replaced with an empty string so the UI displays an initials fallback.

This is a client-side input hygiene rule. It does not verify that an HTTPS host is trustworthy, that a path exists, or that the image is licensed for use. Prefer local, reviewed assets for a stable public demonstration.

## 4. 📇 Optional values

- A string or numeric contact value is converted to a string. The public example dataset should leave contact information empty.
- Missing, non-string photo values are normalized to an empty string.
- Salary is not required by the data helper and must not be added to the public sample dataset.
- Additional fields are preserved by the helper, so the repository validator remains important for preventing private fields from entering the checked-in public fixture.

## 5. 🧪 Test coverage

The Node test suite covers:
- Valid records and optional defaults.
- Non-array payloads.
- Invalid rows and duplicate IDs.
- Unsupported IDs and blank required text fields.
- Trimming of accepted text fields.
- Numeric contact normalization.
- Safe and rejected photo URL schemes.
- Case-insensitive search and exact department filtering.
- Combined filters and blank filters.

Run the suite with `npm test`.

## 6. ⚠️ Deliberate limitations

The helper does not validate full email syntax, infer whether a record is truthful, verify photo licenses, or check external HTTPS content. It is not a server-side security boundary. The current app has no server-side endpoint or private store.

## 7. 🔁 Change protocol

When the record schema changes:
1. Update [the data contract](data-contract.md) and this guide.
2. Add positive and negative unit tests.
3. Update the privacy-safe sample JSON.
4. Update UI display, search/filter behavior, and error handling.
5. Update `scripts/validate_repo.py` so repository-level checks enforce the public fixture policy.
6. Rebuild and inspect `dist/employeesData.json` before deployment.
