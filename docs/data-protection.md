# 🧤 Data protection

## Current sample
The repository's public employee JSON is an example fixture. It uses synthetic names, `@example.invalid` email addresses, empty photo values, and no contact or salary fields. A validation script enforces these privacy-safe fixture rules.

## Public asset rule
Vite copies the `public/` directory into the production output. Every field in the JSON can be downloaded. Hiding a field in React is not protection.

## Minimum controls
- Keep the demo dataset synthetic.
- Do not add actual phone numbers, addresses, compensation, or confidential personnel attributes.
- Review the source JSON and built `dist/employeesData.json`.
- Do not store employee records in localStorage.
- Keep support reports and screenshots free of personal information.
- Check image rights before adding profile photos.

## Future real-data handling
A real employee directory needs approved purpose and ownership, authenticated access, server-side authorization, protected transport/storage, auditability, retention/deletion rules, and incident response. This repository does not supply those controls.
