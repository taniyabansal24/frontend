// src/features/topics/components/CreateTopicForm.tsx

"use client";

import { useState } from "react";

import {
  Controller,
  useForm,
  type FieldValues,
  type UseFormReturn,
} from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

import DynamicForm from "@/components/shared/forms/DynamicForm";
import MultiSelectField from "@/components/shared/forms/MultiSelectField";

import { topicSchema, type TopicSchemaType } from "../schemas/topic.schema";

import { topicForm } from "../config/topic-form";

import { useCreateTopicMutation } from "../api/mutations";

import { useBatchesQuery, useSubjectsQuery } from "../api/queries";

import type { Batch, Subject } from "../types";
import Button from "@/components/shared/Button";

export default function CreateTopicForm() {
  const [selectedBatchIds, setSelectedBatchIds] = useState<string[]>([]);

  const { mutate: createTopic, isPending } = useCreateTopicMutation();

  const methods = useForm<TopicSchemaType>({
    resolver: zodResolver(topicSchema),

    defaultValues: {
      subjectId: "",
      name: "",
      description: "",
    },
  });

  /* ---------------- Fetch Batches ---------------- */

  const { data: batchesResponse } = useBatchesQuery();

  const batches = batchesResponse?.data ?? [];

  /* ---------------- Fetch Subjects ---------------- */

  const { data: subjectsResponse } = useSubjectsQuery(selectedBatchIds[0]);

  const subjects = subjectsResponse?.data ?? [];

  /* ---------------- Options ---------------- */

  const batchOptions = batches.map((batch: Batch) => ({
    id: batch.id,

    name: batch.name,

    description: batch.description ?? "",
  }));

  const subjectOptions = subjects.map((subject: Subject) => ({
    id: subject.id,

    name: subject.name,

    description: subject.description ?? "",
  }));

  /* ---------------- Submit ---------------- */

  const onSubmit = (data: TopicSchemaType) => {
    createTopic(data, {
      onSuccess: () => {
        methods.reset();

        setSelectedBatchIds([]);
      },
    });
  };

  return (
    <form onSubmit={methods.handleSubmit(onSubmit)}>
      <DynamicForm
        sections={topicForm}
        form={methods as unknown as UseFormReturn<FieldValues>}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        {/* Batch */}

        <Controller
          control={methods.control}
          name="batchId"
          as
          never
          render={() => (
            <MultiSelectField
              label="Batch"
              options={batchOptions}
              value={selectedBatchIds}
              searchPlaceholder="Search batches..."
              emptyMessage="No batches found"
              onChange={(value) => {
                const selected =
                  value.length > 0 ? [value[value.length - 1]] : [];

                setSelectedBatchIds(selected);

                methods.setValue("subjectId", "");
              }}
            />
          )}
        />

        {/* Subject */}

        <Controller
          control={methods.control}
          name="subjectId"
          render={({ field }) => (
            <MultiSelectField
              label="Subject"
              options={subjectOptions}
              value={field.value ? [field.value] : []}
              searchPlaceholder="Search subjects..."
              emptyMessage="No subjects found"
              onChange={(value) => {
                const selected =
                  value.length > 0 ? value[value.length - 1] : "";

                field.onChange(selected);
              }}
            />
          )}
        />
      </div>

      <div className="flex justify-end gap-4 mt-8">
        <Button
          type="button"
          variant="secondary"
          onClick={() => methods.reset()}
        >
          Cancel
        </Button>

        <Button type="submit" disabled={isPending}>
          {isPending ? "Creating..." : "Create Topic"}
        </Button>
      </div>
    </form>
  );
}
