# ⏳ Data retention

## Current employee dataset
The dataset is a version-controlled static file and is published with the site. There is no automatic retention schedule, server-side record lifecycle, or deletion job. A change to the file does not necessarily remove prior values from Git history, forks, mirrors, or cached copies.

## Browser preferences
The app writes search and department strings to localStorage until the visitor clears browser storage or the app's code changes/removes those keys. No server-side retention is involved.

## Future real-data requirements
Before using personal data, define purpose, owner, retention duration, review cadence, deletion trigger, backup expiry, and legal hold behavior. Retention must be implemented and operated, not merely described.
