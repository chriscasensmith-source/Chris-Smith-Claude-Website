"use client";

import React, { useId, useRef, useState } from "react";
import Link from "next/link";
import type { NavNode } from "@/lib/constants";

interface NavDropdownProps {
  item: NavNode;
  pathname: string;
}

/**
 * A desktop nav item with a disclosure dropdown. The label is a plain link to
 * the section page; the chevron button toggles the panel, so touch users can
 * open it without navigating away. Pointer hover also opens it (the panel is
 * bridged to the trigger with padding so the pointer can cross the gap), and
 * Escape / blur-out close it for keyboard users.
 */
export default function NavDropdown({ item, pathname }: NavDropdownProps) {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  // Pointer type of the press that led to the current click. A mouse has
  // already opened the panel on hover, so its click must not toggle it shut.
  const pressPointer = useRef<string | null>(null);

  const children = item.children ?? [];
  // Hash links point at sections of another page (often the homepage), not
  // at a page of their own, so they never mark this item as current.
  const isActive =
    pathname === item.href ||
    children.some((c) => !c.href.includes("#") && pathname === c.href);

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
      // Hover-to-open is for mouse only; touch taps go through the button's
      // toggle, which a synthetic hover would otherwise immediately undo.
      onPointerEnter={(e) => {
        if (e.pointerType === "mouse") openNow();
      }}
      onPointerLeave={(e) => {
        if (e.pointerType === "mouse") closeSoon();
      }}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node)) setOpen(false);
      }}
      onKeyDown={(e) => {
        if (e.key === "Escape" && open) {
          setOpen(false);
          e.currentTarget.querySelector<HTMLButtonElement>("button")?.focus();
        }
      }}
    >
      <div className="flex items-center gap-0.5">
        <Link
          href={item.href}
          className={`font-sans text-sm transition-colors duration-200 ${
            isActive
              ? "text-accent-orange font-medium"
              : "text-warm-white/80 hover:text-accent-orange"
          }`}
        >
          {item.label}
        </Link>
        <button
          type="button"
          aria-expanded={open}
          aria-controls={panelId}
          aria-label={`${open ? "Hide" : "Show"} ${item.label} pages`}
          onPointerDown={(e) => {
            pressPointer.current = e.pointerType;
          }}
          onClick={() => {
            if (pressPointer.current === "mouse") openNow();
            else setOpen((v) => !v);
            pressPointer.current = null;
          }}
          className="-mr-2 flex h-8 w-8 items-center justify-center rounded-full text-warm-white/80 transition-colors duration-200 hover:text-accent-orange"
        >
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
        </button>
      </div>

      <div
        id={panelId}
        hidden={!open}
        className="absolute left-1/2 top-full z-50 -translate-x-1/2 pt-4"
      >
        <ul className="min-w-[280px] rounded-2xl border border-white/10 bg-primary-bg p-2 shadow-xl">
          {children.map((c) => (
            <li key={c.href}>
              <Link
                href={c.href}
                onClick={() => setOpen(false)}
                className="block rounded-xl px-4 py-2.5 font-sans text-sm text-warm-white/80 transition-colors duration-150 hover:bg-white/5 hover:text-accent-orange"
              >
                {c.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
}
