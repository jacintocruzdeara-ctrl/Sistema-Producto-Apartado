import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Menu from "./components/Menu";
import MenuLateral from "./menu/MenuLateral";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <Menu />
    <MenuLateral />
    <App />
  </>
);