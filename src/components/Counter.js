import { useDispatch, useSelector } from "react-redux";
import { counterActions } from "../redux/counter-slice";
import classes from "../resources/Counter.module.css";
import "../resources/Index.css";

const Counter = () => {
  let counter = useSelector((state) => state.counterReducer.counter);
  let visible = useSelector((state) => state.counterReducer.visible);

  let dispatch = useDispatch();

  let incrementAction = () => {
    dispatch(counterActions.increment());
  };

  let decrementAction = () => {
    dispatch(counterActions.decrement());
  };

  let incrementByValue = (value) => {
    // dispatch({ type: "IncrementBy", value: value });
    dispatch(counterActions.incrementByValue({ value: value }));
  };

  let toggleAction = () => {
    dispatch(counterActions.toggleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {visible && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementAction}>Increment</button>
        <button onClick={() => incrementByValue(10)}>Increase by 10</button>
        <button onClick={decrementAction}>Decrement</button>
      </div>
      <button onClick={toggleAction}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
