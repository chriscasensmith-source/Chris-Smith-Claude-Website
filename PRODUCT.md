# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Potential clients who could buy the listed services: operations, HR, L&D, and team leaders at organizations where training connects directly to how work happens (operations, manufacturing, service, healthcare, warehouse, quality, safety, maintenance, and technical teams). They arrive needing something specific: a workshop, a stronger onboarding or training system, AI enablement for their people, or a tool built around a workflow. Their job on the site is to judge whether Chris understands their kind of work and is worth a conversation.

## Product Purpose

Real Work Learning is Chris Smith's consulting practice, based in Dallas, Texas. The site exists to turn qualified visitors into inquiries through the contact form. Success means a prospective client reaches out about a workshop, training system, AI training, or custom tool.

## Positioning

An operator who ran training at scale (more than a decade across upscale hospitality and regulated manufacturing, hundreds of employees across departments and shifts) and who teaches *and* builds. **Training comes first**: workshops, facilitation, AI training, and training-program design are the core offer. The bespoke AI and workflow tools are the differentiator, presented as what happens "when training needs a tool". They're evidence that the training work is grounded in real operations, not the headline.

## Operating Context

- Services: Workshops and Facilitation; AI Training for Teams; Leadership and Employee Development; Training Program Design; Frontline Learning and Workforce Development.
- Workshops run 90 minutes to 2 hours: introduction, demonstration, guided practice, group discussion, takeaways. Customized for employees, leaders, trainers, frontline teams, or mixed groups.
- AI training: four plain-language sessions built around real workplace tasks, no technical background required.
- Bespoke AI solutions: Training Command Center, Mechanical Skills Gap Analysis, SME Knowledge Capture ("Tribe"), MRP Assistant, Difficult Conversation Voice Agent. Three have case studies (problem / build / result). Several are marked "Built with Claude Code & Codex".
- Visitors convert through the contact form only.

## Capabilities and Constraints

- Next.js 16 (App Router), React 19, Tailwind CSS v4, Framer Motion. Deployed on Render at realworklearning.com.
- Informational site. No analytics, trackers, third-party scripts, accounts, or database. The only runtime outbound request is the contact form POST to Web3Forms (`api.web3forms.com`). SECURITY.md documents this for corporate IT review. New work must not add trackers, embeds, or other outbound calls without revisiting that document.
- The domain is newly registered and may be flagged by corporate web filters, so a lean, trustworthy footprint matters for visitors on corporate networks.
- Tools are shown with designed, illustrative graphics (`components/SolutionGraphic.tsx`), never real screenshots, so no internal data, names, or employer details appear.

## Brand Commitments

- Name: **Real Work Learning**, by Chris Smith, Dallas, Texas. Existing logo is a lightbulb + checklist mark (`components/Logo.tsx`, `app/icon.svg`).
- Voice: plain-spoken, practical, first person, anti-hype. Recurring lines: "Less lecture. More practice. Better results.", "Training, facilitation, and AI enablement that people can actually use.", "AI assists; people decide.", "I build training for real people doing real work."
- Organization naming rule: Hillstone (hospitality background) and public appearances (e.g. the Texas State Technical College panel) may be named. The manufacturing employer, its people, and its internal data are never named or shown. Describe it only as "regulated manufacturing".

## Evidence on Hand

- Photos: `public/images/Headshot.jpg` (portrait), `public/images/panel3.jpg` (Chris speaking on stage at a TSTC panel), `public/images/Panel1.png`.
- Experience claims in use: 10+ years leading training, hundreds of employees trained and tracked, 20+ AI tools shipped.
- Three case studies and five tool descriptions in `lib/projects.ts`.
- Knowledge-capture story, in Chris's own words (homepage `#sme-knowledge-capture`). Facts Chris supplied: DFW average age in maintenance-adjacent manufacturing roles is 47, closer to 53 at their employer; one critical maintenance-related role went from 33 people to 14 over five years from 2021; 300+ years of combined experience lost. Outcomes are qualitative only. Don't add metrics beyond these.
- **Absent, must not be fabricated:** client testimonials, client logos, named clients, pricing, outcome metrics beyond the claims above, real tool screenshots.

## Product Principles

1. Training leads; tools prove it. Every surface should make the training offer clear before it shows off the builds.
2. Show the work as it actually happens: concrete workflows, real situations, honest limits. No generic corporate-L&D language.
3. Practical over hype, especially about AI. Judgment, guardrails, and human decision-making stay in front.
4. Earn trust without borrowed credibility. Never invent proof, and protect former-employer confidentiality.
5. Keep the footprint lean and IT-friendly so the site gets through corporate filters and holds up to security review.
