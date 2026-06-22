"use client";

import { useForm, type UseFormReturn, type FieldValues } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

import DynamicForm from "@/components/shared/forms/DynamicForm";

import {
  managementStaffSchema,
  ManagementStaffSchemaType,
} from "../schemas/managementStaffSchema";

import { managementStaffForm } from "../config/management-staff-form";

import { useCreateManagementStaffMutation } from "../api/mutations";

export default function CreateManagementStaffForm() {
  const { mutate, isPending } = useCreateManagementStaffMutation();

  const methods = useForm<ManagementStaffSchemaType>({
    resolver: zodResolver(managementStaffSchema),

    defaultValues: {
      name: "",
      email: "",
      phone: "",
      password: "",
      department: "",
    },
  });

  const onSubmit = (data: ManagementStaffSchemaType) => {
    mutate(data, {
      onSuccess: () => {
        methods.reset();
      },
    });
  };

  return (
    <form onSubmit={methods.handleSubmit(onSubmit)}>
      <DynamicForm
        sections={managementStaffForm}
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
          {isPending ? "Saving..." : "Save Staff"}
        </button>
      </div>
    </form>
  );
}
