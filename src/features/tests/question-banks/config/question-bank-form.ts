// src/features/tests/question-banks/config/question-bank-form.ts

import { FormSectionType } from "@/components/shared/forms/form-types";

export const questionBankForm: FormSectionType[] = [
  {
    title: "Question Bank Details",

    fields: [
      {
        name: "name",
        label: "Question Bank Name",
        placeholder: "Enter question bank name",
        required: true,
      },

      {
        name: "description",
        label: "Description",
        placeholder: "Enter description",
      },
    ],
  },
];