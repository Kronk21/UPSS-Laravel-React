import { createBrowserRouter } from "react-router-dom";

import DefaultLayout from "./pages/DefaultLayout";
import ProductsPage from "./pages/ProductsPage";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <DefaultLayout />,
        children: [
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
