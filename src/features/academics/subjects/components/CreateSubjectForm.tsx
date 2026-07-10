// src/features/subjects/components/CreateSubjectForm.tsx

"use client";

import {
  Controller,
  useForm,
  type FieldValues,
  type UseFormReturn,
} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import DynamicForm from "@/components/shared/forms/DynamicForm";
import MultiSelectField from "@/components/shared/forms/MultiSelectField";

import {
  subjectSchema,
  type SubjectSchemaType,
} from "../schemas/subject.schema";

import { subjectForm } from "../config/subject-form";

import { useCreateSubjectMutation } from "../api/mutations";
import { useBatchesQuery } from "../api/queries";

import type { Batch } from "../types";
import Button from "@/components/shared/Button";

export default function CreateSubjectForm() {
  const { mutate: createSubject, isPending } = useCreateSubjectMutation();

  const methods = useForm<SubjectSchemaType>({
    resolver: zodResolver(subjectSchema),

    defaultValues: {
      batchId: "",
      name: "",
      description: "",
    },
  });

  /* ---------------- Fetch Batches ---------------- */

  const { data: batchesResponse } = useBatchesQuery();

  const batches = batchesResponse?.data ?? [];

  /* ---------------- Batch Options ---------------- */

  const batchOptions = batches.map((batch: Batch) => ({
    id: batch.id,

    name: batch.name,

    description: batch.description ?? "",
  }));

  /* ---------------- Submit ---------------- */

  const onSubmit = (data: SubjectSchemaType) => {
    createSubject(data, {
      onSuccess: () => {
        methods.reset();
      },
    });
  };

  return (
    <form onSubmit={methods.handleSubmit(onSubmit)}>
      <div className="mb-8">
        <Controller
          control={methods.control}
          name="batchId"
          render={({ field }) => (
            <MultiSelectField
              label="Batch"
              options={batchOptions}
              value={field.value ? [field.value] : []}
              searchPlaceholder="Search batches..."
              emptyMessage="No batches found"
              onChange={(value) => {
                const selected =
                  value.length > 0 ? value[value.length - 1] : "";

                field.onChange(selected);
              }}
            />
          )}
        />
      </div>

      <DynamicForm
        sections={subjectForm}
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
          {isPending ? "Creating..." : "Create Subject"}
        </Button>
      </div>
    </form>
  );
}
