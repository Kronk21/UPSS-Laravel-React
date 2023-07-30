import { useContext, useState } from "react";
import { Link } from "react-router-dom";

import whiteLogo from "../../assets/Logo-Blanco.png";
import colorLogo from "../../assets/Logo-Color.png";
import { CartContext } from "../../contexts/CartContext";

const Navbar = function () {
    const cartCtx = useContext(CartContext);
    const numberOfItems = cartCtx.getNumberOfItemsInCart();

    const toogleMenu = function () {
        document.querySelector(".links").classList.toggle("mostrar");
    };

    return (
        <>
            <nav className="nav__info">
                <ul className="info contenedor">
                    <img
                        src={whiteLogo}
                        alt="UPSS Wireless logo blanco"
                        className="logo"
                    />
                    <div className="info__telefono">
                        <h2>Llámanos</h2>
                        <p>(+52) 771 359 7174</p>
                    </div>
                    <div className="info__redes">
                        <h2>Síguenos en:</h2>
                        <div>
                            <a
                                href="https://www.instagram.com/cesarserrano21/"
                                target="_blank"
                            >
                                <ion-icon name="logo-instagram"></ion-icon>
                            </a>
                            <a
                                href="https://github.com/Kronk21"
                                target="_blank"
                            >
                                <ion-icon name="logo-github"></ion-icon>
                            </a>
                        </div>
                    </div>
                </ul>
            </nav>

            <nav className="navbar">
                <div className="bar contenedor">
                    <Link to="/">
                        <img
                            src={colorLogo}
                            alt="UPSS Wirelles logo"
                            className="logo"
                        />
                    </Link>

                    <div className="links">
                        <ul>
                            <li>
                                <Link to="/category">Categorias</Link>
                            </li>
                            <li>
                                <a href="#contacto">Contacto</a>
                            </li>
                        </ul>

                        <div>
                            <a href="" className="btn btn-primario">
                                Contrata ya
                            </a>
                            <Link to="/cart" className="carrito">
                                <i className="fa-solid fa-cart-shopping"></i>
                                <div className="numero-items">
                                    <p>{numberOfItems}</p>
                                </div>
                            </Link>
                        </div>
                    </div>

                    <button className="btn-menu" onClick={toogleMenu}>
                        <i className="fa-solid fa-bars"></i>
                    </button>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
