import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Card from "@/components/Card";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "Workshops | Real Work Learning",
  description:
    "Practical workshops from 90 minutes to 2 hours: AI training, emotional intelligence, leadership development, and more.",
};

const workshops = [
  {
    title: "AI 101: Making Sense of AI at Work",
    length: "90 minutes",
    audience: "Employees, leaders, HR teams, operations teams, training teams",
    description:
      "A beginner friendly workshop that explains AI in plain language and shows how tools like ChatGPT and Microsoft Copilot can support everyday work.",
    takeaways: [
      "A clear understanding of what AI is",
      "Practical examples they can use at work",
      "A simple prompt writing structure",
      "Awareness of common risks",
      "More confidence using AI tools",
    ],
  },
  {
    title: "Practical Prompt Writing for Work",
    length: "90 to 120 minutes",
    audience:
      "Employees, leaders, admin teams, HR, training teams, operations support teams",
    description:
      "A hands on session where participants practice turning vague requests into stronger prompts for real workplace tasks.",
    takeaways: [
      "A reusable prompt framework",
      "Before and after prompt examples",
      "Practice using AI for real tasks",
      "Better habits for reviewing AI output",
      "Stronger judgment around when AI helps and when it does not",
    ],
  },
  {
    title: "AI for Leaders",
    length: "90 to 120 minutes",
    audience:
      "Supervisors, managers, team leads, HR leaders, department leaders",
    description:
      "A practical workshop on how leaders can use AI to improve communication, planning, coaching, meeting prep, training support, and problem solving.",
    takeaways: [
      "Clear examples of leader focused AI use",
      "Prompts for common leadership tasks",
      "Better awareness of AI risks",
      "A practical way to review AI output",
      "Ideas for helping their teams adopt AI responsibly",
    ],
  },
  {
    title: "AI Assisted Root Cause Thinking",
    length: "90 to 120 minutes",
    audience:
      "Quality teams, operations leaders, supervisors, process owners, training teams",
    description:
      "This session shows how AI can support root cause thinking by helping organize evidence, generate questions, explore possible causes, and challenge assumptions.",
    takeaways: [
      "A practical AI supported RCA workflow",
      "Stronger question prompts",
      "Better cause and effect thinking",
      "Awareness of AI limitations",
      "A simple review process for AI output",
    ],
  },
  {
    title: "Emotional Intelligence at Work",
    length: "90 to 120 minutes",
    audience: "Employees, leaders, supervisors, mixed teams",
    description:
      "A practical workshop on how emotions shape communication, trust, feedback, conflict, and decision making.",
    takeaways: [
      "A clearer understanding of emotional intelligence",
      "Better language for workplace emotions",
      "Tools for difficult conversations",
      "Reflection on communication habits",
      "Practical steps for stronger team interactions",
    ],
  },
  {
    title: "Personality Types in the Workplace",
    length: "2 hours",
    audience: "Teams, leaders, departments, project groups",
    description:
      "An interactive session that helps people understand different work styles, communication preferences, and sources of friction.",
    takeaways: [
      "Better understanding of their own style",
      "More empathy for different styles",
      "Shared language for team communication",
      "Practical ways to reduce friction",
      "Team discussion prompts for future use",
    ],
  },
  {
    title: "CliftonStrengths Team Workshop",
    length: "2 hours",
    audience: "Teams, leaders, employee groups",
    description:
      "A strengths based workshop that helps participants understand their natural talents and how those talents show up at work.",
    takeaways: [
      "A clearer understanding of their strengths",
      "Better insight into the team's strengths mix",
      "Discussion around strengths in healthy and overused forms",
      "Practical ways to use strengths at work",
      "More appreciation for team differences",
    ],
  },
  {
    title: "Presentation and Facilitation Techniques for Leaders",
    length: "90 to 120 minutes",
    audience:
      "Supervisors, managers, trainers, team leads, project leaders",
    description:
      "A hands on workshop for people who need to lead meetings, present information, train employees, or facilitate discussions.",
    takeaways: [
      "Practical facilitation tools",
      "Better opening and closing techniques",
      "Ways to manage discussion",
      "Tips for keeping a room engaged",
      "Practice making content clearer",
    ],
  },
  {
    title: "Train the Trainer: Making Training Stick",
    length: "2 hours",
    audience:
      "Internal trainers, team leads, supervisors, subject matter experts",
    description:
      "A practical session for employees who train others but may not have formal training experience.",
    takeaways: [
      "A simple training structure",
      "Demonstrate, practice, evaluate, reinforce model",
      "Coaching language for difficult moments",
      "Better sign off habits",
      "Knowledge check examples",
      "More confidence training others",
    ],
  },
];

export default function WorkshopsPage() {
  return (
    <>
      <PageHero
        label="Workshops"
        heading="Workshops designed for learning that sticks. 90 minutes to 2 hours of active practice."
        subtext="Most workshops are 90 minutes to 2 hours in length. This timeframe allows for real learning: introduction, demonstration, guided practice, group discussion, and practical takeaways. Each session can be customized for employees, leaders, trainers, frontline teams, or mixed groups."
      />

      <section className="bg-soft-white py-20 md:py-28 px-4 md:px-8">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {workshops.map((w) => (
              <Card key={w.title} variant="default" className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <h2 className="font-serif text-lg text-dark-text leading-snug">
                    {w.title}
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-accent-orange/10 text-accent-orange text-xs font-sans font-medium px-2.5 py-1 rounded-full">
                      {w.length}
                    </span>
                  </div>
                </div>
                <p className="font-sans text-sm text-dark-text/70 leading-relaxed">
                  {w.description}
                </p>
                <div className="border-t border-dark-text/10 pt-4 flex flex-col gap-3 mt-auto">
                  <div className="flex flex-col gap-1">
                    <span className="text-accent-orange text-xs font-sans font-medium uppercase tracking-wider">
                      Audience
                    </span>
                    <p className="font-sans text-xs text-dark-text/60 leading-snug">
                      {w.audience}
                    </p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <span className="text-accent-orange text-xs font-sans font-medium uppercase tracking-wider">
                      Participants leave with
                    </span>
                    <ul className="flex flex-col gap-1">
                      {w.takeaways.map((t) => (
                        <li
                          key={t}
                          className="font-sans text-xs text-dark-text/70 flex gap-2"
                        >
                          <span className="text-accent-orange shrink-0">
                            &ndash;
                          </span>
                          {t}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary-bg text-warm-white py-20 md:py-28 px-4 md:px-8">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex flex-col gap-6 max-w-[600px]">
            <h2 className="font-serif text-[24px] md:text-[40px] leading-snug">
              Looking for a specific topic or custom session?
            </h2>
            <p className="font-sans text-base md:text-lg leading-relaxed text-warm-white/70">
              All workshops can be adapted for your audience, your goals, and
              your workplace. Let&rsquo;s talk about what you need.
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
