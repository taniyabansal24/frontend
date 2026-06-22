// src/features/parents/components/CreateParentForm.tsx

"use client";

import {
  useForm,
  Controller,
  type UseFormReturn,
  type FieldValues,
} from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

import DynamicForm from "@/components/shared/forms/DynamicForm";

import { useStudentsQuery } from "@/features/students/api/queries";

import { parentSchema, type ParentSchemaType } from "../schemas/parentSchema";

import { createParentForm } from "../config/create-parent-form";

import { useCreateParentMutation } from "../api/mutations";

import StudentSelectField from "./StudentSelectField";

export default function CreateParentForm() {
  const { mutateAsync: createParent, isPending } = useCreateParentMutation();

  const { data: students = [] } = useStudentsQuery();

  const methods = useForm<ParentSchemaType>({
    resolver: zodResolver(parentSchema),

    defaultValues: {
      name: "",
      email: "",
      phone: "",
      password: "",
      relationship: "",
      studentId: "",
    },
  });

  const onSubmit = async (data: ParentSchemaType) => {
    try {
      await createParent(data);

      methods.reset();
    } catch (error) {
      console.error(error);
    }
  };

  const studentOptions = students.map((student) => ({
    id: student.id,
    name: student.name,
    studentClass: student.studentClass,
    enrollmentNumber: student.enrollmentNumber,
  }));

  return (
    <form onSubmit={methods.handleSubmit(onSubmit)}>
      <DynamicForm
        sections={createParentForm}
        form={methods as unknown as UseFormReturn<FieldValues>}
      />

      <div className="mt-6">
        <Controller
          control={methods.control}
          name="studentId"
          render={({ field }) => (
            <StudentSelectField
              label="Student"
              options={studentOptions}
              value={field.value}
              onChange={field.onChange}
            />
          )}
        />
      </div>

      <div className="flex justify-end mt-8">
        <button
          type="button"
          className="h-11 px-6 border rounded-xl card-title text-[#344054]"
        >
          Cancel
        </button>
        
        <button
          type="submit"
          disabled={isPending}
          className="h-11 px-6 bg-[#6FA073] text-white card-title rounded-xl disabled:opacity-70"
        >
          {isPending ? "Saving..." : "Save Parent"}
        </button>
      </div>
    </form>
  );
}
