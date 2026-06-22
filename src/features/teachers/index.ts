export { default as CreateTeacherForm } from "./components/CreateTeacherForm";
export { default as AllTeachersTable } from "./components/AllTeachersTable";

export {
  useTeachersQuery,
} from "./api/queries";

export {
  useCreateTeacherMutation,
  useUpdateTeacherMutation,
  useDeleteTeacherMutation,
} from "./api/mutations";

export * from "./types";