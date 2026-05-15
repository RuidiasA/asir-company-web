import { servicesList } from '../data/asirData';

export const Services = () => {
    return (
        <section className="services-section">
            <div className="services-section__inner">
                <p className="section-kicker">Nuestros servicios</p>
                <div className="services-grid max-sm:grid-cols-2">
                    {servicesList.map(({ icon: Icon, title }, idx) => (
                        <article key={title} className={`service-card ${idx !== servicesList.length - 1 ? 'service-card--divider' : ''}`}>
                            <Icon className="service-card__icon" />
                            <h3>{title}</h3>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};