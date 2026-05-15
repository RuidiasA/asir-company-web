import { ArrowRight, Play } from 'lucide-react';
import { companyStats } from '../data/asirData';

export const About = () => {
    return (
        <section className="about-section">
            <div className="about-section__inner max-sm:grid-cols-1">
                <div className="about-copy">
                    <p className="eyebrow eyebrow--light">Sobre ASIR Company EIRL</p>
                    <h2>Comprometidos con tu confort, enfocados en la eficiencia</h2>
                    <p>
                        Somos una empresa especializada en brindar soluciones integrales en climatización, refrigeración y automatización, para los sectores industrial, comercial y residencial.
                    </p>
                    <button type="button" className="button button--ghost">
                        Conoce más sobre nosotros
                        <ArrowRight className="h-4 w-4" />
                    </button>
                </div>

                <div className="stats-panel">
                    {companyStats.map(({ icon: Icon, value, label }) => (
                        <article key={label} className="stat-card">
                            <Icon className="stat-card__icon" />
                            <div className="stat-card__item">
                                <strong>{value}</strong>
                                <span>{label}</span>
                            </div>
                        </article>
                    ))}
                </div>

                <div className="video-card">
                    <div className="video-card__art" aria-hidden="true">
                        <div className="video-card__pipe video-card__pipe--top" />
                        <div className="video-card__pipe video-card__pipe--middle" />
                        <div className="video-card__unit" />
                        <div className="video-card__fan" />
                    </div>
                    <button type="button" className="video-card__play" aria-label="Reproducir video">
                        <Play className="h-6 w-6" />
                    </button>
                </div>
            </div>
        </section>
    );
};