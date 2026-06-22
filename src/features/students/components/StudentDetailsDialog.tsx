// src/features/students/components/StudentDetailsDialog.tsx

"use client";

interface ParentInfo {
  name?: string | null;
  email?: string | null;
  phone?: string | null;
  relationship?: string | null;
}

interface StudentDetails {
  id: string;
  name: string;
  email?: string;
  phone?: string;
  enrollmentNumber?: string;
  studentClass?: string;

  parent?: ParentInfo | null;

  batches?: string;
}

interface StudentDetailsDialogProps {
  open: boolean;

  student: StudentDetails | null;

  onClose: () => void;
}

export default function StudentDetailsDialog({
  open,
  student,
  onClose,
}: StudentDetailsDialogProps) {
  if (!open || !student) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-100">
      <div className="bg-white rounded-2xl w-full max-w-200 p-6 max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between mb-6">
          <h2 className="sub-heading">Student Details</h2>

          <button
            onClick={onClose}
            className="text-[#667085] hover:text-[#101828]"
          >
            ✕
          </button>
        </div>

        {/* Student Information */}
        <div className="border border-[#EAECF0] rounded-xl p-5 mb-5">
          <h3 className="card-title text-[#101828] mb-4">
            Student Information
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <InfoItem label="Name" value={student.name} />

            <InfoItem label="Email" value={student.email} />

            <InfoItem label="Phone" value={student.phone} />

            <InfoItem label="Class" value={student.studentClass} />

            <InfoItem label="Enrollment No" value={student.enrollmentNumber} />
          </div>
        </div>

        {/* Parent Information */}
        <div className="border border-[#EAECF0] rounded-xl p-5 mb-5">
          <h3 className="card-title text-[#101828] mb-4">Parent Information</h3>

          {student.parent ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <InfoItem label="Name" value={student.parent.name} />

              <InfoItem
                label="Relationship"
                value={student.parent.relationship}
              />

              <InfoItem label="Email" value={student.parent.email} />

              <InfoItem label="Phone" value={student.parent.phone} />
            </div>
          ) : (
            <p className="body-text text-[#667085]">No parent linked.</p>
          )}
        </div>

        {/* Batch Information */}
        <div className="border border-[#EAECF0] rounded-xl p-5 mb-5">
          <h3 className="card-title text-[#101828] mb-4">Batch Information</h3>

          {student.batches ? (
            <div className="px-3 py-2 bg-[#F2F4F7] rounded-lg inline-block text-sm">
              {student.batches}
            </div>
          ) : (
            <p className="body-text text-[#667085]">No batches assigned.</p>
          )}
        </div>

        {/* Attendance */}
        <div className="border border-[#EAECF0] rounded-xl p-5">
          <h3 className="card-title text-[#101828] mb-4">
            Attendance Information
          </h3>

          <p className="body-text text-[#667085]">Coming Soon</p>
        </div>

        <div className="flex justify-end mt-6">
          <button
            onClick={onClose}
            className="px-5 py-2 border border-[#D0D5DD] rounded-xl card-title text-[#344054]"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

function InfoItem({ label, value }: { label: string; value?: string | null }) {
  return (
    <div>
      <p className="text-sm text-[#667085] mb-1">{label}</p>

      <p className="font-medium text-[#101828]">{value || "-"}</p>
    </div>
  );
}
