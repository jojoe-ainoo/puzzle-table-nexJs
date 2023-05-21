import { combineReducers } from "redux";
import tableReducer from "./tableReducer";
// Add your reducer imports here
// import { yourReducer } from './yourReducer';

const rootReducer = combineReducers({
  table: tableReducer, // A
});

export default rootReducer;
