import React from "react";
import { loadFromLocalStorage } from "@/utils/LocalStorageUtils";
import * as TableTypes from "./types";

const LoadData: React.FC<TableTypes.LoadDataProps> = ({ onLoad }) => {
  const handleLoad = () => {
    const savedColumnOrder = loadFromLocalStorage("columnOrder");
    if (savedColumnOrder) {
      onLoad(savedColumnOrder);
    }
  };

  return (
    <button
      className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-400 border border-blue-500"
      onClick={handleLoad}
    >
      Load
    </button>
  );
};

export default LoadData;
