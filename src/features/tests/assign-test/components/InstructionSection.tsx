"use client";

import {
  Controller,
  type Control,
  type FieldErrors,
} from "react-hook-form";

import SectionCard from "./SectionCard";
import RichTextEditor from "@/components/shared/forms/RichTextEditor";

import type { CreateTestSchemaType } from "../schemas/createTest.schema";

type Props = {
  control: Control<CreateTestSchemaType>;
  errors: FieldErrors<CreateTestSchemaType>;
};

export default function InstructionSection({
  control,
  errors,
}: Props) {
  return (
    <SectionCard
      number={4}
      title="Instructions & Syllabus"
      description="Provide instructions and syllabus details for students."
    >
      <div className="space-y-6">
        <Controller
          control={control}
          name="syllabus"
          render={({ field }) => (
            <RichTextEditor
              label="Syllabus"
              value={field.value ?? ""}
              onChange={field.onChange}
              placeholder="Enter syllabus..."
              error={errors.syllabus?.message}
            />
          )}
        />

        <Controller
          control={control}
          name="instructions"
          render={({ field }) => (
            <RichTextEditor
              label="Instructions"
              value={field.value ?? ""}
              onChange={field.onChange}
              placeholder="Enter test instructions..."
              error={errors.instructions?.message}
            />
          )}
        />
      </div>
    </SectionCard>
  );
}