// src/features/tests/question-banks/components/details/header/PageActions.tsx
"use client";
import Link from "next/link";
import { Pencil, Plus, Save, X, Trash2 } from "lucide-react";

interface PageActionsProps {
  isEditing: boolean;
  onEdit: () => void;
  onCancel: () => void;
  onSave: () => void;
  onDelete: () => void;
}

export default function PageActions({
  isEditing,
  onEdit,
  onCancel,
  onSave,
  onDelete,
}: PageActionsProps) {
  return (
    <div className="flex flex-wrap items-center justify-end gap-3">
      {isEditing ? (
        <>
          <button
            onClick={onCancel}
            className="h-11 px-6 border border-gray-300 rounded-xl card-title text-[#344054] transition-all duration-200 hover:bg-gray-100 hover:border-gray-400 active:scale-95 cursor-pointer"
          >
            <X size={18} />
            Cancel
          </button>

          <button
            onClick={onSave}
            className="h-11 px-6 bg-[#6FA073] text-white card-title rounded-xl transition-all duration-200 hover:bg-[#5f8d63] active:scale-95 active:bg-[#567f5a] focus:outline-none focus:ring-2 focus:ring-[#6FA073]/40 disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
          >
            <Save size={18} />
            Save Changes
          </button>
        </>
      ) : (
        <>
          <button
            className="h-11 px-4 border border-gray-300 rounded-xl card-title text-[#344054] transition-all duration-200 hover:bg-gray-100 hover:border-gray-400 active:scale-95 cursor-pointer"
          >
            <Plus size={18} />
            <Link
            href={`/dashboard/tests/questions`}>
            Add Question
          </Link>
          </button>

          <button
            onClick={onEdit}
            className="h-11 px-6 bg-[#6FA073] text-white card-title rounded-xl transition-all duration-200 hover:bg-[#5f8d63] active:scale-95 active:bg-[#567f5a] focus:outline-none focus:ring-2 focus:ring-[#6FA073]/40 disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
          >
            <Pencil size={18} />
            Edit
          </button>

          <button
            onClick={onDelete}
            className="h-11 px-4 border border-red-300 rounded-xl card-title text-red-600 transition-all duration-200 hover:bg-red-50 hover:border-red-400 active:scale-95 active:bg-red-100 focus:outline-none focus:ring-2 focus:ring-red-300 cursor-pointer"
          >
            <Trash2 size={18} />
            Delete
          </button>
        </>
      )}
    </div>
  );
}
