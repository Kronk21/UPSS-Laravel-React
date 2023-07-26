import { Outlet } from "react-router-dom";

import Navbar from "../components/UI/Navbar";
import Form from "../components/UI/Form";
import Footer from "../components/UI/Footer";
import { ScrollToTop } from "../components/ScrollToTop";

const DefaultLayout = function () {
    return (
        <>
            <Navbar />

            <Outlet />

            <Form />
            <Footer />

            <ScrollToTop />
        </>
    );
};

export default DefaultLayout;
