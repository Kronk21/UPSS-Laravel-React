import { useNavigation } from "react-router-dom";
import { Outlet } from "react-router-dom";

import ProgressBar from "../components/UI/ProgressBar";

import Navbar from "../components/UI/Navbar";
import Form from "../components/UI/Form";
import Footer from "../components/UI/Footer";
import ScrollToTop from "../components/ScrollToTop";

const DefaultLayout = function () {
    const navigationState = useNavigation();

    return (
        <>
            {navigationState.state === "loading" ? <ProgressBar /> : ""}

            <Navbar />

            <Outlet />

            <Form />
            <Footer />

            <ScrollToTop />
        </>
    );
};

export default DefaultLayout;
