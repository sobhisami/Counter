import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import Counter from "./components/Counter";
import ReduxStore from "./redux/redux-store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={ReduxStore}>
    <Counter />
  </Provider>
);
