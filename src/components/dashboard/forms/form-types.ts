// components/dashboard/form/form-types.ts

export interface FormFieldType {
  name: string;
  label: string;
  placeholder?: string;
  required?: boolean;
  type?: string;
  options?: string[];
}

export interface FormSectionType {
  title: string;
  fields: FormFieldType[];
}

export interface DynamicFormProps {
  sections: FormSectionType[];
}