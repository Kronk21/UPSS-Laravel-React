import { Link } from "react-router-dom";

import whiteLogo from "../../assets/Logo-Blanco.png";
import colorLogo from "../../assets/Logo-Color.png";

const Navbar = function () {
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
                        <h2>Llamanos</h2>
                        <p>(+759) 759 723 0294</p>
                    </div>
                    <div className="info__redes">
                        <h2>Síguenos en:</h2>
                        <a href="#">
                            <ion-icon name="logo-facebook"></ion-icon>
                        </a>
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
                                <Link to="/products">Productos</Link>
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
                                    <p>0</p>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
