import express from "express";
import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import PageRoutes from "../../client/route";
import { getClientBundleJS } from "../utilities/getClientBundle";

const router = express.Router();

router.get("*", (req, res) => {
    const component = renderToString(
        <StaticRouter location={req.path}>
            <PageRoutes />
        </StaticRouter>
    );

    const clientBundleJS = getClientBundleJS();

    res.render("index", { component, clientBundleJS });
});

export default router;
