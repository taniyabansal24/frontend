// features/batches/components/EditBatchDialog.tsx

"use client";

import { useState } from "react";

import MultiSelectField from "./MultiSelectField";

interface Option {
  id: string;
  name: string;
}

interface BatchData {
  id: string;
  name: string;
  description: string;
  teacherIds: string[];
  studentIds: string[];
}

interface EditBatchDialogProps {
  open: boolean;

  batch: BatchData | null;

  teacherOptions: Option[];

  studentOptions: Option[];

  onClose: () => void;

  onSave: (data: {
    name: string;
    description: string;
    teacherIds: string[];
    studentIds: string[];
  }) => void;
}

export default function EditBatchDialog({
  open,
  batch,
  teacherOptions,
  studentOptions,
  onClose,
  onSave,
}: EditBatchDialogProps) {
  const [formData, setFormData] = useState(() => ({
    name: batch?.name ?? "",
    description: batch?.description ?? "",
    teacherIds: batch?.teacherIds ?? [],
    studentIds: batch?.studentIds ?? [],
  }));

  if (!open || !batch) return null;

  const handleSave = () => {
    onSave(formData);
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-100">
      <div className="bg-white rounded-2xl w-full max-w-175 p-6 max-h-[90vh] overflow-y-auto">
        <h2 className="sub-heading mb-6 text-[#101828]">Update Batch</h2>

        <div className="space-y-5">
          <div>
            <label className="card-title block mb-2 text-[#344054]">
              Batch Name
            </label>

            <input
              type="text"
              value={formData.name}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  name: e.target.value,
                }))
              }
              className="w-full h-11 px-4 body-text text-[#101828] border border-[#EAECF0] rounded-md outline-none focus:border-[#6FA073]"
            />
          </div>

          <div>
            <label className="card-title block mb-2 text-[#344054]">Description</label>

            <input
              type="text"
              value={formData.description}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  description: e.target.value,
                }))
              }
              className="w-full h-11 px-4 body-text text-[#101828] border border-[#EAECF0] rounded-md outline-none focus:border-[#6FA073]"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <MultiSelectField
              label="Teachers"
              options={teacherOptions}
              value={formData.teacherIds}
              onChange={(value) =>
                setFormData((prev) => ({
                  ...prev,
                  teacherIds: value,
                }))
              }
            />

            <MultiSelectField
              label="Students"
              options={studentOptions}
              value={formData.studentIds}
              onChange={(value) =>
                setFormData((prev) => ({
                  ...prev,
                  studentIds: value,
                }))
              }
            />
          </div>
        </div>

        <div className="flex justify-end gap-3 mt-8">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 border border-[#D0D5DD] rounded-xl card-title text-[#344054]"
          >
            Cancel
          </button>

          <button
            type="button"
            onClick={handleSave}
            className="px-5 py-2 bg-[#6FA073] text-white card-title rounded-xl hover:bg-[#5d8a61] transition-all"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
