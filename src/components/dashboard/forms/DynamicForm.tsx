// components/dashboard/form/DynamicForm.tsx

import FormSection from "./FormSection";
import FormField from "./FormField";

import {
  DynamicFormProps,
  FormSectionType,
  FormFieldType,
} from "./form-types";

export default function DynamicForm({
  sections,
}: DynamicFormProps) {
  
  return (
    <>
      {sections.map(
        (section: FormSectionType) => (

          <FormSection
            key={section.title}
            title={section.title}
          >

            {section.fields.map(
              (field: FormFieldType) => (

                <FormField
                  key={field.name}
                  {...field}
                />

              )
            )}

          </FormSection>

        )
      )}
    </>
  );
}