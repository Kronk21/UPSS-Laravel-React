import colorLogo from "../../assets/Logo-Color.png";

const Footer = function () {
    return (
        <footer>
            <div className="contenedor footer__grid">
                <div className="footer__col">
                    <img src={colorLogo} alt="UPSS Wireless logo" />
                    <p className="footer__aviso">
                        Copyright © 2023 por UPSS Wireless, Todos los derechos
                        reservados.
                    </p>
                </div>
                <div className="footer__col">
                    <ul>
                        <li>
                            <i className="fa-solid fa-location-dot footer__icono"></i>
                            <p className="footer__info">
                                Av insurgentes #97 col. el Carmen. Ixmiquilpan,
                                Hgo.
                            </p>
                        </li>
                        <li>
                            <i className="fa-solid fa-phone footer__icono"></i>
                            <p className="footer__info">(+52) 771 359 7174</p>
                        </li>
                        <li>
                            <i className="fa-solid fa-envelope footer__icono"></i>
                            <p className="footer__info">
                                CesarAxel001@gmail.com
                            </p>
                        </li>
                    </ul>
                </div>
                <div className="footer__col">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14950.910467076743!2d-99.2138024!3d20.4763777!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x300107126dd010b8!2sUpss%20Wireless!5e0!3m2!1ses-419!2smx!4v1663429970414!5m2!1ses-419!2smx"
                        width="600"
                        height="450"
                        // style="border:0;"
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="footer__mapa"
                    ></iframe>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
