// src/features/teachers/components/CreateTeacherForm.tsx
"use client";

import { useForm, type FieldValues, type UseFormReturn } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

import DynamicForm from "@/components/shared/forms/DynamicForm";

import {
  teacherSchema,
  type TeacherSchemaType,
} from "../schemas/teacherSchema";

import { teacherForm } from "../config/teacher-form";

import { useCreateTeacherMutation } from "../api/mutations";

export default function CreateTeacherForm() {
  const { mutate, isPending } = useCreateTeacherMutation();

  const methods = useForm<TeacherSchemaType>({
    resolver: zodResolver(teacherSchema),

    defaultValues: {
      name: "",
      email: "",
      phone: "",
      password: "",
      subject: "",
    },
  });

  const onSubmit = (data: TeacherSchemaType) => {
    mutate(data, {
      onSuccess: () => {
        methods.reset({
          name: "",
          email: "",
          phone: "",
          password: "",
          subject: "",
        });
      },
    });
  };

  return (
    <form onSubmit={methods.handleSubmit(onSubmit)}>
      <DynamicForm
        sections={teacherForm}
        form={methods as unknown as UseFormReturn<FieldValues>}
      />

      <div className="flex justify-end gap-4 mt-8">
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
          {isPending ? "Saving..." : "Save Teacher"}
        </button>
      </div>
    </form>
  );
}
