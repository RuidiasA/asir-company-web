import { Clock3, Mail, MapPin, Phone, Send, Loader2, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';

export const Contact = () => {
    // Estados para manejar la experiencia del usuario (UX)
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        const formData = new FormData(event.target);


        formData.append("access_key", import.meta.env.VITE_WEB3FORMS_KEY);

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                setSubmitStatus('success');
                event.target.reset(); // Limpiamos el formulario
            } else {
                console.log("Error de Web3Forms", data);
                setSubmitStatus('error');
            }
        } catch (error) {
            console.error("Error en la petición", error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);

            // Ocultar el mensaje de éxito después de 5 segundos para que vuelva a la normalidad
            setTimeout(() => {
                setSubmitStatus(null);
            }, 5000);
        }
    };

    return (
        <section id="contacto" className="scroll-mt-24 bg-asir-light py-12 md:py-16 lg:py-24">
            <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-stretch">
                    <div className="flex h-full">
                        {/* Añadimos el onSubmit al form */}
                        <form onSubmit={handleSubmit} id="contact-form" className="scroll-mt-24 flex h-full w-full flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-md sm:p-6 lg:p-10">
                            <h2 className="text-center text-2xl font-bold uppercase tracking-[0.2em] text-asir-navy md:text-3xl">Cotiza tu proyecto</h2>

                            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="contact-name" className="text-sm font-semibold text-asir-navy">Nombre completo</label>
                                    <input id="contact-name" name="name" type="text" required autoComplete="name" placeholder="Tu nombre" className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-asir-navy shadow-sm outline-none transition-all placeholder:text-slate-400 focus:border-asir-blue focus:ring-2 focus:ring-asir-blue/20" />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="contact-email" className="text-sm font-semibold text-asir-navy">Correo electrónico</label>
                                    <input id="contact-email" name="email" type="email" required autoComplete="email" placeholder="tu@email.com" className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-asir-navy shadow-sm outline-none transition-all placeholder:text-slate-400 focus:border-asir-blue focus:ring-2 focus:ring-asir-blue/20" />
                                </div>
                                <div className="flex flex-col gap-2 sm:col-span-2">
                                    <label htmlFor="contact-subject" className="text-sm font-semibold text-asir-navy">Asunto</label>
                                    <input id="contact-subject" name="subject" type="text" required placeholder="Cuéntanos el servicio que necesitas" className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-asir-navy shadow-sm outline-none transition-all placeholder:text-slate-400 focus:border-asir-blue focus:ring-2 focus:ring-asir-blue/20" />
                                </div>
                                <div className="flex flex-1 flex-col gap-2 sm:col-span-2">
                                    <label htmlFor="contact-message" className="text-sm font-semibold text-asir-navy">Mensaje</label>
                                    <textarea id="contact-message" name="message" required rows="6" placeholder="Describe tu proyecto, requerimientos o dudas" className="min-h-35 w-full flex-1 resize-y rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-asir-navy shadow-sm outline-none transition-all placeholder:text-slate-400 focus:border-asir-blue focus:ring-2 focus:ring-asir-blue/20" />
                                </div>

                                {/* Opcional: Honeypot para evitar Spam en Web3Forms */}
                                <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={`mt-12 inline-flex w-full items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold uppercase text-white shadow-md transition-all active:scale-95 ${submitStatus === 'success'
                                    ? 'bg-green-500 hover:bg-green-600'
                                    : 'bg-asir-blue hover:bg-blue-700'
                                    } ${isSubmitting ? 'cursor-not-allowed opacity-80' : ''}`}
                            >
                                {isSubmitting ? (
                                    <>
                                        <Loader2 className="h-5 w-5 animate-spin" />
                                        Enviando...
                                    </>
                                ) : submitStatus === 'success' ? (
                                    <>
                                        <CheckCircle2 className="h-5 w-5" />
                                        ¡Mensaje Enviado!
                                    </>
                                ) : (
                                    <>
                                        <Send className="h-4 w-4" />
                                        Enviar solicitud
                                    </>
                                )}
                            </button>

                            {/* Mensaje de error (si falla) */}
                            {submitStatus === 'error' && (
                                <p className="mt-4 text-center text-sm font-medium text-red-500">
                                    Hubo un problema al enviar el mensaje. Por favor, intenta de nuevo.
                                </p>
                            )}
                        </form>
                    </div>

                    {/* El resto de tu código de tarjetas y mapa queda EXACTAMENTE igual aquí */}
                    <div className="flex h-full flex-col gap-8">
                        <div className="order-1 rounded-2xl border border-slate-100 bg-white p-4 shadow-sm lg:order-2">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-0 sm:gap-6">
                                <div className="flex items-start gap-4 pb-2 border-b border-slate-100 sm:border-0 sm:py-0 last:border-b-0">
                                    <div className="bg-slate-50 p-3 rounded-xl text-asir-blue">
                                        <Phone className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <p className="text-[11px] font-bold tracking-wider text-slate-400">Teléfono / WhatsApp</p>
                                        <a href="https://wa.me/51953054689" target='_blank' rel="noreferrer" className="mt-1 block text-sm font-semibold text-asir-navy">+51 953 054 689</a>
                                        <span className="mt-1 block text-xs leading-relaxed text-slate-500">Atención inmediata por WhatsApp</span>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4 py-2 border-b border-slate-100 sm:border-0 sm:py-0 last:border-b-0">
                                    <div className="bg-slate-50 p-3 rounded-xl text-asir-blue">
                                        <Mail className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <p className="text-[11px] font-bold tracking-wider text-slate-400">Correo electrónico</p>
                                        <a href="mailto:m.martinez@asircompany.com" className="mt-1 block text-sm font-semibold text-asir-navy">m.martinez@asircompany.com</a>
                                        <span className="mt-1 block text-xs leading-relaxed text-slate-500">Respuesta en horario laboral</span>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4 py-2 border-b border-slate-100 sm:border-0 sm:py-0 last:border-b-0">
                                    <div className="bg-slate-50 p-3 rounded-xl text-asir-blue">
                                        <MapPin className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <p className="text-[11px] font-bold tracking-wider text-slate-400">Dirección física</p>
                                        <a href="https://www.google.com/maps/search/?api=1&query=Av.%20Ejemplo%20123%2C%20Lima%2C%20Peru" target='_blank' rel="noreferrer" className="mt-1 block text-sm font-semibold text-asir-navy">Av. Ejemplo 123, Lima, Perú</a>
                                        <span className="mt-1 block text-xs leading-relaxed text-slate-500">Visitas previa coordinación</span>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4 pt-2 border-b border-slate-100 sm:border-0 sm:py-0 last:border-b-0">
                                    <div className="bg-slate-50 p-3 rounded-xl text-asir-blue">
                                        <Clock3 className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <p className="text-[11px] font-bold tracking-wider text-slate-400">Horario de atención</p>
                                        <div className="mt-1">
                                            <span className="block text-sm font-semibold text-asir-navy">Lun - Vie: 8:00 a 18:00</span>
                                            <span className="block text-xs leading-relaxed text-slate-500">Sábados: 9:00 a 13:00</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="order-2 h-full min-h-80 flex-1 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-md sm:min-h-90 lg:order-1" aria-label="Ubicación de ASIR Company EIRL">
                            <iframe
                                title="Ubicación de ASIR Company EIRL en Google Maps"
                                src="https://www.google.com/maps?q=Lima%2C%20Peru&output=embed"
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="h-full w-full border-0"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};