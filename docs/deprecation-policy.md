# 🧹 Deprecation policy

The project has no published external API or formal release compatibility contract. Changes to UI behavior and data fields should nevertheless be documented.

## Safe change process
1. Identify the field, command, workflow, or behavior being changed.
2. Search the source, tests, examples, and docs for references.
3. If contributors may rely on the old behavior, document the replacement and transition period.
4. Update tests and examples.
5. Remove obsolete references only after the transition is clear.
6. Record meaningful removals in CHANGELOG.md.

Do not deprecate or remove data fields used by sample records without updating normalization, profile rendering, fixtures, and data contract documentation.
