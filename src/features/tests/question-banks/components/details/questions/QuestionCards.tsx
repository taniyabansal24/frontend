// src/features/tests/question-banks/components/details/questions/QuestionCards.tsx
"use client";

import type { Dispatch, SetStateAction } from "react";
import type { Question } from "../../../types";

import QuestionCard from "./QuestionCard";

interface QuestionCardsProps {
  questions: Question[];
  isEditing: boolean;
  setQuestions: Dispatch<SetStateAction<Question[]>>;
}

export default function QuestionCards({
  questions,
  isEditing,
  setQuestions,
}: QuestionCardsProps) {
  if (questions.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-[#D0D5DD] py-12 text-center">
        <p className="body-text text-[#667085]">No questions found.</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {questions.map((question, index) => (
        <QuestionCard
          key={question.id}
          question={question}
          index={index}
          isEditing={isEditing}
          setQuestions={setQuestions}
        />
      ))}
    </div>
  );
}
