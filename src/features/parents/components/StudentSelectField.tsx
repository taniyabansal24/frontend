"use client";

import { useMemo, useState } from "react";

import { ChevronDown, Search } from "lucide-react";

interface StudentOption {
  id: string;
  name: string;
  studentClass?: string;
  enrollmentNumber?: string;
}

interface StudentSelectFieldProps {
  label: string;
  options: StudentOption[];
  value: string;
  onChange: (value: string) => void;
}

export default function StudentSelectField({
  label,
  options,
  value,
  onChange,
}: StudentSelectFieldProps) {
  const [open, setOpen] = useState(false);

  const [search, setSearch] = useState("");

  const selectedStudent = options.find((item) => item.id === value);

  const filteredOptions = useMemo(() => {
    const query = search.toLowerCase();

    return options.filter(
      (student) =>
        student.name.toLowerCase().includes(query) ||
        student.studentClass?.toLowerCase().includes(query) ||
        student.enrollmentNumber?.toLowerCase().includes(query),
    );
  }, [options, search]);

  return (
    <div className="relative mt-6">
      <label className="card-title text-[#344054] block mb-2">{label}</label>

      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full h-12 px-4 bg-white border border-[#D0D5DD] rounded-md flex items-center justify-between"
      >
        <span className="body-text text-[#667085] truncate">
          {selectedStudent ? selectedStudent.name : `Select ${label}`}
        </span>

        <ChevronDown
          size={18}
          className={`transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <div className="absolute left-0 right-0 mt-2 bg-white border border-[#EAECF0] rounded-xl shadow-lg z-50 overflow-hidden">
          <div className="p-3 border-b border-[#EAECF0]">
            <div className="relative">
              <Search
                size={16}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-[#98A2B3]"
              />

              <input
                autoFocus
                type="text"
                value={search}
                placeholder="Search students..."
                onChange={(e) => setSearch(e.target.value)}
                className="w-full h-10 pl-9 pr-3 border border-[#D0D5DD] rounded-lg body-text text-[#101828] outline-none focus:border-[#6FA073]"
              />
            </div>
          </div>

          <div className="max-h-80 overflow-y-auto">
            {filteredOptions.map((student) => (
              <button
                key={student.id}
                type="button"
                onClick={() => {
                  onChange(student.id);

                  setSearch("");

                  setOpen(false);
                }}
                className="w-full text-left px-4 py-4 hover:bg-[#F9FAFB] border-b border-[#F2F4F7] last:border-b-0"
              >
                <div className="card-title text-[#101828]">{student.name}</div>

                <div className="body-text text-[#667085] mt-1">
                  {student.studentClass}
                </div>

                <div className="caption text-[#98A2B3] mt-1">
                  {student.enrollmentNumber}
                </div>
              </button>
            ))}

            {filteredOptions.length === 0 && (
              <div className="px-4 py-8 text-center">
                <p className="body-text text-[#667085]">No students found</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
