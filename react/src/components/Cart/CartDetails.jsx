const CartDetails = function () {
    return (
        <div className="carrito__detalles">
            <p className="detalles__titulo">Detalles</p>
            <p className="detalles__total">Total:</p>
            <p className="detalles__num">$570.00</p>

            <form action="" method="POST" className="form__detalles">
                <label htmlFor="correo">Correo electronico:</label>
                <input type="email" name="correo" id="correo" />

                <input type="hidden" name="carrito_id" value="" />

                <input type="hidden" name="total" value="" />

                <button
                    type="submit"
                    name="solicitar"
                    className="btn btn-primario btn-detalles"
                >
                    Enviar solicitud
                </button>
            </form>
        </div>
    );
};

export default CartDetails;
