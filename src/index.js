import React from "react";
import ReactDOM from "react-dom";
import App from "./08-tuesday/App";
import reportWebVitals from "./reportWebVitals";
import harryPotterData from "./data.json";
import GlobalStyles from "./08-tuesday/characterApp/GlobalStyles";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <App harryPotterData={harryPotterData} />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
