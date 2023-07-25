import productImage from "../../assets/img/61dBxsqt5pL._AC_SL1000_.jpg";

const ProductFull = function () {
    return (
        <section className="seccion-producto">
            <div className="contenedor">
                <div className="articulo">
                    <div className="articulo__imagenes">
                        <div className="imagenes__secundarias">
                            <div className="imagen__secundaria">
                                <img src={productImage} />
                            </div>
                            <div className="imagen__secundaria imagen__inactiva">
                                <img src={productImage} />
                            </div>
                            <div className="imagen__secundaria imagen__inactiva">
                                <img src={productImage} />
                            </div>
                            <div className="imagen__secundaria imagen__inactiva">
                                <img src={productImage} />
                            </div>
                        </div>
                        <div className="imagen__primaria">
                            <img src={productImage} />
                        </div>
                    </div>
                    <div className="articulo__info">
                        <p className="info__nombre">
                            STF Audífonos De Diadema Inalámbricos Aurum,
                            Conexión 5.0, Micrófono Incorporado{" "}
                        </p>
                        <p className="info__precio">$280.00</p>
                        <p className="info__desc">
                            Audifonos de diadema, con una capacidad de 150mah
                            para que disfrutes tu musica por un largo tiempo,
                            plegable y comodo.
                        </p>
                        <p className="info__caracteristicas">
                            • 150mah.<br></br>• Batería bluetooth 5.0 y fácil de
                            cambiar.<br></br>• Plegable y cómodo.{" "}
                        </p>

                        <form
                            method="POST"
                            className="info__acciones"
                            action=""
                        >
                            <input type="hidden" name="producto_id" value="" />
                            <button
                                type="submit"
                                name="agregar"
                                className="btn btn-primario"
                            >
                                Agregar al carrito
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductFull;
