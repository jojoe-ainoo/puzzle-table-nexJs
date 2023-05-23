import { createStore, applyMiddleware, AnyAction } from "redux";
import thunk, { ThunkDispatch } from "redux-thunk";
import rootReducer, { RootState } from "./reducers/reducers";

const store = createStore(rootReducer, applyMiddleware(thunk));

export type AppDispatch = ThunkDispatch<RootState, null, AnyAction>;

export default store;
