import React from "react";

/**
 * A small, consistent line-icon set (24×24, stroke = currentColor) used to
 * give deliverable tiles a light visual marker. Icons are intentionally
 * simple so a grid of them reads as one calm system, not a sticker sheet.
 */
export type IconName =
  | "document"
  | "presentation"
  | "clipboard"
  | "pages"
  | "chat"
  | "branch"
  | "check"
  | "wrench"
  | "sparkle"
  | "users"
  | "shield"
  | "book"
  | "target"
  | "checklist"
  | "map"
  | "pen"
  | "layers"
  | "mic"
  | "cog"
  | "list"
  | "card";

const paths: Record<IconName, React.ReactNode> = {
  document: (
    <>
      <path d="M7 4h7l4 4v11a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1z" />
      <path d="M13 4v5h5" />
      <path d="M9.5 13h5M9.5 16h3.5" />
    </>
  ),
  presentation: (
    <>
      <path d="M3 5h18" />
      <path d="M4 5v9a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V5" />
      <path d="M12 15v4M9 20l3-1 3 1" />
    </>
  ),
  clipboard: (
    <>
      <rect x="6" y="5" width="12" height="16" rx="1.6" />
      <path d="M9 5V4h6v1" />
      <path d="M9 11h6M9 15h4" />
    </>
  ),
  pages: (
    <>
      <path d="M7 3h6l4 4v9H7z" />
      <path d="M10 8v13h9V12" />
    </>
  ),
  chat: (
    <path d="M5 5h14a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H10l-4 4v-4H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1z" />
  ),
  branch: (
    <>
      <circle cx="7" cy="6" r="2" />
      <circle cx="7" cy="18" r="2" />
      <circle cx="17" cy="10" r="2" />
      <path d="M7 8v8M7 13h5a3 3 0 0 0 3-3" />
    </>
  ),
  check: (
    <>
      <circle cx="12" cy="12" r="8" />
      <path d="M8.5 12l2.5 2.5 4.5-5" />
    </>
  ),
  wrench: (
    <path d="M15.5 5.5a4 4 0 0 0-5.2 5.2l-5.3 5.3 2 2 5.3-5.3a4 4 0 0 0 5.2-5.2l-2.4 2.4-1.8-1.8z" />
  ),
  sparkle: (
    <>
      <path d="M11 4l1.7 4L17 9.5l-4.3 1.5L11 15l-1.7-4L5 9.5 9.3 8z" />
      <path d="M18 4l.6 1.6L20 6.5l-1.4.9L18 9l-.6-1.6L16 6.5l1.4-.9z" />
    </>
  ),
  users: (
    <>
      <circle cx="9" cy="8" r="3" />
      <path d="M3.5 20a5.5 5.5 0 0 1 11 0" />
      <path d="M15 6a3 3 0 0 1 0 6M16.5 20a5.5 5.5 0 0 0-2-4.3" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3l7 3v5c0 4.4-3 7.6-7 9-4-1.4-7-4.6-7-9V6z" />
      <path d="M9 12l2 2 4-4.5" />
    </>
  ),
  book: (
    <>
      <path d="M6 4h11a1 1 0 0 1 1 1v15H7a1 1 0 0 0-1 1z" />
      <path d="M6 4v16" />
    </>
  ),
  target: (
    <>
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="12" cy="12" r="1" fill="currentColor" stroke="none" />
    </>
  ),
  checklist: (
    <>
      <path d="M10 6h9M10 12h9M10 18h9" />
      <path d="M4 6l1.3 1.3L7.8 5M4 12l1.3 1.3L7.8 11M4 18l1.3 1.3L7.8 17" />
    </>
  ),
  map: (
    <>
      <path d="M9 4L4 6v14l5-2 6 2 5-2V4l-5 2-6-2z" />
      <path d="M9 4v14M15 6v14" />
    </>
  ),
  pen: (
    <>
      <path d="M4 20h4L18 10l-4-4L4 16z" />
      <path d="M13 7l4 4" />
    </>
  ),
  layers: (
    <>
      <path d="M12 4l8 4-8 4-8-4z" />
      <path d="M4 12l8 4 8-4M4 16l8 4 8-4" />
    </>
  ),
  mic: (
    <>
      <rect x="9" y="4" width="6" height="10" rx="3" />
      <path d="M6 11a6 6 0 0 0 12 0M12 17v3M9 20h6" />
    </>
  ),
  cog: (
    <>
      <circle cx="12" cy="12" r="3" />
      <path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M18.4 5.6l-2.1 2.1M7.7 16.3l-2.1 2.1" />
    </>
  ),
  list: (
    <>
      <path d="M10 6h9M10 12h9M10 18h9" />
      <path d="M6 6h.01M6 12h.01M6 18h.01" />
    </>
  ),
  card: (
    <>
      <rect x="5" y="4" width="14" height="16" rx="1.6" />
      <path d="M9 4v7l2-1.4L13 11V4" />
    </>
  ),
};

interface IconProps {
  name: IconName;
  className?: string;
}

export default function Icon({ name, className = "h-5 w-5" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      {paths[name]}
    </svg>
  );
}

/**
 * Map a free-text deliverable label to the closest icon. Checks the most
 * specific keywords first and falls back to a document. Keeps tiles visually
 * varied without hand-tagging every list item.
 */
export function iconForLabel(label: string): IconName {
  const l = label.toLowerCase();
  const rules: [test: (s: string) => boolean, icon: IconName][] = [
    [(s) => s.includes("slide") || s.includes("deck") || s.includes("presentation"), "presentation"],
    [(s) => s.includes("facilitator") || s.includes("notes"), "clipboard"],
    [(s) => s.includes("handout") || s.includes("participant"), "pages"],
    [(s) => s.includes("prompt library") || s.includes("library"), "book"],
    [(s) => s.includes("prompt"), "chat"],
    [(s) => s.includes("scenario"), "branch"],
    [(s) => s.includes("takeaway"), "check"],
    [(s) => s.includes("job aid") || s.includes("quick reference") || s.includes("job aids"), "card"],
    [(s) => s.includes("follow up") || s.includes("tool"), "wrench"],
    [(s) => s.includes("chatgpt") || s.includes("copilot") || s.includes("ai ") || s.includes("awareness"), "sparkle"],
    [(s) => s.includes("risk") || s.includes("safety"), "shield"],
    [(s) => s.includes("sign off") || s.includes("sign-off") || s.includes("signature"), "pen"],
    [(s) => s.includes("competency") || s.includes("checklist") || s.includes("action step"), "checklist"],
    [(s) => s.includes("knowledge check") || s.includes("check"), "check"],
    [(s) => s.includes("standard") || s.includes("pass"), "target"],
    [(s) => s.includes("roadmap") || s.includes("map") || s.includes("path"), "map"],
    [(s) => s.includes("lms") || s.includes("sharepoint") || s.includes("structure"), "layers"],
    [(s) => s.includes("interview") || s.includes("capture"), "mic"],
    [(s) => s.includes("equipment") || s.includes("process") || s.includes("on the job"), "cog"],
    [(s) => s.includes("guide"), "book"],
    [(s) => s.includes("team") || s.includes("group") || s.includes("role based") || s.includes("touchpoint"), "users"],
    [(s) => s.includes("activit") || s.includes("discussion") || s.includes("conversation") || s.includes("reflection"), "chat"],
    [(s) => s.includes("step by step") || s.includes("step-by-step"), "list"],
    [(s) => s.includes("outline") || s.includes("sop") || s.includes("work instruction"), "document"],
  ];
  for (const [test, icon] of rules) {
    if (test(l)) return icon;
  }
  return "document";
}
