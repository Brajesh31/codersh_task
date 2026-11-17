# ↩️ Rollback

## Static deployment rollback
Keep the last known-good `dist/` artifact or identify the last known-good commit. Restore/redeploy that version using the selected hosting provider's documented mechanism.

## Source rollback
Use Git revert for a published change where possible. Review dependent commits before reverting. Avoid force-pushing shared history except as part of a carefully coordinated sensitive-data removal.

## Verification after rollback
- Root page loads.
- JSON asset returns the expected safe dataset.
- Search and filtering work.
- Profile dialog opens and closes.
- No private information is exposed.
- CI is green for the rollback commit.

A rollback does not automatically remove older Git history, browser caches, public forks, or external copies of published files.
