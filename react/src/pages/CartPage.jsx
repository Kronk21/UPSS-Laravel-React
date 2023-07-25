import CartDetails from "../components/Cart/CartDetails";
import CartItemsList from "../components/Cart/CartItemsList";

const CartPage = function () {
    return (
        <section className="seccion-carrito">
            <div className="contenedor">
                <div className="carrito__contenido">
                    <CartItemsList />

                    <CartDetails />
                </div>
            </div>
        </section>
    );
};

export default CartPage;
