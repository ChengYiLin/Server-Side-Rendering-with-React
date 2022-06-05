import express from "express";
import React from "react";
import { renderToString } from "react-dom/server";
import Home from "../client/pages/index";

const router = express.Router();

router.get("/", (req, res) => {
    const component = renderToString(<Home />);

    res.render("index", { component });
});

export default router;
