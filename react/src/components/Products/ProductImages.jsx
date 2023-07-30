import { useState } from "react";

const ProductImages = function ({ images }) {
    const [active, setActive] = useState(images[0].image_url);

    return (
        <div className="articulo__imagenes">
            <div className="imagenes__secundarias">
                {images.map((img) => (
                    <div
                        key={img.id}
                        className="imagen__secundaria"
                        onMouseEnter={() => setActive(img.image_url)}
                    >
                        <img src={img.image_url} />
                    </div>
                ))}
            </div>

            <div className="imagen__primaria">
                <img src={active} />
            </div>
        </div>
    );
};

export default ProductImages;
