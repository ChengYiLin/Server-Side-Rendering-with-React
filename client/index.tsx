import React from "react";
import * as ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import PageRoutes from "./route";

const root = document.getElementById("root");

ReactDOM.hydrateRoot(
    root,
    <BrowserRouter>
        <PageRoutes />
    </BrowserRouter>
);
