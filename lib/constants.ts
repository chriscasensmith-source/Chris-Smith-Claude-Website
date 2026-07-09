// Navigation used by both the Navbar and Footer.
//
// Note: the previously exported `colors`, `spacing`, and `typography` objects
// were removed — they duplicated the Tailwind v4 design tokens defined in
// app/globals.css (@theme) and were never imported anywhere.

// Flat list — used by the Footer's simple link column.
export const navItems = [
  { label: "Services", href: "/services" },
  { label: "Workshops", href: "/workshops" },
  { label: "AI Training", href: "/ai-training" },
  { label: "Training Systems", href: "/training-systems" },
  { label: "AI Solutions", href: "/#solutions" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

export interface NavNode {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
}

// Structured tree — used by the Navbar. Services and AI Solutions expose
// their subcategories as dropdowns (the flat nav previously implied
// subcategories without offering them). Child links reuse existing pages and
// homepage section anchors, so nothing new needs to be built to support them.
export const navTree: NavNode[] = [
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Workshops and Facilitation", href: "/workshops" },
      { label: "AI Training for Teams", href: "/ai-training" },
      { label: "Leadership and Employee Development", href: "/services#leadership" },
      { label: "Training Program Design", href: "/training-systems" },
      { label: "Frontline Learning and Workforce Development", href: "/services#frontline" },
    ],
  },
  {
    label: "AI Solutions",
    href: "/#solutions",
    children: [
      { label: "Training Command Center", href: "/#training-command-center" },
      { label: "Mechanical Skills Gap Analysis", href: "/#skills-gap-analysis" },
      { label: "SME Knowledge Capture", href: "/#sme-knowledge-capture" },
      { label: "MRP Assistant", href: "/#mrp-assistant" },
      { label: "Difficult Conversation Voice Agent", href: "/#difficult-conversation-voice-agent" },
    ],
  },
  { label: "About", href: "/about" },
];
