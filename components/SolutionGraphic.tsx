import React from "react";
import type { SolutionGraphicKind } from "@/lib/projects";
import VoiceSessionGraphic from "@/components/VoiceSessionGraphic";

/**
 * Designed, illustrative thumbnails for each AI tool. They suggest what the
 * tool does (a dashboard, an assessment, a knowledge pipeline, a coverage
 * view) using abstract bars and generic labels only, so no real screenshots,
 * internal data, or names ever appear on the site.
 */

const bar = "rounded-full bg-warm-white/25";

function Shell({
  label,
  className,
  children,
}: {
  label: string;
  className: string;
  children: React.ReactNode;
}) {
  return (
    <div
      aria-hidden
      className={`relative w-full overflow-hidden bg-primary-bg ${className}`}
    >
      <div className="pointer-events-none absolute -top-12 right-0 h-44 w-44 rounded-full bg-accent-orange/15 blur-3xl" />
      <div className="absolute left-4 top-4 flex items-center gap-2">
        <span className="h-2 w-2 rounded-full bg-accent-orange" />
        <span className="font-sans text-[11px] uppercase tracking-wider text-warm-white/60">
          {label}
        </span>
      </div>
      <div className="absolute inset-x-4 bottom-4 top-11">{children}</div>
    </div>
  );
}

