import categoryImg from "../../assets/img/collageusb.jpg";

const CategoryCard = function () {
    return (
        <div class="producto-sm">
            <div class="producto-sm__info">
                <h3 class="producto-sm__titulo">Memorias USB</h3>
                <p class="producto-sm__desc">
                    Guarda tus música, fotos, videos y archivos en una memoria
                    usb y/o micro sD al mejor precio.{" "}
                </p>
                <a href="" class="producto-sm__link">
                    Ver más
                </a>
            </div>
            <div class="producto-sm__img">
                <img src={categoryImg} alt="" />
            </div>
        </div>
    );
};

export default CategoryCard;
