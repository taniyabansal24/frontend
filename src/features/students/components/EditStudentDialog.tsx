// src/features/students/components/EditStudentDialog.tsx

"use client";

import { useState } from "react";

import MultiSelectField from "@/components/shared/forms/MultiSelectField";

interface Option {
  id: string;
  name: string;
}

interface StudentData {
  id: string;

  name: string;
  phone: string;

  studentClass: string;

  batchIds: string[];
}

interface EditStudentDialogProps {
  open: boolean;

  student: StudentData | null;

  batchOptions: Option[];

  onClose: () => void;

  onSave: (data: {
    name: string;
    phone: string;
    studentClass: string;
    batchIds: string[];
  }) => void;
}

export default function EditStudentDialog({
  open,
  student,
  batchOptions,
  onClose,
  onSave,
}: EditStudentDialogProps) {
  const [name, setName] = useState(student?.name ?? "");

  const [phone, setPhone] = useState(student?.phone ?? "");

  const [studentClass, setStudentClass] = useState(student?.studentClass ?? "");

  const [batchIds, setBatchIds] = useState<string[]>(student?.batchIds ?? []);

  if (!open || !student) return null;

  const handleSave = () => {
    onSave({
      name,
      phone,
      studentClass,
      batchIds,
    });
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-100">
      <div className="bg-white rounded-2xl w-full max-w-175 p-6 max-h-[90vh] overflow-y-auto">
        <h2 className="sub-heading mb-6">Update Student</h2>

        <div className="space-y-5">
          {/* Name */}
          <div>
            <label className="card-title text-[#344054] block mb-2">
              Student Name
            </label>

            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className=" w-full h-11 px-4 body-text text-[#101828] border border-[#EAECF0] rounded-md outline-none focus:border-[#6FA073]"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="card-title text-[#344054] block mb-2">
              Phone Number
            </label>

            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className=" w-full h-11 px-4 body-text text-[#101828] border border-[#EAECF0] rounded-md outline-none focus:border-[#6FA073]"
            />
          </div>

          {/* Class */}
          <div>
            <label className="card-title text-[#344054] block mb-2">
              Class
            </label>

            <input
              type="text"
              value={studentClass}
              onChange={(e) => setStudentClass(e.target.value)}
              className=" w-full h-11 px-4 body-text text-[#101828] border border-[#EAECF0] rounded-md outline-none focus:border-[#6FA073]"
            />
          </div>

          {/* Batches */}
          <MultiSelectField
            label="Batches"
            options={batchOptions}
            value={batchIds}
            onChange={setBatchIds}
          />
        </div>

        <div className="flex justify-end gap-3 mt-8">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 border border-[#D0D5DD] rounded-md card-title text-[#344054]"
          >
            Cancel
          </button>

          <button
            type="button"
            onClick={handleSave}
            className="px-5 py-2 bg-[#6FA073] text-white card-title rounded-md hover:bg-[#5d8a61] transition-all"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
