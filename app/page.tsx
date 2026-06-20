import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button";
import SectionHeader from "@/components/SectionHeader";
import SolutionCard from "@/components/SolutionCard";
import CaseStudyCard from "@/components/CaseStudyCard";
import StatCard from "@/components/StatCard";
import CtaSection from "@/components/CtaSection";
import { solutions, caseStudies } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Chris Smith | Real Work Learning",
  description:
    "Training, facilitation, and AI enablement that people can actually use — plus bespoke AI tools built around how the work really happens.",
};

const pillars = [
  {
    title: "Facilitation & Workshops",
    desc: "Interactive sessions on leadership, communication, AI, and team development.",
    href: "/workshops",
  },
  {
    title: "Training Solutions",
    desc: "Onboarding, trainer guides, competency checks, and systems that make training repeatable.",
    href: "/training-systems",
  },
  {
    title: "AI Training",
    desc: "Plain-language AI workshops that help teams use tools with judgment, not hype.",
    href: "/ai-training",
  },
  {
    title: "Bespoke AI Solutions",
    desc: "Custom AI and workflow tools that solve real operations, maintenance, and training problems.",
    href: "#solutions",
  },
];

const processSteps = [
  {
    title: "Start with the real workflow",
    desc: "I learn how the work actually happens — the pressure, the handoffs, the workarounds — before building anything.",
  },
  {
    title: "Prototype fast",
    desc: "I get a working version in front of people quickly, so they react to something real instead of a slide deck.",
  },
  {
    title: "Build in judgment and guardrails",
    desc: "Safety gates, human review, and honest limits are designed in from the start — AI assists, people decide.",
  },
  {
    title: "Hand off something usable",
    desc: "The goal is a tool teams actually use on the floor: documented, teachable, and built to last.",
  },
];

