import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./components/App/App";
import { Normalize } from "./Normalize";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Normalize />
    <App />
  </React.StrictMode>
);
