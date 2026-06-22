// src/features/parents/components/EditParentDialog.tsx

"use client";

import { useEffect } from "react";
import { useForm } from "react-hook-form";
import type { Parent } from "../types";

interface EditParentDialogProps {
  open: boolean;

  parent: Parent | null;

  studentOptions: {
    id: string;
    name: string;
    enrollmentNumber?: string;
  }[];

  onClose: () => void;

  onSave: (data: {
    name: string;
    phone: string;
    relationship: string;
    studentId: string;
  }) => void;
}

interface FormValues {
  name: string;
  phone: string;
  relationship: string;
  studentId: string;
}

export default function EditParentDialog({
  open,
  parent,
  studentOptions,
  onClose,
  onSave,
}: EditParentDialogProps) {
  const { register, handleSubmit, reset } = useForm<FormValues>();

  useEffect(() => {
    if (parent) {
      reset({
        name: parent.user?.name ?? "",
        phone: parent.user?.phone ?? "",
        relationship: parent.relationship ?? "",
        studentId: parent.studentId ?? "",
      });
    }
  }, [parent, reset]);

  if (!open || !parent) return null;

  return (
    <div className="fixed inset-0 z-100 bg-black/50 flex items-center justify-center p-4">
      <div className="w-full max-w-150 bg-white rounded-2xl p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="sub-heading text-[#101828]">Edit Parent</h2>

          <button
            onClick={onClose}
            className="text-[#667085] hover:text-[#101828]"
          >
            ✕
          </button>
        </div>

        <form onSubmit={handleSubmit(onSave)} className="space-y-5">
          {/* Parent Name */}
          <div>
            <label className="card-title text-[#344054] block mb-2">
              Parent Name
            </label>

            <input
              {...register("name")}
              className="w-full h-12 px-4 body-text text-[#101828] border border-[#D0D5DD] rounded-md outline-none focus:border-[#6FA073]"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="card-title text-[#344054] block mb-2">
              Phone Number
            </label>

            <input
              {...register("phone")}
              className="w-full h-12 px-4 body-text text-[#101828] border border-[#D0D5DD] rounded-md outline-none focus:border-[#6FA073]"
            />
          </div>

          {/* Relationship */}
          <div>
            <label className="card-title text-[#344054] block mb-2">
              Relationship
            </label>

            <input
              {...register("relationship")}
              className="w-full h-12 px-4 body-text text-[#101828] border border-[#D0D5DD] rounded-md outline-none focus:border-[#6FA073]"
            />
          </div>

          {/* Student */}
          <div>
            <label className="card-title text-[#344054] block mb-2">
              Student
            </label>

            <select
              {...register("studentId")}
              className="w-full h-12 px-4 body-text text-[#101828] border border-[#D0D5DD] rounded-md outline-none focus:border-[#6FA073]"
            >
              <option value="">Select Student</option>

              {studentOptions.map((student) => (
                <option key={student.id} value={student.id}>
                  {student.name}
                  {student.enrollmentNumber
                    ? ` (${student.enrollmentNumber})`
                    : ""}
                </option>
              ))}
            </select>
          </div>

          <div className="flex justify-end gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="h-11 px-6 border border-[#D0D5DD] rounded-xl card-title text-[#344054]"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="h-11 px-6 bg-[#6FA073] text-white card-title rounded-xl hover:bg-[#5d8a61] transition-all"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
