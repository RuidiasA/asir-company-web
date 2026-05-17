import { Waves } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { navLinks } from '../data/asirData';

export const Navbar = () => {
    const handleLogoClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <header className="site-header">
            <div className="site-header__inner">
                <Link className="brand" to="/" aria-label="ASIR Company EIRL" onClick={handleLogoClick}>
                    <img src="/logotipo-asir.webp" alt="ASIR Company EIRL Logo" className="brand__logo" />
                </Link>

                <Link to="/contacto#contact-title" className="header-cta">
                    <FaWhatsapp className="h-6 w-6" />
                    Cotiza ahora
                </Link>
            </div>
        </header>
    );
};