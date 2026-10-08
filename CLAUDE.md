# Real Work Learning: project context

Business site for Chris Smith (Dallas, Texas): training, facilitation, and AI
enablement, with bespoke AI tools as supporting proof. Live at
realworklearning.com.

## Stack and commands

- Next.js 16 (App Router), React 19, TypeScript (strict), Tailwind CSS v4,
  Framer Motion. All routes are static.
- `npm run dev` / `npm run build` / `npm run start`. Always run
  `npm run build` before committing.
- Tailwind v4 is configured CSS-first: design tokens live in the `@theme`
  block of `app/globals.css`. There is no `tailwind.config.js`.

## Deploy

- Render auto-deploys `main`. To ship: branch, PR, squash-merge to `main`,
  then confirm the change is actually on `origin/main`.
- A Vercel integration also builds the repo. Ignore it; Render is the host.
- Do not change environment variables or deploy settings.

## Positioning (order matters)

Training, facilitation, and AI enablement lead. Bespoke AI tools come second,
as proof. This is not an AI-startup site.

Core lines to preserve:
- "Training, facilitation, and AI enablement that people can actually use."
- "Less lecture. More practice. Better results."

## Voice

Practical, human, clear, work-focused. Confident but not corporate, and never
hype.
- **No em dashes** in any visible copy. They read as AI-written.
- Plain language over buzzwords.
- Keep existing copy and structure unless a change is asked for.

## Content rules (hard)

- **Never name Chris's former manufacturing employer** (this repo is public,
  so don't name it here either), and never add details that identify that
  role: plant size, department or shift counts, FDA/ISO/OSHA specifics,
  compliance stats, or "the plant." Describe that experience only as
  "regulated manufacturing."
- Hillstone Restaurant Group may be named.
- **No photos of employees.** Approved photos: `Headshot.jpg`, `Panel1.png`,
  `panel3.jpg` (TSTC panel). New photos come only from Chris.
- **No real screenshots of the AI tools.** They contained internal data. Use
  `SolutionGraphic` illustrations with abstract bars and generic labels only.

## Brand

- Colors (tokens in `app/globals.css`): `primary-bg` #061B2A (darkest navy),
  `navy` #0D1B2A, `navy-soft` #14293B, `accent-orange` #F36F21, `beige`
  #EAD7C1, `tan` #C69C6D, plus `warm-white`, `soft-white`, `sand`.
  - Navy for depth and contrast sections; orange for CTAs, highlights, and
    small accents; beige and tan for soft section bands, tiles, and borders.
- Fonts: Fraunces (`font-serif`) for headings, Inter (`font-sans`) for body.
- Logo: lightbulb holding an orange checklist, orange base and rays
  (`LogoMark` in `components/Logo.tsx`). Outline uses `currentColor` so it
  works on dark and light. Wordmark is "Real Work" plus orange "Learning".
  Favicon is `app/icon.svg`.

## Components to reuse

- `Logo` / `LogoMark`: brand mark and wordmark.
- `WatermarkBackground`: very faint logo mark for section rhythm (parent must
  be `relative overflow-hidden`; keep opacity around 0.04 to 0.06).
- `ImageFrame`: standard photo treatment (rounded, navy ring, soft vignette).
- `BrandPanel`: navy branded visual for photo slots without a photo. Swap
  back to `ImageFrame` when a real photo is available.
- `PageHero`: page hero; takes `imageSrc` or a non-photo `media` slot.
- `ServiceDeliverableTile`: icon tile for deliverables (icon auto-picked from
  the label via `iconForLabel` in `Icon.tsx`).
- `TopicChip`: pill for example topics / sessions / focus areas.
- `SolutionCard`, `CaseStudyCard`, `SolutionGraphic`: AI tool portfolio.
  Tool data lives in `lib/projects.ts`.
- `NavDropdown` + `navTree` in `lib/constants.ts`: Services and AI Solutions
  dropdowns (mobile uses an accordion in `Navbar`).
- `SectionHeader`, `CtaSection`, `StatCard`, `Card`, `Button`, `Reveal`.

## Layout rules

- No awkward blank space beside content. Center short CTAs and intros;
  give two-column sections a real visual on the second side.
- Mobile first: the heading leads on small screens; decorative hero panels
  are hidden on mobile. No horizontal scroll; tiles stack and chips wrap.
- Motion stays subtle (`Reveal` fade-and-rise) and respects reduced motion.
- Keep it polished and intentional, never loud or busy.
