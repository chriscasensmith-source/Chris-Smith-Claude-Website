import type { Metadata } from "next";
import Link from "next/link";
import Button from "@/components/Button";
import Card from "@/components/Card";
import SectionHeader from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: "Chris Smith | Real Work Learning",
  description:
    "Practical workshops, AI training, leadership development, onboarding, and training systems for real teams doing real work.",
};

const heroCards = [
  {
    label: "AI Training",
    desc: "Plain language AI workshops for employees and leaders",
    href: "/ai-training",
  },
  {
    label: "Leadership Workshops",
    desc: "Practical development for real workplace challenges",
    href: "/workshops",
  },
  {
    label: "Training Systems",
    desc: "Onboarding, competency checks, and trainer tools",
    href: "/training-systems",
  },
  {
    label: "Frontline Learning",
    desc: "Job-connected learning for operations and service teams",
    href: "/services",
  },
];

const services = [
  {
    title: "Workshops and Facilitation",
    desc: "Interactive sessions for leadership, communication, team development, emotional intelligence, facilitation skills, and workplace problem solving.",
    href: "/workshops",
  },
  {
    title: "AI Training for the Workplace",
    desc: "Plain language AI workshops that help employees and leaders use tools like ChatGPT and Microsoft Copilot with confidence, caution, and better judgment.",
    href: "/ai-training",
  },
  {
    title: "Training Program Design",
    desc: "Onboarding programs, trainer guides, competency checks, role based learning paths, job aids, and practical learning materials.",
    href: "/training-systems",
  },
  {
    title: "Frontline Learning and Workforce Development",
    desc: "Training support for teams that need clear, job connected learning tied to service, quality, systems, procedures, and daily work.",
    href: "/services",
  },
  {
    title: "Trainer Development",
    desc: "Train the trainer workshops that help internal experts become better coaches, facilitators, and evaluators.",
    href: "/workshops",
  },
];

const audience = [
  "Operations teams",
  "Manufacturing and frontline teams",
  "Healthcare and service organizations",
  "HR and L&D teams",
  "Frontline supervisors and team leads",
  "Internal trainers and subject matter experts",
  "Quality and safety teams",
  "Leaders introducing AI tools",
  "Companies rebuilding onboarding",
  "Teams that need better facilitation for working sessions",
];

const approaches = [
  {
    title: "Make it real",
    desc: "The examples, activities, and discussion prompts should sound like the actual workplace. People should recognize the situations right away.",
  },
  {
    title: "Make it usable",
    desc: "Every workshop should leave people with something practical: a framework, checklist, prompt, coaching phrase, discussion tool, job aid, or next step.",
  },
  {
    title: "Make it stick",
    desc: "Learning sticks when people practice it, talk about it, and see how it applies to the job. That is why my sessions include activities, scenarios, reflection, and simple tools people can take back to work.",
  },
];

const offers = [
  {
    title: "Custom Workshop Sprint",
    desc: "For companies that need a polished, practical workshop built around a specific topic or team need.",
    includes: [
      "Discovery conversation",
      "Workshop outline",
      "Slide deck",
      "Facilitator notes",
      "Participant activity or handout",
      "Practical takeaways",
    ],
    bestFor:
      "Leadership sessions, AI workshops, team development, communication, facilitation skills, and employee development.",
  },
  {
    title: "AI at Work Workshop",
    desc: "For teams that need to understand AI without getting buried in hype or technical language.",
    includes: [
      "AI basics explained clearly",
      "Real workplace examples",
      "Prompt writing practice",
      "Risk and judgment discussion",
      "Practical use cases by role",
      "Take home prompt guide",
    ],
    bestFor:
      "Employees, leaders, HR teams, operations teams, trainers, and departments starting to use AI tools.",
  },
  {
    title: "Frontline Training System Build",
    desc: "For companies that need better structure around onboarding, job training, trainer sign off, or role readiness.",
    includes: [
      "Training path design",
      "Onboarding roadmap",
      "Competency checklist",
      "Knowledge checks",
      "Trainer guide",
      "Manager touchpoints",
      "Practical job aids",
    ],
    bestFor:
      "Operations teams, frontline teams, service teams, technical roles, and frontline leadership roles.",
  },
  {
    title: "Train the Trainer Workshop",
    desc: "For companies that rely on experienced employees to train others but need more consistency in how training is delivered.",
    includes: [
      "Adult learning basics",
      "Demonstration and practice model",
      "Coaching language",
      "Feedback tools",
      "Knowledge checks",
      "Sign off habits",
      "Handling difficult learner situations",
    ],
    bestFor:
      "Internal trainers, supervisors, team leads, subject matter experts, and frontline coaches.",
  },
  {
    title: "Leadership Development Lab",
    desc: "For teams that need practical leadership development without a generic corporate feel.",
    includes: [
      "Workshop design",
      "Real workplace scenarios",
      "Communication tools",
      "Reflection prompts",
      "Group discussion",
      "Application activities",
      "Leader action commitments",
    ],
    bestFor:
      "Supervisors, managers, team leads, emerging leaders, and cross functional teams.",
  },
];

