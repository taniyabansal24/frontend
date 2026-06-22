// src/components/shared/forms/form-types.ts

import {
  FieldValues,
  UseFormReturn,
} from "react-hook-form";

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

export interface DynamicFormProps<
  T extends FieldValues = FieldValues
> {
  sections: FormSectionType[];
  form: UseFormReturn<T>;
}

export interface FormFieldProps<
  T extends FieldValues = FieldValues
> extends FormFieldType {
  form: UseFormReturn<T>;
}