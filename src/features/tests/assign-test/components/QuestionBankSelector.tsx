// src/features/tests/create-test/components/QuestionBankSelector.tsx

"use client";

import { useMemo, useState } from "react";

import { BookOpen, Check, Search, Award} from "lucide-react";
import { Controller, type Control } from "react-hook-form";

import SectionCard from "./SectionCard";

import type { CreateTestSchemaType } from "../schemas/createTest.schema";
import type { QuestionBank } from "../types";

type Props = {
  control: Control<CreateTestSchemaType>;
  questionBanks: QuestionBank[];
};

export default function QuestionBankSelector({
  control,
  questionBanks,
}: Props) {
  const [search, setSearch] = useState("");

  const filteredBanks = useMemo(() => {
    if (!search.trim()) return questionBanks;

    return questionBanks.filter((bank) =>
      `${bank.name} ${bank.description ?? ""}`
        .toLowerCase()
        .includes(search.toLowerCase()),
    );
  }, [questionBanks, search]);

  return (
    <SectionCard
      number={3}
      title="Question Bank"
      description="Select one or more question banks for this test."
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
          placeholder="Search question bank..."
          className="body-text h-11 w-full rounded-xl border border-[#D0D5DD] bg-white pl-10 pr-4 outline-none transition-all placeholder:text-[#98A2B3] focus:border-[#6FA073] focus:ring-2 focus:ring-[#6FA073]/10"
        />
      </div>

      <Controller
        control={control}
        name="questionBankIds"
        render={({ field }) => {
          // Ensure field.value is an array
          const selectedIds = Array.isArray(field.value) ? field.value : [];

          const toggleBank = (id: string) => {
            if (selectedIds.includes(id)) {
              // Remove the bank
              field.onChange(selectedIds.filter((bankId) => bankId !== id));
            } else {
              // Add the bank
              field.onChange([...selectedIds, id]);
            }
          };

          return (
            <div className="max-h-70 space-y-2.5 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-[#D0D5DD] scrollbar-track-transparent">
              {filteredBanks.length === 0 ? (
                <div className="rounded-xl border border-dashed border-[#D0D5DD] py-12 text-center text-[#667085]">
                  No question banks found
                </div>
              ) : (
                filteredBanks.map((bank) => {
                  const selected = selectedIds.includes(bank.id);

                  return (
                    <button
                      key={bank.id}
                      type="button"
                      onClick={() => toggleBank(bank.id)}
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
                          <Check
                            size={14}
                            strokeWidth={2.8}
                            className="text-white"
                          />
                        )}
                      </div>

                      {/* Info */}

                      <div className="min-w-0 flex-1 space-y-1">
                        <h3 className="text-[16px] font-semibold text-[#101828]">
                          {bank.name}
                        </h3>

                        <div className="flex flex-row gap-5 items-center">
                          {bank.description && (
                            <p className="text-[14px] text-[#667085]">
                              {bank.description}
                            </p>
                          )}

                          {/* {bank.subjects && bank.subjects.length > 0 && (
                            <div className="flex flex-wrap gap-2">
                              {bank.subjects.map((subject) => (
                                <span
                                  key={subject.id}
                                  className="caption rounded-full bg-[#F2F4F7] px-2 py-1 text-[#344054]"
                                >
                                  {subject.name}
                                </span>
                              ))}
                            </div>
                          )} */}

                          {/* {bank.subjects?.map((subject) => (
                            <span
                              key={`${subject.id}-batch`}
                              className="caption rounded-full bg-[#F2F4F7] px-2 py-1 text-[#344054]"
                            >
                              {subject.batch.name}
                            </span>
                          ))} */}

                          {bank.subjects?.map((subject) => (
                            <span
                              key={subject.id}
                              className="caption rounded-full bg-[#F2F4F7] px-2 py-1 text-[#344054]"
                            >
                              {subject.name} • {subject.batch.name}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Questions */}

                      <div className="sidebar-text flex items-center gap-1.5 rounded-full border border-[#EAECF0] bg-[#F9FAFB] px-2.5 py-1.5 text-[#344054]">
                        <BookOpen size={14} />
                        <span>{bank.totalQuestions ?? 0}</span>
                      </div>
                      <div className="sidebar-text flex items-center gap-1.5 rounded-full border border-[#EAECF0] bg-[#F9FAFB] px-2.5 py-1.5 text-[#344054]">
                        <Award size={14} />
                        <span>{bank.totalMarks ?? 0}</span>
                      </div>
                    </button>
                  );
                })
              )}
            </div>
          );
        }}
      />
    </SectionCard>
  );
}
