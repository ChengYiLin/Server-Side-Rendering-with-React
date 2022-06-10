import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/index";
import Hi from "./pages/hi";

const PageRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="hi" element={<Hi />} />
        </Routes>
    );
};

export default PageRoutes;
