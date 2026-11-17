# 🔗 External dependencies

The core directory runtime depends on the static hosting origin for its compiled application and JSON asset. Employee photos may be loaded from third-party image hosts listed in the JSON. README badges are rendered from external badge services.

## Failure modes
- If the static host or JSON asset is unavailable, data loading fails and the retry state appears.
- If a photo host is unavailable, a particular image may fail while text remains readable; a missing photo value uses an initials fallback.
- If Shields.io is unavailable, README badge images may not display, but the application is unaffected.

## Resilience guidance
Keep the core UI independent of third-party image availability. Do not make remote image metadata a required part of employee record validation. Prefer local, licensed, optimized assets when an application needs dependable visual identity.
