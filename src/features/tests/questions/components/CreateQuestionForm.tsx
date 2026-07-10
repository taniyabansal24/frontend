// src/features/tests/questions/components/CreateQuestionForm.tsx
"use client";

import { useState } from "react";

import { Controller, useForm } from "react-hook-form";

import MultiSelectField from "@/components/shared/forms/MultiSelectField";

import {
  useBatchesQuery,
  useSubjectsByBatchQuery,
  useQuestionBanksQuery,
} from "../api/queries";

import { useCreateQuestionMutation } from "../api/mutations";

import CsvUpload from "./CsvUpload";
import QuestionBuilder from "./QuestionBuilder";

import type { Batch, Subject, QuestionBank, QuestionFormItem } from "../types";
import Button from "@/components/shared/Button";

interface CreateQuestionFormValues {
  batchIds: string[];
  subjectIds: string[];
  questionBankIds: string[];
}

export default function CreateQuestionForm() {
  const [questions, setQuestions] = useState<QuestionFormItem[]>([]);

  const [selectedBatchIds, setSelectedBatchIds] = useState<string[]>([]);

  const [selectedSubjectIds, setSelectedSubjectIds] = useState<string[]>([]);

  const [csvKey, setCsvKey] = useState(0);

  const methods = useForm<CreateQuestionFormValues>({
    defaultValues: {
      batchIds: [],
      subjectIds: [],
      questionBankIds: [],
    },
  });

  /* ---------------- Fetch Batches ---------------- */

  const { data: batchesResponse } = useBatchesQuery();

  const batches = batchesResponse?.data ?? [];

  /* ---------------- Fetch Subjects ---------------- */

  const { data: subjectsResponse } = useSubjectsByBatchQuery(
    selectedBatchIds[0],
  );

  const subjects = subjectsResponse?.data ?? [];

  /* ---------------- Fetch Question Banks ---------------- */

  const { data: questionBanksResponse } = useQuestionBanksQuery(
    selectedSubjectIds[0],
  );

  const questionBanks = questionBanksResponse?.data ?? [];

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

  const questionBankOptions = questionBanks.map((bank: QuestionBank) => ({
    id: bank.id,

    name: bank.name,

    description: bank.description ?? "",
  }));

  /* ---------------- Mutation ---------------- */

  const { mutate: createQuestion, isPending } = useCreateQuestionMutation();

  const selectedQuestionBankId = methods.watch("questionBankIds")?.[0];

  /* ---------------- Submit ---------------- */

  const onSubmit = (data: CreateQuestionFormValues) => {
    const questionBankId = data.questionBankIds[0];
    const subjectId = data.subjectIds[0];

    if (!questionBankId || !subjectId) {
      return;
    }

    const payload = questions.map((question) => {
      const common = {
        type: question.type,
        questionText: question.questionText,
        marks: question.marks,
        topic: question.topic,
        questionBankId,
        subjectId,
      };

      if (question.type === "MCQ") {
        return {
          ...common,
          difficulty: question.difficulty,
          options: question.options,
          correctOption: question.correctOption,
        };
      }

      return {
        ...common,
        expectedAnswer: question.expectedAnswer,
        difficulty: question.difficulty,
      };
    });

    createQuestion(payload, {
      onSuccess: () => {
        setQuestions([]);

        methods.reset();

        setSelectedBatchIds([]);
        setSelectedSubjectIds([]);

        setCsvKey((prev) => prev + 1);
      },
    });
  };

  return (
    <form onSubmit={methods.handleSubmit(onSubmit)}>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {/* Batch */}

        <Controller
          control={methods.control}
          name="batchIds"
          render={({ field }) => (
            <MultiSelectField
              label="Batch"
              options={batchOptions}
              value={field.value}
              searchPlaceholder="Search batches..."
              emptyMessage="No batches found"
              onChange={(value) => {
                const selected =
                  value.length > 0 ? [value[value.length - 1]] : [];

                field.onChange(selected);

                setSelectedBatchIds(selected);

                setSelectedSubjectIds([]);

                methods.setValue("subjectIds", []);

                methods.setValue("questionBankIds", []);
              }}
            />
          )}
        />

        {/* Subject */}

        <Controller
          control={methods.control}
          name="subjectIds"
          render={({ field }) => (
            <MultiSelectField
              label="Subject"
              options={subjectOptions}
              value={field.value}
              searchPlaceholder="Search subjects..."
              emptyMessage="No subjects found"
              onChange={(value) => {
                const selected =
                  value.length > 0 ? [value[value.length - 1]] : [];

                field.onChange(selected);

                setSelectedSubjectIds(selected);

                methods.setValue("questionBankIds", []);
              }}
            />
          )}
        />

        {/* Question Bank */}

        <Controller
          control={methods.control}
          name="questionBankIds"
          render={({ field }) => (
            <MultiSelectField
              label="Question Bank"
              options={questionBankOptions}
              value={field.value}
              searchPlaceholder="Search question banks..."
              emptyMessage="No question banks found"
              onChange={(value) => {
                const selected =
                  value.length > 0 ? [value[value.length - 1]] : [];

                field.onChange(selected);
              }}
            />
          )}
        />
      </div>

      <CsvUpload
        key={csvKey}
        disabled={!selectedQuestionBankId}
        setQuestions={setQuestions}
      />

      <QuestionBuilder
        disabled={!selectedQuestionBankId}
        questions={questions}
        setQuestions={setQuestions}
      />

      <div className="flex justify-end gap-4 mt-8">
        <Button
          variant="secondary"
          onClick={() => {
            methods.reset();

            setQuestions([]);

            setSelectedBatchIds([]);
            setSelectedSubjectIds([]);

            setCsvKey((prev) => prev + 1);
          }}
        >
          Cancel
        </Button>

        <Button type="submit" disabled={isPending || !selectedQuestionBankId}>
          {isPending ? "Saving..." : "Save Questions"}
        </Button>
      </div>
    </form>
  );
}
