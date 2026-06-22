// src/features/parents/components/StudentParentSection.tsx

"use client";

import {
  type FieldValues,
  type UseFormReturn,
} from "react-hook-form";

import DynamicForm from "@/components/shared/forms/DynamicForm";

import { parentForm } from "../config/parent-form";

interface StudentParentSectionProps {
  form: UseFormReturn<FieldValues>;
}

export default function StudentParentSection({
  form,
}: StudentParentSectionProps) {
  return (
    <div className="mt-8">
      <DynamicForm
        sections={parentForm}
        form={form}
      />
    </div>
  );
}