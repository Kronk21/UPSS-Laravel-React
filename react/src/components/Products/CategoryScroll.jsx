import ProductCard from "./ProductCard";

const CategoryScroll = function () {
    return (
        <div class="productos">
            <h3 class="productos__titulo">Camaras de seguridad</h3>

            <div class="scroll">
                <div class="productos__lista">
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </div>
            </div>

            <a href="" class="productos__link btn btn-secundario">
                Ver más
            </a>
        </div>
    );
};

export default CategoryScroll;
