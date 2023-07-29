import { Link } from "react-router-dom";

import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

import itemImage from "../../assets/img/61dBxsqt5pL._AC_SL1000_.jpg";

const CartItem = function ({ product }) {
    const cartCtx = useContext(CartContext);

    const onChangeHandler = function (e) {
        e.preventDefault();

        const value = +e.target.value;
        cartCtx.updateItemQuantity(product.id, value);
    };

    const onRemoveHander = function (e) {
        e.preventDefault();
        cartCtx.removeItemFromCart(product.id);
    };

    return (
        <li className="carrito__producto">
            <div className="carrito__img">
                <img src={product.image_url} alt="" />
            </div>

            <div className="carrito__info">
                <Link to={`/products/${product.id}`} className="info__nombre">
                    {product.title}
                </Link>
                <p className="info__precio">
                    <span className="precio__individual">
                        Precio por unidad:{" "}
                        {new Intl.NumberFormat("en-US", {
                            style: "currency",
                            currency: "USD",
                        }).format(product.price)}
                    </span>
                </p>
                <p className="info__precio">
                    <span className="precio__conjunto">
                        Precio en conjunto:{" "}
                    </span>
                    {new Intl.NumberFormat("en-US", {
                        style: "currency",
                        currency: "USD",
                    }).format(product.price * product.quantity)}
                </p>

                <form className="carrito__acciones">
                    <p className="info__cantidad">Cantidad:</p>
                    <select value={product.quantity} onChange={onChangeHandler}>
                        {[...Array(product.stock)].map((_, i) =>
                            product.quantity === i + 1 ? (
                                <option key={i} value={i + 1}>
                                    {i + 1}
                                </option>
                            ) : (
                                <option key={i} value={i + 1}>
                                    {i + 1}
                                </option>
                            )
                        )}
                    </select>

                    <button
                        type="submit"
                        className="carrito__eliminar"
                        onClick={onRemoveHander}
                    >
                        <i className="fa-solid fa-trash-can"></i>
                    </button>
                </form>
            </div>
        </li>
    );
};

export default CartItem;
