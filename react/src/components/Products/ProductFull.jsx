import productImage from "../../assets/img/61dBxsqt5pL._AC_SL1000_.jpg";

const ProductFull = function () {
    return (
        <section class="seccion-producto">
            <div class="contenedor">
                <div class="articulo">
                    <div class="articulo__imagenes">
                        <div class="imagenes__secundarias">
                            <div class="imagen__secundaria">
                                <img src={productImage} />
                            </div>
                            <div class="imagen__secundaria imagen__inactiva">
                                <img src={productImage} />
                            </div>
                            <div class="imagen__secundaria imagen__inactiva">
                                <img src={productImage} />
                            </div>
                            <div class="imagen__secundaria imagen__inactiva">
                                <img src={productImage} />
                            </div>
                        </div>
                        <div class="imagen__primaria">
                            <img src={productImage} />
                        </div>
                    </div>
                    <div class="articulo__info">
                        <p class="info__nombre">
                            STF Audífonos De Diadema Inalámbricos Aurum,
                            Conexión 5.0, Micrófono Incorporado{" "}
                        </p>
                        <p class="info__precio">$280.00</p>
                        <p class="info__desc">
                            Audifonos de diadema, con una capacidad de 150mah
                            para que disfrutes tu musica por un largo tiempo,
                            plegable y comodo.
                        </p>
                        <p class="info__caracteristicas">
                            • 150mah.<br></br>• Batería bluetooth 5.0 y fácil de
                            cambiar.<br></br>• Plegable y cómodo.{" "}
                        </p>

                        <form method="POST" class="info__acciones" action="">
                            <input type="hidden" name="producto_id" value="" />
                            <button
                                type="submit"
                                name="agregar"
                                class="btn btn-primario"
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
