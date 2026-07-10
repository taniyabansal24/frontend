//src/features/tests/create-test/components/BatchSelector.tsx

"use client";

import { useMemo, useState } from "react";

import { Check, Search, Users } from "lucide-react";

import SectionCard from "./SectionCard";

import type { Batch } from "../types";

type Props = {
  batches: Batch[];
  value: string[];
  onChange: (value: string[]) => void;
};

export default function BatchSelector({ batches, value, onChange }: Props) {
  const [search, setSearch] = useState("");

  const filteredBatches = useMemo(() => {
    if (!search.trim()) return batches;

    return batches.filter((batch) =>
      `${batch.name} ${batch.description ?? ""}`
        .toLowerCase()
        .includes(search.toLowerCase()),
    );
  }, [batches, search]);

  const toggleBatch = (id: string) => {
    if (value.includes(id)) {
      onChange(value.filter((batchId) => batchId !== id));
      return;
    }

    onChange([...value, id]);
  };

  return (
    <SectionCard
      number={2}
      title="Select Batches"
      description="Choose one or more batches for this test."
    >
      {/* Search */}

      <div className="relative mb-4">
        <Search
          size={16}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-[#98A2B3]"
        />

        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search batches..."
          className="body-text h-11 w-full rounded-xl border border-[#D0D5DD] bg-white pl-10 pr-4 text-[#101828] outline-none transition-all placeholder:text-[#98A2B3] focus:border-[#6FA073] focus:ring-2 focus:ring-[#6FA073]/10"
        />
      </div>

      {/* List */}

      <div className="max-h-70 space-y-2.5 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-[#D0D5DD] scrollbar-track-transparent">
        {filteredBatches.length === 0 ? (
          <div className="rounded-xl border border-dashed border-[#D0D5DD] py-12 text-center text-[#667085]">
            No batches found
          </div>
        ) : (
          filteredBatches.map((batch) => {
            const selected = value.includes(batch.id);

            return (
              <button
                key={batch.id}
                type="button"
                onClick={() => toggleBatch(batch.id)}
                className={`flex w-full items-center gap-5 rounded-xl border px-4 py-3 text-left transition-all duration-200 ${
                  selected
                    ? "border-[#6FA073] bg-[#F7FCF8] shadow-sm"
                    : "border-[#EAECF0] bg-white hover:border-[#6FA073]/50 hover:shadow-sm"
                }`}
              >
                {/* Checkbox */}

                <div
                  className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-xl border transition-all ${
                    selected
                      ? "border-[#6FA073] bg-[#6FA073]"
                      : "border-[#D0D5DD] bg-white"
                  }`}
                >
                  {selected && (
                    <Check size={14} strokeWidth={2.8} className="text-white" />
                  )}
                </div>

                {/* Info */}

                <div className="min-w-0 flex-1 space-y-1">
                  <h3 className="text-[16px] font-semibold text-[#101828]">
                    {batch.name}
                  </h3>

                  {batch.description && (
                    <p className="text-[14px] text-[#667085]">
                      {batch.description}
                    </p>
                  )}

                  {batch.subjects && batch.subjects.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {batch.subjects.map((subject) => (
                        <span
                          key={subject.id}
                          className="caption rounded-full bg-[#F2F4F7] px-2 py-1 text-[#344054]"
                        >
                          {subject.name}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Students */}

                <div className="sidebar-text flex items-center gap-1.5 rounded-full border border-[#EAECF0] bg-[#F9FAFB] px-2.5 py-1.5 text-[#344054]">
                  <Users size={14} />

                  <span>{batch.students?.length ?? 0}</span>
                </div>
              </button>
            );
          })
        )}
      </div>
    </SectionCard>
  );
}
