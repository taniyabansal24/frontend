// src/app/dashboard/batches/all/page.tsx

import { AllBatchesTable } from "@/features/academics/batches";

export default function AllBatchesPage() {
  return (
    <div className="p-4 md:p-6">
      <h1 className="heading">
        All Batches
      </h1>

      <p className="body-text mt-1 mb-6 text-[#667085] md:mb-8">
        View, search, and manage all batches from one place.
      </p>

      <div className="rounded-[20px] border border-[#EAECF0] bg-white p-4 md:p-6">
        <AllBatchesTable />
      </div>
    </div>
  );
}