import React from "react";

interface SectionHeaderProps {
  label?: string;
  heading: string;
  subtext?: string;
  align?: "left" | "center";
  className?: string;
}

export default function SectionHeader({
  label,
  heading,
  subtext,
  align = "left",
  className = "",
}: SectionHeaderProps) {
  const alignStyles =
    align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <div className={`flex flex-col gap-3 ${alignStyles} ${className}`}>
      {label && (
        <span className="text-accent-orange text-sm font-medium font-sans uppercase tracking-wider">
          {label}
        </span>
      )}
      <h2 className="font-serif text-[24px] md:text-[40px] text-dark-text leading-snug max-w-[700px]">
        {heading}
      </h2>
      {subtext && (
        <p className="font-sans text-base md:text-lg text-dark-text/70 leading-relaxed max-w-[700px]">
          {subtext}
        </p>
      )}
    </div>
  );
}
