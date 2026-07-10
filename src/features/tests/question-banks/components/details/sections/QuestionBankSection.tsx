// src/features/tests/question-banks/components/details/sections/QuestionBankSection.tsx
"use client";

import { Dispatch, SetStateAction } from "react";
import type { QuestionBank } from "../../../types/index";

import BasicInformation from "../information/BasicInformation";
import SubjectsCard from "../information/SubjectsCard";

interface QuestionBankSectionProps {
  questionBank: QuestionBank;
  isEditing: boolean;
  setQuestionBank: Dispatch<SetStateAction<QuestionBank | null>>;
}

export default function QuestionBankSection({
  questionBank,
  isEditing,
  setQuestionBank,
}: QuestionBankSectionProps) {
  return (
    <section className="space-y-6">
      {/* Section Header */}
      {/* <div>
        <h2 className="sub-heading">
          Question Bank Information
        </h2>

        <p className="body-text mt-1 text-[#667085]">
          View and manage the basic details of this question bank.
        </p>
      </div> */}

      {/* Basic Information */}
      <BasicInformation
        questionBank={questionBank}
        isEditing={isEditing}
        setQuestionBank={setQuestionBank}
      />

      {/* Subjects */}
      <SubjectsCard subjects={questionBank.subjects} />
    </section>
  );
}
