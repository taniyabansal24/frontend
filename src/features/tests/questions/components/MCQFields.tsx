// src/features/tests/question-banks/components/MCQFields.tsx

import type { QuestionFormItem } from "../types";

interface Props {
  question: QuestionFormItem;

  onChange: (id: string, question: QuestionFormItem) => void;
}

export default function MCQFields({ question, onChange }: Props) {
  const updateOption = (optionKey: string, value: string) => {
    const updatedOptions = question.options.map((option) =>
      option.key === optionKey
        ? {
            ...option,
            text: value,
          }
        : option,
    );

    onChange(question.id, {
      ...question,
      options: updatedOptions,
    });
  };

  const updateCorrectOption = (value: string) => {
    onChange(question.id, {
      ...question,
      correctOption: value,
    });
  };

  return (
    <div className="space-y-4">
      <div className="grid md:grid-cols-2 gap-4">
        {question.options.map((option) => (
          <input
            key={option.key}
            value={option.text}
            onChange={(e) => updateOption(option.key, e.target.value)}
            placeholder={`Option ${option.key}`}
            className="h-10 border border-[#EAECF0] rounded-md px-3"
          />
        ))}
      </div>

      <div>
        <label className="card-title">Correct Option</label>

        <select
          value={question.correctOption}
          onChange={(e) => updateCorrectOption(e.target.value)}
          className="w-full h-10 border border-[#EAECF0] rounded-md px-3"
        >
          <option value="">Select Correct Option</option>

          <option value="A">A</option>

          <option value="B">B</option>

          <option value="C">C</option>

          <option value="D">D</option>
        </select>
      </div>
    </div>
  );
}
