import { FaWhatsapp } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';

export const Navbar = () => {
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const menuRef = useRef(null);
    const toggleRef = useRef(null);

    const handleLogoClick = () => {
        // Navigate home and scroll to top
        navigate('/');
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setOpen(false);
    };

    const goToContact = () => {
        setOpen(false);
        navigate('/contacto#contact-form');
    };

    const goToHome = () => {
        setOpen(false);
        navigate('/');
        // small delay to ensure route change then scroll
        setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 80);
    };

    useEffect(() => {
        function onDocClick(e) {
            // If click is outside menu AND not the toggle button, close menu
            const clickedOutsideMenu = menuRef.current && !menuRef.current.contains(e.target);
            const clickedToggle = toggleRef.current && toggleRef.current.contains(e.target);
            if (open && clickedOutsideMenu && !clickedToggle) {
                setOpen(false);
            }
        }

        document.addEventListener('mousedown', onDocClick);
        return () => document.removeEventListener('mousedown', onDocClick);
    }, [open]);

    return (
        <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-asir-light/90 py-4 shadow-lg backdrop-blur-sm">
            <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                <div className="flex items-center gap-4">
                    <Link className="inline-flex items-center" to="/" aria-label="ASIR Company EIRL" onClick={handleLogoClick}>
                        <img src="/logotipo-asir.webp" alt="ASIR Company EIRL Logo" className="h-10 w-auto" />
                    </Link>
                </div>

                {/* Desktop CTA */}
                <div className="hidden lg:flex items-center gap-3">
                    <Link
                        to="/contacto#contact-form"
                        className="items-center gap-2 rounded-lg bg-asir-blue px-8 py-4 font-bold uppercase text-white transition hover:bg-blue-700 inline-flex"
                    >
                        <FaWhatsapp className="h-6 w-6" />
                        Cotiza ahora
                    </Link>
                </div>

                {/* Mobile hamburger */}
                <div className="lg:hidden flex items-center">
                    <button
                        aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
                        aria-expanded={open}
                        aria-controls="mobile-menu"
                        onClick={() => setOpen((v) => !v)}
                        ref={toggleRef}
                        className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-white/0 text-asir-navy shadow-sm ring-1 ring-black/5 transition hover:bg-slate-50"
                    >
                        <span className="sr-only">Abrir menú</span>
                        {open ? (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile menu panel (overlay) */}
            {open && (
                <div
                    id="mobile-menu"
                    ref={menuRef}
                    className="fixed inset-x-0 top-16 z-40 bg-asir-light shadow-xl lg:hidden max-h-[calc(100vh-4rem)] overflow-auto transition-all duration-200"
                >
                    <div className="mx-auto max-w-3xl px-4 py-4">
                        <nav className="flex flex-col gap-3 pt-2">
                            <button onClick={goToHome} className="w-full text-left rounded-lg bg-white/90 px-4 py-3 font-semibold shadow-sm hover:bg-slate-50">Ir al inicio</button>
                            <button onClick={goToContact} className="w-full text-left rounded-lg bg-asir-blue px-4 py-3 font-semibold text-white shadow-sm hover:bg-blue-700">Ir a Contacto</button>
                        </nav>
                    </div>
                </div>
            )}
        </header>
    );
};