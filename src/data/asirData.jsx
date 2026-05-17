import {
    BadgeCheck,
    Cpu,
    Factory,
    ShieldCheck,
    ThermometerSnowflake,
    Users,
    Wind,
    Briefcase,
    UserCheck,
    Award,
    Headphones,
} from 'lucide-react';

export const navLinks = ['Inicio', 'Nosotros', 'Servicios', 'Proyectos', 'Blog', 'Contacto'];

export const featureHighlights = [
    { icon: ShieldCheck, text: 'Calidad Garantizada' },
    { icon: Users, text: 'Personal Especializado' },
    { icon: Cpu, text: 'Tecnología Avanzada' },
    { icon: BadgeCheck, text: 'Atención Personalizada' },
];

export const servicesList = [
    { icon: ThermometerSnowflake, title: 'Aire Acondicionado' },
    { icon: Wind, title: 'Ductería y Ventilación' },
    { icon: Factory, title: 'Refrigeración Industrial' },
    { icon: Cpu, title: 'Automatización y Control' },
    { icon: ShieldCheck, title: 'Mantenimiento Preventivo' },
    { icon: ShieldCheck, title: 'Servicios Generales' },
];

export const companyStats = [
    { value: '+20', label: 'Proyectos Ejecutados', icon: Briefcase },
    { value: '+10', label: 'Clientes Satisfechos', icon: UserCheck },
    { value: '+2', label: 'Años de Experiencia', icon: Award },
    { value: '24/7', label: 'Soporte Técnico', icon: Headphones },
];