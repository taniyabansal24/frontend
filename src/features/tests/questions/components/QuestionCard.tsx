// src/features/tests/questions/components/QuestionCard.tsx
"use client";

import {
  ChevronDown,
  ChevronRight,
  CheckCircle2,
  Trash2,
} from "lucide-react";

import MCQFields from "./MCQFields";
import SubjectiveFields from "./SubjectiveFields";

import type { QuestionFormItem } from "../types";

interface Props {
  question: QuestionFormItem;

  index: number;

  onDelete: (id: string) => void;

  onChange: (
    id: string,
    question: QuestionFormItem,
  ) => void;
}

export default function QuestionCard({
  question,
  index,
  onDelete,
  onChange,
}: Props) {
  const updateField = <
    K extends keyof QuestionFormItem,
  >(
    field: K,
    value: QuestionFormItem[K],
  ) => {
    onChange(question.id, {
      ...question,
      [field]: value,
    });
  };

  const toggleExpand = () => {
    onChange(question.id, {
      ...question,
      isExpanded:
        !question.isExpanded,
    });
  };

  const saveQuestion = () => {
    onChange(question.id, {
      ...question,
      isSaved: true,
      isExpanded: false,
    });
  };

  return (
    <div className="border border-[#EAECF0] rounded-2xl overflow-hidden">
      {/* Header */}
      <div
        role="button"
        tabIndex={0}
        onClick={toggleExpand}
        onKeyDown={(e) => {
          if (
            e.key === "Enter" ||
            e.key === " "
          ) {
            toggleExpand();
          }
        }}
        className="w-full p-5 flex justify-between items-center text-left cursor-pointer"
      >
        <div>
          <div className="flex items-center gap-2">
            <h3 className="card-title">
              Question #{index + 1}
            </h3>

            {question.isSaved && (
              <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-[#ECFDF3] text-[#027A48] text-xs">
                <CheckCircle2
                  size={12}
                />
                Saved
              </span>
            )}
          </div>

          <p className="caption mt-1 text-[#667085]">
            {question.questionText
              ? question.questionText.slice(
                  0,
                  80,
                )
              : "Draft Question"}
          </p>

          <div className="flex gap-3 mt-2">
            <span className="caption">
              {question.type}
            </span>

            <span className="caption">
              {question.marks} Marks
            </span>

            {question.topic && (
              <span className="caption">
                {question.topic}
              </span>
            )}
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();

              onDelete(question.id);
            }}
          >
            <Trash2
              size={18}
              className="text-red-500"
            />
          </button>

          {question.isExpanded ? (
            <ChevronDown size={20} />
          ) : (
            <ChevronRight size={20} />
          )}
        </div>
      </div>

      {/* Body */}
      {question.isExpanded && (
        <div className="border-t border-[#EAECF0] p-5">
          <div className="grid md:grid-cols-2 gap-4 mb-5">
            <div>
              <label className="card-title">
                Question Type
              </label>

              <select
                value={question.type}
                onChange={(e) =>
                  updateField(
                    "type",
                    e.target
                      .value as QuestionFormItem["type"],
                  )
                }
                className="w-full h-10 border border-[#EAECF0] rounded-md px-3"
              >
                <option value="MCQ">
                  MCQ
                </option>

                <option value="SUBJECTIVE">
                  Subjective
                </option>
              </select>
            </div>

            <div>
              <label className="card-title">
                Marks
              </label>

              <input
                type="number"
                min={1}
                value={
                  question.marks
                }
                onChange={(e) =>
                  updateField(
                    "marks",
                    Number(
                      e.target.value,
                    ),
                  )
                }
                className="w-full h-10 border border-[#EAECF0] rounded-md px-3"
              />
            </div>
          </div>

          <div className="mb-5">
            <label className="card-title">
              Question
            </label>

            <textarea
              rows={4}
              value={
                question.questionText
              }
              onChange={(e) =>
                updateField(
                  "questionText",
                  e.target.value,
                )
              }
              className="w-full border border-[#EAECF0] rounded-md p-3"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-4 mb-5">
            <div>
              <label className="card-title">
                Topic
              </label>

              <input
                value={
                  question.topic
                }
                onChange={(e) =>
                  updateField(
                    "topic",
                    e.target.value,
                  )
                }
                className="w-full h-10 border border-[#EAECF0] rounded-md px-3"
              />
            </div>

            {question.type ===
              "MCQ" && (
              <div>
                <label className="card-title">
                  Difficulty
                </label>

                <select
                  value={
                    question.difficulty
                  }
                  onChange={(e) =>
                    updateField(
                      "difficulty",
                      e.target.value,
                    )
                  }
                  className="w-full h-10 border border-[#EAECF0] rounded-md px-3"
                >
                  <option value="">
                    Select
                  </option>

                  <option value="easy">
                    Easy
                  </option>

                  <option value="medium">
                    Medium
                  </option>

                  <option value="hard">
                    Hard
                  </option>
                </select>
              </div>
            )}
          </div>

          {question.type ===
          "MCQ" ? (
            <MCQFields
              question={question}
              onChange={onChange}
            />
          ) : (
            <SubjectiveFields
              question={question}
              onChange={onChange}
            />
          )}

          <div className="flex justify-end mt-6">
            <button
              type="button"
              onClick={saveQuestion}
              className="h-10 px-5 rounded-xl bg-[#6FA073] text-white"
            >
              Save Question
            </button>
          </div>
        </div>
      )}
    </div>
  );
}