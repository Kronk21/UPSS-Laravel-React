import { useLoaderData } from "react-router-dom";
import ProductFull from "../components/Products/ProductFull";

const ProductPage = function () {
    const product = useLoaderData();

    return <ProductFull product={product} />;
};

export default ProductPage;

export const loader = async function ({ params }) {
    const response = await fetch(
        `${import.meta.env.VITE_BASE_URL}/products/${params.id}`
    );

    const data = (await response.json()).data;

    return data;
};
