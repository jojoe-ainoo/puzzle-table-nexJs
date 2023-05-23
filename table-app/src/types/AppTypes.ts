export type TableData = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  city: string;
  registeredAt: String;
  fullName: string;
  dsr: number;
};

export interface User {
  username: string;
}

// Column type
export interface Column {
  dataField: string;
  label: string;
  render?: (data: any) => React.ReactNode;
}

// export interface TableColumn {
//   id: string;
//   index: number;
// }

// export interface TableRow {
//   [key: string]: string | number;
// }

// export type TableFillData = TableRow[];
