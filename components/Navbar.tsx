"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navTree } from "@/lib/constants";
import Logo from "@/components/Logo";
import NavDropdown from "@/components/NavDropdown";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openSection, setOpenSection] = useState<string | null>(null);
  const pathname = usePathname();

  const closeMobile = () => {
    setMenuOpen(false);
    setOpenSection(null);
  };

  return (
    <>
      <header className="sticky top-0 z-50 px-4 py-3 md:py-4">
        {/* Desktop: floating pill */}
        <nav className="hidden md:flex max-w-[1200px] mx-auto bg-primary-bg/95 backdrop-blur-sm rounded-full px-6 lg:px-8 items-center justify-between h-14 shadow-md">
          <Logo
            markClassName="h-7 w-7 text-warm-white"
            textClassName="font-serif text-base lg:text-lg font-semibold text-warm-white"
          />

          <ul className="flex items-center gap-5 lg:gap-7">
            {navTree.map((item) =>
              item.children ? (
                <NavDropdown key={item.href} item={item} pathname={pathname} />
              ) : (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`font-sans text-sm transition-colors duration-200 ${
                      pathname === item.href
                        ? "text-accent-orange font-medium"
                        : "text-warm-white/80 hover:text-accent-orange"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ),
            )}
          </ul>

          <Link
            href="/contact"
            className="bg-accent-orange text-white text-sm font-semibold font-sans rounded-lg px-5 py-2 hover:bg-orange-600 hover:shadow-md transition-all duration-200 whitespace-nowrap shrink-0 min-h-[36px] flex items-center"
          >
            Start a Conversation
          </Link>
        </nav>

        {/* Mobile: compact bar */}
        <nav className="md:hidden bg-primary-bg/95 backdrop-blur-sm rounded-2xl px-4 py-3 flex items-center justify-between shadow-md">
          <Logo
            markClassName="h-7 w-7 text-warm-white"
            textClassName="font-serif text-base font-semibold text-warm-white"
          />
          <button
            type="button"
            aria-label="Open menu"
            onClick={() => setMenuOpen(true)}
            className="text-warm-white p-1 min-h-[44px] min-w-[44px] flex items-center justify-center"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </nav>
      </header>

      {/* Mobile: full-screen overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-[100] bg-primary-bg flex flex-col md:hidden overflow-y-auto">
          {/* Overlay header */}
          <div className="flex items-center justify-between px-4 py-4 border-b border-warm-white/10">
            <Logo
              onClick={closeMobile}
              markClassName="h-7 w-7 text-warm-white"
              textClassName="font-serif text-lg font-semibold text-warm-white"
            />
            <button
              type="button"
              aria-label="Close menu"
              onClick={closeMobile}
              className="text-warm-white p-1 min-h-[44px] min-w-[44px] flex items-center justify-center"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Overlay nav links (accordion for sections with children) */}
          <nav className="flex-1 px-6 py-6">
            <ul className="flex flex-col">
              {navTree.map((item) => {
                const expanded = openSection === item.label;
                if (!item.children) {
                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        onClick={closeMobile}
                        className={`block py-4 font-serif text-2xl border-b border-warm-white/10 transition-colors duration-200 ${
                          pathname === item.href
                            ? "text-accent-orange"
                            : "text-warm-white hover:text-accent-orange"
                        }`}
                      >
                        {item.label}
                      </Link>
                    </li>
                  );
                }
                return (
                  <li key={item.href} className="border-b border-warm-white/10">
                    <div className="flex items-center justify-between">
                      <Link
                        href={item.href}
                        onClick={closeMobile}
                        className="block py-4 font-serif text-2xl text-warm-white hover:text-accent-orange transition-colors duration-200"
                      >
                        {item.label}
                      </Link>
                      <button
                        type="button"
                        aria-label={`${expanded ? "Collapse" : "Expand"} ${item.label}`}
                        aria-expanded={expanded}
                        onClick={() =>
                          setOpenSection(expanded ? null : item.label)
                        }
                        className="text-warm-white/70 p-2 min-h-[44px] min-w-[44px] flex items-center justify-center"
                      >
                        <svg
                          className={`h-5 w-5 transition-transform duration-200 ${
                            expanded ? "rotate-180" : ""
                          }`}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 9l6 6 6-6"
                          />
                        </svg>
                      </button>
                    </div>
                    {expanded && (
                      <ul className="flex flex-col gap-1 pb-4 pl-1">
                        {item.children.map((c) => (
                          <li key={c.href}>
                            <Link
                              href={c.href}
                              onClick={closeMobile}
                              className="block py-2.5 font-sans text-base text-warm-white/75 hover:text-accent-orange transition-colors duration-200"
                            >
                              {c.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                );
              })}
            </ul>

            <Link
              href="/contact"
              onClick={closeMobile}
              className="mt-8 inline-flex items-center bg-accent-orange text-white font-sans text-sm font-semibold rounded-lg px-6 py-3 min-h-[44px] hover:bg-orange-600 transition-colors duration-200"
            >
              Start a Conversation
            </Link>
          </nav>

          {/* Overlay footer */}
          <div className="px-6 py-6 border-t border-warm-white/10">
            <p className="font-sans text-xs text-warm-white/40">
              Less lecture. More practice. Better results.
            </p>
          </div>
        </div>
      )}
    </>
  );
}
