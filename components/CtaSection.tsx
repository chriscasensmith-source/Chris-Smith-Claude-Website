import React from "react";
import Button from "@/components/Button";
import Reveal from "@/components/Reveal";

interface CtaSectionProps {
  heading: string;
  body?: string;
  buttonLabel?: string;
  buttonHref?: string;
}

/**
 * Centered closing call-to-action band. Centered layout fills the width
 * cleanly, and the Reveal gives it a subtle entrance.
 */
export default function CtaSection({
  heading,
  body,
  buttonLabel = "Start a Conversation",
  buttonHref = "/contact",
}: CtaSectionProps) {
  return (
    <section className="relative overflow-hidden bg-primary-bg text-warm-white px-4 md:px-8 py-24 md:py-32">
      {/* Soft accent glows, kept subtle */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-accent-orange/10 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 -left-24 h-80 w-80 rounded-full bg-soft-pink/5 blur-3xl"
      />

      <Reveal className="relative max-w-[760px] mx-auto flex flex-col items-center text-center gap-6">
        <span className="text-accent-orange text-sm font-sans font-medium uppercase tracking-wider">
          Let&rsquo;s build something useful
        </span>
        <h2 className="font-serif text-[30px] md:text-[48px] leading-tight text-warm-white">
          {heading}
        </h2>
        {body && (
          <p className="font-sans text-base md:text-lg leading-relaxed text-warm-white/70 max-w-[560px]">
            {body}
          </p>
        )}
        <div className="flex flex-col sm:flex-row gap-4 pt-2 justify-center">
          <Button href={buttonHref}>{buttonLabel}</Button>
          <Button href="/services" variant="ghost">
            View Services
          </Button>
        </div>
        <p className="font-serif text-lg text-warm-white/40 italic pt-2">
          Less lecture. More practice. Better results.
        </p>
      </Reveal>
    </section>
  );
}
