import { Clock3, Mail, MapPin, Phone } from 'lucide-react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Navbar } from '../components/navBar';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';
import { MainLayout } from '../layouts/mainLayout';

const contactInfo = [
    {
        icon: Phone,
        title: 'Teléfonos',
        lines: ['+51 987 654 321', '+51 912 345 678'],
    },
    {
        icon: Mail,
        title: 'Email',
        lines: ['info@asircompany.com'],
    },
    {
        icon: MapPin,
        title: 'Dirección',
        lines: ['Av. Los Constructores 123, Oficina 401', 'Urbanización Ingeniería, Lima 15023, Perú'],
    },
    {
        icon: Clock3,
        title: 'Horario de atención',
        lines: ['Lunes a viernes: 8:00 - 18:00', 'Sábados: 9:00 - 13:00'],
    },
];

const formFields = [
    { id: 'name', label: 'Nombre', type: 'text', placeholder: 'Tu nombre completo', autoComplete: 'name' },
    { id: 'email', label: 'Correo', type: 'email', placeholder: 'tu@email.com', autoComplete: 'email' },
    { id: 'subject', label: 'Asunto', type: 'text', placeholder: 'Motivo de tu consulta', autoComplete: 'off' },
];

export const ContactPage = () => {
    const location = useLocation();

    useEffect(() => {
        if (location.hash !== '#contact-title') {
            return;
        }

        const element = document.getElementById('contact-title');

        if (element) {
            requestAnimationFrame(() => {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            });
        }
    }, [location.hash]);

    return (
        <MainLayout>
            <Navbar />
            <main className="bg-slate-50 text-asir-navy">
                <section className="relative isolate overflow-hidden bg-slate-900 py-12">
                    <div
                        className="absolute inset-0 -z-10 bg-cover bg-center bg-no-repeat"
                        style={{ backgroundImage: "url('/prueba.jpeg')" }}
                        aria-hidden="true"
                    />
                    <div className="absolute inset-0 -z-10 bg-black/60" aria-hidden="true" />

                    <div className="container-custom flex flex-col">
                        <p className="mb-4 text-sm font-semibold tracking-[0.28em] text-asir-blue uppercase">
                            Contacto
                        </p>
                        <h1 className="text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl">
                            Estamos listos para ayudarte con tu proyecto
                        </h1>
                        <p className="mt-5 max-w-3xl text-base leading-relaxed text-slate-200 sm:text-lg">
                            Contáctanos y nuestro equipo te brindará la mejor solución en climatización, refrigeración, ventilación y automatización.
                        </p>
                    </div>
                </section>
                <Contact />
            </main>
            <Footer />
        </MainLayout>
    );
};
