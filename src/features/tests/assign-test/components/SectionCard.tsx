// src/features/tests/create-test/components/SectionCard.tsx

"use client";

import type { ReactNode } from "react";

interface SectionCardProps {
  number: number;
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
}

export default function SectionCard({
  number,
  title,
  description,
  children,
  className = "",
}: SectionCardProps) {
  return (
    <section
      className={`rounded-3xl border border-[#EAECF0] bg-white ${className}`}
    >
      <div className="flex items-center gap-4 px-8 pt-8">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#6FA073] text-lg font-semibold text-white">
          {number}
        </div>

        <div>
          <h2 className="sub-heading text-[#101828]">{title}</h2>

          {description && (
            <p className="sidebar-text text-[#667085]">{description}</p>
          )}
        </div>
      </div>

      <div className="px-8 py-8">{children}</div>
    </section>
  );
}
