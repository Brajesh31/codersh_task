# 🚀 Release checklist

## Scope and metadata
- [ ] Release scope and version are approved.
- [ ] CHANGELOG.md is updated.
- [ ] CITATION.cff is updated when version metadata changes.
- [ ] Known limitations are documented.

## Quality
- [ ] `npm ci` completed.
- [ ] `npm run lint` passed.
- [ ] `npm test` passed.
- [ ] `npm run build` passed.
- [ ] Documentation validation passed.
- [ ] Browser smoke test completed.

## Privacy and security
- [ ] Public JSON inspected in source and build output.
- [ ] Only synthetic or authorized data is included.
- [ ] No secrets are present.
- [ ] Dependency and CodeQL alerts reviewed.
- [ ] External assets and licenses reviewed.

## Publication and recovery
- [ ] Deployment target and base path verified.
- [ ] SPA fallback confirmed.
- [ ] Previous known-good build retained.
- [ ] Post-release smoke test completed.
