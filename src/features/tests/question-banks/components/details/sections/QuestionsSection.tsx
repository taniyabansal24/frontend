// src/features/tests/question-banks/components/details/sections/QuestionsSection.tsx
"use client";

import type { Dispatch, SetStateAction } from "react";
import type { Question } from "../../../types";

import QuestionCards from "../questions/QuestionCards";

interface QuestionsSectionProps {
  questions: Question[];
  isEditing: boolean;
  setQuestions: Dispatch<SetStateAction<Question[]>>;
}

export default function QuestionsSection({
  questions,
  isEditing,
  setQuestions,
}: QuestionsSectionProps) {
  return (
    <section className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="sub-heading">Questions</h2>

          <p className="body-text mt-1 text-[#667085]">
            View and manage all questions in this question bank.
          </p>
        </div>

        <span className="rounded-full bg-[#F2F4F7] px-3 py-1 caption">
          {questions.length} Question
          {questions.length !== 1 && "s"}
        </span>
      </div>

      <QuestionCards
        questions={questions}
        isEditing={isEditing}
        setQuestions={setQuestions}
      />
    </section>
  );
}
