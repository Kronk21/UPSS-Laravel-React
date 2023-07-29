import { useContext } from "react";

import { CartContext } from "../contexts/CartContext";

import CartDetails from "../components/Cart/CartDetails";
import CartItemsList from "../components/Cart/CartItemsList";

const CartPage = function () {
    const cartCtx = useContext(CartContext);
    const totalPrice = cartCtx.getTotalPrice();

    return (
        <section className="seccion-carrito">
            <div className="contenedor">
                {cartCtx.items.length === 0 ? (
                    <h2
                        style={{
                            fontSize: "4.8rem",
                            fontWeight: "var(--fw-medium)",
                            marginBottom: "12.4rem",
                        }}
                    >
                        No hay nada en el carrito
                    </h2>
                ) : (
                    <div className="carrito__contenido">
                        <CartItemsList products={cartCtx.items} />

                        <CartDetails value={totalPrice} />
                    </div>
                )}
            </div>
        </section>
    );
};

export default CartPage;
