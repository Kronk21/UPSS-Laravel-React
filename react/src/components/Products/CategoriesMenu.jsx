const CategoriesMenu = function () {
    return (
        <div className="categorias">
            <p className="categorias__titulo">Categorías</p>
            <ul>
                <li>
                    <a href="" className="categoria__nombre ">
                        Audifonos
                    </a>
                </li>
                <li>
                    <a href="" className="categoria__nombre focus">
                        Baterias
                    </a>
                </li>
                <li>
                    <a href="" className="categoria__nombre ">
                        Memorias
                    </a>
                </li>
                <li>
                    <a href="" className="categoria__nombre ">
                        Modems
                    </a>
                </li>
                <li>
                    <a href="" className="categoria__nombre ">
                        Cables
                    </a>
                </li>
                <li>
                    <a href="" className="categoria__nombre ">
                        Camaras de Seguridad
                    </a>
                </li>
                <li>
                    <a href="" className="categoria__nombre ">
                        Bocinas
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default CategoriesMenu;
