// src/app/dashboard/batches/all/page.tsx

import { AllBatchesTable } from "@/features/batches";

export default function AllBatchesPage() {
  return (
    <div className="p-4 md:p-6">
      <h1 className="heading">
        All Batches
      </h1>

      <p className="body-text mt-1 mb-6 md:mb-8">
        Manage batch records and their details
      </p>

      <div className="bg-white rounded-[20px] border border-[#EAECF0] p-4 md:p-6">
        <AllBatchesTable />
      </div>
    </div>
  );
}