import { ArrowRight, ClipboardPenLine } from 'lucide-react';
import { Link } from 'react-router-dom';
import { featureHighlights } from '../data/asirData';

export const Hero = () => {
    return (
        <section id="inicio" className="relative flex items-center min-h-[85vh] py-20 lg:py-16 overflow-hidden">
            <img
                src="/aire-acondicionado-industrial.webp"
                alt=""
                aria-hidden="true"
                width="1920"
                height="990"
                className="absolute inset-0 w-full h-full object-cover object-right z-0"
            />
            <div className="absolute inset-0 bg-white/90 md:bg-transparent md:bg-linear-to-r md:from-white md:via-white/90 md:to-transparent z-0" />

            <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                <div className="max-w-[65ch] space-y-10">
                    <div className="space-y-4">
                        <p className="text-xs font-semibold uppercase tracking-wider text-asir-blue">
                            Automatización, servicios integrales y refrigeración
                        </p>
                        <h1 className="text-4xl font-bold leading-tight text-asir-navy md:text-5xl">
                            Soluciones integrales en climatización y <span className="text-asir-blue">refrigeración</span>
                        </h1>
                        <p className="max-w-lg text-sm font-semibold leading-relaxed text-slate-600 sm:text-base">
                            Brindamos servicios de alta calidad en aire acondicionado, ventilación, refrigeración y automatización. Eficiencia, innovación y compromiso en cada proyecto.
                        </p>
                    </div>

                    <div>
                        <Link
                            to="/contacto#contact-form"
                            className="inline-flex w-full items-center justify-center gap-2 rounded-lg border-2 border-blue-600 bg-transparent px-5 py-4 text-sm font-semibold uppercase text-blue-600 shadow-sm transition hover:bg-blue-50 active:scale-95 sm:w-auto"
                        >
                            <ClipboardPenLine className="h-5 w-5" />
                            Solicitar cotización
                        </Link>
                    </div>

                    <hr className="border-slate-200/60" />

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-y-5 gap-x-2 mt-8">
                        {featureHighlights.map(({ icon: Icon, text }) => (
                            <div key={text} className="flex items-center gap-3">
                                <Icon className="h-6 w-6 shrink-0 text-asir-blue md:h-7 md:w-7" />
                                <span className="text-xs font-bold leading-tight text-slate-800 sm:text-sm">{text}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};