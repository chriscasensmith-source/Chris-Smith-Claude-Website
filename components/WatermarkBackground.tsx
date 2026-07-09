import React from "react";
import { LogoMark } from "@/components/Logo";

type Position = "top-right" | "bottom-left" | "bottom-right" | "top-left";

const positionStyles: Record<Position, string> = {
  "top-right": "-top-10 -right-10",
  "bottom-left": "-bottom-16 -left-12",
  "bottom-right": "-bottom-16 -right-12",
  "top-left": "-top-12 -left-12",
};

interface WatermarkBackgroundProps {
  position?: Position;
  /** Tailwind sizing for the mark, e.g. "h-64 w-64". */
  size?: string;
  /** Opacity 0–100 (kept low so it never hurts readability). */
  opacity?: string;
  className?: string;
}

/**
 * A very light, decorative brand mark for section backgrounds. The parent
 * must be `relative` and `overflow-hidden`. Purely decorative and hidden
 * from assistive tech.
 */
export default function WatermarkBackground({
  position = "bottom-right",
  size = "h-72 w-72",
  opacity = "opacity-[0.05]",
  className = "",
}: WatermarkBackgroundProps) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute ${positionStyles[position]} ${opacity} ${className}`}
    >
      <LogoMark className={size} />
    </div>
  );
}
