import React from "react";

interface TopicChipProps {
  label: string;
}

/**
 * A compact, scannable pill tag for example topics / sessions / focus areas.
 * Kept subtle so a row of chips supports the section rather than competing
 * with the deliverable tiles.
 */
export default function TopicChip({ label }: TopicChipProps) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-navy/12 bg-beige/50 px-3.5 py-1.5 font-sans text-xs font-medium text-navy/85 transition-colors duration-200 hover:border-accent-orange/40 hover:bg-accent-orange/10 hover:text-accent-orange md:text-sm">
      <span
        aria-hidden
        className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent-orange/70"
      />
      {label}
    </span>
  );
}
