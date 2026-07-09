import React from "react";
import Image from "next/image";
import type { Solution } from "@/lib/projects";
import VoiceSessionGraphic from "@/components/VoiceSessionGraphic";

interface SolutionCardProps {
  solution: Solution;
}

export default function SolutionCard({ solution }: SolutionCardProps) {
  const {
    name,
    category,
    tagline,
    description,
    image,
    imageAlt,
    graphic,
    builtWith,
  } = solution;

  return (
    <div className="group flex flex-col h-full w-full bg-warm-white rounded-2xl border border-tan/30 shadow-sm overflow-hidden transition-all duration-200 hover:-translate-y-1 hover:shadow-md hover:border-accent-orange/25">
      {image ? (
        <div className="relative w-full aspect-[16/10] border-b border-sand/40 bg-soft-white overflow-hidden">
          <Image
            src={image}
            alt={imageAlt ?? name}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
            className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.04]"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy/20 via-transparent to-transparent"
          />
        </div>
      ) : graphic === "voice" ? (
        <VoiceSessionGraphic />
      ) : (
        <div className="relative w-full aspect-[16/10] border-b border-sand/40 bg-primary-bg flex items-center justify-center">
          <span className="font-serif text-warm-white/90 text-2xl text-center px-6 leading-snug">
            {name}
          </span>
        </div>
      )}

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
