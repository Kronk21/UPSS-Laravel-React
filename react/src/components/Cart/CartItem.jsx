import itemImage from "../../assets/img/61dBxsqt5pL._AC_SL1000_.jpg";

const CartItem = function () {
    return (
        <li className="carrito__producto">
            <div className="carrito__img">
                <img src={itemImage} alt="" />
            </div>
            <div className="carrito__info">
                <a href="producto.php?producto_id=" className="info__nombre">
                    asdfasdf
                </a>
                <p className="info__precio">
                    <span className="precio__individual">
                        Precio por unidad: $asdfasdf
                    </span>
                </p>
                <p className="info__precio">
                    <span className="precio__conjunto">
                        Precio en conjunto:{" "}
                    </span>
                    $500
                </p>
                <form
                    method="POST"
                    className="carrito__acciones"
                    action="carrito.php"
                >
                    <p className="info__cantidad">Cantidad:</p>
                    <input
                        type="number"
                        name="cantidad"
                        value="0"
                        min="1"
                        max="5"
                    />
                    <input type="hidden" name="producto_id" value="" />
                    <button
                        type="submit"
                        name="update"
                        className="carrito__btn"
                    >
                        Actualizar
                    </button>
                    <button
                        type="submit"
                        name="delete"
                        className="carrito__eliminar"
                    >
                        <i className="fa-solid fa-trash-can"></i>
                    </button>
                </form>
            </div>
        </li>
    );
};

export default CartItem;
