import React from "react";
import * as ReactDOM from "react-dom/client";
import Home from "./pages/index";

const root = document.getElementById("root");
ReactDOM.hydrateRoot(root, <Home />);
