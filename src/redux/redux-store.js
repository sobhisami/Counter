import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./counter-slice";

// let ReduxStore = configureStore({ reducer: counterReducer });
let ReduxStore = configureStore({
  reducer: {
    counterReducer: counterReducer,
  },
});
export default ReduxStore;
