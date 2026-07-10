// src/features/tests/questions/components/QuestionBuilder.tsx
"use client";

import { Plus } from "lucide-react";

import QuestionCard from "./QuestionCard";
import type { QuestionFormItem } from "../types";
import Button from "@/components/shared/Button";

interface QuestionBuilderProps {
  questions: QuestionFormItem[];
  setQuestions: React.Dispatch<React.SetStateAction<QuestionFormItem[]>>;
  disabled?: boolean;
}

const createEmptyQuestion = (): QuestionFormItem => ({
  id: `${Date.now()}-${Math.random().toString(36).substring(2, 9)}`,

  isExpanded: true,
  isSaved: false,

  type: "MCQ",

  questionText: "",

  marks: 1,

  topic: "",

  difficulty: "",

  correctOption: "",

  expectedAnswer: "",

  options: [
    { key: "A", text: "" },
    { key: "B", text: "" },
    { key: "C", text: "" },
    { key: "D", text: "" },
  ],
});

export default function QuestionBuilder({
  questions,
  setQuestions,
}: QuestionBuilderProps) {
  const addQuestion = () => {
    setQuestions((prev) => [
      ...prev.map((question) => ({
        ...question,
        isExpanded: false,
      })),

      createEmptyQuestion(),
    ]);
  };

  const removeQuestion = (id: string) => {
    setQuestions((prev) => prev.filter((question) => question.id !== id));
  };

  const updateQuestion = (id: string, updatedQuestion: QuestionFormItem) => {
    setQuestions((prev) =>
      prev.map((question) => (question.id === id ? updatedQuestion : question)),
    );
  };

  return (
    <div className="mt-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="sub-heading">Manual Questions ({questions.length})</h2>

        <Button type="button" onClick={addQuestion}>
          <Plus size={18} />
          Add Question
        </Button>
      </div>

      {questions.length === 0 && (
        <div className="border border-dashed border-[#D0D5DD] rounded-2xl p-10 text-center">
          <p className="body-text text-[#667085] mb-4">No questions added yet.</p>

          <Button type="button" onClick={addQuestion}>
            Add First Question
          </Button>
        </div>
      )}

      <div className="space-y-4">
        {questions.map((question, index) => (
          <QuestionCard
            key={question.id}
            index={index}
            question={question}
            onDelete={removeQuestion}
            onChange={updateQuestion}
          />
        ))}
      </div>
    </div>
  );
}
