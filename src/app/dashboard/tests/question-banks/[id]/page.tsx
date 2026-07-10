import QuestionBankDetails from "@/features/tests/question-banks/components/details/QuestionBankDetails";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function QuestionBankDetailsPage({ params }: PageProps) {
  const { id } = await params;

  return (
    <div className="p-4 md:p-6">
      <QuestionBankDetails questionBankId={id} />
    </div>
  );
}
