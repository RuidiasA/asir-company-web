import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Navbar } from '../components/navBar';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';
import { MainLayout } from '../layouts/mainLayout';

export const ContactPage = () => {
    const location = useLocation();

    useEffect(() => {
        if (!location.hash) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            return;
        }

        const targetId = location.hash.replace('#', '');
        const element = document.getElementById(targetId);

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
                <section className="relative isolate overflow-hidden bg-slate-900 py-12 md:py-16">
                    <img src="/prueba.jpeg" alt="" aria-hidden="true" className="absolute inset-0 -z-10 h-full w-full object-cover" />
                    <div className="absolute inset-0 -z-10 bg-black/60" aria-hidden="true" />

                    <div className="mx-auto flex w-full max-w-7xl flex-col px-4 sm:px-6 lg:px-8">
                        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-asir-light">
                            Contacto
                        </p>
                        <h1 id="contact-title" className="text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl">
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
