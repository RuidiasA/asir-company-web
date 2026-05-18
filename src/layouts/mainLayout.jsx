import { FloatingWhatsAppButton } from '../components/FloatingWhatsAppButton';

export const MainLayout = ({ children }) => {
    return (
        <div className="flex min-h-screen flex-col">
            {children}
            <FloatingWhatsAppButton />
        </div>
    );
};