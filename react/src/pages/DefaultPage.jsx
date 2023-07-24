import CategoryScroll from "../components/Products/CategoryScroll";

const DefaultPage = function () {
    return (
        <section id="productos" class="seccion-productos">
            <div class="contenedor">
                <h2>Tenemos la última tecnología</h2>

                <CategoryScroll />
                <CategoryScroll />
            </div>
        </section>
    );
};

export default DefaultPage;
