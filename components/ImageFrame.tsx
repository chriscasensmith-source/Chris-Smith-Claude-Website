import React from "react";

interface ImageFrameProps {
  /** An absolutely-filled next/image (use `fill`). */
  children: React.ReactNode;
  /** Aspect ratio utility, e.g. "aspect-[4/3]". */
  aspect?: string;
  /** Rounded utility. */
  rounded?: string;
  /** Add a soft navy vignette so images sit inside the brand system. */
  vignette?: boolean;
  className?: string;
}

/**
 * A consistent frame for photos: rounded corners, a hairline navy ring, a
 * soft shadow, and an optional low navy vignette. The treatment keeps images
 * integrated with the palette without making them dark or dramatic.
 */
export default function ImageFrame({
  children,
  aspect = "aspect-[4/3]",
  rounded = "rounded-xl",
  vignette = true,
  className = "",
}: ImageFrameProps) {
  return (
    <div
      className={`relative w-full overflow-hidden shadow-md ring-1 ring-navy/10 ${rounded} ${aspect} ${className}`}
    >
      {children}
      {vignette && (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy/25 via-navy/5 to-transparent"
        />
      )}
      <div
        aria-hidden
        className={`pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10 ${rounded}`}
      />
    </div>
  );
}
