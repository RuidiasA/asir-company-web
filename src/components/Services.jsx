import { servicesList } from '../data/asirData';

export const Services = () => {
    return (
        <section className="bg-asir-light py-12">
            <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
                <p className="mb-6 text-center text-lg font-bold uppercase tracking-[0.2em] text-asir-blue">Nuestros servicios</p>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-6 md:gap-8">
                    {servicesList.map(({ icon: Icon, title }) => (
                        <article
                            key={title}
                            className="flex flex-col items-center rounded-2xl border border-slate-200 bg-white px-8 py-8 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                        >
                            <Icon className="mb-1 h-12 w-12 text-asir-blue transition-transform hover:scale-110" />
                            <h2 className="mt-4 text-sm font-semibold uppercase tracking-wider text-asir-navy">{title}</h2>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};