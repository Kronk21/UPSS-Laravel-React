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

            <a href="" className="productos__link btn btn-secundario">
                Ver más
            </a>
        </div>
    );
};

export default CategoryScroll;
