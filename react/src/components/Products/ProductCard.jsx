import img from "../../assets/img/61dBxsqt5pL._AC_SL1000_.jpg";

const ProductCard = function () {
    return (
        <a href="" class="producto">
            <div class="producto__img">
                <img src={img} alt="Fotografia de" />
            </div>
            <div class="producto__info">
                <p class="producto__nombre">
                    STF Audífonos De Diadema Inalámbricos Aurum, Conexión 5.0,
                    Micrófono Incorporado{" "}
                </p>
                <p class="producto__precio">$280.00</p>
            </div>
        </a>
    );
};

export default ProductCard;
