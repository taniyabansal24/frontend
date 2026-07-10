// src/features/tests/create-test/components/AssignmentSummary.tsx

"use client";

import {
  AlertTriangle,
  CheckCircle2,
  FileText,
  Users,
  Clock,
  Calendar,
  Award,
  BookAlert,
} from "lucide-react";

import type { Batch, QuestionBank } from "../types";
import Button from "@/components/shared/Button";

type Props = {
  batches: Batch[];
  questionBanks: QuestionBank[];
  selectedBatchIds: string[];
  selectedQuestionBankIds: string[];
  title?: string;
  duration?: number;
  startDate?: string;
  startTime?: string;
  isSubmitting: boolean;
};

export default function AssignmentSummary({
  batches,
  questionBanks,
  selectedBatchIds,
  selectedQuestionBankIds,
  title,
  duration,
  startDate,
  startTime,
  isSubmitting,
}: Props) {
  const selectedBatches = batches.filter((batch) =>
    selectedBatchIds.includes(batch.id),
  );

  const selectedQuestionBanks = questionBanks.filter((bank) =>
    selectedQuestionBankIds.includes(bank.id),
  );

  const totalStudents = selectedBatches.reduce(
    (total, batch) => total + (batch.students?.length ?? 0),
    0,
  );

  const totalQuestions = selectedQuestionBanks.reduce(
    (total, bank) => total + (bank.totalQuestions ?? 0),
    0,
  );

  const totalMarks = selectedQuestionBanks.reduce(
    (sum, bank) => sum + (bank.totalMarks ?? 0),
    0,
  );

  const hasMarksData = selectedQuestionBanks.some(
    (bank) => bank.totalMarks !== undefined && bank.totalMarks !== null,
  );

  const isReady =
    selectedQuestionBankIds.length > 0 && selectedBatchIds.length > 0;

  const formattedDate = startDate
    ? new Date(startDate).toLocaleDateString("en-US", {
        weekday: "short",
        month: "short",
        day: "numeric",
        year: "numeric",
      })
    : "--";

  const formattedTime = startTime
    ? new Date(`2000-01-01T${startTime}`).toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      })
    : "--";

  return (
    <aside className="sticky top-6 h-fit rounded-3xl border border-[#EAECF0] bg-white p-5 shadow-sm">
      <h2 className="text-[18px] font-semibold text-[#101828]">
        Assign Test Summary
      </h2>

      {/* Test Information Card */}

      <div className="mt-5 rounded-xl bg-[#F9FAFB] p-4">
        <div className="mb-2 flex items-center gap-2">
          <BookAlert size={14} className="text-[#6FA073]" />
          <p className="text-[14px] text-[#667085]">Test Information</p>
        </div>

        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-[14px] text-[#667085]">Title</span>
            <span className="text-[14px] font-medium text-[#101828] truncate max-w-35">
              {title || "Untitled Test"}
            </span>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-[14px] text-[#667085] flex items-center gap-1.5">
              <Clock size={14} className="text-[#98A2B3]" />
              Duration
            </span>
            <span className="text-[14px] font-medium text-[#101828]">
              {duration ? `${duration} mins` : "--"}
            </span>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-[14px] text-[#667085] flex items-center gap-1.5">
              <Calendar size={14} className="text-[#98A2B3]" />
              Date & Time
            </span>
            <span className="text-[14px] font-medium text-[#101828] text-right">
              {formattedDate !== "--" ? (
                <>
                  <div>{formattedDate}</div>
                  <div className="text-[#98A2B3] text-[12px]">
                    {formattedTime}
                  </div>
                </>
              ) : (
                "--"
              )}
            </span>
          </div>
        </div>
      </div>

      {/* Selected Question Banks Card */}

      <div className="mt-4 rounded-xl bg-[#F9FAFB] p-4">
        <div className="mb-2 flex items-center gap-2">
          <FileText size={16} className="text-[#6FA073]" />
          <p className="text-[14px] text-[#667085]">
            Selected Question Banks
            {selectedQuestionBanks.length > 0 && (
              <span className="ml-1 text-[#101828] font-semibold">
                ({selectedQuestionBanks.length})
              </span>
            )}
          </p>
        </div>

        {selectedQuestionBanks.length > 0 ? (
          <div className="space-y-2 max-h-30 overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-[#D0D5DD] scrollbar-track-transparent">
            {selectedQuestionBanks.map((bank) => (
              <div
                key={bank.id}
                className="flex items-center justify-between py-1 border-b border-[#EAECF0] last:border-0"
              >
                <span className="text-[14px] text-[#344054]">{bank.name}</span>
                <span className="text-[12px] rounded-full bg-[#F2F4F7] px-2 py-1 text-[#344054]">
                  {bank.totalQuestions ?? 0} Qs
                </span>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-[14px] text-[#98A2B3]">
            No question bank selected
          </p>
        )}
      </div>

      {/* Selected Batches Card */}

      <div className="mt-4 rounded-xl bg-[#F9FAFB] p-4">
        <div className="mb-2 flex items-center gap-2">
          <Users size={16} className="text-[#6FA073]" />
          <p className="text-[14px] text-[#667085]">
            Assigned Batches
            {selectedBatches.length > 0 && (
              <span className="ml-1 text-[#101828] font-semibold">
                ({selectedBatches.length})
              </span>
            )}
          </p>
        </div>

        {selectedBatches.length > 0 ? (
          <div className="space-y-2 max-h-30 overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-[#D0D5DD] scrollbar-track-transparent">
            {selectedBatches.map((batch) => (
              <div
                key={batch.id}
                className="flex items-center justify-between py-1 border-b border-[#EAECF0] last:border-0"
              >
                <span className="text-[14px] text-[#344054]">{batch.name}</span>
                <span className="text-[12px] rounded-full bg-[#F2F4F7] px-2 py-1 text-[#344054]">
                  {batch.students?.length ?? 0} St.
                </span>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-[14px] text-[#98A2B3]">No batches selected</p>
        )}
      </div>

      {/* Statistics Row */}

      <div className="mt-4 grid grid-cols-3 gap-2">
        <div className="rounded-xl bg-[#F9FAFB] p-3 text-center">
          <p className="text-[12px] text-[#667085]">Questions</p>
          <h4 className="text-[18px] font-semibold text-[#101828]">
            {totalQuestions}
          </h4>
        </div>

        <div className="rounded-xl bg-[#F9FAFB] p-3 text-center">
          <p className="text-[12px] text-[#667085]">Total Marks</p>
          <h4 className="text-[18px] font-semibold text-[#101828]">
            {hasMarksData ? totalMarks : totalQuestions}
          </h4>
        </div>

        <div className="rounded-xl bg-[#F9FAFB] p-3 text-center">
          <p className="text-[12px] text-[#667085]">Students</p>
          <h4 className="text-[18px] font-semibold text-[#101828]">
            {totalStudents}
          </h4>
        </div>
      </div>

      {/* Warning */}

      {!isReady && (
        <div className="mt-4 flex gap-3 rounded-xl border border-[#FEDF89] bg-[#FFFAEB] p-3">
          <AlertTriangle size={18} className="mt-0.5 shrink-0 text-[#F79009]" />
          <div>
            <p className="text-[14px] font-medium leading-5 text-[#B54708]">
              Incomplete Assignment
            </p>
            <p className="text-[12px] leading-5 text-[#B54708] mt-0.5">
              Please select at least one batch and one question bank.
            </p>
          </div>
        </div>
      )}

      {/* Success */}

      {isReady && (
        <div className="mt-4 flex gap-3 rounded-xl border border-[#6FA073] bg-[#F7FCF8] p-3">
          <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-[#6FA073]" />
          <div>
            <p className="text-[14px] font-medium leading-5 text-[#101828]">
              Ready to Publish
            </p>
            <p className="text-[12px] leading-5 text-[#667085] mt-0.5">
              {totalStudents} students will receive this test
            </p>
          </div>
        </div>
      )}

      {/* Action Buttons */}

      <div className="mt-6 space-y-3">
        <Button
          type="submit"
          disabled={!isReady || isSubmitting}
          className="w-full text-[16px] font-semibold"
        >
          {isSubmitting ? (
            <>
              <svg
                className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
              Creating...
            </>
          ) : (
            <>
              <Award size={18} />
              Create Test
            </>
          )}
        </Button>

        <Button
          type="button"
          variant="secondary"
          className="w-full text-[16px] font-semibold border-[#6FA073] text-[#6FA073] hover:bg-[#F7FCF8] hover:border-[#6FA073] focus:ring-2 focus:ring-[#6FA073]/10"
        >
          Save as Draft
        </Button>
      </div>
    </aside>
  );
}
