import { AnyAction } from "redux";
import { TableData } from "../types/AppTypes";

// Define the initial state for the table
const initialState: TableData[] = [];

// Define the reducer function
const tableReducer = (state = initialState, action: AnyAction): TableData[] => {
  switch (action.type) {
    // Add any relevant action types and logic here
    default:
      return state;
  }
};

export default tableReducer;
