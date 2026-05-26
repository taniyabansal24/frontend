"use client";

import { useState } from "react";
import { EditDialogProps } from "./table-types";

export default function EditDialog<T extends Record<string, unknown>>({
  open,
  title,
  row,
  fields = [],
  onClose,
  onSave,
}: EditDialogProps<T>) {
  const initialValues = fields.reduce(
    (acc, field) => {
      acc[field.key] = String(row?.[field.key] || "");
      return acc;
    },
    {} as Record<string, string>
  );

  const [formData, setFormData] = useState(initialValues);

  const handleChange = (key: string, value: string) => {
    setFormData((prev: Record<string, string>) => ({
      ...prev,
      [key]: value,
    }));
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[100]">
      <div className="bg-white rounded-2xl w-[550px] p-6">
        <h2 className="heading mb-5">{title}</h2>

        <div className="space-y-4">
          {fields.map((field) => (
            <div key={field.key}>
              <label className="body-text">{field.label}</label>

              <input
                value={formData[field.key] || ""}
                onChange={(e) => handleChange(field.key, e.target.value)}
                className="w-full h-11 px-4 mt-2 border border-[#EAECF0] rounded-xl focus:border-[#6FA073] outline-none"
              />
            </div>
          ))}
        </div>

        <div className="flex justify-end gap-3 mt-6">
          <button onClick={onClose} className="px-5 py-2 border rounded-xl">
            Cancel
          </button>

          <button
            onClick={() => onSave(formData)}
            className="px-5 py-2 bg-[#6FA073] text-white rounded-xl"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}