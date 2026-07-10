// src/features/teachers/components/CreateTeacherForm.tsx
"use client";

import { useForm, type FieldValues, type UseFormReturn } from "react-hook-form";
import Button from "@/components/shared/Button";

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
        <Button
          type="button"
          variant="secondary"
          onClick={() => methods.reset()}
        >
          Cancel
        </Button>

        <Button type="submit" disabled={isPending}>
          {isPending ? "Saving..." : "Save Teacher"}
        </Button>
      </div>
    </form>
  );
}
