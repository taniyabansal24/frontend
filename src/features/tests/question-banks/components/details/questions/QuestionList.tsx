"use client";

import type { Question } from "../../../types/index";

import QuestionCard from "./QuestionCard";

interface QuestionListProps {
  questions: Question[];
  isEditing: boolean;
}

export default function QuestionList({
  questions,
  isEditing,
}: QuestionListProps) {
  if (questions.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-[#D0D5DD] bg-white py-16 text-center">
        <h3 className="sub-heading">
          No Questions Found
        </h3>

        <p className="body-text mt-2 text-[#667085]">
          This question bank doesn&apos;t contain any questions yet.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {questions.map((question, index) => (
        <QuestionCard
          key={question.id}
          question={question}
          questionNumber={index + 1}
          isEditing={isEditing}
        />
      ))}
    </div>
  );
}