function Dashboard() {
  const rows = [
    { w: "w-3/4", fill: "w-[72%]", chip: "On track", warn: false },
    { w: "w-2/3", fill: "w-[38%]", chip: "Blocked", warn: true },
    { w: "w-1/2", fill: "w-[90%]", chip: "Ready", warn: false },
  ];
  return (
    <div className="flex h-full flex-col gap-2.5">
      <div className="grid grid-cols-3 gap-2">
        {[0, 1, 2].map((i) => (
          <div key={i} className="rounded-lg bg-warm-white/[0.06] p-2 ring-1 ring-warm-white/10">
            <div className={`h-1.5 w-2/3 ${bar}`} />
            <div className={`mt-2 h-3 w-1/3 rounded-full ${i === 1 ? "bg-accent-orange" : "bg-warm-white/70"}`} />
          </div>
        ))}
      </div>
      <div className="flex flex-1 flex-col justify-around rounded-lg bg-warm-white/[0.06] px-3 py-1.5 ring-1 ring-warm-white/10">
        {rows.map((r, i) => (
          <div key={i} className="flex items-center gap-2.5">
            <span className="h-4 w-4 shrink-0 rounded-full bg-warm-white/30" />
            <div className="flex flex-1 flex-col gap-1">
              <div className={`h-1.5 ${r.w} ${bar}`} />
              <div className="h-1.5 w-full rounded-full bg-warm-white/10">
                <div className={`h-1.5 ${r.fill} rounded-full ${r.warn ? "bg-accent-orange" : "bg-warm-white/70"}`} />
              </div>
            </div>
            <span
              className={`shrink-0 rounded-full px-2 py-0.5 font-sans text-[9px] font-semibold uppercase tracking-wide ${
                r.warn ? "bg-accent-orange/20 text-accent-orange" : "bg-warm-white/10 text-warm-white/70"
              }`}
            >
              {r.chip}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function Assessment() {
  const scores = ["w-[82%]", "w-[64%]", "w-[45%]", "w-[71%]"];
  return (
    <div className="grid h-full grid-cols-[1.1fr_1fr] content-center gap-2.5">
      <div className="flex flex-col gap-1.5 rounded-lg bg-warm-white/[0.06] p-2.5 ring-1 ring-warm-white/10">
        <div className={`h-1.5 w-1/3 rounded-full bg-accent-orange/70`} />
        <div className={`h-1.5 w-11/12 ${bar}`} />
        <div className={`mb-1 h-1.5 w-3/4 ${bar}`} />
        {[0, 1, 2, 3].map((i) => (
          <div key={i} className="flex items-center gap-1.5">
            <span
              className={`h-2.5 w-2.5 shrink-0 rounded-full ring-1 ${
                i === 2 ? "bg-accent-orange ring-accent-orange" : "ring-warm-white/40"
              }`}
            />
            <div className={`h-1.5 ${i === 2 ? "w-4/5 bg-warm-white/50" : "w-3/5 bg-warm-white/20"} rounded-full`} />
          </div>
        ))}
      </div>
      <div className="flex flex-col justify-between rounded-lg bg-warm-white/[0.06] p-2.5 ring-1 ring-warm-white/10">
        <div className="flex flex-col gap-2">
          {scores.map((s, i) => (
            <div key={i} className="h-1.5 w-full rounded-full bg-warm-white/10">
              <div className={`h-1.5 ${s} rounded-full ${i === 2 ? "bg-accent-orange" : "bg-warm-white/70"}`} />
            </div>
          ))}
        </div>
        <span className="self-start rounded-full bg-accent-orange/20 px-2 py-0.5 font-sans text-[9px] font-semibold uppercase tracking-wide text-accent-orange">
          Safety gate
        </span>
      </div>
    </div>
  );
}

function Knowledge() {
  const outputs = ["Training guide", "How-to", "Agent knowledge"];
  return (
    <div className="grid h-full grid-cols-[1fr_auto_1fr] items-center gap-2">
      <div className="flex flex-col gap-1.5 rounded-lg bg-warm-white/[0.06] p-2.5 ring-1 ring-warm-white/10">
        <span className="mb-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-accent-orange/90">
          <span className="h-2 w-1 rounded-full bg-white" />
        </span>
        {["w-full", "w-5/6", "w-11/12", "w-2/3", "w-4/5"].map((w, i) => (
          <div key={i} className={`h-1.5 ${w} ${bar}`} />
        ))}
      </div>
      <svg viewBox="0 0 24 24" className="h-5 w-5 text-accent-orange" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 12h14M13 6l6 6-6 6" />
      </svg>
      <div className="flex flex-col justify-center gap-1.5">
        {outputs.map((o, i) => (
          <div
            key={o}
            className={`rounded-md px-2 py-1.5 font-sans text-[9px] font-semibold uppercase tracking-wide ring-1 ${
              i === 0
                ? "bg-accent-orange/20 text-accent-orange ring-accent-orange/30"
                : "bg-warm-white/[0.06] text-warm-white/75 ring-warm-white/10"
            }`}
          >
            {o}
          </div>
        ))}
      </div>
    </div>
  );
}

function Planning() {
  const rows = [
    { cov: "w-[86%]", alert: null },
    { cov: "w-[28%]", alert: "Shortage" },
    { cov: "w-[64%]", alert: null },
    { cov: "w-[44%]", alert: "Window" },
  ];
  return (
    <div className="flex h-full flex-col justify-around rounded-lg bg-warm-white/[0.06] px-3 py-2 ring-1 ring-warm-white/10">
      {rows.map((r, i) => (
        <div key={i} className="flex items-center gap-2.5">
          <div className={`h-1.5 w-10 shrink-0 ${bar}`} />
          <div className="h-2 flex-1 rounded-full bg-warm-white/10">
            <div className={`h-2 ${r.cov} rounded-full ${r.alert ? "bg-accent-orange" : "bg-warm-white/70"}`} />
          </div>
          <span
            className={`w-16 shrink-0 rounded-full px-2 py-0.5 text-center font-sans text-[9px] font-semibold uppercase tracking-wide ${
              r.alert ? "bg-accent-orange/20 text-accent-orange" : "text-warm-white/40"
            }`}
          >
            {r.alert ?? "Covered"}
          </span>
        </div>
      ))}
    </div>
  );
}

const variants: Record<
  Exclude<SolutionGraphicKind, "voice">,
  { label: string; Body: () => React.JSX.Element }
> = {
  dashboard: { label: "Training journeys", Body: Dashboard },
  assessment: { label: "Readiness profile", Body: Assessment },
  knowledge: { label: "Knowledge capture", Body: Knowledge },
  planning: { label: "Coverage", Body: Planning },
};

export default function SolutionGraphic({
  kind,
  className = "aspect-[16/10]",
}: {
  kind: SolutionGraphicKind;
  className?: string;
}) {
  if (kind === "voice") return <VoiceSessionGraphic className={className} />;
  const { label, Body } = variants[kind];
  return (
    <Shell label={label} className={className}>
      <Body />
    </Shell>
  );
}
