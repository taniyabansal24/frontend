// src/features/tests/question-banks/components/details/questions/QuestionCard.tsx

"use client";

import { Dispatch, SetStateAction, useState } from "react";

import { ChevronDown, ChevronRight, CheckCircle2, Trash2 } from "lucide-react";

import type { Question } from "../../../types";

import { useDeleteQuestionMutation } from "../../../api/mutations";

import MCQCard from "./MCQCard";
import SubjectiveCard from "./SubjectiveCard";
import DeleteQuestionDialog from "./DeleteQuestionDialog";

interface QuestionCardProps {
  question: Question;
  index: number;
  isEditing: boolean;
  setQuestions: Dispatch<SetStateAction<Question[]>>;
}

export default function QuestionCard({
  question,
  index,
  isEditing,
  setQuestions,
}: QuestionCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showDelete, setShowDelete] = useState(false);

  const { mutate: deleteQuestion, isPending } = useDeleteQuestionMutation();

  const toggleExpand = () => {
    setIsExpanded((prev) => !prev);
  };

  const handleDelete = () => {
    deleteQuestion(
      {
        questionId: question.id,
        questionBankId: question.questionBankId,
      },
      {
        onSuccess: () => {
          setShowDelete(false);
        },
      },
    );
  };

  const updateQuestion = (changes: Partial<Question>) => {
    setQuestions((prev) =>
      prev.map((q) => (q.id === question.id ? { ...q, ...changes } : q)),
    );
  };

  return (
    <>
      <div className="overflow-hidden rounded-2xl border border-[#EAECF0] bg-white">
        {/* Header */}
        <div
          role="button"
          tabIndex={0}
          onClick={toggleExpand}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              toggleExpand();
            }
          }}
          className="flex w-full cursor-pointer items-center justify-between p-5 text-left"
        >
          <div>
            <div className="flex items-center gap-3">
              <h3 className="card-title">Question #{index + 1}</h3>

              <span className="inline-flex items-center gap-1 rounded-full bg-[#ECFDF3] px-2 py-1 text-xs text-[#027A48]">
                <CheckCircle2 size={12} />
                Saved
              </span>
            </div>

            <p className="caption mt-2 text-[#667085]">
              {question.questionText}
            </p>

            <div className="mt-3 flex flex-wrap gap-2">
              <span className="rounded-full bg-[#F2F4F7] px-3 py-1 text-xs">
                {question.type}
              </span>

              <span className="rounded-full bg-[#F2F4F7] px-3 py-1 text-xs">
                {question.marks} Marks
              </span>

              {question.topic && (
                <span className="rounded-full bg-[#F2F4F7] px-3 py-1 text-xs">
                  {question.topic}
                </span>
              )}

              {question.difficulty && (
                <span className="rounded-full bg-[#F2F4F7] px-3 py-1 text-xs">
                  {question.difficulty}
                </span>
              )}
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setShowDelete(true);
              }}
            >
              <Trash2 size={18} className="text-[#F04438]" />
            </button>

            {isExpanded ? (
              <ChevronDown size={22} />
            ) : (
              <ChevronRight size={22} />
            )}
          </div>
        </div>

        {/* Body */}
        {isExpanded && (
          <div className="border-t border-[#EAECF0] p-6">
            {question.type === "MCQ" ? (
              <MCQCard
                question={question}
                isEditing={isEditing}
                updateQuestion={updateQuestion}
              />
            ) : (
              <SubjectiveCard
                question={question}
                isEditing={isEditing}
                updateQuestion={updateQuestion}
              />
            )}
          </div>
        )}
      </div>

      <DeleteQuestionDialog
        open={showDelete}
        questionText={question.questionText}
        isPending={isPending}
        onClose={() => setShowDelete(false)}
        onDelete={handleDelete}
      />
    </>
  );
}
