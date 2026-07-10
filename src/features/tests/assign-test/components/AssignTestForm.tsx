"use client";

import { useState } from "react";

import { Controller, Resolver, useForm, useWatch } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

import TestDetailsSection from "./TestDetailsSection";
import BatchSelector from "./BatchSelector";
import ScheduleSection from "./ScheduleSection";
import AssignmentSummary from "./AssignmentSummary";
import InstructionSection from "./InstructionSection";
import QuestionBankSelector from "./QuestionBankSelector";

import {
  createTestSchema,
  type CreateTestSchemaType,
} from "../schemas/createTest.schema";

import { useCreateTestMutation } from "../api/mutations";

import {
  useBatchesQuery,
  useSubjectsQuery,
  useQuestionBanksQuery,
} from "../api/queries";

import type { Batch, Subject, QuestionBank } from "../types";

export default function AssignTestForm() {
  const [selectedBatchIds, setSelectedBatchIds] = useState<string[]>([]);
  const [selectedSubjectId, setSelectedSubjectId] = useState("");

  const methods = useForm<CreateTestSchemaType>({
    resolver: zodResolver(createTestSchema) as Resolver<CreateTestSchemaType>,
    defaultValues: {
      title: "",
      description: "",
      durationMinutes: 60,
      evaluationMode: "MIXED",
      batchIds: [],
      subjectId: "",
      questionBankIds: [],
      syllabus: "",
      instructions: "",
      startDate: "",
      startTime: "",
      maxAttempts: 1,
    },
  });

  const [questionBankIds, title, durationMinutes, startDate, startTime] =
    useWatch({
      control: methods.control,
      name: [
        "questionBankIds",
        "title",
        "durationMinutes",
        "startDate",
        "startTime",
      ],
    });

  const { mutateAsync: createTest, isPending } = useCreateTestMutation();

  /* -------------------------------- Queries -------------------------------- */

  const { data: batchesResponse } = useBatchesQuery();

  const batches: Batch[] = batchesResponse?.data ?? [];

  const { data: subjectsResponse } = useSubjectsQuery(selectedBatchIds[0]);

  const subjects: Subject[] = subjectsResponse?.data ?? [];

  const { data: questionBanksResponse } = useQuestionBanksQuery();

  const questionBanks: QuestionBank[] = questionBanksResponse?.data ?? [];

  /* ------------------------------- Submit ------------------------------- */

  async function onSubmit(data: CreateTestSchemaType) {
    try {
      await createTest(data);

      methods.reset();

      setSelectedBatchIds([]);

      setSelectedSubjectId("");
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <form
      onSubmit={methods.handleSubmit(onSubmit)}
      className="grid gap-6 lg:grid-cols-[1fr_320px]"
    >
      {/* ---------------- Left Content ---------------- */}

      <div className="space-y-6">
        <TestDetailsSection
          register={methods.register}
          errors={methods.formState.errors}
        />

        <Controller
          control={methods.control}
          name="batchIds"
          render={({ field }) => (
            <BatchSelector
              batches={batches}
              value={field.value}
              onChange={(value) => {
                field.onChange(value);

                setSelectedBatchIds(value);

                setSelectedSubjectId("");

                methods.setValue("subjectId", "");

                // ✅ Fixed: Changed from questionBankId to questionBankIds
                methods.setValue("questionBankIds", []);
              }}
            />
          )}
        />

        <QuestionBankSelector
          control={methods.control}
          questionBanks={questionBanks}
        />

        <InstructionSection
          control={methods.control}
          errors={methods.formState.errors}
        />

        <ScheduleSection
          register={methods.register}
          errors={methods.formState.errors}
          watch={methods.watch}
        />
      </div>

      {/* ---------------- Right Sidebar ---------------- */}

      <AssignmentSummary
        batches={batches}
        questionBanks={questionBanks}
        selectedBatchIds={selectedBatchIds}
        selectedQuestionBankIds={questionBankIds}
        title={title}
        duration={durationMinutes}
        startDate={startDate}
        startTime={startTime}
        isSubmitting={isPending}
      />
    </form>
  );
}
