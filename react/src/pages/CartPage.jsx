import { useContext } from "react";

import { CartContext } from "../contexts/CartContext";

import CartDetails from "../components/Cart/CartDetails";
import CartItemsList from "../components/Cart/CartItemsList";

const CartPage = function () {
    const cartCtx = useContext(CartContext);

    return (
        <section className="seccion-carrito">
            <div className="contenedor">
                <div className="carrito__contenido">
                    <CartItemsList products={cartCtx.items} />

                    <CartDetails />
                </div>
            </div>
        </section>
    );
};

export default CartPage;
