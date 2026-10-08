import React from "react";
import Button from "@/components/Button";
import Reveal from "@/components/Reveal";

interface CtaSectionProps {
  heading: string;
  body?: string;
  buttonLabel?: string;
  buttonHref?: string;
  /** Reassurance shown beside the button: what reaching out actually involves. */
  note?: string;
}

/**
 * Closing call-to-action band. The heading carries the ask; the button sits
 * with a short, factual note about what happens when someone reaches out, so
 * the decision and the reassurance are read together.
 */
export default function CtaSection({
  heading,
  body,
  buttonLabel = "Start a Conversation",
  buttonHref = "/contact",
  note = "You don’t need the whole thing figured out. A rough idea is enough to start. Based in Dallas, working on-site and remote.",
}: CtaSectionProps) {
  return (
    <section className="bg-primary-bg text-warm-white px-4 md:px-8 py-20 md:py-28">
      <Reveal className="max-w-[1200px] mx-auto grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-20 lg:items-end">
        <div className="flex flex-col gap-5">
          <h2 className="font-serif text-[30px] md:text-[48px] leading-[1.1] text-warm-white">
            {heading}
          </h2>
          {body && (
            <p className="font-sans text-base md:text-lg leading-relaxed text-warm-white/75 max-w-[56ch]">
              {body}
            </p>
          )}
        </div>
        <div className="flex flex-col gap-4 border-t border-warm-white/15 pt-6 lg:border-t-0 lg:border-l lg:pl-10 lg:pt-0">
          <Button href={buttonHref} className="self-start">
            {buttonLabel}
          </Button>
          <p className="font-sans text-sm leading-relaxed text-warm-white/70 max-w-[40ch]">
            {note}
          </p>
        </div>
      </Reveal>
    </section>
  );
}
