// src/features/tests/question-banks/components/details/questions/MCQCard.tsx
"use client";

import type { Difficulty, Question } from "../../../types";

interface MCQCardProps {
  question: Question;
  isEditing: boolean;
  updateQuestion: (changes: Partial<Question>) => void;
}

export default function MCQCard({
  question,
  isEditing,
  updateQuestion,
}: MCQCardProps) {
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

      {/* Options */}
      <div>
        <h4 className="card-title mb-4">Options</h4>

        <div className="grid gap-4 md:grid-cols-2">
          {[
            {
              key: "A",
              value: question.optionA,
            },
            {
              key: "B",
              value: question.optionB,
            },
            {
              key: "C",
              value: question.optionC,
            },
            {
              key: "D",
              value: question.optionD,
            },
          ].map((option) => (
            <div key={option.key}>
              <label className="caption mb-2 block">Option {option.key}</label>

              {isEditing ? (
                <input
                  value={option.value ?? ""}
                  onChange={(e) => {
                    switch (option.key) {
                      case "A":
                        updateQuestion({ optionA: e.target.value });
                        break;
                      case "B":
                        updateQuestion({ optionB: e.target.value });
                        break;
                      case "C":
                        updateQuestion({ optionC: e.target.value });
                        break;
                      case "D":
                        updateQuestion({ optionD: e.target.value });
                        break;
                    }
                  }}
                  className="h-11 w-full rounded-xl border border-[#D0D5DD] bg-white px-4 text-[#101828] outline-none transition-all placeholder:text-[#98A2B3] focus:border-[#6FA073] focus:ring-2 focus:ring-[#6FA073]/20"
                />
              ) : (
                <div
                  className={`rounded-xl border p-3 ${
                    question.correctOption === option.key
                      ? "border-[#6FA073] bg-[#ECFDF3]"
                      : "border-[#EAECF0] bg-[#F9FAFB]"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="body-text">{option.value}</span>

                    {question.correctOption === option.key && (
                      <span className="rounded-full bg-[#6FA073] px-2 py-1 text-xs font-medium text-white">
                        Correct
                      </span>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Question Details */}
      <div>
        <h4 className="card-title mb-4">Question Details</h4>

        <div className="grid gap-6 md:grid-cols-3">
          {/* Correct Option */}
          <div>
            <label className="caption mb-2 block">Correct Option</label>

            {isEditing ? (
              <select
                value={question.correctOption ?? ""}
                onChange={(e) =>
                  updateQuestion({
                    correctOption: e.target.value as "A" | "B" | "C" | "D",
                  })
                }
                className="h-11 w-full rounded-xl border border-[#D0D5DD] bg-white px-4 text-[#101828] outline-none transition-all focus:border-[#6FA073] focus:ring-2 focus:ring-[#6FA073]/20"
              >
                <option value="A">Option A</option>
                <option value="B">Option B</option>
                <option value="C">Option C</option>
                <option value="D">Option D</option>
              </select>
            ) : (
              <div className="rounded-xl border border-[#EAECF0] bg-[#F9FAFB] p-3">
                <p className="body-text">Option {question.correctOption}</p>
              </div>
            )}
          </div>

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
        </div>
      </div>

      {/* Topic */}
      <div>
        <label className="card-title mb-2 block">Topic</label>

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
  );
}
