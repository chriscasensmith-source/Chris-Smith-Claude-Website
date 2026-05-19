export const colors = {
  primaryBg: "#061B2A",
  nearBlack: "#080A0C",
  darkText: "#111111",
  warmWhite: "#F5F1EA",
  softWhite: "#F8F6F1",
  accentOrange: "#FF5A1F",
  sand: "#E9D7C0",
  softPink: "#F4B6D2",
} as const;

export const spacing = {
  sectionY: "py-20 md:py-28",
  containerX: "px-4 md:px-8",
  cardGap: "gap-6",
  sectionGap: "gap-8",
} as const;

export const typography = {
  h1: "font-serif text-4xl md:text-6xl leading-tight",
  h2: "font-serif text-2xl md:text-4xl leading-snug",
  h3: "font-serif text-xl md:text-2xl leading-snug",
  body: "font-sans text-base md:text-lg leading-relaxed",
  label: "font-sans text-sm font-medium uppercase tracking-wider",
} as const;

export const navItems = [
  { label: "Services", href: "/services" },
  { label: "Workshops", href: "/workshops" },
  { label: "AI Training", href: "/ai-training" },
  { label: "Training Systems", href: "/training-systems" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;
