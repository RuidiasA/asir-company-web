import { Waves, MessageCircle } from 'lucide-react';
import { navLinks } from '../data/asirData';

export const Navbar = () => {
    return (
        <header className="site-header">
            <div className="site-header__inner">
                <a className="brand" href="#inicio" aria-label="ASIR Company EIRL">
                    <img src="/assets/logo.png" alt="ASIR Company EIRL Logo" className="brand__logo" />
                </a>

                <nav className="main-nav" aria-label="Principal">
                    {navLinks.map((link) => (
                        <a key={link} href="#" className={link === 'Inicio' ? 'is-active' : ''}>
                            {link}
                        </a>
                    ))}
                </nav>

                <button type="button" className="header-cta">
                    <MessageCircle className="h-4 w-4" />
                    Cotiza ahora
                </button>
            </div>
        </header>
    );
};