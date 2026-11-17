# 🧩 Compatibility

## Supported environment
The documented developer runtime is Node.js 22 with npm. The application targets modern evergreen browsers with JavaScript enabled and support for React 19, ES modules, CSS Grid, Fetch/XHR behavior, and localStorage where available.

## Graceful degradation
- If localStorage is blocked, the page remains usable but preferences are not retained.
- If a photo is missing, an initials fallback is displayed.
- If employee JSON cannot be fetched, the page offers retry.
- Reduced-motion preferences disable most transitions and animations.

## Deployment considerations
The current Router setup uses BrowserRouter at `/`. Static hosts must serve `index.html` for the root route. If deployed under a path prefix, configure Vite's base path and test static JSON resolution.

No Internet Explorer, legacy browser, or mobile OS support matrix has been validated. Do not claim universal browser support without testing.
