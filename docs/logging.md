# 🪵 Logging and diagnostics

The application currently does not contain an application logging service or telemetry integration. It should not emit employee objects, email addresses, phone values, compensation, or search terms to the console or a third-party service.

## Local troubleshooting
Use browser DevTools Network to inspect whether `employeesData.json` loads and returns valid JSON. Use the Console for JavaScript errors. Check the built output to confirm the data file is present at the expected base path.

## Safe diagnostic principles
- Prefer error categories and request status over raw response dumps.
- Never log complete employee records.
- Do not add analytics or session replay without a privacy assessment and consent/legal review where required.
- Do not log localStorage values as part of error reports.
- Keep production diagnostics proportionate to the fact this is a static demo.

If a telemetry system is introduced, document the event schema, data minimization, retention, access, and deletion process first.
