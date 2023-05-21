import React from "react";
import { Draggable, Droppable } from "react-beautiful-dnd";

interface TableColumn {
  key: string;
  label: string;
}

type ColumnOrder = string[];

interface TableProps {
  className?: string;
  columns: TableColumn[];
  data: any[];
  onRowClick?: (rowData: any) => void;
  onColumnOrderChange?: React.Dispatch<React.SetStateAction<ColumnOrder>>;
}

const initialColumnOrder: ColumnOrder = [
  "id",
  "firstName",
  "lastName",
  "email",
  "city",
  "registeredDate",
  "fullName",
  "dsr",
];

const Table: React.FC<TableProps> = ({
  className,
  columns,
  data,
  onRowClick,
  onColumnOrderChange,
}) => {
  const handleRowClick = (rowData: any) => {
    if (onRowClick) {
      onRowClick(rowData);
    }
  };

  const handleColumnDragEnd = (result: any) => {
    if (!result.destination) return;

    const reorderedColumns = Array.from(columns);
    const [removedColumn] = reorderedColumns.splice(result.source.index, 1);
    reorderedColumns.splice(result.destination.index, 0, removedColumn);

    if (onColumnOrderChange) {
      //   onColumnOrderChange(reorderedColumns); // Call onColumnOrderChange with updated column order
    }
  };

  return (
    <table className={className}>
      <thead>
        <Droppable droppableId="table-header" direction="horizontal">
          {(provided, snapshot) => (
            <tr ref={provided.innerRef} {...provided.droppableProps}>
              {columns.map((column, index) => (
                <Draggable
                  key={column.key}
                  draggableId={column.key}
                  index={index}
                >
                  {(provided) => (
                    <th
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <span>{column.label}</span>
                    </th>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </tr>
          )}
        </Droppable>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={row.id} onClick={() => handleRowClick(row)}>
            {columns.map((column) => (
              <td key={column.key}>{row[column.key]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
