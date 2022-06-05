import express from "express";
import React from "react";
import { renderToString } from "react-dom/server";
import Home from "../../client/pages/index";
import { getClientBundleJS } from "../utilities/getClientBundle";

const router = express.Router();

router.get("/", (req, res) => {
    const component = renderToString(<Home />);
    const clientBundleJS = getClientBundleJS();

    res.render("index", { component, clientBundleJS });
});

export default router;
