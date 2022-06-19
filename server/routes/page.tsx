import express from "express";
import React from "react";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import PageRoutes from "../../client/route";
import { reducer } from "../../client/store";
import { getClientBundleJS } from "../provider/getClientBundle";
import { ServerStyleSheet } from "styled-components";

const router = express.Router();

router.get("*", (req, res) => {
    const store = configureStore({ reducer });
    const sheet = new ServerStyleSheet();

    try {
        const component = renderToString(
            sheet.collectStyles(
                <Provider store={store}>
                    <StaticRouter location={req.path}>
                        <PageRoutes />
                    </StaticRouter>
                </Provider>
            )
        );

        const preloadedState = store.getState();

        const styledComponentsSSR = sheet.getStyleTags();

        const clientBundleJS = getClientBundleJS();

        res.render("index", {
            component,
            clientBundleJS,
            styledComponentsSSR,
            preloadedState,
        });
    } catch (error) {
        console.log(error);
    } finally {
        sheet.seal();
    }
});

export default router;
