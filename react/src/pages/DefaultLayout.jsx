import { Outlet } from "react-router-dom";

import Form from "../components/UI/Form";

const DefaultLayout = function () {
    return (
        <>
            <h1>Default layout</h1>

            <Outlet />

            <Form />
        </>
    );
};

export default DefaultLayout;
