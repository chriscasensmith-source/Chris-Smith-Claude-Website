import React from "react";

/**
 * Designed, illustrative stand-in for what a group leaves a session with:
 * a trainer guide, a one-page job aid, and a competency checklist with
 * trainer sign-off (deliverables listed on /services). The contents are
 * generic samples, not a real client document. Paper-toned on purpose, so
 * training artifacts read differently from the dark AI-tool graphics.
 */

function Check({ done }: { done: boolean }) {
  return (
    <span
      className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-[3px] border ${
        done ? "border-navy bg-navy text-warm-white" : "border-dark-text/35 bg-white"
      }`}
    >
      {done && (
        <svg viewBox="0 0 16 16" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round">
          <path d="M3.5 8.5l3 3 6-7" />
        </svg>
      )}
    </span>
  );
}

const checklist = [
  { text: "Explains why the standard matters", done: true },
  { text: "Follows the steps in order, unprompted", done: true },
  { text: "Handles the common exception", done: true },
  { text: "Performs it under real conditions", done: false },
];

export default function TrainingKitGraphic({ className = "" }: { className?: string }) {
  return (
    <div aria-hidden className={`relative w-full select-none ${className}`}>
      <div className="relative mx-auto aspect-square w-full max-w-[560px] sm:aspect-[3/2]">
        {/* Trainer guide, back sheet */}
        <div className="absolute left-[2%] top-[3%] w-[46%] -rotate-[4deg] rounded-md bg-sand/70 p-3.5 sm:w-[62%] sm:p-5 shadow-[0_10px_30px_-12px_rgba(13,27,42,0.35)]">
          <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.14em] text-navy/70">
            Trainer guide
          </p>
          <p className="mt-2 font-serif text-base leading-tight text-navy sm:text-lg">
            Session 2
            <span className="block text-sm text-navy/75 sm:text-base">
              Guided practice
            </span>
          </p>
          <div className="mt-2.5 flex flex-col gap-1.5 font-sans text-[11px] leading-snug text-navy/80 max-w-[80%] sm:mt-3 sm:max-w-[52%]">
            <p>Demo it once, slowly. Then they try it.</p>
            <p>Coach the step, not the person.</p>
          </div>
        </div>

        {/* Job aid, small card */}
        <div className="absolute bottom-[1%] left-[0%] w-[31%] rotate-[3deg] rounded-md bg-navy p-3 sm:bottom-[2%] sm:w-[36%] sm:p-4 text-warm-white shadow-[0_12px_28px_-10px_rgba(13,27,42,0.5)]">
          <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.14em] text-accent-orange">
            Job aid
          </p>
          <ol className="mt-2 flex flex-col gap-1 font-sans text-[11px] leading-snug text-warm-white/85">
            <li>1. Check the setup</li>
            <li>2. Run the first piece</li>
            <li>3. Verify against the standard</li>
          </ol>
        </div>

        {/* Competency checklist, front sheet */}
        <div className="absolute right-[0%] top-[14%] w-[60%] rotate-[1.5deg] sm:w-[66%] rounded-md bg-white p-5 shadow-[0_18px_40px_-14px_rgba(13,27,42,0.4)] md:p-6">
          <div className="flex items-baseline justify-between gap-3 border-b border-dark-text/10 pb-3">
            <p className="font-serif text-lg leading-tight text-dark-text md:text-xl">
              Competency checklist
            </p>
            <span className="font-sans text-[10px] uppercase tracking-[0.12em] text-dark-text/60">
              Sample
            </span>
          </div>
          <ul className="mt-3 flex flex-col gap-2.5">
            {checklist.map((item) => (
              <li
                key={item.text}
                className={`flex items-center gap-2.5 font-sans text-[12px] leading-snug md:text-[13px] ${
                  item.done ? "text-dark-text/80" : "text-dark-text"
                }`}
              >
                <Check done={item.done} />
                {item.text}
              </li>
            ))}
          </ul>
          <div className="mt-5 grid grid-cols-[1fr_auto] gap-4 font-sans text-[11px] text-dark-text/60">
            <span className="border-t border-dark-text/30 pt-1">Trainer sign-off</span>
            <span className="w-16 border-t border-dark-text/30 pt-1">Date</span>
          </div>
        </div>
      </div>
    </div>
  );
}
