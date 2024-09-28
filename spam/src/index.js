import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// createRoot 사용
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
