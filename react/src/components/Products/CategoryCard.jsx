import { Link } from "react-router-dom";

import categoryImg from "../../assets/img/collageusb.jpg";

const CategoryCard = function () {
    return (
        <div className="producto-sm">
            <div className="producto-sm__info">
                <h3 className="producto-sm__titulo">Memorias USB</h3>
                <p className="producto-sm__desc">
                    Guarda tus música, fotos, videos y archivos en una memoria
                    usb y/o micro sD al mejor precio.{" "}
                </p>
                <Link to="/products" className="producto-sm__link">
                    Ver más
                </Link>
            </div>
            <div className="producto-sm__img">
                <img src={categoryImg} alt="" />
            </div>
        </div>
    );
};

export default CategoryCard;
