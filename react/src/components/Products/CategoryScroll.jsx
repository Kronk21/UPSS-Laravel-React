import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";

const CategoryScroll = function () {
    return (
        <div className="productos">
            <h3 className="productos__titulo">Camaras de seguridad</h3>

            <div className="scroll">
                <div className="productos__lista">
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </div>
            </div>

            <Link to="/category" className="productos__link btn btn-secundario">
                Ver más
            </Link>
        </div>
    );
};

export default CategoryScroll;
