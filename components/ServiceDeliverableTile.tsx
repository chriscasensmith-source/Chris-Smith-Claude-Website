import React from "react";
import Icon, { iconForLabel, type IconName } from "@/components/Icon";

interface ServiceDeliverableTileProps {
  label: string;
  /** Override the auto-selected icon if needed. */
  icon?: IconName;
}

/**
 * A clean, app-tile-style card for a single deliverable: a soft icon badge
 * and a clear label, with a subtle border and a gentle hover lift. Designed
 * to sit in a responsive grid.
 */
export default function ServiceDeliverableTile({
  label,
  icon,
}: ServiceDeliverableTileProps) {
  const name = icon ?? iconForLabel(label);
  return (
    <div className="group flex items-center gap-3 rounded-xl border border-tan/30 bg-white/70 p-3.5 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-accent-orange/40 hover:shadow-md">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-accent-orange/12 to-tan/20 text-navy transition-colors duration-200 group-hover:text-accent-orange">
        <Icon name={name} className="h-5 w-5" />
      </span>
      <span className="font-sans text-sm font-medium leading-snug text-dark-text/85">
        {label}
      </span>
    </div>
  );
}
