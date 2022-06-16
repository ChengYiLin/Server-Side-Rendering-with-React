import React from "react";
import * as ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import PageRoutes from "./route";
import store from "./store";

const root = document.getElementById("root");

if (root) {
    ReactDOM.hydrateRoot(
        root,
        <Provider store={store}>
            <BrowserRouter>
                <PageRoutes />
            </BrowserRouter>
        </Provider>
    );
} else {
    alert("There is no root element");
}
