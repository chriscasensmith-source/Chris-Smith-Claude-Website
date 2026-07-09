import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Card from "@/components/Card";
import SectionHeader from "@/components/SectionHeader";
import CtaSection from "@/components/CtaSection";
import TopicChip from "@/components/TopicChip";

export const metadata: Metadata = {
  title: "AI Training | Real Work Learning",
  description:
    "Plain language AI workshops for employees and leaders. Learn practical AI use without the hype.",
};

const sessions = [
  {
    title: "AI 101: Making Sense of AI at Work",
    desc: "A beginner friendly session that helps employees understand what AI is, what it can do, where it struggles, and how to use it responsibly. No technical background required.",
    length: "90 minutes",
  },
  {
    title: "Practical Prompt Writing",
    desc: "A hands on session that helps participants write clearer prompts, provide better context, and review AI output with better judgment. Participants practice with real workplace tasks.",
    length: "90 to 120 minutes",
  },
  {
    title: "AI for Leaders",
    desc: "A leadership focused session that shows how AI can support coaching, planning, communication, meeting preparation, and team development. Built for supervisors and managers.",
    length: "90 to 120 minutes",
  },
  {
    title: "AI Assisted Root Cause Thinking",
    desc: "A practical session showing how AI can support investigation thinking by helping organize facts, ask better questions, and explore possible causes, without replacing human judgment.",
    length: "90 to 120 minutes",
  },
];

const workplaceExamples = [
  "Writing clearer emails",
  "Summarizing information",
  "Planning meetings",
  "Building training content",
  "Improving Excel support",
  "Practicing difficult conversations",
  "Creating better questions",
  "Thinking through root cause problems",
  "Reviewing AI output with care",
];

export default function AITrainingPage() {
  return (
    <>
      <PageHero
        label="AI Training"
        heading="AI training for teams that need practical help, not hype."
        subtext="AI can help people work faster, think through problems, improve communication, and build better training materials. It can also create bad habits when people use it without judgment. My AI workshops help employees and leaders understand both sides."
        imageSrc="/images/website5.png"
        imageAlt="An AI training session in progress"
      />

      {/* Sessions */}
      <section className="bg-soft-white py-20 md:py-28 px-4 md:px-8">
        <div className="max-w-[1200px] mx-auto flex flex-col gap-12">
          <SectionHeader
            label="Workshop sessions"
            heading="Four practical AI sessions, each built around real work."
            align="center"
          />
          <div className="grid md:grid-cols-2 gap-6">
            {sessions.map((s) => (
              <Card key={s.title} className="flex flex-col gap-3">
                <div className="flex flex-col gap-2">
                  <span className="bg-accent-orange/10 text-accent-orange text-xs font-sans font-medium px-2.5 py-1 rounded-full self-start">
                    {s.length}
                  </span>
                  <h3 className="font-serif text-[20px] md:text-[28px] text-dark-text leading-snug">
                    {s.title}
                  </h3>
                </div>
                <p className="font-sans text-base leading-relaxed text-dark-text/70">
                  {s.desc}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Practical examples */}
      <section className="bg-warm-white py-20 md:py-28 px-4 md:px-8">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid gap-10 md:grid-cols-[1fr_1.2fr] md:gap-12 items-start">
            <div className="flex flex-col gap-6 md:sticky md:top-24">
              <SectionHeader
                label="What AI can help with"
                heading="Practical workplace AI examples."
              />
              <p className="font-sans text-base leading-relaxed text-dark-text/70">
                Sessions are built around tasks your employees already do. Here
                are some of the most common use cases we work through together.
              </p>
            </div>
            <div className="flex flex-wrap gap-2.5 md:pt-2">
              {workplaceExamples.map((ex) => (
                <TopicChip key={ex} label={ex} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* AI Risk and Judgment */}
      <section className="bg-soft-white py-20 md:py-28 px-4 md:px-8">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="flex flex-col gap-4 max-w-[500px]">
              <span className="text-accent-orange text-sm font-sans font-medium uppercase tracking-wider">
                AI risk and judgment
              </span>
              <h2 className="font-serif text-[24px] md:text-[40px] text-dark-text leading-snug">
                AI is useful. It is not always right.
              </h2>
            </div>
            <div className="flex flex-col gap-5 font-sans text-base leading-relaxed text-dark-text/80">
              <p>
                Every AI session includes a grounded conversation about where AI
                helps and where it creates risk. Employees learn to protect
                sensitive information, check accuracy, and use human judgment
                before acting on AI output.
              </p>
              <p>
                The goal is not to make people dependent on AI. The goal is to
                help them use it wisely, as a thinking tool and a time saver,
                not a replacement for experience and care.
              </p>
              <p>
                Participants leave with a clear, practical framework for
                deciding when to use AI, what to watch for, and how to stay
                accountable for the output they share.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CtaSection
        heading="Ready to help your team use AI with more confidence and better judgment?"
        body="Let's build a session around your people and your workplace tools."
      />
    </>
  );
}
