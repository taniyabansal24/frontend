// src/features/tests/create-test/components/TestDetailsSection.tsx

"use client";

import type { FieldErrors, UseFormRegister } from "react-hook-form";

import SectionCard from "./SectionCard";

import type { CreateTestSchemaType } from "../schemas/createTest.schema";

type Props = {
  register: UseFormRegister<CreateTestSchemaType>;
  errors: FieldErrors<CreateTestSchemaType>;
};

export default function TestDetailsSection({ register, errors }: Props) {
  return (
    <SectionCard
      number={1}
      title="Test Details"
      description="Provide the basic information about the test."
    >
      <div className="space-y-6">
        <div>
          <label className="card-title mb-2 block text-[#344054]">
            Test Title
          </label>

          <input
            {...register("title")}
            type="text"
            placeholder="Enter test title"
            className={`w-full h-12 px-4 rounded-md border border-[#D0D5DD] bg-white body-text outline-none transition-all focus:border-[#6FA073] focus:ring-2 focus:ring-[#6FA073]/20 ${errors.title ? "border-red-500" : ""}`}
          />
          {errors.title && (
            <p className="mt-1 text-sm text-red-500">{errors.title.message}</p>
          )}
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-[#344054]">
            Description
          </label>

          <textarea
            {...register("description")}
            rows={4}
            placeholder="Write a short description..."
            className={`w-full rounded-xl border border-[#D0D5DD] bg-white p-4 outline-none focus:border-[#6FA073] focus:ring-2 focus:ring-[#6FA073]/20 ${
              errors.description ? "border-red-500" : ""
            }`}
          />

          {errors.description && (
            <p className="mt-1 text-sm text-red-500">
              {errors.description.message}
            </p>
          )}
        </div>
      </div>
    </SectionCard>
  );
}
