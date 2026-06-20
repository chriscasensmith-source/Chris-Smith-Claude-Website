import React from "react";

interface StatCardProps {
  value: string;
  label: string;
  description?: string;
}

export default function StatCard({ value, label, description }: StatCardProps) {
  return (
    <div className="flex flex-col gap-2 bg-warm-white border border-sand/40 shadow-sm rounded-xl p-6">
      <span className="font-serif text-accent-orange text-4xl md:text-5xl leading-none">
        {value}
      </span>
      <span className="font-sans text-base font-medium text-dark-text leading-snug">
        {label}
      </span>
      {description && (
        <span className="font-sans text-sm text-dark-text/65 leading-relaxed">
          {description}
        </span>
      )}
    </div>
  );
}
