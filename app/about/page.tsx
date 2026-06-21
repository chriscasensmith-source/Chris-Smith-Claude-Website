import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CtaSection from "@/components/CtaSection";

export const metadata: Metadata = {
  title: "About | Real Work Learning",
  description:
    "Chris Smith brings 10 years of training operations experience at Hillstone Restaurant Group plus expertise in leadership development, AI training, and workforce development.",
};

const beliefs = [
  "Good training should be clear.",
  "Good facilitation should make people feel safe enough to participate and challenged enough to grow.",
  "Good onboarding should reduce confusion, not organize it into a prettier binder.",
  "Good AI training should help people think better, not just type prompts faster.",
  "Good workshops should include practice, not just information.",
  "Good learning should always connect back to the work.",
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        label="About"
        heading="I build training for real people doing real work."
        imageSrc="/images/Panel1.png"
        imageAlt="Chris Smith speaking on stage at a panel"
      />

      {/* Main copy */}
      <section className="bg-warm-white py-20 md:py-28 px-4 md:px-8">
        <div className="max-w-[1200px] mx-auto">
          <div className="max-w-[700px] flex flex-col gap-6 font-sans text-base md:text-lg leading-relaxed text-dark-text/80">
            <p>
              I help organizations build workshops, leadership development,
              onboarding systems, trainer capability, and practical AI skills
              that people can actually use.
            </p>
            <p>
              My career has taken an unusual path, and that path shaped how I
              work.
            </p>
            <p>
              I spent ten years managing training operations and development at
              Hillstone Restaurant Group, one of the most respected and
              deliberately scaled upscale restaurant organizations in the
              country. Hillstone is known for structured training guides,
              developmental programs for both front of house and back of house
              operations, and a rigorous culture of training discipline.
            </p>
            <p>
              That experience taught me something most training professionals
              never see: how to build training systems that survive real
              conditions.
            </p>
            <div className="bg-soft-white rounded-xl p-6 my-4">
              <p className="font-medium text-dark-text mb-4">
                What I learned at Hillstone stayed with me:
              </p>
              <ul className="flex flex-col gap-3">
                {[
                  "Training needs to be documented so it is teachable, not left to individual interpretation.",
                  "Every procedure has a purpose.",
                  "Standards matter because they protect people and quality.",
                  "You train people until they can do the work under pressure, not just in ideal conditions.",
                  "Accountability and respect go together.",
                  "When you invest in developing people, they remember it.",
                ].map((item) => (
                  <li key={item} className="flex gap-3 items-start text-dark-text/80">
                    <span className="text-accent-orange shrink-0 font-medium mt-0.5">
                      &ndash;
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <p>
              That foundation shaped everything I do now. Whether I am building
              a workshop for leadership development, designing an onboarding
              system for operations, or helping a team adopt AI more
              thoughtfully, I bring that discipline. Structure plus humanity.
              Clear expectations plus room to grow. Documentation plus
              conversation.
            </p>
            <p>
              From Hillstone, my career moved into broader operations, workforce
              development, leadership development, technical training, and
              organizational learning across complex working environments. I have
              built onboarding systems, trainer programs, frontline development
              pathways, leadership workshops, technical learning programs, and
              practical AI training for employees and leaders.
            </p>
            <p>What connects all of it is this:</p>
            <p className="font-serif text-xl md:text-2xl text-dark-text italic">
              I believe learning should feel useful and be built to last.
            </p>
            <p>
              People should leave a workshop clearer than when they walked in.
              They should practice, talk through real situations, and walk away
              with something they can use the next day. But the training systems
              that surround that workshop also matter. They need to be documented
              well enough that anyone can teach them. They need structure. They
              need accountability. They need to prepare people for the real
              conditions they will face.
            </p>
            <p className="font-serif text-lg text-accent-orange italic">
              Less lecture. More practice. Better results.
            </p>
          </div>
        </div>
      </section>

      {/* What I Believe */}
      <section className="bg-soft-white py-20 md:py-28 px-4 md:px-8">
        <div className="max-w-[1200px] mx-auto flex flex-col gap-10">
          <div className="flex flex-col gap-3 max-w-[600px]">
            <span className="text-accent-orange text-sm font-sans font-medium uppercase tracking-wider">
              What I believe
            </span>
            <h2 className="font-serif text-[24px] md:text-[40px] text-dark-text leading-snug">
              Six things I think good training should always do.
            </h2>
          </div>
          <ul className="flex flex-col gap-4 max-w-[700px]">
            {beliefs.map((b) => (
              <li
                key={b}
                className="flex gap-4 items-start border-b border-dark-text/10 pb-4 last:border-0 last:pb-0"
              >
                <span className="text-accent-orange font-medium font-sans shrink-0 mt-0.5">
                  &ndash;
                </span>
                <p className="font-sans text-base md:text-lg leading-relaxed text-dark-text/80">
                  {b}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* My Style */}
      <section className="bg-warm-white py-20 md:py-28 px-4 md:px-8">
        <div className="max-w-[1200px] mx-auto">
          <div className="max-w-[700px] flex flex-col gap-6">
            <span className="text-accent-orange text-sm font-sans font-medium uppercase tracking-wider">
              My style
            </span>
            <h2 className="font-serif text-[24px] md:text-[40px] text-dark-text leading-snug">
              Practical, conversational, and active.
            </h2>
            <p className="font-sans text-base md:text-lg leading-relaxed text-dark-text/80">
              My facilitation style is practical, conversational, and active. I
              like workshops where people talk, laugh a little, wrestle with
              real scenarios, and leave with something useful.
            </p>
            <p className="font-sans text-base md:text-lg leading-relaxed text-dark-text/80">
              I bring structure, but I do not over script the room. I keep
              things moving, but I leave space for discussion. I use plain
              language, real examples, and activities that help people connect
              the content to their daily work.
            </p>
          </div>
        </div>
      </section>

      <CtaSection
        heading="Want to work together?"
        body="Whether you have a specific project in mind or a general idea, I'd be glad to talk through what could be useful for your team."
      />
    </>
  );
}
