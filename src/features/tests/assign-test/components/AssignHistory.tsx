"use client";

import AssignmentCard from "./AssignCard";
import { assignHistory } from "./assign-history";

export default function AssignHistory() {
  return (
    <div className="overflow-hidden rounded-3xl border border-[#EAECF0] bg-white">
      {/* Header */}

      <div className="flex items-center justify-between px-8 py-7">
        <h2 className="sub-heading">Past Assigned Tests</h2>

        <p className="body-text text-[#667085]">
          {assignHistory.length} Assigned Tests
        </p>
      </div>

      {/* List */}

      <div>
        {assignHistory.map((assignment) => (
          <AssignmentCard key={assignment.id} assign={assignment} />
        ))}
      </div>
    </div>
  );
}
