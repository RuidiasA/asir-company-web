import { ChevronRight, Mail, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa6';

const services = [
    'Aire Acondicionado',
    'Ducterías y Ventilación',
    'Refrigeración Industrial',
    'Automatización y Control',
    'Mantenimiento Preventivo',
    'Servicios Integrales',
];

const quickLinks = ['Inicio', 'Nosotros', 'Servicios', 'Proyectos', 'Blog', 'Contacto'];
const hiddenQuickLinks = new Set(['nosotros', 'servicios', 'proyectos', 'blog']);

const contactItems = [
    {
        icon: Phone,
        label: '+51 953 054 689',
        href: 'tel:+51953054689',
    },
    {
        icon: FaWhatsapp,
        label: '+51 953 054 689',
        href: 'https://wa.me/51953054689',
    },
    {
        icon: Mail,
        label: 'm.martinez@asircompany.com',
        href: 'mailto:m.martinez@asircompany.com',
    },
    {
        icon: MapPin,
        label: 'Av. Los Constructores 123, Oficina 401\nUrbanización Ingeniería, Lima 15023, Perú',
    },
];

const socialLinks = [
    { icon: FaFacebookF, label: 'Facebook', href: 'https://facebook.com' },
    { icon: FaLinkedinIn, label: 'LinkedIn', href: 'https://linkedin.com' },
    { icon: FaInstagram, label: 'Instagram', href: 'https://instagram.com' },
    { icon: FaWhatsapp, label: 'WhatsApp', href: 'https://wa.me/51953054689' },
];

export const Footer = () => {
    return (
        <footer className="site-footer" aria-labelledby="footer-heading">
            <div className="site-footer__inner">
                <h2 id="footer-heading" className="sr-only">
                    Footer de ASIR Company EIRL
                </h2>

                <div className="site-footer__grid">
                    <section className="footer-branding" aria-label="Branding y redes sociales">
                        <Link className="footer-branding__logo" to="/" aria-label="ASIR Company EIRL">
                            <img src="/logotipo.svg" alt="ASIR Company EIRL" />
                        </Link>
                        <p className="footer-branding__lead">
                            Brindamos soluciones integrales en climatización, refrigeración, ventilación y automatización, con calidad, eficiencia e innovación.
                        </p>

                        <div className="footer-social" aria-label="Redes sociales">
                            {socialLinks.map(({ icon: Icon, label, href }) => (
                                <a key={label} href={href} className="footer-social__link" aria-label={label} target="_blank" rel="noreferrer">
                                    <Icon className="h-6 w-6" />
                                </a>
                            ))}
                        </div>
                    </section>

                    <nav className="footer-column" aria-label="Servicios">
                        <h3 className="footer-column__title">SERVICIOS</h3>
                        <ul className="footer-list">
                            {services.map((service) => (
                                <li key={service}>
                                    <a href="#servicios" className="footer-list__link">
                                        <ChevronRight className="h-4 w-4 text-blue-400" />
                                        <span>{service}</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <section className="footer-column" aria-label="Información de contacto">
                        <h3 className="footer-column__title">CONTÁCTANOS</h3>
                        <ul className="footer-contact-list">
                            {contactItems.map(({ icon: Icon, label, href }) => (
                                <li key={label} className="footer-contact-item">
                                    <Icon className="footer-contact-item__icon" />
                                    <div>
                                        {href ? (
                                            <a href={href} className="footer-contact-item__link">
                                                {label}
                                            </a>
                                        ) : (
                                            <p className="footer-contact-item__text">{label.split('\n').map((line) => (
                                                <span key={line} className="block">
                                                    {line}
                                                </span>
                                            ))}</p>
                                        )}
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </section>
                </div>
            </div>
        </footer>
    );
};