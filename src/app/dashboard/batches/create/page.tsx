// app/dashboard/batches/create/page.tsx

import { CreateBatchForm } from "@/features/batches";

export default function CreateBatchPage() {
  return (
    <div className="p-4 md:p-6">
      <h1 className="heading">Create Batch</h1>

      <p className="body-text mt-1 mb-6 md:mb-8">
        Create and manage coaching batches
      </p>

      <div className="bg-white rounded-[20px] border border-[#EAECF0] p-4 md:p-6">
        <CreateBatchForm />
      </div>
    </div>
  );
}
