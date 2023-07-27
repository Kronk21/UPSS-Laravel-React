import { useLoaderData, useLocation } from "react-router-dom";
import CategoriesMenu from "../components/Products/CategoriesMenu";
import ProductsList from "../components/Products/ProductsList";

const ProductsPage = function () {
    const { activeCategory, products } = useLoaderData();

    return (
        <main>
            <div className="contenedor">
                <CategoriesMenu active={activeCategory} />

                <ProductsList products={products} />
            </div>
        </main>
    );
};

export default ProductsPage;

export const loader = async function ({ request }) {
    const params = new URL(request.url);
    const categoryId = params.searchParams.get("id")
        ? +params.searchParams.get("id")
        : 1;

    const response = await fetch(
        `${import.meta.env.VITE_BASE_URL}/category/${categoryId}?with_products`
    );
    const data = (await response.json()).data;

    return {
        activeCategory: data.id,
        products: data.products,
    };
};
