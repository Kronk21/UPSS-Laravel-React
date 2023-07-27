import ProductCard from "./ProductCard";

const ProductsList = function ({ products }) {
    return (
        <div className="lista__productos">
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
};

export default ProductsList;
