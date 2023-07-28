import { Link } from "react-router-dom";

import categoryImg from "../../assets/img/collageusb.jpg";
import { useEffect, useState } from "react";
import Loader from "../UI/Loader";

const CategoryCard = function ({ categoryId }) {
    const [info, setInfo] = useState({
        id: null,
        title: "",
        description: "",
        image_url: "",
    });
    const [isLoading, setIsLoading] = useState(false);

    useEffect(
        function () {
            fetchCategory(categoryId);
        },
        [categoryId]
    );

    const fetchCategory = async function (id) {
        setIsLoading(true);

        const response = await fetch(
            `${import.meta.env.VITE_BASE_URL}/category/${id}`
        );

        const data = (await response.json()).data;
        setInfo(data);

        setIsLoading(false);
    };

    return (
        <div className="producto-sm">
            {isLoading && <Loader />}
            {!isLoading && (
                <>
                    <div className="producto-sm__info">
                        <h3 className="producto-sm__titulo">{info.title}</h3>
                        <p className="producto-sm__desc">{info.description}</p>
                        <Link
                            to={`/category?id=${info.id}`}
                            className="producto-sm__link"
                        >
                            Ver más
                        </Link>
                    </div>
                    <div className="producto-sm__img">
                        <img src={info.image_url} alt="" />
                    </div>
                </>
            )}
        </div>
    );
};

export default CategoryCard;
