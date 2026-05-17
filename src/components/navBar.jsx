import { Waves, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { navLinks } from '../data/asirData';

export const Navbar = () => {
    return (
        <header className="site-header">
            <div className="site-header__inner">
                <Link className="brand" to="/" aria-label="ASIR Company EIRL">
                    <img src="/logotipo-asir.webp" alt="ASIR Company EIRL Logo" className="brand__logo" />
                </Link>

                <nav className="main-nav" aria-label="Principal">
                    {navLinks.map((link) => (
                        link === 'Inicio' ? (
                            <Link key={link} to="/" className={link === 'Inicio' ? 'is-active' : ''}>
                                {link}
                            </Link>
                        ) : link === 'Contacto' ? (
                            <Link key={link} to="/contacto" className={link === 'Contacto' ? 'is-active' : ''}>
                                {link}
                            </Link>
                        ) : (
                            <a key={link} href={`#${link.toLowerCase()}`} className={link === 'Inicio' ? 'is-active' : ''}>
                                {link}
                            </a>
                        )
                    ))}
                </nav>

                <Link to="/contacto" className="header-cta">
                    <MessageCircle className="h-4 w-4" />
                    Cotiza ahora
                </Link>
            </div>
        </header>
    );
};