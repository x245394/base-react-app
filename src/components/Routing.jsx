import React from "react";
import { Route, Routes } from "react-router-dom";

import NotFound from "./NotFound";

const Routing = () => {
    return (
        <Routes>
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};

export default Routing;
