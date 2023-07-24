import { Outlet } from "react-router-dom";

import Navbar from "../components/UI/Navbar";

const DefaultLayout = function () {
    return (
        <>
            <Navbar />

            <Outlet />
        </>
    );
};

export default DefaultLayout;
