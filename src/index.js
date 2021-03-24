import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import combineReducers from "./reducer";
import thunk from "redux-thunk";

const store = createStore(combineReducers, {}, compose(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,

  document.getElementById("root")
);
