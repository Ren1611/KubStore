import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.scss";
import App from "./App.jsx";
import MainContext from "./MainConrext/MainContext.jsx";

createRoot(document.getElementById("root")).render(
  <MainContext>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </MainContext>
);
