import express from "express";
import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import PageRoutes from "../../client/route";
import { getClientBundleJS } from "../provider/getClientBundle";
import { ServerStyleSheet } from "styled-components";

const router = express.Router();

router.get("*", (req, res) => {
    const sheet = new ServerStyleSheet();

    try {
        const component = renderToString(
            sheet.collectStyles(
                <StaticRouter location={req.path}>
                    <PageRoutes />
                </StaticRouter>
            )
        );

        const styledComponentsSSR = sheet.getStyleTags();

        const clientBundleJS = getClientBundleJS();

        res.render("index", { component, clientBundleJS, styledComponentsSSR });
    } catch (error) {
        console.log(error);
    } finally {
        sheet.seal();
    }
});

export default router;
