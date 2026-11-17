# 🕊️ Privacy overview

The application does not require a visitor account and does not send employee data to a custom backend. It loads the full employee dataset from a public static asset. The browser may also request external image URLs contained in that dataset.

Search and department preferences are saved in localStorage on the visitor's current browser. They are not synchronized to a server by this application.

**Important:** the source JSON is public. The UI does not hide the complete dataset from a determined visitor. Do not use the app with confidential employee records. Use synthetic or expressly authorized public examples only.

The project has no analytics or session-replay integration configured. See [Data privacy](data-privacy.md), [Retention](data-retention.md), and [Security](security.md).
