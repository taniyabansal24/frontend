//src/features/tests/question-banks/components/details/information/EditableField.tsx
"use client";

interface EditableFieldProps {
  label: string;
  value: string;
  isEditing: boolean;
  placeholder?: string;
  multiline?: boolean;
  readOnly?: boolean;
  onChange?: (value: string) => void;
}

export default function EditableField({
  label,
  value,
  isEditing,
  placeholder,
  multiline = false,
  readOnly = false,
  onChange,
}: EditableFieldProps) {
  const shouldEdit = isEditing && !readOnly;

  return (
    <div className="space-y-2">
      <label className="caption text-[#667085]">{label}</label>

      {shouldEdit ? (
        multiline ? (
          <textarea
            value={value}
            onChange={(e) => onChange?.(e.target.value)}
            rows={4}
            placeholder={placeholder}
            className="w-full rounded-xl border border-[#D0D5DD] bg-white p-4 text-[#101828] outline-none transition-all placeholder:text-[#98A2B3] focus:border-[#6FA073] focus:ring-2 focus:ring-[#6FA073]/20"
          />
        ) : (
          <input
            value={value}
            onChange={(e) => onChange?.(e.target.value)}
            placeholder={placeholder}
            className="h-11 w-full rounded-xl border border-[#D0D5DD] bg-white px-4 text-[#101828] outline-none transition-all placeholder:text-[#98A2B3] focus:border-[#6FA073] focus:ring-2 focus:ring-[#6FA073]/20"
          />
        )
      ) : (
        <div className="rounded-xl border border-[#EAECF0] bg-[#F9FAFB] p-4">
          <p className="body-text whitespace-pre-wrap text-[#101828]">
            {value || "-"}
          </p>
        </div>
      )}
    </div>
  );
}
