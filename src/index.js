import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store } from './redux/index'
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import Main from "./routes/main";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Main />
    </BrowserRouter>
  </Provider>
  ,
  document.getElementById("root")
);
