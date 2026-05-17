import { Clock3, Mail, MapPin, Phone, Send } from 'lucide-react';

export const Contact = () => {
    return (
        <section id="contacto" className="contact-section">
            <div className="contact-section__inner">
                <div className="contact-section__header">
                    <h2>Hablemos de tu próximo proyecto</h2>
                    <p>
                        Ubícanos, escríbenos o envíanos tu solicitud desde el formulario. Te responderemos con una propuesta clara y rápida.
                    </p>
                </div>

                <div className="contact-layout">
                    <div className="contact-map" aria-label="Ubicación de ASIR Company EIRL">
                        <iframe
                            title="Ubicación de ASIR Company EIRL en Google Maps"
                            src="https://www.google.com/maps?q=Lima%2C%20Peru&output=embed"
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>

                    <form className="contact-form justify-center">
                        <p className="section-kicker text-asir-navy text-2xl md:text-3xl">Cotiza tu proyecto</p>
                        <div className="contact-form__grid">
                            <div className="contact-form__field">
                                <label htmlFor="contact-name">Nombre completo</label>
                                <input id="contact-name" name="name" type="text" autoComplete="name" placeholder="Tu nombre" />
                            </div>
                            <div className="contact-form__field">
                                <label htmlFor="contact-email">Correo electrónico</label>
                                <input id="contact-email" name="email" type="email" autoComplete="email" placeholder="tu@email.com" />
                            </div>
                            <div className="contact-form__field contact-form__field--full">
                                <label htmlFor="contact-subject">Asunto</label>
                                <input id="contact-subject" name="subject" type="text" placeholder="Cuéntanos el servicio que necesitas" />
                            </div>
                            <div className="contact-form__field contact-form__field--full">
                                <label htmlFor="contact-message">Mensaje</label>
                                <textarea id="contact-message" name="message" rows="6" placeholder="Describe tu proyecto, requerimientos o dudas" />
                            </div>
                        </div>

                        <button type="submit" className="button button--primary contact-form__submit">
                            <Send className="h-4 w-4" />
                            Enviar solicitud
                        </button>
                    </form>
                </div>

                <div className="contact-cards">
                    <article className="contact-card">
                        <div className="contact-card__icon">
                            <Phone className="h-5 w-5" />
                        </div>
                        <div>
                            <p className="contact-card__label">Teléfono / WhatsApp</p>
                            <a href="tel:+51987654321" className="contact-card__value">
                                +51 987 654 321
                            </a>
                            <span className="contact-card__hint">Atención inmediata por WhatsApp</span>
                        </div>
                    </article>

                    <article className="contact-card">
                        <div className="contact-card__icon">
                            <Mail className="h-5 w-5" />
                        </div>
                        <div>
                            <p className="contact-card__label">Correo electrónico</p>
                            <a href="mailto:contacto@asircompany.com" className="contact-card__value">
                                contacto@asircompany.com
                            </a>
                            <span className="contact-card__hint">Respuesta en horario laboral</span>
                        </div>
                    </article>

                    <article className="contact-card">
                        <div className="contact-card__icon">
                            <MapPin className="h-5 w-5" />
                        </div>
                        <div>
                            <p className="contact-card__label">Dirección física</p>
                            <span className="contact-card__value">Av. Ejemplo 123, Lima, Perú</span>
                            <span className="contact-card__hint">Visitas previa coordinación</span>
                        </div>
                    </article>

                    <article className="contact-card">
                        <div className="contact-card__icon">
                            <Clock3 className="h-5 w-5" />
                        </div>
                        <div>
                            <p className="contact-card__label">Horario de atención</p>
                            <span className="contact-card__value">Lun - Vie: 8:00 a 18:00</span>
                            <span className="contact-card__hint">Sábados: 9:00 a 13:00</span>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    );
};