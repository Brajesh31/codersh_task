# 🔑 Secret management

The current frontend does not require a private API key or server secret. The application uses public static JSON and public image URLs.

## Never commit
- Passwords or access tokens.
- Database credentials.
- Private signing keys.
- Unrestricted cloud credentials.
- Personal authentication data.

## Vite-specific warning
A variable prefixed with `VITE_` is exposed to code delivered to the browser. It is suitable only for public configuration. Moving a value into `.env.local` does not make a Vite client variable secret after build.

## If a backend is introduced
Store server credentials in the hosting platform's secret manager, restrict scopes, rotate after suspected exposure, and keep environment-specific configuration out of Git. Add secret scanning and incident procedures before connecting production resources.
