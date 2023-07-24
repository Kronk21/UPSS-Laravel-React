import { Outlet } from "react-router-dom";

import Navbar from "../components/UI/Navbar";
import Form from "../components/UI/Form";

const DefaultLayout = function () {
    return (
        <>
            <Navbar />

            <Outlet />

            <Form />
        </>
    );
};

export default DefaultLayout;
