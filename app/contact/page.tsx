import type { Metadata } from "next";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact | Real Work Learning",
  description:
    "Get in touch to discuss workshops, AI training, onboarding systems, or trainer development for your team.",
};

const reasons = [
  "We need a leadership workshop",
  "We want our employees to understand AI",
  "Our onboarding needs structure",
  "Our trainers need help",
  "We have procedures, but they are hard to train from",
  "We need someone to facilitate a working session",
  "We need practical training materials for frontline teams",
  "We need help turning scattered content into a usable training plan",
];

export default function ContactPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-primary-bg text-warm-white py-24 md:py-28 px-4 md:px-8">
        <div className="max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-6">
            <span className="text-accent-orange text-sm font-sans font-medium uppercase tracking-wider">
              Contact
            </span>
            <h1 className="font-serif text-[32px] md:text-[56px] leading-tight">
              Let&rsquo;s build a workshop or training experience that actually
              helps.
            </h1>
            <p className="font-sans text-base md:text-lg leading-relaxed text-warm-white/80">
              Whether you need a 90 minute to 2 hour workshop, a better
              onboarding structure, a train the trainer session, or practical
              AI training for your team, I would be glad to talk.
            </p>
            <p className="font-sans text-base leading-relaxed text-warm-white/60">
              You do not need to have the whole thing figured out. A rough idea
              is enough to start.
            </p>
          </div>
          <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden shadow-md">
            <Image
              src="/images/website7.png"
              alt="A full room during one of Chris Smith's training sessions"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Form + Reasons */}
      <section className="bg-warm-white py-20 md:py-28 px-4 md:px-8">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid md:grid-cols-[2fr_3fr] gap-12 md:gap-16 items-start">
            {/* Reasons */}
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <span className="text-accent-orange text-sm font-sans font-medium uppercase tracking-wider">
                  Common reasons people reach out
                </span>
              </div>
              <ul className="flex flex-col gap-3">
                {reasons.map((r) => (
                  <li
                    key={r}
                    className="flex gap-3 items-start font-sans text-sm text-dark-text/80 leading-snug"
                  >
                    <span className="text-accent-orange shrink-0 font-medium mt-0.5">
                      &ndash;
                    </span>
                    {r}
                  </li>
                ))}
              </ul>
            </div>

            {/* Functional contact form (delivers via Web3Forms) */}
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
