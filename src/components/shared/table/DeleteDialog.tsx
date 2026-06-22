// src/components/shared/table/DeleteDialog.tsx
"use client";

interface DeleteDialogProps {
  open: boolean;
  onClose: () => void;
  onDelete: () => void;
}

export default function DeleteDialog({ open, onClose, onDelete }: DeleteDialogProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-100">
      <div className="bg-white rounded-2xl w-105 p-6">
        <h2 className="sub-heading">Delete Record</h2>

        <p className="body-text mt-3">
          Are you sure you want to delete this record?
        </p>

        <div className="flex justify-end gap-3 mt-6">
          <button
            onClick={onClose}
            className="px-5 py-2 border rounded-xl card-title hover:bg-gray-50 transition-colors"
          >
            Cancel
          </button>

          <button
            onClick={onDelete}
            className="px-5 py-2 bg-red-500 text-white rounded-xl card-title hover:bg-red-600 transition-colors"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}