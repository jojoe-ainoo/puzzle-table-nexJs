export interface TableColumn {
  id: string;
  index: number;
}

export interface LoadDataProps {
  onLoad: (columnOrder: TableColumn[]) => void;
}

export interface SaveDataProps {
  onSave?: () => void;
  columnOrder: TableColumn[];
}

// For Table Structuring
export interface TableStructureColumn {
  key: string;
  label: string;
}
export type ColumnOrder = string[];

export interface TableProps {
  className?: string;
  columns: TableStructureColumn[];
  data: any[];
  onRowClick?: (rowData: any) => void;
  onColumnOrderChange?: React.Dispatch<React.SetStateAction<ColumnOrder>>;
}
