// src/features/students/components/CreateStudentForm.tsx

"use client";

import {
  useForm,
  Controller,
  type UseFormReturn,
  type FieldValues,
} from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

import DynamicForm from "@/components/shared/forms/DynamicForm";
import MultiSelectField from "@/features/batches/components/MultiSelectField";

import StudentParentSection from "@/features/parents/components/StudentParentSection";

import {
  studentSchema,
  type StudentSchemaType,
} from "../schemas/studentSchema";

import { useCreateStudentMutation } from "../api/mutations";
import { useCreateParentMutation } from "@/features/parents/api/mutations";

import { studentForm } from "../config/student-form";

import { useBatchesQuery } from "@/features/batches/api/queries";

export default function CreateStudentForm() {
  const { mutateAsync: createStudent, isPending } = useCreateStudentMutation();

  const { mutateAsync: createParent } = useCreateParentMutation();

  const { data: batches = [] } = useBatchesQuery();

  const methods = useForm<StudentSchemaType>({
    resolver: zodResolver(studentSchema),

    defaultValues: {
      name: "",
      email: "",
      phone: "",
      password: "",
      studentClass: "",
      batchIds: [],

      parentName: "",
      parentEmail: "",
      parentPhone: "",
      parentPassword: "",
      relationship: "",
    },
  });

  const formatDate = (date?: string) => {
    if (!date) return "";

    return new Date(date).toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  const truncate = (text?: string, limit = 40) => {
    if (!text) return "";

    return text.length > limit ? `${text.slice(0, limit)}...` : text;
  };

  const batchOptions = batches.map((batch) => ({
    id: batch.id,

    name: batch.name,

    description: truncate(batch.description),

    duration: `${formatDate(batch.startDate)} → ${formatDate(batch.endDate)}`,
  }));

  const onSubmit = async (data: StudentSchemaType) => {
    try {
      const studentPayload = {
        name: data.name,
        email: data.email,
        phone: data.phone,
        password: data.password,
        studentClass: data.studentClass,
        batchIds: data.batchIds,
      };

      const response = await createStudent(studentPayload);

      const studentId = response.data.student.id;

      const hasParentData =
        data.parentName &&
        data.parentEmail &&
        data.parentPhone &&
        data.parentPassword &&
        data.relationship;

      if (hasParentData) {
        await createParent({
          name: data.parentName!,

          email: data.parentEmail!,

          phone: data.parentPhone!,

          password: data.parentPassword!,

          relationship: data.relationship!,

          studentId,
        });
      }

      methods.reset({
        name: "",
        email: "",
        phone: "",
        password: "",
        studentClass: "",
        batchIds: [],

        parentName: "",
        parentEmail: "",
        parentPhone: "",
        parentPassword: "",
        relationship: "",
      });
    } catch (error) {
      console.error("CREATE STUDENT/PARENT ERROR:", error);
    }
  };

  return (
    <form onSubmit={methods.handleSubmit(onSubmit)}>
      <DynamicForm
        sections={studentForm}
        form={methods as unknown as UseFormReturn<FieldValues>}
      />

      <div className="mt-6">
        <Controller
          control={methods.control}
          name="batchIds"
          render={({ field }) => (
            <MultiSelectField
              label="Batches"
              options={batchOptions}
              value={field.value ?? []}
              onChange={field.onChange}
            />
          )}
        />
      </div>

      <StudentParentSection
        form={methods as unknown as UseFormReturn<FieldValues>}
      />

      <div className="flex justify-end gap-4 mt-8">
        <button type="button" className="h-11 px-6 border rounded-xl card-title text-[#344054]">
          Cancel
        </button>

        <button
          type="submit"
          disabled={isPending}
          className="h-11 px-6 bg-[#6FA073] text-white card-title rounded-xl disabled:opacity-70"
        >
          {isPending ? "Saving..." : "Save Student"}
        </button>
      </div>
    </form>
  );
}
