import React from "react";
import Image from "next/image";
import type { Solution } from "@/lib/projects";

interface SolutionCardProps {
  solution: Solution;
}

export default function SolutionCard({ solution }: SolutionCardProps) {
  const { name, category, tagline, description, image, imageAlt, builtWith } =
    solution;

  return (
    <div className="group flex flex-col h-full bg-warm-white rounded-xl border border-sand/40 shadow-sm overflow-hidden transition-shadow duration-200 hover:shadow-md">
      {image ? (
        <div className="relative w-full aspect-[16/10] border-b border-sand/40 bg-soft-white overflow-hidden">
          <Image
            src={image}
            alt={imageAlt ?? name}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
            className="object-cover object-top"
          />
        </div>
      ) : (
        <div className="relative w-full aspect-[16/10] border-b border-sand/40 bg-primary-bg flex items-center justify-center">
          <span className="font-serif text-warm-white/90 text-2xl text-center px-6 leading-snug">
            {name}
          </span>
        </div>
      )}

      <div className="flex flex-col gap-3 p-6 flex-1">
        <span className="text-accent-orange text-xs font-sans font-semibold uppercase tracking-wider">
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
