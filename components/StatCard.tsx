import React from "react";

interface StatCardProps {
  value: string;
  label: string;
  description?: string;
}

export default function StatCard({ value, label, description }: StatCardProps) {
  return (
    <div className="group flex flex-col gap-2 bg-warm-white border border-tan/30 shadow-sm rounded-2xl p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-md hover:border-accent-orange/30">
      <span className="mb-1 h-1 w-10 rounded-full bg-accent-orange/70" aria-hidden />
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
