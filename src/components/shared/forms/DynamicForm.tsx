// src/components/shared/forms/DynamicForm.tsx

import FormSection from "./FormSection";
import FormField from "./FormField";

import {
  DynamicFormProps,
  FormSectionType,
  FormFieldType,
} from "./form-types";

export default function DynamicForm({
  sections,
  form,
}: DynamicFormProps) {
  return (
    <>
      {sections.map((section: FormSectionType) => (
        <FormSection
          key={section.title}
          title={section.title}
        >
          {section.fields.map((field: FormFieldType) => (
            <FormField
              key={field.name}
              form={form}
              {...field}
            />
          ))}
        </FormSection>
      ))}
    </>
  );
}