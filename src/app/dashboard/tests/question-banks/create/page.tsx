import CreateQuestionBankForm from "@/features/tests/question-banks/components/CreateQuestionBankForm";

export default function QuestionBanksPage() {
  return (
    <div className="p-4 md:p-6">
      <h1 className="heading">
        Create Question Bank
      </h1>

      <p className="body-text mt-1 mb-8 text-[#667085]">
        Create a new question bank by providing its basic information and associated subjects.
      </p>

      <div className="rounded-[20px] border border-[#EAECF0] bg-white p-4 md:p-6">
        <CreateQuestionBankForm />
      </div>
    </div>
  );
}