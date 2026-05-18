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

const contactItems = [
    {
        id: 'phone',
        icon: Phone,
        label: '+51 953 054 689',
        href: 'tel:+51953054689',
        ariaLabel: 'Llamar por teléfono a ASIR Company al +51 953 054 689',
    },
    {
        id: 'whatsapp',
        icon: FaWhatsapp,
        label: '+51 953 054 689',
        href: 'https://wa.me/51953054689',
        target: '_blank',
        ariaLabel: 'Contactar por WhatsApp a ASIR Company al +51 953 054 689',
    },
    {
        id: 'email',
        icon: Mail,
        label: 'm.martinez@asircompany.com',
        href: 'mailto:m.martinez@asircompany.com',
        ariaLabel: 'Enviar un correo electrónico a ASIR Company',
    },
    {
        id: 'address',
        icon: MapPin,
        label: 'Av. Los Constructores 123, Oficina 401\nUrbanización Ingeniería, Lima 15023, Perú',
    },
];

const socialLinks = [
    { icon: FaFacebookF, label: 'Facebook', href: 'https://facebook.com', target: '_blank' },
    { icon: FaLinkedinIn, label: 'LinkedIn', href: 'https://linkedin.com', target: '_blank' },
    { icon: FaInstagram, label: 'Instagram', href: 'https://instagram.com', target: '_blank' },
    { icon: FaWhatsapp, label: 'WhatsApp', href: 'https://wa.me/51953054689', target: '_blank' },
];

export const Footer = () => {
    const handleLogoClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="border-t border-white/10 bg-asir-navy text-white" aria-labelledby="footer-heading">
            <div className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
                <h2 id="footer-heading" className="sr-only">
                    Footer de ASIR Company EIRL
                </h2>

                <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
                    <section className="flex max-w-xs flex-col" aria-label="Branding y redes sociales">
                        <Link className="mb-5 inline-flex items-center" to="/" aria-label="ASIR Company EIRL" onClick={handleLogoClick}>
                            <img
                                src="/logotipo-asir.webp"
                                alt="ASIR Company EIRL"
                                width="327"
                                height="70"
                                className="h-12 w-auto brightness-0 invert"
                            />
                        </Link>
                        <p className="text-sm leading-relaxed text-slate-300">
                            Brindamos soluciones integrales en climatización, refrigeración, ventilación y automatización, con calidad, eficiencia e innovación.
                        </p>

                        <div className="mt-6 flex flex-wrap gap-4" aria-label="Redes sociales">
                            {socialLinks.map(({ icon: Icon, label, href }) => (
                                <a
                                    key={label}
                                    href={href}
                                    className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 text-slate-200 transition-all duration-200 hover:border-asir-blue hover:bg-asir-blue hover:text-white"
                                    aria-label={label}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <Icon className="h-6 w-6" />
                                </a>
                            ))}
                        </div>
                    </section>

                    <nav aria-label="Servicios">
                        <h3 className="mb-5 text-sm font-bold uppercase tracking-[0.24em] text-white">SERVICIOS</h3>
                        <ul className="space-y-3">
                            {services.map((service) => (
                                <li key={service}>
                                    <a href="#servicios" className="flex items-center gap-2 text-sm text-slate-300 transition-all duration-200 hover:translate-x-1 hover:text-white">
                                        <ChevronRight className="h-4 w-4 text-blue-400" />
                                        <span>{service}</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <section aria-label="Información de contacto">
                        <h3 className="mb-5 text-sm font-bold uppercase tracking-[0.24em] text-white">CONTÁCTANOS</h3>
                        <ul className="mt-4 space-y-4">
                            {contactItems.map(({ id, icon: Icon, label, href, target, ariaLabel }) => (
                                <li key={id} className="flex items-start gap-3">
                                    <Icon className="mt-0.5 h-5 w-5 shrink-0 text-blue-400" />
                                    <div>
                                        {href ? (
                                            <a
                                                href={href}
                                                target={target}
                                                className="text-sm leading-relaxed text-slate-300 wrap-break-word hover:text-white"
                                                aria-label={ariaLabel}
                                            >
                                                {label}
                                            </a>
                                        ) : (
                                            <p className="text-sm leading-relaxed text-slate-300 wrap-break-word">
                                                {label.split('\n').map((line) => (
                                                    <span key={line} className="block">
                                                        {line}
                                                    </span>
                                                ))}
                                            </p>
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