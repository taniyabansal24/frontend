export { default as CreateStudentForm } from "./components/CreateStudentForm";
export { default as AllStudentsTable } from "./components/AllStudentsTable";

export {
  useStudentsQuery,
} from "./api/queries";

export {
  useCreateStudentMutation,
  useUpdateStudentMutation,
  useDeleteStudentMutation,
} from "./api/mutations";

export * from "./types";