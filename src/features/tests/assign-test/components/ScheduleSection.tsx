// src/features/tests/create-test/components/ScheduleSection.tsx

"use client";

import type {
  FieldErrors,
  UseFormRegister,
  UseFormWatch,
} from "react-hook-form";

import { ChevronDown } from "lucide-react"; // Add this import

import SectionCard from "./SectionCard";

import type { CreateTestSchemaType } from "../schemas/createTest.schema";

type Props = {
  register: UseFormRegister<CreateTestSchemaType>;
  watch: UseFormWatch<CreateTestSchemaType>;
  errors: FieldErrors<CreateTestSchemaType>;
};

export default function ScheduleSection({ register, watch, errors }: Props) {
  const attemptType = watch("attemptType");

  return (
    <SectionCard
      number={5}
      title="Schedule & Settings"
      description="Configure test timing and evaluation settings."
    >
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {/* Duration */}

        <div>
          <label className="card-title mb-2 block text-[#344054]">
            Duration (Minutes)
          </label>

          <input
            {...register("durationMinutes", {
              valueAsNumber: true,
            })}
            type="number"
            min={1}
            placeholder="60"
            className={`body-text h-11 w-full rounded-xl border border-[#D0D5DD] bg-white px-4 outline-none transition-all focus:border-[#6FA073] focus:ring-2 focus:ring-[#6FA073]/10 ${
              errors.durationMinutes ? "border-red-500" : ""
            }`}
          />

          {errors.durationMinutes && (
            <p className="caption mt-1 text-red-500">
              {errors.durationMinutes.message}
            </p>
          )}
        </div>

        {/* Evaluation */}

        <div>
          <label className="card-title mb-2 block text-[#344054]">
            Evaluation Mode
          </label>

          <div className="relative">
            <select
              {...register("evaluationMode")}
              className={`body-text h-11 w-full rounded-xl border border-[#D0D5DD] bg-white px-4 pr-10 outline-none transition-all focus:border-[#6FA073] focus:ring-2 focus:ring-[#6FA073]/10 appearance-none ${
                errors.evaluationMode ? "border-red-500" : ""
              }`}
            >
              <option value="MIXED">Mixed</option>
              <option value="MCQ">MCQ Only</option>
              <option value="SUBJECTIVE">Subjective Only</option>
            </select>
            
            <ChevronDown 
              size={16} 
              className="absolute right-3 top-1/2 -translate-y-1/2 text-[#667085] pointer-events-none" 
            />
          </div>

          {errors.evaluationMode && (
            <p className="caption mt-1 text-red-500">
              {errors.evaluationMode.message}
            </p>
          )}
        </div>

        {/* Start Date */}

        <div>
          <label className="card-title mb-2 block text-[#344054]">
            Start Date
          </label>

          <input
            {...register("startDate")}
            type="date"
            className={`date-input body-text h-11 w-full rounded-xl border border-[#D0D5DD] bg-white px-4 outline-none transition-all focus:border-[#6FA073] focus:ring-2 focus:ring-[#6FA073]/10 ${
              errors.startDate ? "border-red-500" : ""
            }`}
          />

          {errors.startDate && (
            <p className="caption mt-1 text-red-500">
              {errors.startDate.message}
            </p>
          )}
        </div>

        {/* Start Time */}

        <div>
          <label className="card-title mb-2 block text-[#344054]">
            Start Time
          </label>

          <input
            {...register("startTime")}
            type="time"
            className={`date-input body-text h-11 w-full rounded-xl border border-[#D0D5DD] bg-white px-4 outline-none transition-all focus:border-[#6FA073] focus:ring-2 focus:ring-[#6FA073]/10 ${
              errors.startTime ? "border-red-500" : ""
            }`}
          />

          {errors.startTime && (
            <p className="caption mt-1 text-red-500">
              {errors.startTime.message}
            </p>
          )}
        </div>

        {/* Attempts */}

        <div className="md:col-span-2">
          <label className="card-title mb-3 block text-[#344054]">
            Attempts
          </label>

          <div className="space-y-3">
            {/* Unlimited */}

            <label
              className={`flex cursor-pointer items-start gap-4 rounded-xl border p-4 transition-all ${
                attemptType === "UNLIMITED"
                  ? "border-[#6FA073] bg-[#F7FCF8]"
                  : "border-[#EAECF0] bg-white hover:border-[#6FA073]/50"
              }`}
            >
              <input
                {...register("attemptType")}
                type="radio"
                value="UNLIMITED"
                className="hidden"
              />

              <div
                className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 transition-all ${
                  attemptType === "UNLIMITED"
                    ? "border-[#6FA073] bg-[#F7FCF8]"
                    : "border-[#D0D5DD] bg-white"
                }`}
              >
                <div
                  className={`rounded-full transition-all ${
                    attemptType === "UNLIMITED"
                      ? "h-3 w-3 bg-[#6FA073]"
                      : "h-0 w-0"
                  }`}
                />
              </div>

              <div>
                <p className="card-title text-[#101828]">Unlimited Attempts</p>

                <p className="body-text mt-1 text-[#667085]">
                  Students can attempt the test any number of times.
                </p>
              </div>
            </label>

            {/* Limited */}

            <label
              className={`block cursor-pointer rounded-xl border p-4 transition-all ${
                attemptType === "LIMITED"
                  ? "border-[#6FA073] bg-[#F7FCF8]"
                  : "border-[#EAECF0] bg-white hover:border-[#6FA073]/50"
              }`}
            >
              <div className="flex items-start gap-4">
                <input
                  {...register("attemptType")}
                  type="radio"
                  value="LIMITED"
                  className="hidden"
                />

                <div
                  className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 transition-all ${
                    attemptType === "LIMITED"
                      ? "border-[#6FA073] bg-[#F7FCF8]"
                      : "border-[#D0D5DD] bg-white"
                  }`}
                >
                  <div
                    className={`rounded-full transition-all ${
                      attemptType === "LIMITED"
                        ? "h-3 w-3 bg-[#6FA073]"
                        : "h-0 w-0"
                    }`}
                  />
                </div>

                <div className="flex-1">
                  <p className="card-title text-[#101828]">Limited Attempts</p>

                  <p className="body-text mt-1 text-[#667085]">
                    Restrict the number of attempts for each student.
                  </p>

                  {attemptType === "LIMITED" && (
                    <div className="mt-5 max-w-55">
                      <label className="caption mb-2 block text-[#344054]">
                        Maximum Attempts
                      </label>

                      <input
                        {...register("maxAttempts", {
                          valueAsNumber: true,
                        })}
                        type="number"
                        min={1}
                        placeholder="e.g. 2"
                        className={`body-text h-11 w-full rounded-xl border border-[#D0D5DD] bg-white px-4 outline-none transition-all focus:border-[#6FA073] focus:ring-2 focus:ring-[#6FA073]/10 ${
                          errors.maxAttempts ? "border-red-500" : ""
                        }`}
                      />

                      {errors.maxAttempts && (
                        <p className="caption mt-1 text-red-500">
                          {errors.maxAttempts.message}
                        </p>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </label>
          </div>
        </div>
      </div>
    </SectionCard>
  );
}