import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Button from "@/components/Button";

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
          className={`py-20 md:py-24 px-4 md:px-8 ${
            i % 2 === 0 ? "bg-warm-white" : "bg-soft-white"
          }`}
        >
          <div className="max-w-[1200px] mx-auto flex flex-col gap-10">
            <div className="flex flex-col gap-3 max-w-[700px]">
              <h2 className="font-serif text-[24px] md:text-[40px] text-dark-text leading-snug">
                {service.title}
              </h2>
              <div className="flex items-start gap-2">
                <span className="text-accent-orange text-xs font-sans font-medium uppercase tracking-wider shrink-0 mt-0.5">
                  Best for
                </span>
                <p className="font-sans text-sm text-dark-text/70 leading-relaxed">
                  {service.bestFor}
                </p>
              </div>
              <p className="font-sans text-base md:text-lg leading-relaxed text-dark-text/80 mt-2">
                {service.description}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex flex-col gap-4">
                <span className="text-accent-orange text-xs font-sans font-medium uppercase tracking-wider">
                  Common deliverables
                </span>
                <ul className="flex flex-col gap-2">
                  {service.deliverables.map((d) => (
                    <li
                      key={d}
                      className="font-sans text-sm text-dark-text/80 flex gap-2"
                    >
                      <span className="text-accent-orange shrink-0 mt-0.5">
                        &ndash;
                      </span>
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col gap-4">
                <span className="text-accent-orange text-xs font-sans font-medium uppercase tracking-wider">
                  {service.examplesLabel}
                </span>
                <ul className="flex flex-col gap-2">
                  {service.examples.map((e) => (
                    <li
                      key={e}
                      className="font-sans text-sm text-dark-text/80 flex gap-2"
                    >
                      <span className="text-accent-orange shrink-0 mt-0.5">
                        &ndash;
                      </span>
                      {e}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="bg-primary-bg text-warm-white py-20 md:py-28 px-4 md:px-8">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex flex-col gap-6 max-w-[600px]">
          <h2 className="font-serif text-[24px] md:text-[40px] leading-snug text-warm-white">
            Ready to build something useful?
          </h2>
          <p className="font-sans text-base md:text-lg leading-relaxed text-warm-white/70">
            Let&rsquo;s talk about what your team needs.
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
