// src/features/tests/question-banks/components/CreateQuestionBankForm.tsx
"use client";

import { useState } from "react";

import { useForm, type FieldValues, type UseFormReturn } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

import DynamicForm from "@/components/shared/forms/DynamicForm";
import MultiSelectField from "@/components/shared/forms/MultiSelectField";
import Button from "@/components/shared/Button";

import {
  questionBankSchema,
  type QuestionBankSchemaType,
} from "../schemas/question-bank.schema";

import { questionBankForm } from "../config/question-bank-form";

import { useCreateQuestionBankMutation } from "../api/mutations";

import { useBatchesQuery, useSubjectsByBatchQuery } from "../api/queries";

import type { Batch, Subject } from "../types";

interface SelectedSubject {
  batchId: string;
  batchName: string;
  subjectId: string;
  subjectName: string;
}

export default function CreateQuestionBankForm() {
  /* ---------------- Local State ---------------- */

  const [selectedBatchId, setSelectedBatchId] = useState("");

  const [selectedSubjectId, setSelectedSubjectId] = useState("");

  const [selectedSubjects, setSelectedSubjects] = useState<SelectedSubject[]>(
    [],
  );

  /* ---------------- Mutation ---------------- */

  const { mutate: createQuestionBank, isPending } =
    useCreateQuestionBankMutation();

  /* ---------------- Form ---------------- */

  const methods = useForm<QuestionBankSchemaType>({
    resolver: zodResolver(questionBankSchema),

    defaultValues: {
      name: "",
      description: "",
      subjectIds: [],
    },
  });

  /* ---------------- Fetch Batches ---------------- */

  const { data: batchesResponse } = useBatchesQuery();

  const batches = batchesResponse?.data ?? [];

  /* ---------------- Fetch Subjects ---------------- */

  const { data: subjectsResponse } = useSubjectsByBatchQuery(selectedBatchId);

  const subjects = subjectsResponse?.data ?? [];

  /* ---------------- Helpers ---------------- */

  const truncate = (text?: string, maxLength = 30) => {
    if (!text) return "";

    return text.length > maxLength ? `${text.slice(0, maxLength)}...` : text;
  };

  const formatDate = (date: string) =>
    new Date(date).toLocaleDateString("en-GB", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });

  /* ---------------- Options ---------------- */

  const batchOptions = batches.map((batch: Batch) => ({
    id: batch.id,

    name: batch.name,

    description: truncate(batch.description),

    duration: `${formatDate(batch.startDate)} → ${formatDate(batch.endDate)}`,
  }));

  const subjectOptions = subjects.map((subject: Subject) => ({
    id: subject.id,

    name: subject.name,

    description: subject.description ?? "",
  }));

  /* ---------------- Add Subject ---------------- */

  const handleAddSubject = () => {
    if (!selectedBatchId || !selectedSubjectId) return;

    const batch = batches.find((item: Batch) => item.id === selectedBatchId);

    const subject = subjects.find(
      (item: Subject) => item.id === selectedSubjectId,
    );

    if (!batch || !subject) return;

    const alreadyExists = selectedSubjects.some(
      (item) => item.subjectId === selectedSubjectId,
    );

    if (alreadyExists) return;

    const updated = [
      ...selectedSubjects,
      {
        batchId: batch.id,

        batchName: batch.name,

        subjectId: subject.id,

        subjectName: subject.name,
      },
    ];

    setSelectedSubjects(updated);

    methods.setValue(
      "subjectIds",
      updated.map((item) => item.subjectId),
    );

    // Reset both selectors
    setSelectedBatchId("");
    setSelectedSubjectId("");
  };

  /* ---------------- Remove Subject ---------------- */

  const removeSubject = (subjectId: string) => {
    const updated = selectedSubjects.filter(
      (item) => item.subjectId !== subjectId,
    );

    setSelectedSubjects(updated);

    methods.setValue(
      "subjectIds",
      updated.map((item) => item.subjectId),
    );
  };

  /* ---------------- Submit ---------------- */

  const onSubmit = (data: QuestionBankSchemaType) => {
    createQuestionBank(data, {
      onSuccess: () => {
        methods.reset();

        setSelectedBatchId("");

        setSelectedSubjectId("");

        setSelectedSubjects([]);
      },
    });
  };
  return (
    <form onSubmit={methods.handleSubmit(onSubmit)}>
      <DynamicForm
        sections={questionBankForm}
        form={methods as unknown as UseFormReturn<FieldValues>}
      />

      <div className="mt-8 space-y-8">
        <div className="rounded-2xl border border-[#EAECF0] p-6">
          <h2 className="sub-heading mb-1">Add Subjects</h2>

          <p className="body-text mb-6 text-[#667085]">
            Select a batch, choose a subject, then click{" "}
            <span className="font-medium text-[#1b1b1b]">Add Subject</span>. You can add
            subjects from multiple batches into the same question bank.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Batch */}

            <MultiSelectField
              label="Batch"
              options={batchOptions}
              value={selectedBatchId ? [selectedBatchId] : []}
              searchPlaceholder="Search batches..."
              emptyMessage="No batches found"
              onChange={(value) => {
                const selected =
                  value.length > 0 ? value[value.length - 1] : "";

                setSelectedBatchId(selected);

                setSelectedSubjectId("");
              }}
            />

            {/* Subject */}

            <MultiSelectField
              label="Subject"
              options={subjectOptions}
              value={selectedSubjectId ? [selectedSubjectId] : []}
              // disabled={!selectedBatchId}
              searchPlaceholder="Search subjects..."
              emptyMessage="No subjects found"
              onChange={(value) => {
                const selected =
                  value.length > 0 ? value[value.length - 1] : "";

                setSelectedSubjectId(selected);
              }}
            />
          </div>

          <div className="flex justify-end mt-6">
            <Button
              type="button"
              onClick={handleAddSubject}
              disabled={!selectedBatchId || !selectedSubjectId}
            >
              + Add Subject
            </Button>
          </div>
        </div>

        {/* Selected Subjects */}

        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="sub-heading">Selected Subjects</h2>

            <span className="caption">{selectedSubjects.length} selected</span>
          </div>

          {selectedSubjects.length === 0 ? (
            <div className="border border-dashed border-[#D0D5DD] rounded-2xl py-12 text-center">
              <p className="body-text text-[#667085]">No subjects added yet.</p>

              <p className="caption mt-2">
                Add one or more subjects to create the question bank.
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {selectedSubjects.map((item) => (
                <div
                  key={item.subjectId}
                  className="flex items-center justify-between rounded-2xl border border-[#EAECF0] p-5"
                >
                  <div>
                    <h3 className="card-title">{item.subjectName}</h3>

                    <p className="caption mt-1">Batch : {item.batchName}</p>
                  </div>

                  <button
                    type="button"
                    onClick={() => removeSubject(item.subjectId)}
                    className="text-[#F04438] card-title hover:underline"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="flex justify-end gap-4 mt-10">
        <Button
          type="button"
          variant="secondary"
        >
          Cancel
        </Button>

        <Button
          type="submit"
          disabled={isPending || selectedSubjects.length === 0}
        >
          {isPending ? "Creating..." : "Create Question Bank"}
        </Button>
      </div>
    </form>
  );
}
