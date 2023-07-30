import productImage from "../../assets/img/61dBxsqt5pL._AC_SL1000_.jpg";

import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../contexts/CartContext";
import { Link } from "react-router-dom";
import ProductImages from "./ProductImages";

const ProductFull = function ({ product }) {
    const cartCtx = useContext(CartContext);

    const productIsInCart = cartCtx.productInCart(product.id);

    const onAddHandler = function (e) {
        e.preventDefault();

        cartCtx.addItemToCart(product);
    };

    const onRemoveHandler = function (e) {
        e.preventDefault();

        cartCtx.removeItemFromCart(product.id);
    };

    return (
        <section className="seccion-producto">
            <div className="contenedor">
                <div className="articulo">
                    <ProductImages images={product.images} />

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
                            {productIsInCart ? (
                                <>
                                    <Link
                                        to="/cart"
                                        className="producto-sm__link"
                                        style={{ marginRight: "20px" }}
                                    >
                                        Ver carrito
                                    </Link>

                                    <button
                                        type="submit"
                                        className="btn btn-primario"
                                        onClick={onRemoveHandler}
                                    >
                                        Remover del carrito
                                    </button>
                                </>
                            ) : (
                                <button
                                    type="submit"
                                    className="btn btn-primario"
                                    onClick={onAddHandler}
                                >
                                    Agregar al carrito
                                </button>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductFull;
