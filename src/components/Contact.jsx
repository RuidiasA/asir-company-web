export const Contact = () => {
    return (
        <section className="contact-section">
            <div className="contact-section__inner">
                <p className="section-kicker section-kicker--center">Cotiza tu proyecto</p>
                <form className="contact-form">
                    <input type="text" placeholder="Nombre Completo" />
                    <input type="email" placeholder="Email" />
                    <input className="contact-form__full" type="text" placeholder="Asunto" />
                    <textarea className="contact-form__full" rows="5" placeholder="Mensaje" />
                    <button type="submit" className="button button--primary max-sm:w-full md:col-span-2">
                        Enviar solicitud
                    </button>
                </form>
            </div>
        </section>
    );
};