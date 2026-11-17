# 📈 Scalability

This frontend is designed for a small static sample, not an organization-wide employee directory.

## Current limits
Every visitor downloads the complete JSON asset. The browser stores every valid record in memory and filters it locally. All matching employee cards are rendered at once. External image requests may become significant as the list grows.

## Low-risk improvements for a larger public demo
- Derive the department options from the data rather than a hard-coded list.
- Compress and resize image assets.
- Add pagination or virtualization if measured rendering cost justifies it.
- Keep record fields minimal.
- Cache public static assets with suitable cache headers.

## When a protected backend is required
If records are confidential, do not scale the public JSON approach. Design server-side identity, authorization, data validation, pagination, audit events, retention, backup, and incident response before loading real data. A frontend filter is never an authorization control.
