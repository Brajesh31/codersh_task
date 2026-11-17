# 🧤 Data protection

## Current data classes
The sample JSON currently includes identity-like fields, email-like values, contact values, department labels, optional salary values, and remote photo URLs. These values are delivered to every visitor with access to the site.

## Minimum controls
- Use synthetic records unless data owners have approved public disclosure.
- Remove contact and salary fields when the demo does not need them.
- Minimize photo data and use appropriately licensed assets.
- Review both repository source and generated `dist/` output.
- Do not store employee records in localStorage.
- Keep support/issue reports free from personal data.

## Future private-data processing
A real employee directory needs a documented lawful basis and purpose, data-owner approval, authenticated access, retention/deletion rules, protected transport/storage, access logging, and a data-breach response process. This repository is not currently designed to provide those controls.
