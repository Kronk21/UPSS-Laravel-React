import CategoriesMenu from "../components/Products/CategoriesMenu";
import ProductsList from "../components/Products/ProductsList";

const ProductsPage = function () {
    return (
        <main>
            <div className="contenedor">
                <CategoriesMenu />

                <ProductsList />
            </div>
        </main>
    );
};

export default ProductsPage;
