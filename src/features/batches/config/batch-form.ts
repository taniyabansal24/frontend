// features/batches/config/batch-form.ts

export const batchForm = [
  {
    title: "Batch Information",

    fields: [
      {
        name: "name",
        label: "Batch Name",
        placeholder:
          "Evening Mathematics Batch",
        required: true,
      },

      {
        name: "description",
        label: "Description",
        placeholder:
          "Enter batch description",
        required: true,
      },
    ],
  },

  {
    title: "Schedule",

    fields: [
      {
        name: "startDate",
        label: "Start Date",
        type: "date",
        required: true,
      },

      {
        name: "endDate",
        label: "End Date",
        type: "date",
        required: true,
      },
    ],
  },
];