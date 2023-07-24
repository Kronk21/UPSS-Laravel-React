import { Outlet } from "react-router-dom";

import Footer from "../components/UI/Footer";

const DefaultLayout = function () {
    return (
        <>
            <h1>Default layout</h1>

            <Outlet />

            <Footer />
        </>
    );
};

export default DefaultLayout;
