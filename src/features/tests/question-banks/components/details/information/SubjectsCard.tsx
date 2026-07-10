"use client";

import type { QuestionBankSubject } from "../../../types/index";

interface SubjectsCardProps {
  subjects: QuestionBankSubject[];
}

export default function SubjectsCard({ subjects }: SubjectsCardProps) {
  return (
    <div className="rounded-2xl border border-[#EAECF0] bg-white p-6">
      <div className="mb-5 flex items-center justify-between border-b border-[#EAECF0]">
        <h2 className="sub-heading mb-4">Linked Subjects</h2>

        <span className="rounded-full bg-[#F2F4F7] px-3 py-1 caption">
          {subjects.length} Subject
          {subjects.length !== 1 && "s"}
        </span>
      </div>

      {subjects.length === 0 ? (
        <div className="rounded-xl border border-dashed border-[#D0D5DD] py-8 text-center">
          <p className="body-text text-[#667085]">No subjects linked.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {subjects.map((subject) => (
            <div
              key={subject.id}
              className="flex items-center justify-between rounded-xl border border-[#EAECF0] p-4"
            >
              <div>
                <h4 className="card-title">{subject.name}</h4>

                <p className="caption mt-1">Batch: {subject.batch.name}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
