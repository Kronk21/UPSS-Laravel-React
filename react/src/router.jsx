import { createBrowserRouter } from "react-router-dom";

import DefaultLayout from "./pages/DefaultLayout";
import DefaultPage from "./pages/DefaultPage";
import ProductsPage from "./pages/ProductsPage";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <DefaultLayout />,
        children: [
            {
                index: true,
                element: <DefaultPage />,
            },
            {
                path: "/products",
                element: <ProductsPage />,
            },
            {
                path: "/products/:id",
                element: <ProductPage />,
            },
            {
                path: "/cart",
                element: <CartPage />,
            },
        ],
    },
]);

export default router;
