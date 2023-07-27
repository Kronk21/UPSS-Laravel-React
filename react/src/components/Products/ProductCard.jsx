import { Link } from "react-router-dom";

import img from "../../assets/img/61dBxsqt5pL._AC_SL1000_.jpg";

const ProductCard = function ({ product }) {
    return (
        <Link to={`/products/${product.id}`} className="producto">
            <div className="producto__img">
                <img src={img} alt={`Fotografia de ${product.title}`} />
            </div>
            <div className="producto__info">
                <p className="producto__nombre">{product.title}</p>
                <p className="producto__precio">
                    {new Intl.NumberFormat("en-US", {
                        style: "currency",
                        currency: "USD",
                    }).format(product.price)}
                </p>
            </div>
        </Link>
    );
};

export default ProductCard;
