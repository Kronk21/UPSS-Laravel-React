import { Outlet } from "react-router-dom";

import Navbar from "../components/UI/Navbar";
import Form from "../components/UI/Form";

import Footer from "../components/UI/Footer";

const DefaultLayout = function () {
    return (
        <>
            <Navbar />

            <Outlet />

            <Form />
            <Footer />
        </>
    );
};

export default DefaultLayout;
