"use client";

import React, { useEffect, useRef } from "react";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  /** Delay in seconds before the reveal starts. */
  delay?: number;
}

/**
 * Subtle fade-and-rise on scroll into view, as progressive enhancement.
 *
 * The server always renders content fully visible, so nothing disappears
 * when JavaScript is slow, blocked, or fails to hydrate (likely on filtered
 * corporate networks). After mount, only elements still below the fold are
 * hidden and then revealed once as they scroll in. Content already on screen
 * is never hidden, and reduced-motion users get no animation at all.
 */
export default function Reveal({ children, className = "", delay = 0 }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!("IntersectionObserver" in window)) return;
    // Already in (or above) the viewport: leave it alone.
    if (el.getBoundingClientRect().top < window.innerHeight) return;

    el.style.transitionDelay = `${delay}s`;
    el.classList.add("reveal-pending");

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          el.classList.remove("reveal-pending");
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -80px 0px" },
    );
    observer.observe(el);

    return () => {
      observer.disconnect();
      el.classList.remove("reveal-pending");
    };
  }, [delay]);

  return (
    <div ref={ref} className={`reveal ${className}`}>
      {children}
    </div>
  );
}
