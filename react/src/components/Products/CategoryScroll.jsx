import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";
import { useEffect, useState } from "react";
import Loader from "../UI/Loader";

const CategoryScroll = function ({ categoryId }) {
    const [info, setInfo] = useState({
        id: null,
        title: "",
        products: null,
    });
    const [isLoading, setIsLoading] = useState(false);

    useEffect(
        function () {
            fetchCategoryAndProducts(categoryId);
        },
        [categoryId]
    );

    const fetchCategoryAndProducts = async function (id) {
        setIsLoading(true);

        const response = await fetch(
            `${import.meta.env.VITE_BASE_URL}/category/${id}?with_products`
        );

        const data = (await response.json()).data;
        setInfo((prev) => {
            return {
                ...prev,
                id: data.id,
                title: data.title,
                products: data.products.slice(0, 4),
            };
        });

        setIsLoading(false);
    };

    return (
        <div className="productos">
            {isLoading && <Loader />}

            {!isLoading && info.products && (
                <>
                    <h3 className="productos__titulo">{info.title}</h3>

                    <div className="scroll">
                        <div className="productos__lista">
                            {info.products.map((product) => (
                                <ProductCard
                                    key={product.id}
                                    product={product}
                                />
                            ))}
                        </div>
                    </div>

                    <Link
                        to={`/category?id=${info.id}`}
                        className="productos__link btn btn-secundario"
                    >
                        Ver más
                    </Link>
                </>
            )}
        </div>
    );
};

export default CategoryScroll;
