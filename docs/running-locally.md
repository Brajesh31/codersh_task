# 🏃 Running locally

| Task | Command |
| --- | --- |
| Install locked dependencies | `npm ci` |
| Start development server | `npm run dev` |
| Run lint | `npm run lint` |
| Run unit tests | `npm test` |
| Build static files | `npm run build` |
| Preview production build | `npm run preview` |

Vite prints the local address. If port 5173 is occupied, Vite may choose another available port. Do not assume the printed URL if the terminal reports a different one.

The preview server is a local verification server, not a production hosting solution. For deployment, publish `dist/` to a static host and configure SPA fallback behavior.
