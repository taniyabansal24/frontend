// src/features/tests/question-banks/components/details/questions/DeleteQuestionDialog.tsx

"use client";

import { useEffect } from "react";
import { createPortal } from "react-dom";
import { AlertTriangle } from "lucide-react";

interface DeleteQuestionDialogProps {
  open: boolean;
  questionText?: string;
  isPending?: boolean;
  onClose: () => void;
  onDelete: () => void;
}

export default function DeleteQuestionDialog({
  open,
  questionText,
  isPending = false,
  onClose,
  onDelete,
}: DeleteQuestionDialogProps) {
  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleEscape);
    };
  }, [open, onClose]);

  if (!open) return null;

  return createPortal(
    <div className="fixed inset-0 z-9999">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/20 backdrop-blur-[2px]"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="absolute inset-0 flex items-center justify-center p-4">
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="delete-question-title"
          onClick={(e) => e.stopPropagation()}
          className="w-full max-w-xl overflow-hidden rounded-3xl bg-white shadow-2xl"
        >
          {/* Header */}
          <div className="border-b border-[#EAECF0] px-6 py-5">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#FEF3F2]">
                <AlertTriangle
                  size={22}
                  className="text-[#F04438]"
                />
              </div>

              <div>
                <h3
                  id="delete-question-title"
                  className="sub-heading"
                >
                  Delete Question
                </h3>

                <p className="caption mt-1 text-[#667085]">
                  This action cannot be undone.
                </p>
              </div>
            </div>
          </div>

          {/* Body */}
          <div className="space-y-5 px-6 py-6">
            <p className="body-text text-[#475467]">
              Are you sure you want to permanently delete this question?
            </p>

            {questionText && (
              <div className="rounded-2xl border border-[#EAECF0] bg-[#F9FAFB] p-4">
                <p className="caption mb-2 text-[#667085]">
                  Question Preview
                </p>

                <p className="body-text text-[#101828]">
                  {questionText}
                </p>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="flex justify-end gap-3 border-t border-[#EAECF0] px-6 py-5">
            <button
              type="button"
              onClick={onClose}
              disabled={isPending}
              className="h-11 rounded-xl border border-[#D0D5DD] px-5 card-title text-[#344054] transition hover:bg-[#F9FAFB] disabled:cursor-not-allowed disabled:opacity-50"
            >
              Cancel
            </button>

            <button
              type="button"
              onClick={onDelete}
              disabled={isPending}
              className="h-11 rounded-xl bg-[#F04438] px-5 card-title text-white transition hover:bg-[#D92D20] disabled:cursor-not-allowed disabled:opacity-50"
            >
              {isPending ? "Deleting..." : "Delete Question"}
            </button>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}