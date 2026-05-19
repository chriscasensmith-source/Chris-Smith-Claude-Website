import React from "react";
import Link from "next/link";

type ButtonVariant = "primary" | "secondary" | "ghost" | "text";

interface ButtonProps {
  variant?: ButtonVariant;
  href?: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-accent-orange text-white hover:bg-orange-600 hover:shadow-md active:bg-orange-700",
  secondary:
    "border border-dark-text text-dark-text hover:bg-dark-text hover:text-warm-white",
  ghost:
    "border border-warm-white/60 text-warm-white hover:bg-warm-white hover:text-dark-text",
  text: "text-accent-orange hover:underline underline-offset-4",
};

const base =
  "inline-flex items-center justify-center rounded-lg px-6 py-3 text-base font-semibold font-sans min-h-[44px] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-orange focus-visible:ring-offset-2";

export default function Button({
  variant = "primary",
  href,
  children,
  className = "",
  onClick,
  type = "button",
}: ButtonProps) {
  const styles = `${base} ${variantStyles[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={styles}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={styles}>
      {children}
    </button>
  );
}
