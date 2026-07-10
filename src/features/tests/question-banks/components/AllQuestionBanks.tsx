// src/features/tests/question-banks/components/AllQuestionBanks.tsx
"use client";

import { useRouter } from "next/navigation";

import StatsCard from "@/components/shared/StatsCard";
import TableToolbar from "@/components/shared/table/TableToolbar";
import DataTable from "@/components/shared/table/DataTable";

import { useQuestionBanksQuery } from "../api/queries";


import { questionBankColumns } from "../config/question-bank-columns";

export default function AllQuestionBanks() {
  const router = useRouter();

  const { data: response, error } = useQuestionBanksQuery();

  const questionBanks = response?.data ?? [];


  const handleView = (id: string) => {
    router.push(`/dashboard/tests/question-banks/${id}`);
  };


  if (error) {
    return (
      <div className="py-8 text-center">
        <p className="body-text text-red-500">Failed to load question banks.</p>
      </div>
    );
  }

  const totalSubjects = new Set(
    questionBanks.flatMap((bank) => bank.subjects.map((subject) => subject.id)),
  ).size;

  const totalBatches = new Set(
    questionBanks.flatMap((bank) =>
      bank.subjects.map((subject) => subject.batch.id),
    ),
  ).size;

  const tableData = questionBanks.map((bank) => ({
    id: bank.id,
    name: bank.name,
    description: bank.description ?? "-",
    subjects: bank.subjects.map((subject) => subject.name).join(", "),
    batches: [
      ...new Set(bank.subjects.map((subject) => subject.batch.name)),
    ].join(", "),
    createdAt: new Date(bank.createdAt).toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    }),
  }));

  return (
    <>
      <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatsCard
          title="Question Banks"
          value={String(questionBanks.length)}
          subtitle="Total created"
          subtitleColor="text-[#6FA073]"
        />

        <StatsCard
          title="Subjects"
          value={String(totalSubjects)}
          subtitle="Linked subjects"
        />

        <StatsCard
          title="Batches"
          value={String(totalBatches)}
          subtitle="Covered batches"
        />

        <StatsCard
          title="Questions"
          value="-"
          subtitle="Coming soon"
          subtitleColor="text-[#6FA073]"
        />
      </div>

      <TableToolbar />

      <div className="mt-5">
        <DataTable
          columns={questionBankColumns}
          data={tableData}
          rowsPerPage={5}
          onView={handleView}
        />
      </div>
    </>
  );
}
