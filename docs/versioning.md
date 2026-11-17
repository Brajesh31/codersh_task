# 🏷️ Versioning and release identity

## Current state

The package currently reports version `0.0.0`, reflecting an unreleased development project. No formal public release history, compatibility promise, or published release artifact is claimed. Do not show a release badge until a real GitHub release exists.

## Proposed semantic-version convention

When the project begins publishing releases, use semantic versioning:

| Change type | Version impact | Employee Directory example |
| --- | --- | --- |
| MAJOR | Incompatible public behavior or data contract change | Rename/remove required fields or change filter semantics incompatibly |
| MINOR | Backward-compatible user-facing capability | Add a new optional field or a new page without breaking existing data |
| PATCH | Backward-compatible defect or documentation fix | Correct dialog behavior or error copy |

The version must describe the public interface and data contract, not the number of commits.

## Release procedure

1. Confirm the target commit has passed CI, documentation validation, CodeQL, and security gates.
2. Review the complete npm audit, not only the production subset.
3. Confirm sample employee data is synthetic and safe for public release.
4. Update `CHANGELOG.md` with user-visible additions, changes, fixes, risks, and known limitations.
5. Update `package.json` version and regenerate `package-lock.json` using npm.
6. Run `npm ci`, `npm run lint`, `npm test`, and `npm run build`.
7. Inspect the production `dist/` output.
8. Create a Git tag `vX.Y.Z` and publish a matching release only after verification.

## Compatibility notes

The application is a static frontend with a JSON data contract. Breaking changes may affect both the deployed site and any users or forks that reuse the sample schema. Record required data migrations in a release note even when no database exists.

## Citation metadata

Update `CITATION.cff` only when a real release or citation version exists. Do not fabricate a DOI, release date, or archival identifier.
