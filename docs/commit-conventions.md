# 📝 Commit message conventions

## 1. Format

Use a short imperative subject with a conventional-style type:

    type(optional-scope): imperative summary

The type communicates the purpose of the change. Scope is optional and should identify a meaningful area such as ui, data, docs, or ci.

## 2. Recommended types

| Type | Purpose | Example |
| --- | --- | --- |
| feat | User-visible capability | feat(ui): add department filter |
| fix | Defect correction | fix(data): skip duplicate employee ids |
| docs | Documentation only | docs: clarify static data boundary |
| test | Test addition or correction | test(data): cover invalid photo schemes |
| refactor | Internal restructuring without intended behavior change | refactor(ui): extract profile header |
| perf | Measured performance improvement | perf(data): reduce repeated filtering work |
| chore | Maintenance and tooling | chore: update Node runtime pin |
| ci | Workflow changes | ci: verify docs links on pushes |
| security | Security-specific correction | security: block unsafe profile image schemes |
| build | Build-system change | build: align Vite plugin versions |

## 3. Subject rules

- Keep the first line concise and specific.
- Use imperative wording such as add, fix, remove, or document.
- Do not end the subject with a full stop.
- Avoid vague subjects such as update files or changes.
- Do not claim a security or performance improvement without evidence.

## 4. Commit body

For complex changes, explain why the change is needed, important implementation decisions, user-facing or data-contract impact, tests and validation run, and remaining risks or follow-up work.

## 5. Breaking changes

Mark an incompatible data schema or behavior change with an exclamation mark after the type or an explicit BREAKING CHANGE footer. Update data-contract documentation, tests, changelog, and migration guidance.

## 6. Examples

    feat(search): support email prefix lookup
    fix(dialog): restore focus after Escape
    docs: add release preparation guide
    test(data): reject blank department values
    chore(deps): remove unused type packages
    ci: retry lockfile push after concurrent main updates

Commit messages are historical records. Keep them accurate and do not rewrite shared history merely to improve wording.
