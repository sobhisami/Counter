import { createSlice } from "@reduxjs/toolkit";

let counterState = { counter: 0, visible: true };
let counterSlice = createSlice({
  name: "counter-slice",
  initialState: counterState,
  reducers: {
    increment(state, action) {
      state.counter = state.counter + 1;
    },
    decrement(state, action) {
      state.counter = state.counter - 1;
    },
    incrementByValue(state, action) {
      state.counter = state.counter + action.payload.value;
    },
    toggleCounter(state, action) {
      state.visible = !state.visible;
    },
  },
});

export let counterReducer = counterSlice.reducer;
export let counterActions = counterSlice.actions;
