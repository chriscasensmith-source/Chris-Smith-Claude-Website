import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button";
import SectionHeader from "@/components/SectionHeader";
import SolutionGraphic from "@/components/SolutionGraphic";
import TrainingKitGraphic from "@/components/TrainingKitGraphic";
import CtaSection from "@/components/CtaSection";
import Reveal from "@/components/Reveal";
import ImageFrame from "@/components/ImageFrame";
import { solutions, caseStudies } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Real Work Learning | Chris Smith",
  description:
    "Chris Smith is a Dallas-based training and operations professional. Training, facilitation, and AI enablement that people can actually use, plus bespoke AI tools built around how the work really happens.",
};

// The shape of a typical 90-minute to 2-hour session (see /services#workshops).
const sessionArc = [
  {
    step: "Introduction",
    desc: "Set the purpose and connect it to the work in the room.",
  },
  {
    step: "Demonstration",
    desc: "Show what good looks like, one step at a time.",
  },
  {
    step: "Guided practice",
    desc: "People try it on real situations, with coaching as they go.",
    emphasis: true,
  },
  {
    step: "Group discussion",
    desc: "Talk through what worked, what didn’t, and why.",
  },
  {
    step: "Takeaways",
    desc: "Leave with tools you can use the same day.",
  },
];

// The five services, grouped by the job they do for a team.
const serviceGroups = [
  {
    title: "Run a session",
    desc: "Workshops built around your people and your work.",
    items: [
      {
        title: "Workshops and Facilitation",
        desc: "Custom sessions on communication, teamwork, and workplace skills.",
        href: "/workshops",
      },
      {
        title: "Leadership and Employee Development",
        desc: "Self-awareness, feedback, and real team challenges, for leaders and their teams.",
        href: "/services#leadership",
      },
      {
        title: "AI Training for Teams",
        desc: "Plain-language AI training that builds judgment, not just speed.",
        href: "/ai-training",
      },
    ],
  },
  {
    title: "Build the system",
    desc: "Training structure that holds up after the session ends.",
    items: [
      {
        title: "Training Program Design",
        desc: "Onboarding, trainer guides, and competency standards that make training repeatable.",
        href: "/training-systems",
      },
      {
        title: "Frontline Learning and Workforce Development",
        desc: "Standard work and procedures turned into training new people can follow and experienced people can teach.",
        href: "/services#frontline",
      },
    ],
  },
];

const experience = [
  { value: "10+ years", label: "leading training in demanding operations" },
  { value: "Hundreds", label: "of employees trained and tracked, across departments and shifts" },
];

const beliefs = [
  "Good workshops should include practice, not just information.",
  "Good onboarding should reduce confusion, not organize it into a prettier binder.",
  "Good AI training should help people think better, not just type prompts faster.",
  "Good learning should always connect back to the work.",
];

const featured = caseStudies[0];
const caseBySlug = new Map(caseStudies.map((c) => [c.slug, c]));
// SME Knowledge Capture is told as the training story above the tools, so it
// is left out of the compact list.
const otherTools = solutions.filter(
  (s) => s.slug !== featured.slug && s.slug !== "sme-knowledge-capture",
);

