import CartItem from "./CartItem";

const CartItemsList = function ({ products }) {
    return (
        <ul className="carrito__lista">
            {products.map((product) => (
                <CartItem key={product.id} product={product} />
            ))}
        </ul>
    );
};

export default CartItemsList;
