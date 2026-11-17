# 💾 Backup and restore

## Current state
There is no production database, uploaded document store, or automated backup service. The repository itself is hosted in GitHub and has its normal version history. The public sample dataset is versioned as source code.

## Source recovery
Use Git history to inspect or restore a prior repository revision. Before reverting, understand whether later changes depend on the current structure and preserve contributor work.

## Deployment recovery
For a static deployment, retain the last known-good build artifact in the hosting platform or CI artifact store where practical. Rebuild from a known commit and verify the published app and JSON asset.

## Future backend requirement
A database-backed system would need scheduled, encrypted backups, retention periods, access restrictions, restore drills, recovery-point and recovery-time objectives, and documented ownership. None of those controls is currently configured.
