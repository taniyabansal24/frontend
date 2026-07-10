// src/features/tests/question-banks/components/details/header/DetailsHeader.tsx
"use client";

import { useRouter } from "next/navigation";

export default function DetailsHeader() {
  const router = useRouter();

  return (
    <div className="flex items-start justify-between">
      <div>
        <h1 className="heading text-[#101828]">
          Question Bank Details
        </h1>

        <p className="mt-2 max-w-2xl text-[#667085]">
          View, edit and manage question bank information and all associated
          questions.
        </p>
      </div>
    </div>
  );
}