// Chris's own account of the knowledge-capture project, lightly trimmed.
// The visible part leads with the method; the full account sits behind a
// disclosure so the section stays short.
const knowledgeStory = {
  context:
    "In Dallas–Fort Worth, the average age of manufacturing personnel in maintenance-adjacent roles is 47. Where I worked, it was closer to 53.",
  method:
    "I’d ask a technician to walk me through a workflow or process, recording their explanation as we went. Then I transcribed the conversation and ran it through an AI-assisted tool I built, which turned each walkthrough into three outputs:",
  outputs: [
    {
      kind: "Repository",
      title: "Knowledge repository entry",
      desc: "The technician’s explanation, preserved in an organized format.",
    },
    {
      kind: "How-to",
      title: "Step-by-step how-to guide",
      desc: "The process, made easier to share and teach.",
    },
    {
      kind: "Agent file",
      title: "Agent-ready knowledge file",
      desc: "Loaded into a voice or chat assistant, so the expertise is available through conversation.",
    },
  ],
  changed:
    "One conversation became the starting point for documentation, training, and an AI assistant drawing on the same captured expertise.",
  fullProblem: [
    "We were facing what the industry calls the “silver tsunami”: a wave of experienced employees retiring and taking decades of practical knowledge with them.",
    "Much of that expertise lived in people’s heads: how to approach a repair, what to look for, and what to do when the usual process didn’t work. Every departure made that knowledge harder to pass on. With a limited budget, we needed a practical way to capture what experienced technicians knew while they were still there to share it.",
  ],
  fullChanged:
    "The tool created a repeatable way to turn a technician’s walkthrough into knowledge others could use. It made capturing know-how faster and gave us a practical way to preserve the experience still on the team, so more of that knowledge could stay with the organization and support the next person learning the job.",
};

// Labels for tool write-ups, distinct from the training story's structure.
const caseLabels = ["The situation", "The build", "The outcome"] as const;

function Chevron() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 transition-transform duration-200 group-open:rotate-180"
    >
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

