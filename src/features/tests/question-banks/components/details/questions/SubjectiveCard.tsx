// src/features/tests/question-banks/components/details/questions/SubjectiveCard.tsx
"use client";

import type { Difficulty, Question } from "../../../types";

interface SubjectiveCardProps {
  question: Question;
  isEditing: boolean;
  updateQuestion: (changes: Partial<Question>) => void;
}

export default function SubjectiveCard({
  question,
  isEditing,
  updateQuestion,
}: SubjectiveCardProps) {
  return (
    <div className="space-y-8">
      {/* Question */}
      <div>
        <label className="card-title mb-2 block">Question</label>

        {isEditing ? (
          <textarea
            value={question.questionText}
            onChange={(e) =>
              updateQuestion({
                questionText: e.target.value,
              })
            }
            rows={4}
            className="w-full rounded-xl border border-[#D0D5DD] bg-white p-4 text-[#101828] outline-none transition-all placeholder:text-[#98A2B3] focus:border-[#6FA073] focus:ring-2 focus:ring-[#6FA073]/20"
          />
        ) : (
          <div className="rounded-xl border border-[#EAECF0] bg-[#F9FAFB] p-4">
            <p className="body-text whitespace-pre-wrap">
              {question.questionText}
            </p>
          </div>
        )}
      </div>

      {/* Expected Answer */}
      <div>
        <label className="card-title mb-2 block">Expected Answer</label>

        {isEditing ? (
          <textarea
            value={question.expectedAnswer ?? ""}
            onChange={(e) =>
              updateQuestion({
                expectedAnswer: e.target.value,
              })
            }
            rows={6}
            className="w-full rounded-xl border border-[#D0D5DD] bg-white p-4 text-[#101828] outline-none transition-all placeholder:text-[#98A2B3] focus:border-[#6FA073] focus:ring-2 focus:ring-[#6FA073]/20"
          />
        ) : (
          <div className="rounded-xl border border-[#EAECF0] bg-[#F9FAFB] p-4">
            <p className="body-text whitespace-pre-wrap">
              {question.expectedAnswer || "-"}
            </p>
          </div>
        )}
      </div>

      {/* Question Details */}
      <div>
        <h4 className="card-title mb-4">Question Details</h4>

        <div className="grid gap-6 md:grid-cols-3">
          {/* Marks */}
          <div>
            <label className="caption mb-2 block">Marks</label>

            {isEditing ? (
              <input
                type="number"
                value={question.marks}
                onChange={(e) =>
                  updateQuestion({
                    marks: Number(e.target.value),
                  })
                }
                className="h-11 w-full rounded-xl border border-[#D0D5DD] bg-white px-4 text-[#101828] outline-none transition-all focus:border-[#6FA073] focus:ring-2 focus:ring-[#6FA073]/20"
              />
            ) : (
              <div className="rounded-xl border border-[#EAECF0] bg-[#F9FAFB] p-3">
                <p className="body-text">{question.marks}</p>
              </div>
            )}
          </div>

          {/* Difficulty */}
          <div>
            <label className="caption mb-2 block">Difficulty</label>

            {isEditing ? (
              <select
                value={question.difficulty}
                onChange={(e) =>
                  updateQuestion({
                    difficulty: e.target.value as Difficulty,
                  })
                }
                className="h-11 w-full rounded-xl border border-[#D0D5DD] bg-white px-4 text-[#101828] outline-none transition-all focus:border-[#6FA073] focus:ring-2 focus:ring-[#6FA073]/20"
              >
                <option value="EASY">Easy</option>
                <option value="MEDIUM">Medium</option>
                <option value="HARD">Hard</option>
              </select>
            ) : (
              <div className="rounded-xl border border-[#EAECF0] bg-[#F9FAFB] p-3">
                <p className="body-text">{question.difficulty}</p>
              </div>
            )}
          </div>

          {/* Topic */}
          <div>
            <label className="caption mb-2 block">Topic</label>

            {isEditing ? (
              <input
                value={question.topic ?? ""}
                onChange={(e) =>
                  updateQuestion({
                    topic: e.target.value,
                  })
                }
                className="h-11 w-full rounded-xl border border-[#D0D5DD] bg-white px-4 text-[#101828] outline-none transition-all placeholder:text-[#98A2B3] focus:border-[#6FA073] focus:ring-2 focus:ring-[#6FA073]/20"
              />
            ) : (
              <div className="rounded-xl border border-[#EAECF0] bg-[#F9FAFB] p-3">
                <p className="body-text">{question.topic || "-"}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}