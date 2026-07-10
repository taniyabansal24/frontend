"use client";

import { useRef, useState } from "react";
import { Upload, FileText, Loader2, X } from "lucide-react";

import { useUploadQuestionsCsvMutation } from "../api/mutations";
import type { Question, QuestionFormItem } from "../types";

interface CsvUploadProps {
  setQuestions: React.Dispatch<React.SetStateAction<QuestionFormItem[]>>;
  disabled?: boolean;
}

export default function CsvUpload({ setQuestions, disabled }: CsvUploadProps) {
  const [fileName, setFileName] = useState("");
  const [isDragging, setIsDragging] = useState(false);
  const [importedQuestionIds, setImportedQuestionIds] = useState<string[]>([]);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const { mutate, isPending } = useUploadQuestionsCsvMutation();

  const uploadFile = (file: File) => {
    if (!file.name.endsWith(".csv")) return;

    setFileName(file.name);

    mutate(file, {
      onSuccess: (response) => {
        const importedQuestions: QuestionFormItem[] = (
          response?.data?.questions ?? []
        ).map((item: Question) => {
          const id = crypto.randomUUID();

          return {
            id,
            isExpanded: false,
            isSaved: true,
            type: item.type,
            questionText: item.questionText ?? "",
            marks: item.marks ?? 1,
            topic: item.topic ?? "",
            difficulty: item.difficulty ?? "",
            correctOption: item.type === "MCQ" ? item.correctOption : "",
            expectedAnswer:
              item.type === "SUBJECTIVE" ? item.expectedAnswer : "",
            options:
              item.type === "MCQ"
                ? item.options
                : [
                    { key: "A", text: "" },
                    { key: "B", text: "" },
                    { key: "C", text: "" },
                    { key: "D", text: "" },
                  ],
          };
        });

        setImportedQuestionIds(importedQuestions.map((q) => q.id));

        setQuestions((prev) => [...prev, ...importedQuestions]);
      },
    });
  };

  const handleRemoveFile = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();

    setFileName("");

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }

    setQuestions((prev) =>
      prev.filter((question) => !importedQuestionIds.includes(question.id)),
    );

    setImportedQuestionIds([]);
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (!file) return;

    uploadFile(file);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();

    if (!disabled) setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();

    if (!e.currentTarget.contains(e.relatedTarget as Node)) {
      setIsDragging(false);
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();

    setIsDragging(false);

    if (disabled) return;

    const file = e.dataTransfer.files?.[0];

    if (!file) return;

    uploadFile(file);
  };

  return (
    <div className="mb-8">
      <h2 className="sub-heading mb-4">Import Questions</h2>

      <div
        onDragEnter={handleDragEnter}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        className={`
          relative overflow-hidden rounded-2xl border-2 border-dashed transition-all duration-300
          ${
            disabled
              ? "cursor-not-allowed opacity-50"
              : isDragging
                ? "border-[#6FA073] bg-[#F3FAF4] scale-[1.01] shadow-lg shadow-green-100"
                : "border-[#D0D5DD] bg-white hover:border-[#6FA073] hover:bg-[#FAFCFA]"
          }
        `}
      >
        <label
          htmlFor="csv-upload"
          className={`flex cursor-pointer flex-col items-center justify-center px-8 py-12 ${
            disabled ? "pointer-events-none" : ""
          }`}
        >
          <div
            className={`
              mb-5 flex h-20 w-20 items-center justify-center rounded-full transition-all duration-300
              ${
                isDragging
                  ? "bg-[#6FA073] text-white scale-110"
                  : "bg-[#EEF7EF] text-[#6FA073]"
              }
            `}
          >
            {isPending ? (
              <Loader2 className="animate-spin" size={34} />
            ) : (
              <Upload size={34} />
            )}
          </div>

          <h3 className="text-xl font-semibold text-[#101828]">
            {isDragging ? "Drop your CSV here" : "Upload CSV File"}
          </h3>

          <p className="mt-2 text-center text-sm text-[#667085]">
            {isDragging
              ? "Release to upload your CSV file"
              : "Drag & drop your CSV here or click to browse"}
          </p>

          {/* <button
            type="button"
            className="mt-6 rounded-xl bg-[#6FA073] px-6 py-3 text-sm font-medium text-white transition-all hover:bg-[#5D8D61] hover:shadow-md active:scale-95"
          >
            Browse Files
          </button> */}

          <p className="mt-1 text-xs text-[#98A2B3]">
            Only .csv files are supported
          </p>

          {fileName && (
            <div className="mt-6 flex w-full max-w-md items-center justify-between rounded-xl border border-[#E4E7EC] bg-[#F9FAFB] px-4 py-3 shadow-sm">
              <div className="flex items-center gap-3 min-w-0">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#EEF7EF]">
                  <FileText className="text-[#6FA073]" size={20} />
                </div>

                <div className="min-w-0">
                  <p className="truncate text-sm font-medium text-[#344054]">
                    {fileName}
                  </p>

                  <p className="text-xs text-[#667085]">Ready to import</p>
                </div>
              </div>

              {!isPending && (
                <button
                  type="button"
                  onClick={handleRemoveFile}
                  className="ml-4 flex h-8 w-8 items-center justify-center rounded-full text-[#667085] transition-colors hover:bg-red-50 hover:text-red-600"
                >
                  <X size={16} />
                </button>
              )}
            </div>
          )}

          {isPending && (
            <div className="mt-6 flex items-center gap-2 text-sm font-medium text-[#6FA073]">
              <Loader2 size={16} className="animate-spin" />
              Uploading questions...
            </div>
          )}
        </label>

        <input
          ref={fileInputRef}
          id="csv-upload"
          type="file"
          accept=".csv"
          className="hidden"
          disabled={disabled}
          onChange={handleFileChange}
        />
      </div>
    </div>
  );
}
