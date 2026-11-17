# ⏳ Data retention and lifecycle

## 1. Current employee dataset

The sample directory is stored in a version-controlled public JSON file and is included in the static production output. There is no server-side retention scheduler, employee record lifecycle, database deletion, or automatic archival job.

A change to the file does not necessarily remove previous values from:
- Git history, forks, mirrors, and clones.
- Cached copies of a previously published static asset.
- Browser caches or screenshots.
- Third-party services that may have received a copy.

Removing a field from the current JSON is not equivalent to erasing all historical copies.

## 2. Browser preference lifecycle

The app stores only the search term and department selection in localStorage:
- `savedSearchTerm`
- `savedDepartment`

These values remain in the visitor's browser until they clear site data or the application removes the keys. The app does not sync this state with a server or account. Storage may be unavailable, in which case the app should continue to work without persistence.

## 3. Public sample-data policy

Keep records synthetic. Do not add real employee contact information, salary, home address, confidential identifiers, or staff-only details. The public fixture validator rejects common private fields and requires reserved `@example.invalid` email addresses.

## 4. Requirements before real data is introduced

Before using personal or confidential employee data, define:
1. Purpose and lawful basis.
2. Data owner and authorized users.
3. Minimum fields required for the application.
4. Retention duration and review cadence.
5. Deletion trigger and evidence of deletion.
6. Backup expiration and restore behavior.
7. Legal hold requirements where applicable.
8. Request handling and incident response.

This would require a different architecture with server-side access control. The current static file cannot provide private records.

## 5. Deletion and exposure incidents

For a suspected public disclosure, remove the affected field/data from current deployment, restrict further publication, review Git history and forks, and follow SECURITY.md/incident response guidance. Do not promise complete erasure until caches, historical copies, and recipients have been assessed.
