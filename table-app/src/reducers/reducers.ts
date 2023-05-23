import { combineReducers } from "redux";
import tableReducer, { TableState } from "./TableReducer";

export interface RootState {
  table: TableState;
}

const rootReducer = combineReducers<RootState>({
  table: tableReducer,
});

export default rootReducer;
