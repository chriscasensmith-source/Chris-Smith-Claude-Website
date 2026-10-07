import React from "react";
import { LogoMark } from "@/components/Logo";
import Icon, { type IconName } from "@/components/Icon";

interface BrandPanelProps {
  eyebrow: string;
  line: string;
  icon: IconName;
  /** "onDark" lifts the panel off a navy section; "onLight" is deep navy. */
  tone?: "onLight" | "onDark";
  /** Sizing utilities, e.g. "aspect-[4/3]". */
  className?: string;
}

/**
 * A branded visual for spots that would otherwise hold a photo: a navy panel
 * with a soft orange glow, a subtle dot grid, a topic icon, and a short line
 * of copy. It holds the layout until new photography is added, at which point
 * the page can swap back to an ImageFrame.
 */
export default function BrandPanel({
  eyebrow,
  line,
  icon,
  tone = "onLight",
  className = "aspect-[4/3]",
}: BrandPanelProps) {
  const surface =
    tone === "onDark"
      ? "bg-navy-soft ring-1 ring-warm-white/10"
      : "bg-primary-bg ring-1 ring-navy/10";

  return (
    <div
      aria-hidden
      className={`relative w-full overflow-hidden rounded-xl shadow-md ${surface} ${className}`}
    >
      <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-accent-orange/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 -left-16 h-56 w-56 rounded-full bg-tan/10 blur-3xl" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.07] [background-image:radial-gradient(circle,#F5F1EA_1px,transparent_1px)] [background-size:18px_18px]" />

      <LogoMark className="absolute left-5 top-5 h-8 w-8 text-warm-white/80" />

      <div className="absolute inset-0 flex items-center justify-center pb-16">
        <span className="flex h-20 w-20 items-center justify-center rounded-2xl bg-accent-orange/15 ring-1 ring-accent-orange/30 md:h-24 md:w-24">
          <Icon name={icon} className="h-10 w-10 text-accent-orange md:h-12 md:w-12" />
        </span>
      </div>

      <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
        <span className="font-sans text-xs font-medium uppercase tracking-wider text-accent-orange">
          {eyebrow}
        </span>
        <p className="mt-1 font-serif text-lg leading-snug text-warm-white md:text-2xl">
          {line}
        </p>
      </div>
    </div>
  );
}
