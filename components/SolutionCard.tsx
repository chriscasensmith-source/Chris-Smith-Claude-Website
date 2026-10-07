import React from "react";
import type { Solution } from "@/lib/projects";
import SolutionGraphic from "@/components/SolutionGraphic";

interface SolutionCardProps {
  solution: Solution;
}

export default function SolutionCard({ solution }: SolutionCardProps) {
  const { name, category, tagline, description, graphic, builtWith } = solution;

  return (
    <div className="group flex flex-col h-full w-full bg-warm-white rounded-2xl border border-tan/30 shadow-sm overflow-hidden transition-all duration-200 hover:-translate-y-1 hover:shadow-md hover:border-accent-orange/25">
      <SolutionGraphic
        kind={graphic}
        className="aspect-[16/10] border-b border-sand/40"
      />

      <div className="flex flex-col gap-3 p-6 flex-1">
        <span className="inline-flex self-start items-center rounded-full bg-accent-orange/10 px-2.5 py-1 text-[11px] font-sans font-semibold uppercase tracking-wider text-accent-orange">
          {category}
        </span>
        <h3 className="font-serif text-[20px] md:text-[24px] text-dark-text leading-snug">
          {name}
        </h3>
        <p className="font-sans text-sm font-medium text-dark-text/80 leading-snug">
          {tagline}
        </p>
        <p className="font-sans text-sm text-dark-text/65 leading-relaxed flex-1">
          {description}
        </p>
        {builtWith && (
          <span className="font-sans text-xs text-dark-text/45 mt-auto pt-2">
            {builtWith}
          </span>
        )}
      </div>
    </div>
  );
}
