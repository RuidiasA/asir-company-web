import { FaWhatsapp } from 'react-icons/fa6';

export const FloatingWhatsAppButton = () => {
    return (
        <a
            href="https://wa.me/51953054689"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contactar por WhatsApp"
            className="fixed bottom-[calc(env(safe-area-inset-bottom)+1.25rem)] right-[calc(env(safe-area-inset-right)+1.25rem)] z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition-all duration-300 hover:scale-110 hover:bg-[#128C7E] sm:bottom-[calc(env(safe-area-inset-bottom)+1.5rem)] sm:right-[calc(env(safe-area-inset-right)+1.5rem)] sm:h-16 sm:w-16 lg:bottom-[calc(env(safe-area-inset-bottom)+2rem)] lg:right-[calc(env(safe-area-inset-right)+2rem)]"
        >
            <FaWhatsapp className="h-7 w-7 sm:h-8 sm:w-8" aria-hidden="true" />
        </a>
    );
};
