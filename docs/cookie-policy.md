# 🍪 Cookies, browser storage, and tracking status

## 1. Current application behavior

The application code does not create cookies and does not include an analytics, advertising, or session-replay package. It uses browser `localStorage` for two convenience preferences:

| Key | Value | Purpose |
| --- | --- | --- |
| `savedSearchTerm` | Search string | Restore the visitor's current name/email query |
| `savedDepartment` | Department label | Restore the selected department filter |

localStorage is not a cookie, but it is browser storage and still needs accurate disclosure. The app does not store employee profiles or submit these preferences to an application server.

## 2. Storage lifecycle

The values remain in the current browser profile until the visitor clears browser storage, the application removes the keys, or the browser clears the site data. The application does not offer an in-app account-based sync or server-side deletion workflow.

The code handles localStorage access errors so the directory remains usable when storage is blocked or unavailable. In that case preferences may not persist.

## 3. Third-party and hosting behavior

A static hosting provider, CDN, GitHub Pages, or an external badge/image provider may have separate logging, cookie, or privacy practices. This repository does not configure or control those systems. Review the selected hosting provider's own policy before production deployment.

The current sample uses empty photo fields, so the page does not make remote employee portrait requests. README badge images may be loaded from Shields.io when the README is viewed.

## 4. Changes requiring review

Before adding analytics, advertising, account sessions, user identifiers, persistent tracking, or cross-site embeds:
1. Document the exact technology and purpose.
2. List data collected and where it is sent.
3. Review consent/notice requirements for the deployment jurisdiction.
4. Define retention and deletion.
5. Provide an opt-out or disable mechanism where required.
6. Update this document and the privacy documentation before release.

Do not describe the application as “cookie-free” without considering the selected host and external providers. The accurate current statement is that the app source does not set cookies; it uses localStorage for two preferences.
