import React from "react";
import Link from "next/link";
import { navItems } from "@/lib/constants";
import Logo from "@/components/Logo";

export default function Footer() {
  return (
    <footer className="bg-primary-bg text-warm-white px-4 md:px-8 py-12 md:py-16">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10">
          <div className="flex flex-col gap-3 max-w-sm">
            <Logo
              markClassName="h-8 w-8 text-warm-white"
              textClassName="font-serif text-xl font-semibold text-warm-white"
            />
            <span className="font-sans text-sm text-accent-orange/90 font-medium tracking-wide italic">
              Less lecture. More practice. Better results.
            </span>
            <p className="font-sans text-sm text-warm-white/60 leading-relaxed">
              Practical workshops, AI training, leadership development, and
              training systems for real teams doing real work.
            </p>
            <p className="font-sans text-sm text-warm-white/50">
              Chris Smith &middot; Dallas, Texas
            </p>
          </div>
          <nav aria-label="Footer navigation">
            <ul className="flex flex-col gap-3">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="font-sans text-sm text-warm-white/60 hover:text-accent-orange transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="border-t border-warm-white/10 mt-10 pt-6">
          <p className="font-sans text-xs text-warm-white/40">
            &copy; {new Date().getFullYear()} Real Work Learning. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
