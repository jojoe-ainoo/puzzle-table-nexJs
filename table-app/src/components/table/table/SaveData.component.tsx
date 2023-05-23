import React from "react";
import { saveToLocalStorage } from "@/utils/LocalStorageUtils";
import * as TableTypes from "./types";

const SaveDataComponent: React.FC<TableTypes.SaveDataProps> = ({
  columnOrder,
}) => {
  const handleSave = () => {
    saveToLocalStorage("columnOrder", columnOrder);
  };

  return (
    <button
      className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-400 border border-blue-500"
      onClick={handleSave}
    >
      Save
    </button>
  );
};

export default SaveDataComponent;
