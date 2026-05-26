"use client";

import { useState } from "react";
import { MoreVertical, Pencil, Trash2 } from "lucide-react";
import EditDialog from "./EditDialog";
import DeleteDialog from "./DeleteDialog";
import { RowActionsProps } from "./table-types";

export default function RowActions<T extends { id?: string }>({
  row,
  editFields = [],
  onEdit,
  onDelete,
}: RowActionsProps<T>) {
  const [open, setOpen] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [showDelete, setShowDelete] = useState(false);

  return (
    <>
      <div className="relative">
        <button
          onClick={() => setOpen(!open)}
          className="h-8 w-8 rounded-lg flex justify-center items-center hover:bg-[#F2F4F7] transition-all"
        >
          <MoreVertical size={18} />
        </button>

        {open && (
          <div className="absolute right-0 top-10 w-[150px] bg-white rounded-xl border border-[#EAECF0] shadow-lg z-50 overflow-hidden">
            <button
              onClick={() => {
                setShowEdit(true);
                setOpen(false);
              }}
              className="w-full px-4 py-3 flex items-center gap-2 hover:bg-[#F9FAFB] transition-colors"
            >
              <Pencil size={16} />
              Edit
            </button>

            <button
              onClick={() => {
                setShowDelete(true);
                setOpen(false);
              }}
              className="w-full px-4 py-3 flex items-center gap-2 text-red-500 hover:bg-[#FEF3F2] transition-colors"
            >
              <Trash2 size={16} />
              Delete
            </button>
          </div>
        )}
      </div>

      <EditDialog
        open={showEdit}
        title="Update Record"
        row={row}
        fields={editFields}
        onClose={() => setShowEdit(false)}
        onSave={(values) => {
          onEdit?.(row.id || "", values);
          setShowEdit(false);
        }}
      />

      <DeleteDialog
        open={showDelete}
        onClose={() => setShowDelete(false)}
        onDelete={() => {
          onDelete?.(row.id || "");
          setShowDelete(false);
        }}
      />
    </>
  );
}