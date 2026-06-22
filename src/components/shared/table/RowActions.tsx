// src/components/shared/table/RowActions.tsx
"use client";

import { useState } from "react";

import { MoreVertical, Pencil, Trash2, Eye } from "lucide-react";

import EditDialog from "./EditDialog";
import DeleteDialog from "./DeleteDialog";

import { RowActionsProps } from "./table-types";

export default function RowActions<T extends { id: string }>({
  row,
  editFields = [],
  customEdit = false,
  onEdit,
  onDelete,
  onView,
}: RowActionsProps<T>) {
  const [showEdit, setShowEdit] = useState(false);

  const [showDelete, setShowDelete] = useState(false);

  return (
    <>
      <div className="dropdown dropdown-end">
        <button
          tabIndex={0}
          className="h-10 w-10 rounded-xl bg-transparent flex items-center justify-center hover:bg-[#F9FAFB]"
        >
          <MoreVertical size={18} className="text-[#344054]" />
        </button>

        <ul
          tabIndex={0}
          className="dropdown-content z-9999 mt-2 w-44 bg-white border border-[#EAECF0] rounded-2xl shadow-[0_12px_32px_rgba(16,24,40,0.12)] p-2"
        >
          {onView && (
            <li>
              <button
                onClick={() => onView(row.id)}
                className="w-full flex items-center gap-3 px-3 py-3 rounded-xl body-text hover:bg-[#F9FAFB]"
              >
                <Eye size={16} />

                <span>View</span>
              </button>
            </li>
          )}
          
          <li>
            <button
              onClick={() => {
                if (customEdit) {
                  onEdit?.(row.id);
                } else {
                  setShowEdit(true);
                }
              }}
              className="w-full flex items-center gap-3 px-3 py-3 rounded-xl body-text hover:bg-[#F9FAFB]"
            >
              <Pencil size={16} />
              <span>Edit</span>
            </button>
          </li>

          <li>
            <button
              onClick={() => setShowDelete(true)}
              className="w-full flex items-center gap-3 px-3 py-3 rounded-xl body-text text-[#F04438] hover:bg-[#FEF3F2]"
            >
              <Trash2 size={16} />
              <span>Delete</span>
            </button>
          </li>
        </ul>
      </div>

      {!customEdit && (
        <EditDialog
          open={showEdit}
          title="Update Record"
          row={row}
          fields={editFields}
          onClose={() => setShowEdit(false)}
          onSave={(values) => {
            onEdit?.(row.id, values);

            setShowEdit(false);
          }}
        />
      )}

      <DeleteDialog
        open={showDelete}
        onClose={() => setShowDelete(false)}
        onDelete={() => {
          onDelete?.(row.id);

          setShowDelete(false);
        }}
      />
    </>
  );
}
