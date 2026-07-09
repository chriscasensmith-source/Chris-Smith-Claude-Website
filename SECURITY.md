# Security Overview — Real Work Learning (realworklearning.com)

This document summarizes what this website is and does, for IT/security review.

## What it is
A static marketing/portfolio website for Chris Smith ("Real Work Learning"),
built with **Next.js** (React). It is informational only.

## Hosting
Deployed on **Render** (render.com) from this GitHub repository. Served over
HTTPS with an auto-issued TLS certificate.

## Data collection
- **No analytics, no ad networks, no third-party trackers, no cookies** beyond
  standard framework essentials.
- The only data collected is via the **Contact form**, which submits to
  **Web3Forms** (`api.web3forms.com`), a reputable form-handling service. Form
  submissions are emailed to the site owner. No database, no user accounts.

## Outbound requests at runtime
- **Exactly one:** `POST https://api.web3forms.com/submit` when a visitor sends
  the contact form. Nothing else phones out.

## Dependencies (all mainstream, widely used)
- `next`, `react`, `react-dom`, `framer-motion`
- Build-time only: `typescript`, `tailwindcss`, `eslint`

## What the code does NOT contain
- No `eval`, `new Function`, `document.write`, or dynamic script injection
- No obfuscated/minified custom code, no base64 payloads
- No crypto-mining, no data exfiltration, no redirects to third parties
- No embedded third-party `<script>` tags

## Note on "newly registered domain" warnings
The domain was registered recently. Many corporate web filters (Zscaler, Cisco
Umbrella, Netskope, Palo Alto, etc.) automatically flag **newly registered
domains** as "suspicious" until they age and are categorized. This is a
reputation/age heuristic, not a detection of malicious content. The domain can
be submitted for categorization to the relevant filter vendor, or allowlisted.
