import React from "react";
import ReactDOM from "react-dom";
// import { Provider } from "react-redux";
import App from "./components/App/App";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import ThemeContext, { themeConfig } from "./ThemeContext";
// import store from "./store";

ReactDOM.render(
  <React.StrictMode>
    <ThemeContext.Provider value={themeConfig}>
      <App />
    </ThemeContext.Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();