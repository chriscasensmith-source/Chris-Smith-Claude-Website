import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import CtaSection from "@/components/CtaSection";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "About | Real Work Learning",
  description:
    "Chris Smith builds training and practical AI tools for operations teams, from hospitality training at Hillstone to operations training in FDA-regulated manufacturing at Mary Kay.",
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

      {/* Main copy — prose with a sticky lessons sidebar */}
      <section className="bg-warm-white py-20 md:py-28 px-4 md:px-8">
        <Reveal className="max-w-[1200px] mx-auto grid lg:grid-cols-[1.6fr_1fr] gap-12 lg:gap-16 items-start">
          <div className="flex flex-col gap-6 font-sans text-base md:text-lg leading-relaxed text-dark-text/80">
            <p>
              I help operations teams learn the work, lead better, and adopt AI
              with judgment, and I build the practical tools that make it stick.
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
            <p>
              From there I moved onto the manufacturing floor. As a Senior
              Training Specialist at Mary Kay, I lead operations training for a
              250-person, FDA-regulated plant spanning six departments and three
              shifts: audit-ready safety and compliance training, role-based
              onboarding, certified-trainer programs, and the documentation that
              keeps it all defensible.
            </p>
            <p>
              That floor is where my AI work comes from. Facing the real gaps,
              scattered spreadsheets, knowledge trapped in a few people&rsquo;s
              heads, and trainers stretched thin, I started building tools to
              close them: a Training Command Center, a maintenance skills-gap
              analysis, an SME knowledge-capture workflow, and more.
            </p>
            <p>
              Across hospitality and manufacturing, the discipline is the same:
              structure plus humanity, clear expectations plus room to grow,
              documentation plus conversation.
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

          <aside className="lg:sticky lg:top-24 self-start bg-soft-white rounded-xl border border-sand/40 shadow-sm p-6 md:p-8">
            <p className="font-serif text-lg text-dark-text mb-4">
              What I learned at Hillstone stayed with me
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
                <li
                  key={item}
                  className="flex gap-3 items-start text-sm md:text-base text-dark-text/80 leading-relaxed"
                >
                  <span className="text-accent-orange shrink-0 font-medium mt-0.5">
                    &ndash;
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </aside>
        </Reveal>
      </section>

      {/* What I Believe — grid of numbered cards */}
      <section className="bg-soft-white py-20 md:py-28 px-4 md:px-8">
        <Reveal className="max-w-[1200px] mx-auto flex flex-col gap-10">
          <div className="flex flex-col gap-3 max-w-[640px]">
            <span className="text-accent-orange text-sm font-sans font-medium uppercase tracking-wider">
              What I believe
            </span>
            <h2 className="font-serif text-[24px] md:text-[40px] text-dark-text leading-snug">
              Six things I think good training should always do.
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {beliefs.map((b, i) => (
              <div
                key={b}
                className="flex flex-col gap-3 bg-warm-white rounded-xl border border-sand/40 shadow-sm p-6"
              >
                <span className="font-serif text-accent-orange text-2xl md:text-3xl leading-none">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="font-sans text-base leading-relaxed text-dark-text/80">
                  {b}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* My Style — image + copy */}
      <section className="bg-warm-white py-20 md:py-28 px-4 md:px-8">
        <Reveal className="max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden shadow-sm order-2 lg:order-1">
            <Image
              src="/images/website2.png"
              alt="Chris Smith facilitating a classroom workshop"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="flex flex-col gap-6 order-1 lg:order-2">
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
        </Reveal>
      </section>

      <CtaSection
        heading="Want to work together?"
        body="Whether you have a specific project in mind or a general idea, I'd be glad to talk through what could be useful for your team."
      />
    </>
  );
}
