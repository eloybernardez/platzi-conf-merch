import React from "react";
import { configureStore } from "@reduxjs/toolkit";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createBrowserHistory } from "history";
import rootReducer from "../reducers";

const store = configureStore({ reducer: rootReducer });
const history = createBrowserHistory();

const ProviderMock = (props) => (
  <Provider store={store}>
    <BrowserRouter history={history}>{props.children}</BrowserRouter>
  </Provider>
);

export default ProviderMock;
