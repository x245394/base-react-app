import { Route, Routes } from "react-router-dom";

import NotFound from "./NotFound";

export default function Routing() {
    return (
        <>
            <Routes>
                <Route path="*" element={<NotFound />} />
            </Routes>
        </>
    );
}
