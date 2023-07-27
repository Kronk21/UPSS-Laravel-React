import { createBrowserRouter } from "react-router-dom";

import DefaultLayout from "./pages/DefaultLayout";
import DefaultPage from "./pages/DefaultPage";
import ProductsPage from "./pages/ProductsPage";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";

import { loader as productsLoader } from "./pages/ProductsPage";

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
                path: "/category",
                element: <ProductsPage />,
                loader: productsLoader,
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
