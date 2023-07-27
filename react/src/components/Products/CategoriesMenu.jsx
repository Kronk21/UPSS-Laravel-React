import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CategoriesMenu = function ({ active }) {
    const [categories, setCategories] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(function () {
        fetchCategories();
    }, []);

    const fetchCategories = async function () {
        setIsLoading(true);

        const response = await fetch(
            `${import.meta.env.VITE_BASE_URL}/category`
        );
        const data = (await response.json()).data;
        setCategories(data);

        setIsLoading(false);
    };

    return (
        <div className="categorias">
            <p className="categorias__titulo">Categorías</p>

            {isLoading && <h2>Cargando...</h2>}

            {!isLoading && categories && (
                <ul>
                    {categories.map((category) => (
                        <li key={category.id}>
                            <Link
                                to={`/category?id=${category.id}`}
                                className={`categoria__nombre ${
                                    category.id === active ? "focus" : ""
                                }`}
                            >
                                {category.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default CategoriesMenu;
