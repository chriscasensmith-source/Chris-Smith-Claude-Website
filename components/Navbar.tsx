"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "@/lib/constants";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <header className="sticky top-0 z-50 px-4 py-3 md:py-4">
        {/* Desktop: floating pill */}
        <nav className="hidden md:flex max-w-[1200px] mx-auto bg-primary-bg/95 backdrop-blur-sm rounded-full px-6 lg:px-8 items-center justify-between h-14 shadow-md">
          <Link
            href="/"
            className="font-serif text-warm-white font-semibold whitespace-nowrap shrink-0"
          >
            <span className="hidden xl:inline text-sm">
              Chris Smith | Real Work Learning
            </span>
            <span className="xl:hidden text-base">Chris Smith</span>
          </Link>

          <ul className="flex items-center gap-4 lg:gap-6">
            {navItems.map((item) => (
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
            ))}
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
          <Link
            href="/"
            className="font-serif text-warm-white text-base font-semibold"
          >
            Chris Smith
          </Link>
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
        <div className="fixed inset-0 z-[100] bg-primary-bg flex flex-col md:hidden">
          {/* Overlay header */}
          <div className="flex items-center justify-between px-4 py-4 border-b border-warm-white/10">
            <Link
              href="/"
              onClick={() => setMenuOpen(false)}
              className="font-serif text-warm-white text-lg font-semibold"
            >
              Chris Smith
            </Link>
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setMenuOpen(false)}
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

          {/* Overlay nav links */}
          <nav className="flex-1 flex flex-col justify-center px-8">
            <ul className="flex flex-col">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className={`block py-4 font-serif text-2xl border-b border-warm-white/10 transition-colors duration-200 ${
                      pathname === item.href
                        ? "text-accent-orange"
                        : "text-warm-white hover:text-accent-orange"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li className="pt-8">
                <Link
                  href="/contact"
                  onClick={() => setMenuOpen(false)}
                  className="inline-flex items-center bg-accent-orange text-white font-sans text-sm font-semibold rounded-lg px-6 py-3 min-h-[44px] hover:bg-orange-600 transition-colors duration-200"
                >
                  Start a Conversation
                </Link>
              </li>
            </ul>
          </nav>

          {/* Overlay footer */}
          <div className="px-8 py-6 border-t border-warm-white/10">
            <p className="font-sans text-xs text-warm-white/40">
              Less lecture. More practice. Better results.
            </p>
          </div>
        </div>
      )}
    </>
  );
}
