# 🔐 Application security overview

This document describes technical security behavior in the current frontend. The repository-level disclosure route and maintainer guidance are in [SECURITY.md](../SECURITY.md).

## Current security posture
The app is a client-side static directory. Data is stored in a publicly served JSON file. There is no login, authentication, session, authorization middleware, private API, or server-side database. Search and department filters do not restrict the underlying downloadable file.

## Main risks
1. **Public data leakage:** all JSON fields are downloadable.
2. **Third-party resource exposure:** profile images are requested from external hosts.
3. **Dependency risk:** runtime and build dependencies can contain known vulnerabilities.
4. **Browser state assumptions:** localStorage can be read or modified by the user.
5. **Future feature drift:** adding a frontend login screen without server-side enforcement could create a false sense of security.

## Controls already present
The project documents the public-data boundary, keeps secrets out of client configuration, uses dependency update/review automation, and includes CodeQL analysis. These controls do not replace a full security review.

## Required before real employee data
A protected backend, authenticated identity, server-side authorization, least privilege, audit events, secure storage, retention/deletion procedures, and a threat model must be designed and reviewed together.
