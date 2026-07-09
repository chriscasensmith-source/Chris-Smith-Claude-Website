import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CtaSection from "@/components/CtaSection";
import Reveal from "@/components/Reveal";
import ServiceDeliverableTile from "@/components/ServiceDeliverableTile";
import TopicChip from "@/components/TopicChip";
import WatermarkBackground from "@/components/WatermarkBackground";

export const metadata: Metadata = {
  title: "Services | Real Work Learning",
  description:
    "Workshops, AI training, leadership development, training program design, and frontline learning systems.",
};

const services = [
  {
    id: "workshops",
    title: "Workshops and Facilitation",
    bestFor:
      "Teams that need an engaging session on leadership, communication, AI, teamwork, facilitation, or workplace skills.",
    description:
      "A custom workshop built around your people, your goals, and your work. Sessions are 90 minutes to 2 hours in length, allowing for real learning: introduction, demonstration, guided practice, group discussion, and practical takeaways. Sessions can be customized for employees, leaders, trainers, frontline teams, or mixed groups.",
    deliverables: [
      "Workshop outline",
      "Slide deck",
      "Facilitator notes",
      "Participant handouts",
      "Activities and discussion prompts",
      "Scenario exercises",
      "Practical takeaways",
      "Follow up tools",
    ],
    examples: [
      "AI 101 for the workplace",
      "Practical prompt writing",
      "Emotional intelligence",
      "Personality types at work",
      "CliftonStrengths team sessions",
      "Team building",
      "Presentation and facilitation skills",
      "Coaching conversations",
      "Leading through change",
      "Giving and receiving feedback",
    ],
    examplesLabel: "Example topics",
  },
  {
    id: "ai-training",
    title: "AI Training for Teams",
    bestFor:
      "Companies that want employees and leaders to use AI tools with more confidence, better questions, and stronger judgment.",
    description:
      "Plain language AI training built around real work. These sessions avoid hype and focus on how people can use AI to think, write, summarize, plan, analyze, and communicate more effectively. The goal is not to make people dependent on AI. The goal is to help them use it as a thinking tool and a time saver, while staying grounded in human judgment.",
    deliverables: [
      "AI awareness workshop",
      "Prompt writing practice",
      "Role based AI examples",
      "AI risk discussion guide",
      "ChatGPT or Copilot activity set",
      "Prompt library",
      "Leader conversation guide",
      "AI quick reference job aid",
    ],
    examples: [
      "AI 101: Making Sense of AI at Work",
      "Practical Prompt Writing",
      "AI for Leaders",
      "AI Assisted Root Cause Thinking",
    ],
    examplesLabel: "Strong session options",
  },
  {
    id: "leadership",
    title: "Leadership and Employee Development",
    bestFor:
      "Organizations that want better communication, stronger self awareness, healthier team dynamics, and more confident leaders.",
    description:
      "Interactive workshops that help people understand themselves, communicate with others, handle feedback, and work through real team challenges.",
    deliverables: [
      "Workshop deck",
      "Facilitator guide",
      "Group activities",
      "Reflection prompts",
      "Scenario questions",
      "Team discussion tools",
      "Follow up action steps",
    ],
    examples: [
      "Emotional Intelligence at Work",
      "Personality Types in the Workplace",
      "CliftonStrengths Team Workshop",
      "Team Building 101",
      "Presentation and Facilitation Techniques for Leaders",
    ],
    examplesLabel: "Example sessions",
  },
  {
    id: "training-design",
    title: "Training Program Design",
    bestFor:
      "Companies that need structured onboarding, clearer training materials, stronger competency standards, or better support for trainers and managers.",
    description:
      "A practical training structure that helps employees learn the right things in the right order. The goal is to make training easier to deliver, easier to track, and easier for the learner to follow.",
    deliverables: [
      "Onboarding roadmap",
      "Role based learning path",
      "Trainer guide",
      "Learner guide",
      "Manager touchpoints",
      "Competency checklist",
      "Pass standards",
      "Knowledge checks",
      "Scenario questions",
      "Sign off sheets",
      "Job aids",
      "SharePoint or LMS ready structure",
    ],
    examples: [
      "New hire onboarding program",
      "Frontline leader onboarding binder",
      "Technical training pathway",
      "Trainer certification process",
      "Monthly safety or quality training plan",
      "Refresher training program",
      "Role based training matrix",
      "Knowledge capture project",
    ],
    examplesLabel: "Example projects",
  },
  {
    id: "frontline",
    title: "Frontline Learning and Workforce Development",
    bestFor:
      "Operations, manufacturing, service, healthcare, warehouse, quality, safety, and technical teams where training connects directly to how work happens.",
    description:
      "Training materials and learning systems that turn standard work, procedures, and operational expectations into clear, teachable learning experiences. The goal is to make training easier to deliver consistently, easier for new people to follow, and easier for experienced employees to teach.",
    deliverables: [
      "SOP and work instruction training",
      "Step by step job aids",
      "Frontline competency checks",
      "Trainer sign off tools",
      "Technical training outlines",
      "Safety and quality scenarios",
      "On the job training structure",
      "Process training maps",
      "Knowledge capture interviews",
      "New equipment training support",
    ],
    examples: [
      "Good Documentation Practices",
      "Safety expectations",
      "Quality awareness",
      "In process checks",
      "Standard work",
      "Maintenance and reliability training support",
      "New equipment training",
      "Frontline supervisor readiness",
      "Tribal knowledge capture",
      "Service and professionalism standards",
      "Structured trainer programs",
    ],
    examplesLabel: "Example focus areas",
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        label="Services"
        heading="Practical training and facilitation services for real workplace needs."
        subtext="Whether you need a 90 minute workshop, a new onboarding program, a stronger training structure, or help making AI useful for your team, I can help turn the idea into something clear, engaging, and ready to use."
        imageSrc="/images/website4.png"
        imageAlt="Chris Smith presenting to a group during a session"
      />

      {services.map((service, i) => (
        <section
          key={service.id}
          id={service.id}
          className={`relative scroll-mt-24 overflow-hidden px-4 py-20 md:px-8 md:py-24 ${
            i % 2 === 0 ? "bg-warm-white" : "bg-beige/30"
          }`}
        >
          <WatermarkBackground
            position={i % 2 === 0 ? "top-right" : "bottom-left"}
            size="h-80 w-80"
            opacity="opacity-[0.04]"
          />
          <Reveal className="relative mx-auto grid max-w-[1200px] gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
            <div className="flex flex-col gap-3 self-start lg:sticky lg:top-24">
              <span className="font-serif text-3xl leading-none text-accent-orange/80">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h2 className="font-serif text-[24px] leading-snug text-dark-text md:text-[40px]">
                {service.title}
              </h2>
              <div className="mt-1 flex items-start gap-2">
                <span className="mt-0.5 shrink-0 font-sans text-xs font-medium uppercase tracking-wider text-accent-orange">
                  Best for
                </span>
                <p className="font-sans text-sm leading-relaxed text-dark-text/70">
                  {service.bestFor}
                </p>
              </div>
              <p className="mt-2 font-sans text-base leading-relaxed text-dark-text/80 md:text-lg">
                {service.description}
              </p>
            </div>

            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-4">
                <span className="font-sans text-xs font-medium uppercase tracking-wider text-accent-orange">
                  Common deliverables
                </span>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {service.deliverables.map((d) => (
                    <ServiceDeliverableTile key={d} label={d} />
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-4 border-t border-tan/30 pt-7">
                <span className="font-sans text-xs font-medium uppercase tracking-wider text-accent-orange">
                  {service.examplesLabel}
                </span>
                <div className="flex flex-wrap gap-2.5">
                  {service.examples.map((e) => (
                    <TopicChip key={e} label={e} />
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </section>
      ))}

      <CtaSection
        heading="Ready to build something useful?"
        body="Let's talk about what your team needs."
      />
    </>
  );
}