export default function HomePage() {
  return (
    <>
      {/* ─── Hero ─────────────────────────────────────────────────── */}
      <section className="bg-primary-bg text-warm-white pt-10 pb-16 md:py-28 px-4 md:px-8">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid lg:grid-cols-[1.1fr_1fr] gap-10 lg:gap-14 items-center">
            <div className="flex flex-col gap-6">
              <h1 className="font-serif text-[40px] sm:text-[52px] lg:text-[68px] leading-[1.02] tracking-[-0.03em]">
                Training built around the job, not the slide deck.
              </h1>
              <p className="font-sans text-lg md:text-xl leading-relaxed text-warm-white/85 max-w-[52ch]">
                <span className="text-accent-orange">
                  For operations, manufacturing, service, and frontline teams.
                </span>{" "}
                Workshops, training systems, and practical AI training that
                people can actually use, plus custom tools when
                off-the-shelf won&rsquo;t do.
              </p>
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 pt-2">
                <Button href="/contact">Start a Conversation</Button>
                <Button href="/services" variant="ghost">
                  View Services
                </Button>
              </div>
              <p className="font-sans text-sm text-warm-white/65">
                Chris Smith &middot; Dallas, Texas &middot; on-site and remote
              </p>
            </div>

            <ImageFrame aspect="aspect-[16/10] lg:aspect-[4/3]">
              <Image
                src="/images/panel3.jpg"
                alt="Chris Smith speaking on stage at a Texas State Technical College panel"
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover"
                priority
              />
            </ImageFrame>
          </div>
        </div>
      </section>

      {/* ─── Training (the lead offer) ────────────────────────────── */}
      <section
        id="training"
        className="scroll-mt-24 bg-warm-white pt-20 pb-24 md:pt-28 md:pb-32 px-4 md:px-8"
      >
        <div className="max-w-[1200px] mx-auto flex flex-col gap-16 md:gap-24">
          {/* Promise + proof: what a group actually leaves with */}
          <Reveal className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:gap-16">
            <div className="flex flex-col gap-6">
              <h2 className="font-serif text-[32px] md:text-[48px] leading-[1.06] tracking-[-0.02em] text-dark-text max-w-[16ch]">
                People leave able to do the work, not just talk about it.
              </h2>
              <p className="font-sans text-lg leading-relaxed text-dark-text/75 max-w-[56ch]">
                Most workplace training sounds good on paper and falls apart in
                real life. I build workshops, onboarding, and training systems
                that help people practice, talk through real situations, and
                leave with tools they can use the same day.
              </p>
              <p className="font-sans text-base leading-relaxed text-dark-text/70 max-w-[56ch]">
                Depending on the engagement, that can mean a trainer guide,
                one-page job aids, and a competency checklist with trainer
                sign-off, so the training keeps working after the session ends.
              </p>
            </div>
            <figure className="flex flex-col gap-3">
              <TrainingKitGraphic />
              <figcaption className="text-center font-sans text-xs text-dark-text/65">
                Illustrative sample of session deliverables
              </figcaption>
            </figure>
          </Reveal>

          {/* The session arc */}
          <Reveal className="flex flex-col gap-8">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8 border-b border-dark-text/15 pb-4">
              <h3 className="font-serif text-2xl md:text-[28px] text-dark-text leading-snug">
                Inside a session
              </h3>
              <p className="font-sans text-sm md:text-base text-dark-text/70">
                90 minutes to 2 hours &middot; for employees, leaders,
                trainers, frontline teams, or mixed groups
              </p>
            </div>
            <ol className="grid gap-0 md:grid-cols-5">
              {sessionArc.map((s) => (
                <li
                  key={s.step}
                  className={`relative flex flex-col gap-2 border-l-2 py-4 pl-5 md:border-l-0 md:border-t-[3px] md:py-0 md:pl-0 md:pt-5 md:pr-6 ${
                    s.emphasis
                      ? "border-accent-orange"
                      : "border-dark-text/15"
                  }`}
                >
                  <span
                    className={`font-serif text-xl md:text-[22px] leading-snug ${
                      s.emphasis ? "text-orange-ink" : "text-dark-text"
                    }`}
                  >
                    {s.step}
                  </span>
                  <span className="font-sans text-sm md:text-[15px] leading-relaxed text-dark-text/70">
                    {s.desc}
                  </span>
                </li>
              ))}
            </ol>
          </Reveal>

          {/* The five services, as two jobs */}
          <Reveal className="flex flex-col gap-10">
            <h3 className="font-serif text-2xl md:text-[28px] text-dark-text leading-snug">
              Two ways to work together
            </h3>
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
              {serviceGroups.map((group) => (
                <div key={group.title} className="flex flex-col gap-4">
                  <div className="flex flex-col gap-1">
                    <h4 className="font-sans text-base font-semibold text-dark-text">
                      {group.title}
                    </h4>
                    <p className="font-sans text-sm md:text-base text-dark-text/70">
                      {group.desc}
                    </p>
                  </div>
                  <ul className="border-t border-dark-text/15">
                    {group.items.map((s) => (
                      <li key={s.title} className="border-b border-dark-text/15">
                        <Link
                          href={s.href}
                          className="group grid grid-cols-[1fr_auto] items-center gap-x-6 gap-y-1 rounded-md py-5 outline-offset-4 md:py-6"
                        >
                          <span className="font-serif text-xl md:text-[22px] leading-snug text-dark-text transition-colors duration-200 group-hover:text-orange-ink group-focus-visible:text-orange-ink">
                            {s.title}
                          </span>
                          <svg
                            aria-hidden="true"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={1.75}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="row-span-2 h-6 w-6 text-dark-text/45 transition-all duration-200 group-hover:translate-x-1 group-hover:text-orange-ink group-focus-visible:translate-x-1 group-focus-visible:text-orange-ink"
                          >
                            <path d="M5 12h14M13 6l6 6-6 6" />
                          </svg>
                          <span className="font-sans text-sm md:text-base leading-relaxed text-dark-text/70">
                            {s.desc}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-4 rounded-xl bg-sand/40 p-6 sm:flex-row sm:items-center sm:justify-between sm:gap-8 md:px-8">
              <p className="font-sans text-base leading-relaxed text-dark-text/80 max-w-[52ch]">
                Not sure which one fits? A rough idea is enough to start. Tell
                me what&rsquo;s going on with your team.
              </p>
              <Button href="/contact" className="shrink-0 self-start sm:self-auto">
                Start a Conversation
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─── Training story: capturing know-how ───────────────────── */}
      <section
        id="sme-knowledge-capture"
        className="scroll-mt-24 bg-soft-white py-20 md:py-28 px-4 md:px-8"
      >
        <Reveal className="max-w-[1200px] mx-auto flex flex-col gap-12 md:gap-16">
          <div className="grid gap-8 lg:grid-cols-[1.15fr_1fr] lg:items-end lg:gap-16">
            <h2 className="font-serif text-[32px] md:text-[48px] leading-[1.06] tracking-[-0.02em] text-dark-text max-w-[18ch]">
              Capturing know-how before it walks out the door
            </h2>
            <div className="flex flex-col gap-4">
              <p className="font-serif text-[22px] md:text-[28px] leading-snug text-dark-text">
                From 2021 to 2026, the team in one critical maintenance-related
                role went from{" "}
                <span className="text-orange-ink">33 people to 14</span>,
                taking more than{" "}
                <span className="text-orange-ink">300 years</span> of combined
                experience with them.
              </p>
              <p className="font-sans text-[15px] leading-relaxed text-dark-text/75 max-w-[52ch]">
                {knowledgeStory.context}
              </p>
            </div>
          </div>

          <div className="grid gap-10 border-t border-dark-text/15 pt-10 lg:grid-cols-[1fr_1.6fr] lg:gap-16">
            <div className="flex flex-col gap-4">
              <h3 className="font-serif text-2xl md:text-[28px] leading-snug text-dark-text">
                How we captured it
              </h3>
              <p className="font-sans text-base leading-relaxed text-dark-text/75 max-w-[52ch]">
                {knowledgeStory.method}
              </p>
            </div>
            <ol className="grid gap-4 sm:grid-cols-3 sm:gap-5">
              {knowledgeStory.outputs.map((o, i) => (
                <li
                  key={o.title}
                  className={`flex flex-col gap-2 rounded-md bg-white p-5 shadow-[0_14px_32px_-16px_rgba(13,27,42,0.35)] ${
                    i === 1 ? "sm:translate-y-3 sm:rotate-[0.75deg]" : i === 2 ? "sm:-rotate-[0.75deg]" : "sm:-rotate-[0.5deg]"
                  }`}
                >
                  <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.14em] text-orange-ink">
                    {i + 1} &middot; {o.kind}
                  </span>
                  <span className="font-serif text-lg leading-snug text-dark-text">
                    {o.title}
                  </span>
                  <span className="font-sans text-sm leading-relaxed text-dark-text/75">
                    {o.desc}
                  </span>
                </li>
              ))}
            </ol>
          </div>

          <div className="grid gap-6 border-t border-dark-text/15 pt-10 lg:grid-cols-[1fr_1.6fr] lg:gap-16">
            <h3 className="font-serif text-2xl md:text-[28px] leading-snug text-dark-text">
              What changed
            </h3>
            <div className="flex flex-col gap-5">
              <p className="font-serif text-xl md:text-2xl leading-snug text-dark-text">
                {knowledgeStory.changed}
              </p>
              <details className="group">
                <summary className="inline-flex min-h-[32px] cursor-pointer list-none items-center gap-1.5 rounded-sm font-sans text-sm font-medium text-orange-ink hover:underline [&::-webkit-details-marker]:hidden">
                  <span className="group-open:hidden">Read the full story</span>
                  <span className="hidden group-open:inline">Hide the full story</span>
                  <Chevron />
                </summary>
                <div className="mt-4 flex flex-col gap-3 border-l border-dark-text/20 pl-5 max-w-[64ch]">
                  {knowledgeStory.fullProblem.map((para) => (
                    <p key={para.slice(0, 24)} className="font-sans text-[15px] leading-relaxed text-dark-text/75">
                      {para}
                    </p>
                  ))}
                  <p className="font-sans text-[15px] leading-relaxed text-dark-text/75">
                    {knowledgeStory.fullChanged}
                  </p>
                </div>
              </details>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ─── Experience + what training should be held to ────────── */}
      <section className="bg-primary-bg text-warm-white py-20 md:py-28 px-4 md:px-8">
        <Reveal className="max-w-[1200px] mx-auto grid gap-14 lg:grid-cols-2 lg:gap-20">
          <div className="flex flex-col gap-6">
            <h2 className="font-serif text-[28px] md:text-[44px] leading-[1.1] tracking-[-0.02em]">
              I ran training at scale before I ever built a tool for it.
            </h2>
            <p className="font-sans text-base md:text-lg leading-relaxed text-warm-white/75 max-w-[56ch]">
              So I know where training breaks down in real operations:
              knowledge trapped in a few people&rsquo;s heads, progress buried
              in spreadsheets, trainers stretched too thin.
            </p>
            <dl className="mt-2 flex flex-col border-t border-warm-white/15">
              {experience.map((e) => (
                <div
                  key={e.value}
                  className="grid grid-cols-[8.5rem_1fr] items-baseline gap-4 border-b border-warm-white/15 py-4"
                >
                  <dt className="font-serif text-xl md:text-2xl text-accent-orange">
                    {e.value}
                  </dt>
                  <dd className="font-sans text-sm md:text-base text-warm-white/75 leading-snug">
                    {e.label}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="flex flex-col gap-5">
            <h3 className="font-serif text-xl md:text-2xl text-warm-white/90">
              What I hold training to
            </h3>
            <ul className="flex flex-col border-t border-warm-white/15">
              {beliefs.map((b) => (
                <li
                  key={b}
                  className="border-b border-warm-white/15 py-4 font-serif text-lg md:text-xl leading-snug text-warm-white"
                >
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </section>

      {/* ─── When training needs a tool (proof) ───────────────────── */}
      <section
        id="solutions"
        className="scroll-mt-24 bg-beige/30 py-20 md:py-28 px-4 md:px-8"
      >
        <div className="max-w-[1200px] mx-auto flex flex-col gap-12 md:gap-16">
          <Reveal className="grid gap-6 lg:grid-cols-[1.2fr_1fr] lg:items-end lg:gap-16">
            <h2 className="font-serif text-[28px] md:text-[40px] leading-[1.1] tracking-[-0.02em] text-dark-text">
              And when training needs a tool, I build it.
            </h2>
            <p className="font-sans text-base md:text-lg leading-relaxed text-dark-text/75 max-w-[52ch]">
              Every tool starts with the real workflow and ships with
              guardrails built in. AI assists; people decide.
            </p>
          </Reveal>

          {/* Featured case */}
          <Reveal>
            <article
              id={featured.slug}
              className="scroll-mt-28 grid gap-8 lg:grid-cols-2 lg:gap-14 lg:items-start"
            >
              <div className="overflow-hidden rounded-xl shadow-[0_16px_40px_-18px_rgba(13,27,42,0.45)]">
                <SolutionGraphic kind={featured.graphic} className="aspect-[16/10]" />
              </div>
              <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-1">
                  <h3 className="font-serif text-[24px] md:text-[30px] leading-tight text-dark-text">
                    {featured.name}
                  </h3>
                  <p className="font-sans text-sm text-dark-text/70">
                    {featured.category}
                    {featured.builtWith && <> &middot; {featured.builtWith}</>}
                  </p>
                </div>
                <dl className="flex flex-col gap-4">
                  {[featured.problem, featured.build, featured.result].map((text, i) => [caseLabels[i], text]).map(([label, text]) => (
                    <div key={label} className="flex flex-col gap-1">
                      <dt className="font-sans text-sm font-semibold text-dark-text">
                        {label}
                      </dt>
                      <dd className="font-sans text-sm md:text-[15px] leading-relaxed text-dark-text/75">
                        {text}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </article>
          </Reveal>

          {/* The rest, compact and text-only, each with the same depth on demand */}
          <Reveal>
            <ul className="grid gap-x-10 gap-y-10 border-t border-dark-text/15 pt-10 md:grid-cols-3">
              {otherTools.map((s) => {
                const study = caseBySlug.get(s.slug);
                const details: [string, string][] = study
                  ? [study.problem, study.build, study.result].map(
                      (text, i): [string, string] => [caseLabels[i], text],
                    )
                  : [["What it does", s.description]];
                return (
                  <li
                    key={s.slug}
                    id={s.slug}
                    className="scroll-mt-28"
                  >
                    <div className="flex flex-col gap-1.5">
                      <h3 className="font-serif text-xl md:text-[22px] leading-snug text-dark-text">
                        {s.name}
                      </h3>
                      <p className="font-sans text-xs text-dark-text/70">
                        {s.category}
                      </p>
                      <p className="font-sans text-sm md:text-[15px] leading-relaxed text-dark-text/75">
                        {s.tagline}
                      </p>
                      <details className="group mt-1">
                        <summary className="inline-flex min-h-[32px] cursor-pointer list-none items-center gap-1.5 rounded-sm font-sans text-sm font-medium text-orange-ink hover:underline [&::-webkit-details-marker]:hidden">
                          <span className="group-open:hidden">
                            {study ? "Read the case" : "What it does"}
                          </span>
                          <span className="hidden group-open:inline">Hide details</span>
                          <Chevron />
                        </summary>
                        <dl className="mt-3 flex flex-col gap-3 border-l border-dark-text/20 pl-4">
                          {details.map(([label, text]) => (
                            <div key={label} className="flex flex-col gap-0.5">
                              <dt className="font-sans text-xs font-semibold text-dark-text">
                                {label}
                              </dt>
                              <dd className="font-sans text-sm leading-relaxed text-dark-text/75">
                                {text}
                              </dd>
                            </div>
                          ))}
                        </dl>
                      </details>
                    </div>
                  </li>
                );
              })}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* ─── About ────────────────────────────────────────────────── */}
      <section className="bg-warm-white py-20 md:py-28 px-4 md:px-8">
        <div className="max-w-[1200px] mx-auto">
          <Reveal className="grid lg:grid-cols-[2fr_3fr] gap-12 items-center">
            <ImageFrame
              aspect="aspect-[3/4]"
              vignette={false}
              className="max-w-[360px] mx-auto lg:mx-0"
            >
              <Image
                src="/images/Headshot.jpg"
                alt="Portrait of Chris Smith"
                fill
                sizes="(min-width: 1024px) 360px, 100vw"
                className="object-cover"
              />
            </ImageFrame>
            <div className="flex flex-col gap-6">
              <SectionHeader label="About" heading="An operator who teaches and builds." />
              <p className="font-sans text-base md:text-lg leading-relaxed text-dark-text/75">
                I&rsquo;m Chris Smith, a Dallas-based training and operations
                professional. My background runs from hospitality training at
                Hillstone to operations training in regulated manufacturing,
                across hundreds of employees. That foundation shapes how I work: structure
                plus humanity, clear standards plus room to grow.
              </p>
              <p className="font-sans text-base md:text-lg leading-relaxed text-dark-text/75">
                Now I pair that operational discipline with practical AI,
                helping teams learn and adopt AI with judgment, and building the
                tools they need when nothing off-the-shelf fits.
              </p>
              <div className="pt-2">
                <Button href="/about" variant="secondary">
                  More about me
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─── Contact CTA ──────────────────────────────────────────── */}
      <CtaSection
        heading="Need training that fits how your team really works?"
        body="A workshop, a stronger training system, or AI training for your people: let’s talk about what would actually help. And if the answer is a tool, I can build that too."
      />
    </>
  );
}
