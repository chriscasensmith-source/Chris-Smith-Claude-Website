import React from "react";
import Button from "@/components/Button";

interface CtaSectionProps {
  heading: string;
  body?: string;
  buttonLabel?: string;
  buttonHref?: string;
}

/**
 * Dark call-to-action band used at the foot of most pages.
 * Replaces the near-identical CTA markup that was duplicated across pages.
 */
export default function CtaSection({
  heading,
  body,
  buttonLabel = "Start a Conversation",
  buttonHref = "/contact",
}: CtaSectionProps) {
  return (
    <section className="bg-primary-bg text-warm-white py-20 md:py-28 px-4 md:px-8">
      <div className="max-w-[1200px] mx-auto">
        <div className="max-w-[640px] flex flex-col gap-6">
          <h2 className="font-serif text-[24px] md:text-[40px] leading-snug text-warm-white">
            {heading}
          </h2>
          {body && (
            <p className="font-sans text-base md:text-lg leading-relaxed text-warm-white/70">
              {body}
            </p>
          )}
          <div className="pt-2">
            <Button href={buttonHref}>{buttonLabel}</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
