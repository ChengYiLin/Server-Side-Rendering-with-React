import React from "react";
import * as ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import PageRoutes from "./route";

const root = document.getElementById("root");

if (root) {
    ReactDOM.hydrateRoot(
        root,
        <BrowserRouter>
            <PageRoutes />
        </BrowserRouter>
    );
} else {
    alert("There is no root element");
}
