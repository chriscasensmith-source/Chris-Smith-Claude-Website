"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";

// Pseudo-random but stable bar heights for a natural-looking waveform.
const BARS = Array.from({ length: 32 }, (_, i) =>
  Math.round((Math.abs(Math.sin(i * 1.3)) * 0.65 + 0.35) * 100),
);

/**
 * Designed "voice session" thumbnail for the Difficult Conversation Voice
 * Agent — a voice tool has no dashboard to screenshot, so this on-brand
 * mock (pulsing mic + animated waveform) stands in. Respects reduced motion.
 */
export default function VoiceSessionGraphic() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="relative w-full aspect-[16/10] border-b border-sand/40 bg-primary-bg overflow-hidden flex flex-col items-center justify-center gap-5 p-6">
      {/* soft accent glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-12 right-0 h-44 w-44 rounded-full bg-accent-orange/15 blur-3xl"
      />

      {/* status row */}
      <div className="absolute top-4 left-4 flex items-center gap-2">
        <span className="h-2 w-2 rounded-full bg-accent-orange" />
        <span className="font-sans text-[11px] uppercase tracking-wider text-warm-white/60">
          Live practice
        </span>
      </div>

      {/* mic with pulsing ring */}
      <div className="relative flex items-center justify-center">
        {!reduceMotion && (
          <motion.span
            aria-hidden
            className="absolute h-12 w-12 rounded-full bg-accent-orange/30"
            animate={{ scale: [1, 1.7], opacity: [0.5, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeOut" }}
          />
        )}
        <span className="relative flex h-11 w-11 items-center justify-center rounded-full bg-accent-orange text-white shadow-md">
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden
          >
            <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
            <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
            <line x1="12" y1="19" x2="12" y2="23" />
            <line x1="8" y1="23" x2="16" y2="23" />
          </svg>
        </span>
      </div>

      {/* waveform */}
      <div className="flex items-center justify-center gap-[3px] h-9">
        {BARS.map((h, i) => (
          <motion.span
            key={i}
            className="w-[3px] rounded-full bg-warm-white/70 origin-center"
            style={{ height: `${h}%` }}
            animate={reduceMotion ? undefined : { scaleY: [1, 0.4, 0.9, 0.55, 1] }}
            transition={
              reduceMotion
                ? undefined
                : {
                    duration: 1.3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: (i % 8) * 0.08,
                  }
            }
          />
        ))}
      </div>

      <span className="font-sans text-xs text-warm-white/55 text-center px-4">
        Rehearsing a coaching conversation, out loud
      </span>
    </div>
  );
}
