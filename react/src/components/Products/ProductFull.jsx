import productImage from "../../assets/img/61dBxsqt5pL._AC_SL1000_.jpg";

const ProductFull = function ({ product }) {
    return (
        <section className="seccion-producto">
            <div className="contenedor">
                <div className="articulo">
                    <div className="articulo__imagenes">
                        <div className="imagenes__secundarias">
                            <div className="imagen__secundaria">
                                <img src={product.image_url} />
                            </div>
                            <div className="imagen__secundaria imagen__inactiva">
                                <img src={product.image_url} />
                            </div>
                            <div className="imagen__secundaria imagen__inactiva">
                                <img src={product.image_url} />
                            </div>
                            <div className="imagen__secundaria imagen__inactiva">
                                <img src={product.image_url} />
                            </div>
                        </div>
                        <div className="imagen__primaria">
                            <img src={product.image_url} />
                        </div>
                    </div>
                    <div className="articulo__info">
                        <p className="info__nombre">{product.title}</p>
                        <p className="info__precio">
                            {new Intl.NumberFormat("en-US", {
                                style: "currency",
                                currency: "USD",
                            }).format(product.price)}
                        </p>
                        <p className="info__desc">{product.description}</p>
                        {/* <p className="info__caracteristicas">
                            • 150mah.<br></br>• Batería bluetooth 5.0 y fácil de
                            cambiar.<br></br>• Plegable y cómodo.{" "}
                        </p> */}

                        <form className="info__acciones">
                            {/* <input type="hidden" name="producto_id" value="" /> */}
                            <button type="submit" className="btn btn-primario">
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
