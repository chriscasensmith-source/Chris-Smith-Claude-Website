import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "soft";
}

export default function Card({
  children,
  className = "",
  variant = "default",
}: CardProps) {
  const bg = variant === "soft" ? "bg-soft-white" : "bg-warm-white";
  return (
    <div
      className={`${bg} rounded-lg border border-sand/40 shadow-sm p-6 ${className}`}
    >
      {children}
    </div>
  );
}
