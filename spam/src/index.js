import React from "react";
import ReactDOM from "react-dom/client"; // ReactDOM from 'react-dom' 대신 'react-dom/client'를 사용합니다.
import App from "./App";

// 기존의 ReactDOM.render() 대신 createRoot 사용
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
