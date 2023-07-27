import CategoryCard from "../components/Products/CategoryCard";
import CategoryScroll from "../components/Products/CategoryScroll";

const DefaultPage = function () {
    return (
        <section id="productos" className="seccion-productos">
            <div className="contenedor">
                <h2>Tenemos la última tecnología</h2>

                <CategoryScroll categoryId={1} />
                <CategoryScroll categoryId={2} />

                <div className="productos-sm">
                    <CategoryCard categoryId={4} />
                    <CategoryCard categoryId={5} />
                </div>
            </div>
        </section>
    );
};

export default DefaultPage;
