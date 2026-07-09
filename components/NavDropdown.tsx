"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import type { NavNode } from "@/lib/constants";

interface NavDropdownProps {
  item: NavNode;
  pathname: string;
}

/**
 * A desktop nav item with a hover/focus dropdown. The panel is bridged to the
 * trigger with padding so the pointer can cross the gap without it closing,
 * and Escape / blur-out close it for keyboard users.
 */
export default function NavDropdown({ item, pathname }: NavDropdownProps) {
  const [open, setOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const children = item.children ?? [];
  const isActive =
    pathname === item.href ||
    children.some((c) => pathname === c.href.split("#")[0] && c.href.startsWith(pathname));

  const openNow = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpen(true);
  };
  const closeSoon = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpen(false), 80);
  };

  return (
    <li
      className="relative"
      onMouseEnter={openNow}
      onMouseLeave={closeSoon}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node)) setOpen(false);
      }}
      onKeyDown={(e) => {
        if (e.key === "Escape") setOpen(false);
      }}
    >
      <Link
        href={item.href}
        aria-haspopup="menu"
        aria-expanded={open}
        onFocus={openNow}
        className={`flex items-center gap-1 font-sans text-sm transition-colors duration-200 ${
          isActive
            ? "text-accent-orange font-medium"
            : "text-warm-white/80 hover:text-accent-orange"
        }`}
      >
        {item.label}
        <svg
          className={`h-3.5 w-3.5 transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
        </svg>
      </Link>

      {open && (
        <div className="absolute left-1/2 top-full z-50 -translate-x-1/2 pt-4">
          <div
            role="menu"
            className="min-w-[280px] rounded-2xl border border-white/10 bg-primary-bg/98 p-2 shadow-xl backdrop-blur-sm"
          >
            {children.map((c) => (
              <Link
                key={c.href}
                href={c.href}
                role="menuitem"
                onClick={() => setOpen(false)}
                className="block rounded-xl px-4 py-2.5 font-sans text-sm text-warm-white/80 transition-colors duration-150 hover:bg-white/5 hover:text-accent-orange"
              >
                {c.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </li>
  );
}
