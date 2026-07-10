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
import Button from "@/components/shared/Button";

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
        <Button
          type="button"
          variant="secondary"
          onClick={() => methods.reset()}
        >
          Cancel
        </Button>

        <Button type="submit" disabled={isPending}>
          {isPending ? "Saving..." : "Save Management Staff"}
        </Button>
      </div>
    </form>
  );
}
