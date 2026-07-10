//src/features/tests/assign-test/components/AssignCard.tsx
"use client";

import { BookOpen } from "lucide-react";

type Props = {
  assign: {
    id: string;
    title: string;
    batch: string;
    students: number;
    assignedDate: string;
    scheduledDate: string;
    time: string;
    status: string;
  };
};

const statusStyles = {
  UPCOMING:
    "bg-[#FFF4E8] text-[#D97706]",

  ACTIVE:
    "bg-[#EEF7F0] text-[#5E8D61]",

  COMPLETED:
    "bg-[#F2F4F7] text-[#475467]",
};

export default function AssignCard({
  assign,
}: Props) {
  return (
    <div className="grid grid-cols-[1.8fr_170px_170px_120px_100px] items-center gap-6 border-t border-[#EAECF0] px-8 py-8">

      {/* Left */}

      <div className="flex items-center gap-5">
        <div className="flex h-15 w-15 items-center justify-center rounded-xl bg-[#F5F8F6]">
          <BookOpen
            size={28}
            className="text-[#6FA073]"
          />
        </div>

        <div>
          <h3 className="text-[16px] font-semibold text-[#101828]">
            {assign.title}
          </h3>

          <p className="card-title mt-1 text-[#667085]">
            {assign.batch} •{" "}
            {assign.students} students
          </p>
        </div>
      </div>

      {/* Assigned */}

      <div>
        <p className="caption text-[#98A2B3]">
          Assigned
        </p>

        <h4 className="mt-1 card-title text-[#344054]">
          {assign.assignedDate}
        </h4>
      </div>

      {/* Scheduled */}

      <div>
        <p className="caption text-[#98A2B3]">
          Scheduled
        </p>

        <h4 className="mt-1 card-title  text-[#344054]">
          {assign.scheduledDate}
        </h4>
      </div>

      {/* Time */}

      <div>
        <p className="caption text-[#98A2B3]">
          Time
        </p>

        <h4 className="card-title mt-1 text-[#344054]">
          {assign.time}
        </h4>
      </div>

      {/* Status */}

      <div className="flex justify-end">
        <span
          className={`caption rounded-full px-5 py-2 font-medium ${
            statusStyles[
              assign.status as keyof typeof statusStyles
            ]
          }`}
        >
          {assign.status.charAt(0) +
            assign.status
              .slice(1)
              .toLowerCase()}
        </span>
      </div>
    </div>
  );
}