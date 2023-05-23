import React from "react";
import { Draggable, Droppable } from "react-beautiful-dnd";
import * as TableTypes from "./types";

const initialColumnOrder: TableTypes.ColumnOrder = [
  "id",
  "firstName",
  "lastName",
  "email",
  "city",
  "registeredAt",
  "fullName",
  "dsr",
];

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toDateString();
};

const TableComponent: React.FC<TableTypes.TableProps> = ({
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
              <td key={column.key}>
                {column.key === "registeredAt"
                  ? formatDate(row[column.key])
                  : row[column.key]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableComponent;
