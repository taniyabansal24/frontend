// features/batches/components/CreateBatchForm.tsx

"use client";

import {
  useForm,
  Controller,
  type UseFormReturn,
  type FieldValues,
} from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

import DynamicForm from "@/components/shared/forms/DynamicForm";

import { batchSchema, BatchSchemaType } from "../schemas/batchSchema";

import { batchForm } from "../config/batch-form";

import { useCreateBatchMutation } from "../api/mutations";

import MultiSelectField from "./MultiSelectField";

import { useTeachersQuery } from "@/features/teachers/api/queries";
import { useStudentsQuery } from "@/features/students/api/queries";

export default function CreateBatchForm() {
  const { mutate, isPending } = useCreateBatchMutation();

  const { data: teachers = [] } = useTeachersQuery();

  const { data: students = [] } = useStudentsQuery();

  const methods = useForm<BatchSchemaType>({
    resolver: zodResolver(batchSchema),

    defaultValues: {
      name: "",
      description: "",
      startDate: "",
      endDate: "",
      teacherIds: [],
      studentIds: [],
    },
  });

  const teacherOptions = teachers.map((teacher) => ({
    id: teacher.id,

    name: teacher.name,

    description: teacher.subject ?? teacher.email ?? "",

    duration: teacher.phone ?? "",
  }));

  const studentOptions = students.map((student) => ({
    id: student.id,

    name: student.name,

    description: student.studentClass ?? "",

    duration: student.enrollmentNumber ?? "",
  }));

  const onSubmit = (data: BatchSchemaType) => {
    mutate(data, {
      onSuccess: () => {
        methods.reset({
          name: "",
          description: "",
          startDate: "",
          endDate: "",
          teacherIds: [],
          studentIds: [],
        });
      },
    });
  };

  return (
    <form onSubmit={methods.handleSubmit(onSubmit)}>
      <DynamicForm
        sections={batchForm}
        form={methods as unknown as UseFormReturn<FieldValues>}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        <Controller
          control={methods.control}
          name="teacherIds"
          render={({ field }) => (
            <MultiSelectField
              label="Teachers"
              options={teacherOptions}
              value={field.value}
              onChange={field.onChange}
            />
          )}
        />

        <Controller
          control={methods.control}
          name="studentIds"
          render={({ field }) => (
            <MultiSelectField
              label="Students"
              options={studentOptions}
              value={field.value}
              onChange={field.onChange}
            />
          )}
        />
      </div>

      <div className="flex justify-end gap-4 mt-8">
        <button type="button" className="h-11 px-6 border rounded-xl card-title text-[#344054]">
          Cancel
        </button>

        <button
          type="submit"
          disabled={isPending}
          className="h-11 px-6 bg-[#6FA073] text-white card-title rounded-xl disabled:opacity-70"
        >
          {isPending ? "Saving..." : "Save Batch"}
        </button>
      </div>
    </form>
  );
}