const backgrounds = [
  {
    title: "Operational Discipline from Hillstone",
    desc: "I managed training operations and development at Hillstone Restaurant Group, one of the most respected and deliberately scaled upscale restaurant organizations in the country. That experience taught me how to build training systems that survive real conditions — ones that rely on clear documentation, consistent standards, structured progression, and accountability.",
  },
  {
    title: "Real Operations Experience",
    desc: "I have worked inside complex operational environments where training survives because it connects to real work, not because it sounds good on paper. Fast pace. Competing priorities. Frontline realities. Quality standards. Training has to earn its place.",
  },
  {
    title: "Facilitation That Feels Practical",
    desc: "I design sessions that feel grounded in the work. Less theory. More real scenarios, useful discussion, and tools people remember. Sessions are structured but not over scripted. They move with intention but leave room for conversation.",
  },
  {
    title: "Modern Workplace Capability",
    desc: "I help teams think through leadership, communication, onboarding, trainer development, and practical workplace AI without hype or oversimplification.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ─── Hero ─────────────────────────────────────────────────── */}
      <section className="bg-primary-bg text-warm-white py-24 md:py-32 px-4 md:px-8">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col gap-6">
              <span className="text-accent-orange text-sm font-sans font-medium uppercase tracking-wider">
                Real Work Learning
              </span>
              <h1 className="font-serif text-[32px] md:text-[56px] leading-tight">
                Workshops and training that people can actually use.
              </h1>
              <p className="font-sans text-base md:text-lg leading-relaxed text-warm-white/80">
                I help organizations build practical workshops, stronger
                leaders, better onboarding, smarter AI habits, and training
                systems that connect to the work people do every day.
              </p>
              <p className="font-sans text-base leading-relaxed text-warm-white/60">
                My sessions are hands-on, plain-spoken, and built around real
                workplace challenges. From AI enablement and leadership
                development to frontline training and onboarding systems, I
                create learning experiences that help people practice, apply,
                and improve.
              </p>
              <p className="font-serif text-xl text-accent-orange italic">
                Less lecture. More practice. Better results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Button href="/contact">Book a Workshop</Button>
                <Button href="/services" variant="ghost">
                  View Services
                </Button>
              </div>
            </div>

            {/* Card cluster */}
            <div className="grid grid-cols-2 gap-4 md:gap-6 mt-8 md:mt-0">
              {heroCards.map((card) => (
                <Link
                  key={card.href + card.label}
                  href={card.href}
                  className="bg-warm-white rounded-lg border border-sand/40 p-6 flex flex-col gap-3 hover:shadow-md transition-shadow duration-200"
                >
                  <span className="text-accent-orange text-xs font-sans font-medium uppercase tracking-wider">
                    {card.label}
                  </span>
                  <p className="font-sans text-sm text-dark-text leading-snug">
                    {card.desc}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── The Problem ──────────────────────────────────────────── */}
      <section className="bg-warm-white py-20 md:py-28 px-4 md:px-8">
        <div className="max-w-[1200px] mx-auto">
          <div className="max-w-[700px]">
            <h2 className="font-serif text-[24px] md:text-[40px] leading-snug mb-8">
              Training should not feel like a box to check.
            </h2>
            <div className="flex flex-col gap-5 font-sans text-base md:text-lg leading-relaxed text-dark-text/80">
              <p>
                A lot of workplace training sounds good on paper but falls apart
                in real life.
              </p>
              <p>
                People sit through slides. They nod. They leave. Then the work
                pulls them right back into the same old habits.
              </p>
              <p>
                Good training should do more than share information. It should
                help people practice, talk through real situations, understand
                expectations, and leave with tools they can use the same day.
              </p>
              <p className="font-semibold text-dark-text">
                That is the kind of training I build.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── What I Help With ─────────────────────────────────────── */}
      <section className="bg-soft-white py-20 md:py-28 px-4 md:px-8">
        <div className="max-w-[1200px] mx-auto flex flex-col gap-12">
          <SectionHeader
            label="What I help with"
            heading="Practical support for the moments where learning matters most."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {services.map((s) => (
              <Link key={s.title} href={s.href} className="group">
                <Card className="h-full flex flex-col gap-3 group-hover:shadow-md transition-shadow duration-200">
                  <h3 className="font-serif text-[20px] md:text-[24px] text-dark-text leading-snug">
                    {s.title}
                  </h3>
                  <p className="font-sans text-sm text-dark-text/70 leading-relaxed flex-1">
                    {s.desc}
                  </p>
                  <span className="text-accent-orange text-xs font-sans font-medium uppercase tracking-wider mt-auto">
                    Learn more &rarr;
                  </span>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Who This Is For ──────────────────────────────────────── */}
      <section className="bg-primary-bg text-warm-white py-20 md:py-28 px-4 md:px-8">
        <div className="max-w-[1200px] mx-auto flex flex-col gap-10">
          <SectionHeader
            heading="Built for teams that need learning to stick."
            align="center"
          />
          <div className="flex flex-wrap gap-3 justify-center">
            {audience.map((a) => (
              <span
                key={a}
                className="bg-warm-white/10 text-warm-white font-sans text-sm px-4 py-2.5 rounded-full border border-warm-white/20 min-h-[44px] flex items-center"
              >
                {a}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Why My Approach Works ────────────────────────────────── */}
      <section className="bg-warm-white py-20 md:py-28 px-4 md:px-8">
        <div className="max-w-[1200px] mx-auto flex flex-col gap-12">
          <div className="flex flex-col gap-4 max-w-[700px]">
            <h2 className="font-serif text-[24px] md:text-[40px] leading-snug">
              I build training around the room, not around the slide deck.
            </h2>
            <p className="font-sans text-base md:text-lg leading-relaxed text-dark-text/70">
              The best workshops feel alive. People talk. They think. They
              practice. They connect the ideas to their own work.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-4 md:gap-6">
            {approaches.map((a) => (
              <Card key={a.title} className="flex flex-col gap-3">
                <span className="text-accent-orange text-xs font-sans font-semibold uppercase tracking-wider">
                  {a.title}
                </span>
                <p className="font-sans text-base leading-relaxed text-dark-text/80">
                  {a.desc}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Signature Offers ─────────────────────────────────────── */}
      <section className="bg-soft-white py-20 md:py-28 px-4 md:px-8">
        <div className="max-w-[1200px] mx-auto flex flex-col gap-12">
          <SectionHeader heading="Clear ways to work together." />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {offers.map((offer) => (
              <Card key={offer.title} className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <h3 className="font-serif text-[20px] md:text-[24px] text-dark-text leading-snug">
                    {offer.title}
                  </h3>
                  <p className="font-sans text-sm text-dark-text/70 leading-relaxed">
                    {offer.desc}
                  </p>
                </div>
                <div className="border-t border-dark-text/10 pt-4 flex flex-col gap-3">
                  <span className="text-accent-orange text-xs font-sans font-semibold uppercase tracking-wider">
                    Includes
                  </span>
                  <ul className="flex flex-col gap-1.5">
                    {offer.includes.map((item) => (
                      <li
                        key={item}
                        className="font-sans text-sm text-dark-text/80 flex gap-2"
                      >
                        <span className="text-accent-orange mt-0.5 shrink-0">
                          &ndash;
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="border-t border-dark-text/10 pt-4 flex flex-col gap-2 mt-auto">
                  <span className="text-accent-orange text-xs font-sans font-semibold uppercase tracking-wider">
                    Best for
                  </span>
                  <p className="font-sans text-sm text-dark-text/70 leading-relaxed">
                    {offer.bestFor}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Why Clients Work With Me ─────────────────────────────── */}
      <section className="bg-warm-white py-20 md:py-28 px-4 md:px-8">
        <div className="max-w-[1200px] mx-auto flex flex-col gap-12">
          <div className="flex flex-col gap-4 max-w-[700px]">
            <SectionHeader
              label="Background"
              heading="A different kind of training background."
            />
            <p className="font-sans text-base md:text-lg leading-relaxed text-dark-text/70">
              I bring an unusual mix of operational discipline, training systems
              design, facilitation, leadership development, and practical AI
              adoption. But the real difference is the foundation.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-4 md:gap-6">
            {backgrounds.map((b) => (
              <Card
                key={b.title}
                variant="soft"
                className="flex flex-col gap-3"
              >
                <h3 className="font-serif text-[20px] md:text-[24px] text-dark-text leading-snug">
                  {b.title}
                </h3>
                <p className="font-sans text-sm leading-relaxed text-dark-text/70">
                  {b.desc}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Experience Proof ─────────────────────────────────────── */}
      <section className="bg-soft-white py-20 md:py-28 px-4 md:px-8">
        <div className="max-w-[1200px] mx-auto">
          <div className="max-w-[700px] flex flex-col gap-6">
            <h2 className="font-serif text-[24px] md:text-[40px] leading-snug">
              Experience that comes from building the work, not just talking
              about it.
            </h2>
            <div className="flex flex-col gap-5 font-sans text-base md:text-lg leading-relaxed text-dark-text/70">
              <p>
                I have designed and delivered training across operations,
                leadership development, onboarding, technical learning, AI
                adoption, safety, quality, service, and trainer development.
              </p>
              <p>
                That experience matters because real training has to survive
                real conditions: busy employees, changing priorities, skeptical
                learners, new systems, complex procedures, and leaders who need
                results without wasting people&rsquo;s time.
              </p>
              <p className="font-semibold text-dark-text">
                I understand how to turn a messy need into a clear learning
                experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Final CTA ────────────────────────────────────────────── */}
      <section className="bg-primary-bg text-warm-white py-20 md:py-28 px-4 md:px-8">
        <div className="max-w-[1200px] mx-auto">
          <div className="max-w-[640px] flex flex-col gap-6">
            <h2 className="font-serif text-[24px] md:text-[40px] leading-snug">
              Need a workshop or training program that feels useful from the
              first five minutes?
            </h2>
            <p className="font-sans text-base md:text-lg leading-relaxed text-warm-white/70">
              Let&rsquo;s build something your team can actually use.
            </p>
            <div className="pt-2">
              <Button href="/contact">Start a Conversation</Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
