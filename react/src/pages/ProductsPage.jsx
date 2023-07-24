const ProductsPage = function () {
    return (
        <main>
            <div className="contenedor">
                <div className="categorias">
                    <p className="categorias__titulo">Categorías</p>
                    <ul>
                        <li>
                            <a href="" className="categoria__nombre ">
                                Audifonos
                            </a>
                        </li>
                        <li>
                            <a href="" className="categoria__nombre ">
                                Baterias
                            </a>
                        </li>
                        <li>
                            <a href="" className="categoria__nombre ">
                                Memorias
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="lista__productos">
                    {/* Lista de productos */}
                </div>
            </div>
        </main>
    );
};

export default ProductsPage;
