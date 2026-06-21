import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Card from "@/components/Card";
import CtaSection from "@/components/CtaSection";

export const metadata: Metadata = {
  title: "Training Systems | Real Work Learning",
  description:
    "Structured onboarding, trainer guides, competency checklists, and learning systems that help people learn the job.",
};

const systems = [
  {
    title: "Role Based Onboarding",
    desc: "A clear path for new employees that shows what they should learn in the first weeks and months. Built around the actual job, not a generic checklist. New hires know what they are learning, who they are learning from, and what good performance looks like.",
  },
  {
    title: "Trainer Guides",
    desc: "Practical guides that help trainers explain tasks, demonstrate expectations, ask better questions, and evaluate readiness. Built so any qualified trainer can deliver consistent training, not just your best person.",
  },
  {
    title: "Competency Checklists",
    desc: "Simple tools that define what good performance looks like and how sign off should happen. Removes ambiguity about whether someone is ready. Gives trainers, learners, and managers a shared standard.",
  },
  {
    title: "Knowledge Checks and Scenarios",
    desc: "Questions and workplace scenarios that help confirm whether people understand the work, not just whether they sat through training. Built around real situations, not generic multiple choice.",
  },
  {
    title: "Job Aids",
    desc: "Simple reference tools people can use during or after training. Step by step guides, quick reference cards, and visual process maps that reduce reliance on memory for complex or infrequent tasks.",
  },
  {
    title: "Knowledge Capture",
    desc: "Structured interviews and documentation to capture what experienced employees know before that knowledge walks out the door. Tribal knowledge becomes teachable content.",
  },
];

export default function TrainingSystemsPage() {
  return (
    <>
      <PageHero
        label="Training Systems"
        heading="Training systems that help people learn the job, not just survive the first week."
        subtext="Good onboarding and job training need more than a checklist. Employees need to know what to learn, who to learn from, how they will be evaluated, and what good performance looks like. I help teams turn scattered documents, old binders, tribal knowledge, and informal shadowing into clear training systems."
        imageSrc="/images/website3.png"
        imageAlt="Hands-on training around equipment on the shop floor"
      />

      {/* System components */}
      <section className="bg-soft-white py-20 md:py-28 px-4 md:px-8">
        <div className="max-w-[1200px] mx-auto flex flex-col gap-12">
          <div className="flex flex-col gap-3 max-w-[760px] mx-auto items-center text-center">
            <span className="text-accent-orange text-sm font-sans font-medium uppercase tracking-wider">
              What I build
            </span>
            <h2 className="font-serif text-[24px] md:text-[40px] text-dark-text leading-snug">
              Six components that make training systems work.
            </h2>
            <p className="font-sans text-base md:text-lg leading-relaxed text-dark-text/70">
              Most gaps in workplace training come down to missing structure. The
              content exists. It just lives in people&rsquo;s heads, scattered
              documents, or outdated binders. These six components turn that
              scattered knowledge into something teachable and repeatable.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {systems.map((s) => (
              <Card key={s.title} variant="default" className="flex flex-col gap-3">
                <h3 className="font-serif text-lg text-dark-text leading-snug">
                  {s.title}
                </h3>
                <p className="font-sans text-sm leading-relaxed text-dark-text/70">
                  {s.desc}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-warm-white py-20 md:py-28 px-4 md:px-8">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="flex flex-col gap-6">
              <span className="text-accent-orange text-sm font-sans font-medium uppercase tracking-wider">
                How I approach it
              </span>
              <h2 className="font-serif text-[24px] md:text-[40px] text-dark-text leading-snug">
                Built around real conditions, not ideal ones.
              </h2>
            </div>
            <div className="flex flex-col gap-5 font-sans text-base leading-relaxed text-dark-text/80">
              <p>
                Most training systems break down not because the content is
                wrong, but because they were built for how training
                should happen, not for how it actually happens in a busy
                operation.
              </p>
              <p>
                I build systems with real conditions in mind. Trainers who are
                also doing their regular job. Learners who have competing
                priorities. Managers who need progress without paperwork. The
                result is training that actually gets delivered and actually
                sticks.
              </p>
              <p>
                Every system I design is documented well enough that any
                qualified trainer can teach it, not just the person who knows
                the most.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CtaSection
        heading="Need a training system that actually holds up in real conditions?"
        body="Let's talk about your onboarding, your team, and what better structure would make possible."
      />
    </>
  );
}
