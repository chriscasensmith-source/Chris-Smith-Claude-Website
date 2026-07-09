import React from "react";
import Link from "next/link";

/**
 * The Real Work Learning mark: a lightbulb (the idea) filled with an orange
 * checklist (the practical work getting done), with an orange screw base and
 * a few "aha" rays above.
 *
 * The bulb outline, list lines, and metal tip use `currentColor`, so the mark
 * inherits the surrounding text color — navy on light backgrounds, warm-white
 * on the dark navy nav and footer. The checklist, base, and rays stay brand
 * orange in every context.
 */
export function LogoMark({
  className = "h-8 w-8",
}: {
  className?: string;
}) {
  const orange = "#F36F21";
  return (
    <svg
      viewBox="22 2 56 98"
      fill="none"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      {/* Aha rays */}
      <g stroke={orange} strokeWidth="3.6" strokeLinecap="round">
        <path d="M50 5 V12" />
        <path d="M35 9 L40 15" />
        <path d="M65 9 L60 15" />
      </g>

      {/* Bulb glass outline — rounded dome with a short neck */}
      <path
        d="M43 83 L40 69 C31 66 24 58 24 43 C24 29 36 17 50 17 C64 17 76 29 76 43 C76 58 69 66 60 69 L57 83 Z"
        stroke="currentColor"
        strokeWidth="4.5"
        strokeLinejoin="round"
      />

      {/* Checklist: orange checkboxes + checks, current-color text lines */}
      <g>
        {[32, 44, 56].map((y) => (
          <g key={y}>
            <rect
              x="30"
              y={y}
              width="9"
              height="9"
              rx="2"
              stroke={orange}
              strokeWidth="2"
            />
            <path
              d={`M31.8 ${y + 4.6} L34 ${y + 7} L37.4 ${y + 2.4}`}
              stroke={orange}
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d={`M44 ${y + 3.5} H61`}
              stroke="currentColor"
              strokeWidth="2.6"
              strokeLinecap="round"
            />
            <path
              d={`M44 ${y + 7.5} H55`}
              stroke="currentColor"
              strokeWidth="2.6"
              strokeLinecap="round"
            />
          </g>
        ))}
      </g>

      {/* Screw base */}
      <rect x="42" y="85" width="16" height="3.3" rx="1.6" fill={orange} />
      <rect x="44.5" y="89.8" width="11" height="3.3" rx="1.6" fill={orange} />
      {/* Metal tip */}
      <rect x="46.5" y="94.4" width="7" height="4" rx="1.5" fill="currentColor" />
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
          Real Work <span className="text-accent-orange">Learning</span>
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
