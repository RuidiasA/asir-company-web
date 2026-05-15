import { ArrowRight, ClipboardPenLine } from 'lucide-react';
import { featureHighlights } from '../data/asirData';

export const Hero = () => {
    return (
        <section id="inicio" className="hero-section hero-bg">
            <div className="hero-section__inner max-sm:grid-cols-1">
                <div className="hero-copy">
                    <p className="eyebrow">Automatización, servicios integrales y refrigeración</p>
                    <h1 className="max-sm:text-2xl">
                        Soluciones integrales en climatización y <span>refrigeración</span>
                    </h1>
                    <p className="hero-copy__lead">
                        Brindamos servicios de alta calidad en aire acondicionado, ventilación, refrigeración y automatización. Eficiencia, innovación y compromiso en cada proyecto.
                    </p>

                    <div className="hero-actions">
                        <button type="button" className="button button--primary">
                            Nuestros servicios
                            <ArrowRight className="h-4 w-4" />
                        </button>
                        <button type="button" className="button button--secondary">
                            <ClipboardPenLine className="h-4 w-4" />
                            Solicitar cotización
                        </button>
                    </div>
                </div>

                <div className="hero-visual" aria-hidden="true">
                    <div className="hero-visual__sky" />
                    <div className="hero-visual__cloud hero-visual__cloud--one" />
                    <div className="hero-visual__cloud hero-visual__cloud--two" />
                    <div className="hero-visual__pipe hero-visual__pipe--top" />
                    <div className="hero-visual__pipe hero-visual__pipe--mid" />
                    <div className="hero-visual__pipe hero-visual__pipe--bottom" />
                    <div className="hero-visual__unit hero-visual__unit--left" />
                    <div className="hero-visual__unit hero-visual__unit--main">
                        <div className="hero-visual__fan hero-visual__fan--top" />
                        <div className="hero-visual__fan hero-visual__fan--bottom" />
                        <div className="hero-visual__vents" />
                    </div>
                    <div className="hero-visual__tower" />

                    <div className="hero-features">
                        {featureHighlights.map(({ icon: Icon, text }) => (
                            <div key={text} className="hero-feature">
                                <Icon className="hero-feature__icon" />
                                <span>{text}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};