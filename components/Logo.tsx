import React from "react";
import Link from "next/link";

/**
 * The Real Work Learning mark: a rising trend line with an arrowhead over
 * three foundation bars. It reads as growth and better results built on a
 * solid base — practical and work-focused, not generic tech.
 *
 * The bars use `currentColor`, so the mark inherits the surrounding text
 * color (navy on light backgrounds, warm-white on dark). The trend line
 * stays brand orange in every context.
 */
export function LogoMark({
  className = "h-8 w-8",
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      {/* Foundation bars */}
      <rect x="6" y="23" width="5" height="11" rx="1.6" fill="currentColor" opacity="0.3" />
      <rect x="14" y="18" width="5" height="16" rx="1.6" fill="currentColor" opacity="0.3" />
      <rect x="22" y="13" width="5" height="21" rx="1.6" fill="currentColor" opacity="0.3" />
      {/* Rising trend line */}
      <path
        d="M6 27.5 16 21 23 24 34 11"
        stroke="#F36F21"
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Arrowhead */}
      <path
        d="M27 11 H34 V18"
        stroke="#F36F21"
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

interface LogoProps {
  /** Render as a link to home. Set false to use the mark/wordmark inline. */
  href?: string | false;
  showText?: boolean;
  className?: string;
  markClassName?: string;
  textClassName?: string;
  onClick?: () => void;
}

export default function Logo({
  href = "/",
  showText = true,
  className = "",
  markClassName = "h-8 w-8",
  textClassName = "font-serif text-base lg:text-lg font-semibold",
  onClick,
}: LogoProps) {
  const content = (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <LogoMark className={markClassName} />
      {showText && (
        <span className={`${textClassName} whitespace-nowrap leading-none`}>
          Real Work Learning
        </span>
      )}
    </span>
  );

  if (href === false) return content;

  return (
    <Link
      href={href}
      onClick={onClick}
      aria-label="Real Work Learning — home"
      className="inline-flex items-center transition-opacity duration-200 hover:opacity-90"
    >
      {content}
    </Link>
  );
}
