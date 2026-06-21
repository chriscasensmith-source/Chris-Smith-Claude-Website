import React from "react";
import Image from "next/image";
import type { CaseStudy } from "@/lib/projects";

interface CaseStudyCardProps {
  study: CaseStudy;
  /** Flip image to the right on desktop for an alternating layout. */
  reverse?: boolean;
}

export default function CaseStudyCard({ study, reverse }: CaseStudyCardProps) {
  const { name, category, problem, build, result, builtWith, images } = study;
  const lead = images[0];

  const blocks: { label: string; text: string }[] = [
    { label: "The problem", text: problem },
    { label: "What I built", text: build },
    { label: "The result", text: result },
  ];

  return (
    <article className="bg-warm-white rounded-xl border border-sand/40 shadow-sm overflow-hidden">
      <div
        className={`grid lg:grid-cols-2 lg:items-center ${
          reverse ? "lg:[&>*:first-child]:order-2" : ""
        }`}
      >
        {/* Visual: full screenshot in an app-window frame */}
        <div className="p-6 md:p-8 bg-soft-white border-b lg:border-b-0 border-sand/40">
          {lead && (
            <div className="rounded-lg border border-sand/50 shadow-md overflow-hidden bg-white">
              <div className="flex items-center gap-1.5 h-7 px-3 bg-soft-white border-b border-sand/40">
                <span className="w-2.5 h-2.5 rounded-full bg-sand" aria-hidden />
                <span className="w-2.5 h-2.5 rounded-full bg-sand" aria-hidden />
                <span className="w-2.5 h-2.5 rounded-full bg-sand" aria-hidden />
              </div>
              <div className="relative aspect-[16/9] bg-white">
                <Image
                  src={lead.src}
                  alt={lead.alt}
                  fill
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  className="object-contain object-top"
                />
              </div>
            </div>
          )}
        </div>

        {/* Copy */}
        <div className="flex flex-col gap-5 p-6 md:p-10">
          <div className="flex flex-col gap-2">
            <span className="text-accent-orange text-xs font-sans font-semibold uppercase tracking-wider">
              {category}
            </span>
            <h3 className="font-serif text-[24px] md:text-[32px] text-dark-text leading-snug">
              {name}
            </h3>
          </div>

          <div className="flex flex-col gap-4">
            {blocks.map((b) => (
              <div key={b.label} className="flex flex-col gap-1">
                <span className="font-sans text-xs font-semibold uppercase tracking-wider text-dark-text/45">
                  {b.label}
                </span>
                <p className="font-sans text-sm md:text-base text-dark-text/75 leading-relaxed">
                  {b.text}
                </p>
              </div>
            ))}
          </div>

          {builtWith && (
            <span className="font-sans text-xs text-dark-text/45">
              {builtWith}
            </span>
          )}
        </div>
      </div>
    </article>
  );
}
