// src/components/shared/table/table-types.ts

export interface TableColumn {
  key: string;
  title: string;
  width?: string;
}

export interface EditField {
  key: string;
  label: string;
}

export interface DataTableProps<
  T extends { id: string }
> {
  columns: TableColumn[];
  data: T[];
  rowsPerPage?: number;

  editFields?: EditField[];

  customEdit?: boolean;

  onEdit?: (
    id: string,
    values?: Record<string, string>
  ) => void;

  onDelete?: (
    id: string
  ) => void;

  onView?: (
    id: string
  ) => void;
}

export interface RowActionsProps<
  T extends { id: string }
> {
  row: T;

  editFields?: EditField[];

  customEdit?: boolean;

  onEdit?: (
    id: string,
    values?: Record<string, string>
  ) => void;

  onDelete?: (
    id: string
  ) => void;

  onView?: (
    id: string
  ) => void;
}

export interface EditDialogProps<
  T extends { [key: string]: unknown }
> {
  open: boolean;

  title: string;

  row: T;

  fields?: EditField[];

  onClose: () => void;

  onSave: (
    values: Record<string, string>
  ) => void;
}