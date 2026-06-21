import React from "react";
import Image from "next/image";

interface PageHeroProps {
  label?: string;
  heading: string;
  subtext?: string;
  imageSrc?: string;
  imageAlt?: string;
  children?: React.ReactNode;
}

export default function PageHero({
  label,
  heading,
  subtext,
  imageSrc,
  imageAlt = "",
  children,
}: PageHeroProps) {
  const textContent = (
    <div className="flex flex-col gap-6">
      {label && (
        <span className="text-accent-orange text-sm font-medium font-sans uppercase tracking-wider">
          {label}
        </span>
      )}
      <h1 className="font-serif text-[32px] md:text-[56px] leading-tight text-warm-white">
        {heading}
      </h1>
      {subtext && (
        <p className="font-sans text-base md:text-lg leading-relaxed text-warm-white/80 max-w-[640px]">
          {subtext}
        </p>
      )}
      {children}
    </div>
  );

  return (
    <section className="bg-primary-bg text-warm-white px-4 md:px-8 pt-10 pb-14 md:py-28">
      <div className="max-w-[1200px] mx-auto">
        {imageSrc ? (
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="order-2 md:order-1">{textContent}</div>
            <div className="relative w-full aspect-[16/10] md:aspect-[4/3] rounded-lg overflow-hidden order-1 md:order-2">
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
                priority
              />
            </div>
          </div>
        ) : (
          <div className="max-w-[700px]">{textContent}</div>
        )}
      </div>
    </section>
  );
}