const stats = [
  {
    value: "10+ yrs",
    label: "Operations & training leadership",
    description: "From Hillstone Restaurant Group to complex manufacturing environments.",
  },
  {
    value: "Countless",
    label: "Bespoke AI tools built",
    description:
      "Including the Training Command Center, Skills Gap Analysis, SME Knowledge Capture, MRP Assistant, and a Difficult Conversation voice agent.",
  },
  {
    value: "6",
    label: "Departments tracked live",
    description: "Across active training journeys in the Training Command Center.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ─── Hero ─────────────────────────────────────────────────── */}
      <section className="bg-primary-bg text-warm-white py-24 md:py-32 px-4 md:px-8">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col gap-6">
              <span className="text-accent-orange text-sm font-sans font-medium uppercase tracking-wider">
                Real Work Learning
              </span>
              <h1 className="font-serif text-[32px] md:text-[56px] leading-tight">
                Training, facilitation, and AI enablement that people can
                actually use.
              </h1>
              <p className="font-sans text-base md:text-lg leading-relaxed text-warm-white/80">
                I help teams learn faster, lead better, and adopt AI with
                judgment — and I build practical tools when off-the-shelf
                won&rsquo;t do.
              </p>
              <p className="font-serif text-xl text-accent-orange italic">
                Less lecture. More practice. Better results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Button href="/contact">Start a Conversation</Button>
                <Button href="/services" variant="ghost">
                  View Services
                </Button>
              </div>
            </div>

            <div className="relative w-full aspect-[3/2] rounded-xl overflow-hidden shadow-md">
              <Image
                src="/images/panel3.jpg"
                alt="Chris Smith speaking on stage at a Texas State Technical College panel"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* ─── What I Do ────────────────────────────────────────────── */}
      <section className="bg-warm-white py-20 md:py-28 px-4 md:px-8">
        <div className="max-w-[1200px] mx-auto flex flex-col gap-12">
          <SectionHeader
            label="What I do"
            heading="Four ways I help teams do real work better."
            subtext="From hands-on workshops to custom AI tools, everything I do is grounded in how the work actually happens."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {pillars.map((p) => (
              <Link key={p.title} href={p.href} className="group">
                <div className="h-full flex flex-col gap-3 bg-soft-white rounded-xl border border-sand/40 shadow-sm p-6 transition-shadow duration-200 group-hover:shadow-md">
                  <h3 className="font-serif text-[20px] md:text-[22px] text-dark-text leading-snug">
                    {p.title}
                  </h3>
                  <p className="font-sans text-sm text-dark-text/70 leading-relaxed flex-1">
                    {p.desc}
                  </p>
                  <span className="text-accent-orange text-xs font-sans font-medium uppercase tracking-wider mt-auto">
                    Learn more &rarr;
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Training & Enablement ────────────────────────────────── */}
      <section className="bg-soft-white py-20 md:py-28 px-4 md:px-8">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden shadow-sm">
              <Image
                src="/images/website2.png"
                alt="Chris Smith facilitating a hands-on training workshop"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="flex flex-col gap-6">
              <SectionHeader
                label="Training & enablement"
                heading="Practical learning that connects to the job."
              />
              <p className="font-sans text-base md:text-lg leading-relaxed text-dark-text/75">
                Most workplace training sounds good on paper and falls apart in
                real life. I build workshops, onboarding, and training systems
                that help people practice, talk through real situations, and
                leave with tools they can use the same day — including
                plain-language AI training that builds judgment, not just speed.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <Button href="/workshops" variant="secondary">
                  Workshops
                </Button>
                <Button href="/training-systems" variant="secondary">
                  Training Systems
                </Button>
                <Button href="/ai-training" variant="secondary">
                  AI Training
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Featured AI Solutions ────────────────────────────────── */}
      <section
        id="solutions"
        className="scroll-mt-24 bg-warm-white py-20 md:py-28 px-4 md:px-8"
      >
        <div className="max-w-[1200px] mx-auto flex flex-col gap-12">
          <SectionHeader
            label="Bespoke AI solutions"
            heading="And when training needs a tool, I build it."
            subtext="Custom AI and workflow tools I've designed for operations, training, maintenance, and manufacturing teams."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((s) => (
              <SolutionCard key={s.slug} solution={s} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── Case Studies ─────────────────────────────────────────── */}
      <section
        id="case-studies"
        className="scroll-mt-24 bg-soft-white py-20 md:py-28 px-4 md:px-8"
      >
        <div className="max-w-[1200px] mx-auto flex flex-col gap-12">
          <SectionHeader
            label="Case studies"
            heading="A closer look at three of them."
            subtext="The problem on the floor, what I built, and what changed."
          />
          <div className="flex flex-col gap-8">
            {caseStudies.map((study, i) => (
              <CaseStudyCard
                key={study.slug}
                study={study}
                reverse={i % 2 === 1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ─── How I Build ──────────────────────────────────────────── */}
      <section
        id="process"
        className="scroll-mt-24 bg-primary-bg text-warm-white py-20 md:py-28 px-4 md:px-8"
      >
        <div className="max-w-[1200px] mx-auto flex flex-col gap-12">
          <div className="flex flex-col gap-4 max-w-[700px]">
            <span className="text-accent-orange text-sm font-sans font-medium uppercase tracking-wider">
              How I build
            </span>
            <h2 className="font-serif text-[24px] md:text-[40px] leading-snug">
              Real tools come from real workflows.
            </h2>
            <p className="font-sans text-base md:text-lg leading-relaxed text-warm-white/70">
              I don&rsquo;t start with the technology. I start with the work —
              then build the smallest thing that genuinely helps.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, i) => (
              <div
                key={step.title}
                className="flex flex-col gap-3 border-t border-warm-white/15 pt-5"
              >
                <span
                  aria-hidden
                  className="font-serif text-accent-orange text-3xl md:text-4xl leading-none"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-serif text-[20px] md:text-[22px] leading-snug">
                  {step.title}
                </h3>
                <p className="font-sans text-sm md:text-base text-warm-white/70 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Impact ───────────────────────────────────────────────── */}
      <section className="bg-soft-white py-20 md:py-28 px-4 md:px-8">
        <div className="max-w-[1200px] mx-auto flex flex-col gap-12">
          <SectionHeader
            label="Impact"
            heading="Operations experience behind every build."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {stats.map((s) => (
              <StatCard
                key={s.label}
                value={s.value}
                label={s.label}
                description={s.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ─── About ────────────────────────────────────────────────── */}
      <section className="bg-warm-white py-20 md:py-28 px-4 md:px-8">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid lg:grid-cols-[2fr_3fr] gap-12 items-center">
            <div className="relative w-full max-w-[360px] aspect-[3/4] rounded-xl overflow-hidden shadow-sm mx-auto lg:mx-0">
              <Image
                src="/images/Headshot.jpg"
                alt="Portrait of Chris Smith"
                fill
                sizes="(min-width: 1024px) 360px, 100vw"
                className="object-cover"
              />
            </div>
            <div className="flex flex-col gap-6">
              <SectionHeader label="About" heading="An operator who teaches and builds." />
              <p className="font-sans text-base md:text-lg leading-relaxed text-dark-text/75">
                I spent ten years managing training operations at Hillstone
                Restaurant Group, then moved into broader operations, workforce
                development, and technical training across complex environments.
                That foundation shapes how I work: structure plus humanity,
                clear standards plus room to grow.
              </p>
              <p className="font-sans text-base md:text-lg leading-relaxed text-dark-text/75">
                Now I pair that operational discipline with practical AI —
                helping teams learn and adopt AI with judgment, and building the
                tools they need when nothing off-the-shelf fits.
              </p>
              <div className="pt-2">
                <Button href="/about" variant="secondary">
                  More about me
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Contact CTA ──────────────────────────────────────────── */}
      <CtaSection
        heading="Need training, facilitation, or a tool built for how your team really works?"
        body="Whether it's a workshop, a stronger training system, AI enablement, or a custom tool — let's talk about what would actually move the needle."
      />
    </>
  );
}
