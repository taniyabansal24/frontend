// src/features/academics/lectures/components/CreateLectureForm.tsx

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

import {
  lectureSchema,
  type LectureSchemaType,
} from "../schemas/lecture.schema";

import { lectureForm } from "../config/lecture-form";

import { useCreateLectureMutation } from "../api/mutations";

import {
  useBatchesQuery,
  useSubjectsQuery,
  useTopicsQuery,
} from "../api/queries";

import type { Batch, Subject, Topic } from "../types";
import Button from "@/components/shared/Button";

export default function CreateLectureForm() {
  const [selectedBatchIds, setSelectedBatchIds] = useState<string[]>([]);

  const [selectedSubjectIds, setSelectedSubjectIds] = useState<string[]>([]);

  const { mutate: createLecture, isPending } = useCreateLectureMutation();

  const methods = useForm<LectureSchemaType>({
    resolver: zodResolver(lectureSchema),

    defaultValues: {
      topicId: "",
      title: "",
      description: "",
      contentUrl: "",
      logoUrl: "",
      date: "",
    },
  });

  /* ---------------- Batches ---------------- */

  const { data: batchesResponse } = useBatchesQuery();

  const batches = batchesResponse?.data ?? [];

  /* ---------------- Subjects ---------------- */

  const { data: subjectsResponse } = useSubjectsQuery(selectedBatchIds[0]);

  const subjects = subjectsResponse?.data ?? [];

  /* ---------------- Topics ---------------- */

  const { data: topicsResponse } = useTopicsQuery(selectedSubjectIds[0]);

  const topics = topicsResponse?.data ?? [];

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

  const topicOptions = topics.map((topic: Topic) => ({
    id: topic.id,

    name: topic.name,

    description: topic.description ?? "",
  }));

  /* ---------------- Submit ---------------- */

  const onSubmit = (data: LectureSchemaType) => {
    createLecture(data, {
      onSuccess: () => {
        methods.reset();

        setSelectedBatchIds([]);

        setSelectedSubjectIds([]);
      },
    });
  };

  return (
    <form onSubmit={methods.handleSubmit(onSubmit)}>
      <DynamicForm
        sections={lectureForm}
        form={methods as unknown as UseFormReturn<FieldValues>}
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        {/* Batch */}

        <Controller
          control={methods.control}
          name={"batchId" as never}
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

                setSelectedSubjectIds([]);

                methods.setValue("topicId", "");
              }}
            />
          )}
        />

        {/* Subject */}

        <Controller
          control={methods.control}
          name={"subjectId" as never}
          render={() => (
            <MultiSelectField
              label="Subject"
              options={subjectOptions}
              value={selectedSubjectIds}
              searchPlaceholder="Search subjects..."
              emptyMessage="No subjects found"
              onChange={(value) => {
                const selected =
                  value.length > 0 ? [value[value.length - 1]] : [];

                setSelectedSubjectIds(selected);

                methods.setValue("topicId", "");
              }}
            />
          )}
        />

        {/* Topic */}

        <Controller
          control={methods.control}
          name="topicId"
          render={({ field }) => (
            <MultiSelectField
              label="Topic"
              options={topicOptions}
              value={field.value ? [field.value] : []}
              searchPlaceholder="Search topics..."
              emptyMessage="No topics found"
              onChange={(value) => {
                field.onChange(value.length ? value[value.length - 1] : "");
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
          {isPending ? "Creating..." : "Create Lecture"}
        </Button>
      </div>
    </form>
  );
}
