// table/table-types.ts

export interface TableColumn {
  key: string;
  title: string;
  width?: string;
}

export interface EditField {
  key: string;
  label: string;
}

export interface DataTableProps<T> {
  columns: TableColumn[];
  data: T[];
  rowsPerPage?: number;

  editFields?: EditField[];

  onEdit?: (
    id: string,
    values: Record<string, string>
  ) => void;

  onDelete?: (
    id: string
  ) => void;
}

export interface RowActionsProps<T> {
  row: T;

  editFields?: EditField[];

  onEdit?: (
    id: string,
    values: Record<string, string>
  ) => void;

  onDelete?: (
    id: string
  ) => void;
}

export interface EditDialogProps<T> {
  open: boolean;

  title: string;

  row: T;

  fields?: EditField[];

  onClose: () => void;

  onSave: (
    values: Record<string, string>
  ) => void;
}