import type { QuestionFormItem } from "../types";

interface Props {
  question: QuestionFormItem;
  onChange: (
    id: string,
    question: QuestionFormItem,
  ) => void;
}

export default function SubjectiveFields({
  question,
  onChange,
}: Props) {
  return (
    <div className="space-y-4">
      <div>
        <label className="card-title">
          Expected Answer
        </label>

        <textarea
          rows={4}
          value={question.expectedAnswer}
          onChange={(e) =>
            onChange(question.id, {
              ...question,
              expectedAnswer: e.target.value,
            })
          }
          placeholder="Enter expected answer"
          className="w-full border border-[#EAECF0] rounded-md p-3"
        />
      </div>

      <div>
        <label className="card-title">
          Difficulty
        </label>

        <select
          value={question.difficulty}
          onChange={(e) =>
            onChange(question.id, {
              ...question,
              difficulty: e.target.value,
            })
          }
          className="w-full h-10 border border-[#EAECF0] rounded-md px-3"
        >
          <option value="">Select Difficulty</option>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
      </div>
    </div>
  );
}