# Security review — 27 October 2026

Scope: this frontend repository and npm dependency tree. This is not a penetration test or a guarantee of security. The separate API, Vercel account settings, DNS, email hosting, Git history, and contents of existing PDF/archive files were not audited.

## Remediation

- Upgrade Next.js 14.2.4 to patched maintenance release 15.5.28 and React to 19.3.1. Adapt server params and headers to asynchronous APIs.
- Upgrade next-intl and compatible dependencies. Override Next.js's old PostCSS dependency with the same patched PostCSS 8.x used by the project. Preserve this override until the upstream version no longer needs it.
- Sanitize API article HTML using an allowlist before rendering: strip scripts, event handlers, embedded frames/forms, inline styles, and unsafe URL schemes.
- Add nosniff, same-origin framing, referrer and permissions headers. The CSP restricts object embedding, base URLs and framing; it is not a full script-src nonce policy.
- Disable unused sign-in/sign-up demo routes. Their unhandled HTML forms could send entered credentials through a GET query string. These routes now return 404, not a working authentication service.
- Encode API slug path segments, isolate new browser windows, and ignore local environment files.

## Remaining operational checks

- Configure NEXT_PUBLIC_API_URL and NEXT_PUBLIC_APP_URL in Vercel with the intended HTTPS public endpoints. Never place secrets in NEXT_PUBLIC variables.
- Enforce input validation, rate limiting/anti-spam, authentication/authorization, and appropriate CORS rules on the separate contact/news/careers backend. Frontend changes cannot enforce these controls.
- Update: the local licenses page and nine company/tax PDFs under public/images/about/sertifikasi have been removed, along with homepage/footer navigation. Removal reaches the public website only after deployment; previous deployments and Git history are not erased by this change. Document contents and historical Git data were not audited.
- Existing ZIP/RAR archives remain in Git. Review their contents separately before treating this review as a complete secret scan.
- Continue updating dependencies. Sanitized article styles and embedded frames are intentionally not preserved.

Reference: https://nextjs.org/blog/nextjs-security-update-october-14-2026

## Verification commands

npm ci
npm audit
node --test tests/i18n.test.cjs tests/scroll-up.test.cjs tests/security.test.cjs
npm run build

For a production preview on port 3000, run node tests/i18n-smoke.cjs.

## Results

- Clean npm ci: 0 vulnerabilities reported on 27 October 2026.
- 12 automated translation, effect lifecycle, and security tests passed.
- Next.js 15.5.28 production build passed, including TypeScript validation. One pre-existing image optimization lint warning remains on the careers page.
- 36 localized routes returned HTTP 200 with the expected HTML language and security headers on the production preview. /signin and /signup returned HTTP 404.
- A targeted pattern scan of 94 text files found no matches for private keys, GitHub tokens, AWS access-key IDs, or Stripe live secret keys. This does not prove the absence of other secrets and excludes binary archives/PDFs and Git history.
