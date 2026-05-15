import {
    BadgeCheck, Cpu, Factory, ShieldCheck, ThermometerSnowflake, Users, Wind
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
    { value: '+150', label: 'Proyectos Ejecutados', icon: Factory },
    { value: '+80', label: 'Clientes Satisfechos', icon: ShieldCheck },
    { value: '+12', label: 'Años de Experiencia', icon: Cpu },
    { value: '24/7', label: 'Soporte Técnico', icon: Wind },
];