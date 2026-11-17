# 🔊 Screen-reader support

The page includes a main landmark, a labelled filter section, labels for both inputs, an aria-live result summary, a status role for loading, and an alert role for request errors. Employee cards expose their action purpose through an accessible name. The profile dialog has `role="dialog"`, `aria-modal="true"`, a labelled heading, and a description region.

Profile photos are treated as decorative because the employee name is present in the dialog heading. Initials fallbacks are decorative text, not independent controls.

No formal screen-reader test has been recorded. Verify the page with at least one desktop screen reader and one supported browser combination. Record actual announcements, focus movement, modal entry/exit, and any issues. Avoid claiming universal screen-reader support without testing.
