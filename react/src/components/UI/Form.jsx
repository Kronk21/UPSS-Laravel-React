const Form = function () {
    return (
        <>
            <section id="contacto" className="seccion-formulario">
                <div className="contenedor">
                    <div className="formulario__contenido">
                        <h3>Envianos un mensaje</h3>
                        <form action="#contacto" className="formulario">
                            <div className="formulario__control">
                                <label htmlFor="correo">
                                    Tu correo electronico:
                                </label>
                                <input type="email" name="correo" id="correo" />
                            </div>
                            <div className="formulario__control">
                                <label htmlFor="mensaje">
                                    Escribe un mensaje:
                                </label>
                                <textarea
                                    name="mensaje"
                                    id="mensaje"
                                ></textarea>
                            </div>
                            <div className="formulario__control"></div>
                            <input
                                type="submit"
                                name="enviar_mensaje"
                                className="btn btn-secundario"
                                value="Enviar"
                            />
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Form;
