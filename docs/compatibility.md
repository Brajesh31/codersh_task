# 🧩 Compatibility

## Supported environment
The documented developer runtime is Node.js 22 with npm. The application targets modern evergreen browsers with JavaScript enabled and support for React 19, ES modules, CSS Grid, the browser Fetch API, and localStorage where available.

## Graceful degradation
- If localStorage is blocked, the page remains usable but preferences are not retained.
- If a photo is missing, an initials fallback is displayed.
- If employee JSON cannot be fetched, the page offers retry.
- Reduced-motion preferences disable most transitions and animations.

## Deployment considerations
The application renders its directory at `/` without a client-side routing dependency. Static hosts must serve `index.html` at the application root. If future routes are added, configure the host's single-page-application fallback. If deployed under a path prefix, configure Vite's base path and test static JSON resolution.

No Internet Explorer, legacy browser, or mobile OS support matrix has been validated. Do not claim universal browser support without testing.
