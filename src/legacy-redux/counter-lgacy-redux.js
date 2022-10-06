import { createStore } from "redux";

let counterReducer = (state = { counter: 0, visible: true }, action) => {
  //Check action type.
  if (action.type == "Increment") {
    return {
      counter: state.counter + 1,
      visible: state.visible,
    };
  }
  if (action.type == "Decrement") {
    return {
      counter: state.counter - 1,
      visible: state.visible,
    };
  }
  if (action.type == "IncrementBy") {
    return {
      counter: state.counter + action.value,
      visible: state.visible,
    };
  }
  if (action.type == "Toggle") {
    return {
      counter: state.counter,
      visible: !state.visible,
    };
  }
  return state;
};

let CounterReduxStore = createStore(counterReducer);
export default CounterReduxStore;
