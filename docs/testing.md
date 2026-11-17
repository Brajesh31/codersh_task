# 🧪 Testing and quality

## Current automated checks

- ESLint: `npm run lint`
- Production bundle: `npm run build`
- GitHub Actions runs both on pushes and pull requests.

The repository currently does not include a dedicated unit or browser test framework. A successful lint/build does not prove runtime behavior or accessibility.

## Manual smoke-test checklist

- [ ] Initial load displays a loading status before records arrive.
- [ ] Valid records render once each.
- [ ] Missing/duplicate required fields are skipped with a warning.
- [ ] A failed JSON request displays a useful error and retry control.
- [ ] Search matches names and emails without case sensitivity.
- [ ] Department filtering narrows results as expected.
- [ ] Clear filters resets both controls.
- [ ] Employee cards can be opened with keyboard and pointer.
- [ ] Dialog closes with close button, backdrop, and Escape.
- [ ] Dialog focus stays within the dialog while tabbing and returns on close.
- [ ] Empty photo values show a fallback avatar.
- [ ] Layout remains usable at narrow viewport widths.
- [ ] Reduced-motion preference is respected.

## Future test coverage

Add unit tests for dataset normalization, search/filter behavior, preference storage failures, and accessible dialog interactions. Add browser-level checks after choosing and documenting a supported test runner.
