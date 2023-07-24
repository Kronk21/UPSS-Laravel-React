import { Link } from "react-router-dom";

import img from "../../assets/img/61dBxsqt5pL._AC_SL1000_.jpg";

const ProductCard = function () {
    return (
        <Link to="/products/1" className="producto">
            <div className="producto__img">
                <img src={img} alt="Fotografia de" />
            </div>
            <div className="producto__info">
                <p className="producto__nombre">
                    STF Audífonos De Diadema Inalámbricos Aurum, Conexión 5.0,
                    Micrófono Incorporado{" "}
                </p>
                <p className="producto__precio">$280.00</p>
            </div>
        </Link>
    );
};

export default ProductCard;
