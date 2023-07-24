import { Outlet } from "react-router-dom";

const DefaultLayout = function () {
    return (
        <>
            <h1>Default layout</h1>

            <Outlet />
        </>
    );
};

export default DefaultLayout;
