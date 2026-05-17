import { ArrowRight, Play } from 'lucide-react';
import { companyStats } from '../data/asirData';

export const About = () => {
    return (
        <section className="bg-slate-50 py-20 sm:py-24">
            <div className="container-custom grid items-stretch gap-12 lg:grid-cols-[minmax(0,0.86fr)_minmax(0,0.95fr)]">
                <div className="flex h-full max-w-2xl flex-col">
                    <p className="eyebrow text-asir-blue">Sobre ASIR Company EIRL</p>
                    <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                        Comprometidos con tu confort, enfocados en la eficiencia
                    </h2>
                    <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
                        Somos una empresa especializada en brindar soluciones integrales en climatización, refrigeración y automatización, para los sectores industrial, comercial y residencial.
                    </p>
                    <button
                        type="button"
                        className="cursor-pointer mt-8 inline-flex items-center gap-2 rounded-lg border border-asir-blue bg-white px-5 py-3 text-sm font-semibold text-asir-blue shadow-sm transition-all duration-200 hover:bg-asir-blue hover:text-white hover:shadow-md"
                    >
                        Conoce más sobre nosotros
                        <ArrowRight className="h-4 w-4" />
                    </button>

                    <div className="mt-10 grid gap-6 sm:grid-cols-2">
                        {companyStats.map(({ icon: Icon, value, label }) => (
                            <article
                                key={label}
                                className="flex items-center gap-4 rounded-xl border border-slate-100 bg-white p-5 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
                            >
                                <Icon className="h-11 w-11 shrink-0 text-asir-blue" />
                                <div className="flex flex-col">
                                    <strong className="text-2xl font-bold tracking-tight text-slate-900">{value}</strong>
                                    <span className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">{label}</span>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>

                <div className="relative isolate h-full overflow-hidden rounded-2xl bg-linear-to-br from-slate-950 via-slate-900 to-slate-800 shadow-lg ring-1 ring-black/5">
                    <button
                        type="button"
                        className="absolute inset-0 m-auto flex h-16 w-16 items-center justify-center rounded-full bg-asir-light text-asir-navy shadow-2xl transition-transform duration-200 hover:scale-105"
                        aria-label="Reproducir video"
                    >
                        <Play className="h-6 w-6" />
                    </button>
                </div>
            </div>
        </section>
    );
};