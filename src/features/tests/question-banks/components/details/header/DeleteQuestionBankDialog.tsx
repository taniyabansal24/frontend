"use client";

interface DeleteQuestionBankDialogProps {
  open: boolean;
  questionBankName: string;
  isPending: boolean;
  onClose: () => void;
  onDelete: () => void;
}

export default function DeleteQuestionBankDialog({
  open,
  questionBankName,
  isPending,
  onClose,
  onDelete,
}: DeleteQuestionBankDialogProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="w-full max-w-md rounded-2xl bg-white p-6">
        <h2 className="sub-heading">Delete Question Bank</h2>

        <p className="mt-3 body-text text-[#667085]">
          Are you sure you want to delete{" "}
          <span className="font-semibold text-[#101828]">
            &quot;{questionBankName}&quot;
          </span>
          ?
        </p>

        <p className="mt-2 text-sm text-red-600">
          This action cannot be undone. All questions inside this question bank
          will also be deleted.
        </p>

        <div className="mt-6 flex justify-end gap-3">
          <button
            onClick={onClose}
            disabled={isPending}
            className="h-11 rounded-xl border border-[#D0D5DD] px-5"
          >
            Cancel
          </button>

          <button
            onClick={onDelete}
            disabled={isPending}
            className="h-11 rounded-xl bg-[#F04438] px-5 text-white"
          >
            {isPending ? "Deleting..." : "Delete"}
          </button>
        </div>
      </div>
    </div>
  );
}
