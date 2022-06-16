import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/index";
import User from "./pages/user";

const PageRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="users" element={<User />} />
        </Routes>
    );
};

export default PageRoutes;
