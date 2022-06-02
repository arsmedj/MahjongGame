import { configureStore, combineReducers } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { stateReducer } from "./reducers/state";

const rootReducer = combineReducers({
  cards: stateReducer,
});

export const setupStore = () => {
  return configureStore({ reducer: rootReducer, middleware: [thunk] });
};
export const store = setupStore();
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
