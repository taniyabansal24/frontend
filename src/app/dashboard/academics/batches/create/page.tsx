// app/dashboard/batches/create/page.tsx

import { CreateBatchForm } from "@/features/academics/batches";

export default function CreateBatchPage() {
  return (
    <div className="p-4 md:p-6">
      <h1 className="heading">
        Create Batch
      </h1>

      <p className="body-text mt-1 mb-8 text-[#667085]">
        Create a new batch by providing the required information.
      </p>

      <div className="rounded-[20px] border border-[#EAECF0] bg-white p-4 md:p-6">
        <CreateBatchForm />
      </div>
    </div>
  );
}