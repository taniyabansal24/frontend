// src/features/tests/question-banks/components/details/information/BasicInformation.tsx
"use client";
import type { Dispatch, SetStateAction } from "react";
import type { QuestionBank } from "../../../types";

import EditableField from "./EditableField";

interface BasicInformationProps {
  questionBank: QuestionBank;
  isEditing: boolean;
  setQuestionBank: Dispatch<SetStateAction<QuestionBank | null>>;
}

export default function BasicInformation({
  questionBank,
  isEditing,
  setQuestionBank,
}: BasicInformationProps) {
  return (
    <div className="rounded-2xl border border-[#EAECF0] bg-white p-6">
      <h2 className="sub-heading mb-4">Question Bank Information</h2>

      <div className="mb-5 border-b border-[#EAECF0]" />

      <div className="grid grid-cols-1 gap-x-5 gap-y-4 md:grid-cols-2">
        <EditableField
          label="Question Bank Name"
          value={questionBank.name}
          isEditing={isEditing}
          placeholder="Enter question bank name"
          onChange={(name) =>
            setQuestionBank((prev) => (prev ? { ...prev, name } : prev))
          }
        />

        <EditableField
          label="Description"
          value={questionBank.description ?? ""}
          isEditing={isEditing}
          placeholder="Enter description"
          multiline
          onChange={(description) =>
            setQuestionBank((prev) => (prev ? { ...prev, description } : prev))
          }
        />

        <EditableField
          label="Total Questions"
          value={String(questionBank.totalQuestions ?? 0)}
          isEditing={isEditing}
          readOnly
        />

        <EditableField
          label="Total Marks"
          value={String(questionBank.totalMarks ?? 0)}
          isEditing={isEditing}
          readOnly
        />
      </div>
    </div>
  );
}
