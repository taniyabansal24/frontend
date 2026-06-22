// src/components/shared/table/EditDialog.tsx
"use client";

import { useState } from "react";
import { EditDialogProps } from "./table-types";

export default function EditDialog<
  T extends { [key: string]: unknown }
>({
  open,
  title,
  row,
  fields = [],
  onClose,
  onSave,
}: EditDialogProps<T>) {
  const getInitialValues = () => {
    const values: Record<string, string> = {};

    fields.forEach((field) => {
      values[field.key] = String(
        row[field.key as keyof T] ?? ""
      );
    });

    return values;
  };

  const [formData, setFormData] =
    useState<Record<string, string>>(
      getInitialValues()
    );

  const handleChange = (
    key: string,
    value: string
  ) => {
    setFormData((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleClose = () => {
    setFormData(getInitialValues());
    onClose();
  };

  const handleSave = () => {
    onSave(formData);
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-100">
      <div className="bg-white rounded-2xl w-full max-w-137.5 p-6">
        <h2 className="sub-heading mb-5">
          {title}
        </h2>

        <div className="space-y-4">
          {fields.map((field) => (
            <div key={field.key}>
              <label className="card-title block mb-2">
                {field.label}
              </label>

              <input
                type="text"
                value={
                  formData[field.key] ?? ""
                }
                onChange={(e) =>
                  handleChange(
                    field.key,
                    e.target.value
                  )
                }
                className="w-full h-11 px-4 body-text border border-[#EAECF0] rounded-md focus:border-[#6FA073] outline-none"
              />
            </div>
          ))}
        </div>

        <div className="flex justify-end gap-3 mt-6">
          <button
            type="button"
            onClick={handleClose}
           className="px-5 py-2 border rounded-xl card-title"
          >
            Cancel
          </button>

          <button
            type="button"
            onClick={handleSave}
            className="px-5 py-2 bg-[#6FA073] text-white rounded-xl card-title"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}