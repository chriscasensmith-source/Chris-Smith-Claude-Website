// Bespoke AI / workflow tools Chris has built, plus deeper case studies.
// Each tool is shown with a designed, illustrative graphic (see
// components/SolutionGraphic.tsx) rather than a real screenshot, so no
// internal data, names, or employer details appear on the site.

export type SolutionGraphicKind =
  | "dashboard"
  | "assessment"
  | "knowledge"
  | "planning"
  | "voice";

export interface Solution {
  slug: string;
  name: string;
  category: string;
  tagline: string;
  description: string;
  graphic: SolutionGraphicKind;
  builtWith?: string;
}

export interface CaseStudy {
  slug: string;
  name: string;
  category: string;
  summary: string;
  problem: string;
  build: string;
  result: string;
  builtWith?: string;
  graphic: SolutionGraphicKind;
}

export const solutions: Solution[] = [
  {
    slug: "training-command-center",
    name: "Training Command Center",
    category: "Training & Onboarding",
    tagline: "A live training-journey dashboard for supervisors and training admins.",
    description:
      "Tracks every trainee across multi-week onboarding journeys: current step, next action, owner, due date, blockers, check-ins, and final certification. One view replaces spreadsheet chaos.",
    graphic: "dashboard",
    builtWith: "Built with Claude Code & Codex",
  },
  {
    slug: "skills-gap-analysis",
    name: "Mechanical Skills Gap Analysis",
    category: "Maintenance",
    tagline: "A two-stage assessment that turns skill gaps into a coaching plan.",
    description:
      "A scenario-based written test plus tablet-administered practical stations, blended into a weighted technician readiness profile with a safety gate. Identifies maintenance skill gaps and drives targeted training.",
    graphic: "assessment",
    builtWith: "Built with Claude Code & Codex",
  },
  {
    slug: "sme-knowledge-capture",
    name: "SME Knowledge Capture",
    category: "Knowledge",
    tagline: "Turn expert know-how into reusable training and agent-ready content.",
    description:
      "“Tribe” captures tribal knowledge from subject matter experts, then parses each transcript into a Training Guide, How-To, and Agent Knowledge, organized by department and exportable as a reusable knowledge pack.",
    graphic: "knowledge",
    builtWith: "Built with Claude Code & Codex",
  },
  {
    slug: "mrp-assistant",
    name: "MRP Assistant",
    category: "Manufacturing & Planning",
    tagline: "Surface coverage, shortage risk, and planning signals faster.",
    description:
      "A coverage dashboard that tracks items across the planning horizon and flags window alerts and active shortages, so teams see what needs action without digging through systems and spreadsheets.",
    graphic: "planning",
  },
  {
    slug: "difficult-conversation-voice-agent",
    name: "Difficult Conversation Voice Agent",
    category: "Leadership",
    tagline: "Practice hard conversations out loud, before they happen for real.",
    description:
      "A leadership-support voice agent for rehearsing difficult conversations, evaluations, mid-years, and coaching discussions. A safe place to practice tone, structure, and follow-through.",
    graphic: "voice",
  },
];

export const caseStudies: CaseStudy[] = [
  {
    slug: "training-command-center",
    name: "Training Command Center",
    category: "Training & Onboarding",
    summary:
      "A live training-journey dashboard that replaced spreadsheet tracking across multiple departments and shifts.",
    problem:
      "Training progress lived in scattered spreadsheets. Across multiple departments and shifts, supervisors and training admins had no single, current view of who was on track, who was blocked, what was overdue, or which trainees still needed a trainer.",
    build:
      "A command center for the whole training journey: a dashboard of active journeys, blockers, and overdue steps; per-trainee detail with timeline, onboarding checklist, and certification status; trainer-capacity views; and admin controls for pausing, reassigning, and noting journeys.",
    result:
      "One live view of every active onboarding journey, with current step, next action, owner, and due date at a glance, so action items surface early instead of slipping through the cracks.",
    builtWith: "Built with Claude Code & Codex",
    graphic: "dashboard",
  },
  {
    slug: "skills-gap-analysis",
    name: "Mechanical Skills Gap Analysis Tool",
    category: "Maintenance",
    summary:
      "A written + practical assessment that produces a technician readiness profile and a targeted training plan.",
    problem:
      "Maintenance teams needed an honest, consistent way to identify technician skill gaps and plan training around them, without turning the assessment into a pass/fail grade.",
    build:
      "A three-part tool: a scenario-based written assessment that tests troubleshooting judgment; tablet-administered practical stations scored on a four-level rubric with hard-gate critical-fail safety items; and a weighted readiness profile (written, practical, and observation) with a safety gate that blocks sign-off while a critical gap is open.",
    result:
      "Category scores and prioritized training needs turn results into a coaching plan rather than a grade, with safety gaps surfaced before a technician is cleared to work independently.",
    builtWith: "Built with Claude Code & Codex",
    graphic: "assessment",
  },
  {
    slug: "sme-knowledge-capture",
    name: "SME Knowledge Capture (Tribe)",
    category: "Knowledge",
    summary:
      "A workflow that captures expert knowledge and parses it into reusable training and troubleshooting content.",
    problem:
      "Critical know-how lived in the heads of a few experienced people. When they were busy, or gone, that knowledge was hard to teach and easy to lose.",
    build:
      "Tribe captures a transcript from a subject matter expert and parses it into structured outputs: a Training Guide, a How-To, and Agent Knowledge, tagged by department and knowledge type (process, troubleshooting, system, tribal) and stored in a searchable library.",
    result:
      "Tribal knowledge becomes reusable training material and agent-ready content that any team can pull from, and an exportable knowledge pack that travels across the organization.",
    builtWith: "Built with Claude Code & Codex",
    graphic: "knowledge",
  },
];
