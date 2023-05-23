import { AnyAction } from "redux";
import { TableData } from "../types/AppTypes";

// Define the type for the table state
export interface TableState {
  data: TableData[];
  // Add any additional properties for the table state
}

// Define the initial state for the table
const initialState: TableState = {
  data: [],
  // Initialize other properties if needed
};

// Define the reducer function
const tableReducer = (state = initialState, action: AnyAction): TableState => {
  switch (action.type) {
    // Add any relevant action types and logic here
    default:
      return state;
  }
};

export default tableReducer;
