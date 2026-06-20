// Navigation used by both the Navbar and Footer.
//
// Note: the previously exported `colors`, `spacing`, and `typography` objects
// were removed — they duplicated the Tailwind v4 design tokens defined in
// app/globals.css (@theme) and were never imported anywhere.

export const navItems = [
  { label: "Services", href: "/services" },
  { label: "Workshops", href: "/workshops" },
  { label: "AI Training", href: "/ai-training" },
  { label: "Training Systems", href: "/training-systems" },
  { label: "AI Solutions", href: "/#solutions" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;
