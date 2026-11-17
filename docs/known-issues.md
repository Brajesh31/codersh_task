# ⚠️ Known issues and limitations

The following are known architectural limitations, not necessarily defects.

| Item | Impact | Workaround or next step |
| --- | --- | --- |
| Static JSON is public | Cannot safely hold confidential records | Use synthetic data; design protected backend if needed |
| No authentication/authorization | All visitors get the same data | Do not claim access restriction |
| Department list is hard-coded | New department may not be selectable | Derive options from records |
| No browser E2E suite | UI regressions may escape unit tests | Add browser automation |
| No formal accessibility audit | Code-level affordances are not proof of conformance | Run screen-reader and WCAG checks |
| Third-party image licensing/availability | Photo URL can fail or be unlicensed | Verify rights or use local licensed assets |
| No server-side pagination | Large datasets require full download | Redesign before scaling |
| No telemetry or monitoring | No automated frontend error/uptime insight | Use host-level monitoring if needed |

Keep this page current. Remove an item only after the underlying code and verification evidence support its closure.
