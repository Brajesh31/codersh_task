# 🌱 Environment variables

## Current requirements
There are no required environment variables. The app loads a public static JSON asset and uses no private external API key. The `.env.example` file is retained as an explicit note, not as a source of hidden configuration.

## Vite exposure warning
Values prefixed with `VITE_` are made available to browser-side code and can be inspected in generated assets. Use them only for public configuration, such as a non-sensitive public feature flag or deployment setting. Never use them for passwords, private API tokens, database credentials, or signing secrets.

## Adding a variable
1. Document its purpose and whether it is public.
2. Add a safe placeholder to `.env.example`.
3. Validate required values at startup/build time.
4. Document defaults and failure behavior.
5. Ensure no actual secret is committed to Git.
