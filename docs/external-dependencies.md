# 🔗 External dependencies

The application runtime depends on the static hosting origin for the compiled site and JSON asset. README badges are loaded from Shields.io. The current privacy-safe sample uses empty image fields, so it does not request external employee portraits.

## Failure modes
- If the static host or JSON asset is unavailable, the page displays an error and retry control.
- If README badge services are unavailable, badges may not render, but the application is unaffected.
- If a future profile image host is unavailable, the UI should retain a useful initials fallback.

## Resilience guidance
Keep core directory behavior independent of optional imagery and external badge services. Prefer local, licensed, optimized assets when dependable visual identity is needed. Do not make remote image metadata a required field for employee validation.
