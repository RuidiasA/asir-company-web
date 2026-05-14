import {
  ArrowRight,
  BadgeCheck,
  Building2,
  ClipboardPenLine,
  Cog,
  Fan,
  Play,
  ShieldCheck,
  Snowflake,
  Users,
  Waves,
  Wrench,
  Zap,
  MessageCircle,
} from 'lucide-react'

const navLinks = ['Inicio', 'Nosotros', 'Servicios', 'Proyectos', 'Blog', 'Contacto']

const featureHighlights = [
  { icon: ShieldCheck, text: 'Calidad Garantizada' },
  { icon: Users, text: 'Personal Especializado' },
  { icon: Zap, text: 'Tecnología Avanzada' },
  { icon: BadgeCheck, text: 'Atención Personalizada' },
]

const services = [
  { icon: Snowflake, title: 'Aire Acondicionado' },
  { icon: Fan, title: 'Ductería y Ventilación' },
  { icon: Building2, title: 'Refrigeración Industrial' },
  { icon: Cog, title: 'Automatización y Control' },
  { icon: Wrench, title: 'Mantenimiento Preventivo' },
  { icon: ClipboardPenLine, title: 'Servicios Generales' },
]

const stats = [
  { value: '+150', label: 'Proyectos Ejecutados' },
  { value: '+80', label: 'Clientes Satisfechos' },
  { value: '+12', label: 'Años de Experiencia' },
  { value: '24/7', label: 'Soporte Técnico' },
]

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <Waves className="h-5 w-5 text-blue-600" />
            <span className="text-sm font-bold tracking-wide text-slate-900 md:text-base">ASIR COMPANY EIRL</span>
          </div>

          <ul className="hidden items-center gap-6 md:flex">
            {navLinks.map((link) => (
              <li key={link}>
                <a href="#" className="text-sm text-slate-600 transition-colors duration-200 hover:text-blue-600">
                  {link}
                </a>
              </li>
            ))}
          </ul>

          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700"
          >
            <MessageCircle className="h-4 w-4" />
            Cotiza Ahora
          </button>
        </div>
      </nav>

      <main>
        <section className="px-6 py-16 md:py-24">
          <div className="relative mx-auto grid w-full max-w-7xl gap-10 md:grid-cols-2 md:items-center">
            <div>
              <h1 className="text-4xl font-bold leading-tight text-slate-900 md:text-6xl">
                Soluciones integrales en <span className="text-blue-600">climatización y refrigeración</span>
              </h1>
              <p className="mt-6 max-w-xl text-base text-slate-500 md:text-lg">
                Diseñamos e implementamos sistemas eficientes para proyectos residenciales, comerciales e industriales con altos estándares de calidad.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <button
                  type="button"
                  className="inline-flex items-center gap-2 rounded-md bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
                >
                  Nuestros Servicios
                  <ArrowRight className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  className="inline-flex items-center gap-2 rounded-md border border-blue-600 px-5 py-3 text-sm font-semibold text-blue-600 transition hover:bg-blue-50"
                >
                  Solicitar Cotización
                  <ClipboardPenLine className="h-4 w-4" />
                </button>
              </div>
            </div>

            <div className="relative pt-4 md:pt-0">
              <div className="h-[320px] rounded-xl bg-slate-200 md:h-[430px]" />

              <div className="relative mx-auto -mt-12 w-[92%] rounded-xl bg-white p-4 shadow-lg md:absolute md:-bottom-12 md:left-1/2 md:w-[95%] md:-translate-x-1/2 md:p-5">
                <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
                  {featureHighlights.map(({ icon: Icon, text }) => (
                    <div key={text} className="flex items-center gap-2">
                      <Icon className="h-5 w-5 shrink-0 text-blue-600" />
                      <p className="text-xs font-medium text-slate-700">{text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white px-6 py-16 md:pt-24">
          <div className="mx-auto w-full max-w-7xl">
            <p className="text-center text-sm font-bold uppercase tracking-[0.2em] text-blue-600">NUESTROS SERVICIOS</p>
            <div className="mt-10 grid grid-cols-2 gap-y-8 md:grid-cols-6">
              {services.map(({ icon: Icon, title }, idx) => (
                <div
                  key={title}
                  className={`flex flex-col items-center justify-center px-4 text-center ${
                    idx !== services.length - 1 ? 'md:border-r md:border-slate-200' : ''
                  }`}
                >
                  <Icon className="h-10 w-10 text-blue-600" />
                  <p className="mt-4 text-sm font-medium text-slate-700">{title}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-slate-900 px-6 py-16 text-white">
          <div className="mx-auto grid w-full max-w-7xl gap-10 md:grid-cols-3">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-300">SOBRE ASIR COMPANY EIRL</p>
              <h2 className="mt-4 text-3xl font-bold leading-tight">Comprometidos con tu confort, enfocados en la eficiencia</h2>
              <p className="mt-5 text-slate-300">
                Somos especialistas en soluciones HVAC-R con enfoque en innovación, ahorro energético y acompañamiento técnico en cada fase del proyecto.
              </p>
              <button
                type="button"
                className="mt-8 rounded-md border border-white px-5 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-slate-900"
              >
                Conoce más sobre nosotros
              </button>
            </div>

            <div className="grid grid-cols-2 border border-slate-700">
              {stats.map(({ value, label }) => (
                <div key={label} className="border border-slate-700 p-6">
                  <Zap className="h-5 w-5 text-blue-300" />
                  <p className="mt-3 text-3xl font-bold text-white">{value}</p>
                  <p className="mt-2 text-sm text-slate-300">{label}</p>
                </div>
              ))}
            </div>

            <div className="relative min-h-[280px] rounded-xl bg-slate-700">
              <button
                type="button"
                className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-slate-900 shadow-lg"
                aria-label="Reproducir video"
              >
                <Play className="h-6 w-6" />
              </button>
            </div>
          </div>
        </section>

        <section className="bg-slate-800 px-6 py-16">
          <div className="mx-auto w-full max-w-4xl">
            <h2 className="text-center text-3xl font-bold text-white">COTIZA TU PROYECTO</h2>
            <form className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2">
              <input
                type="text"
                placeholder="Nombre Completo"
                className="rounded-md border border-slate-600 bg-transparent px-4 py-3 text-white placeholder:text-slate-400 focus:border-blue-500 focus:outline-none"
              />
              <input
                type="email"
                placeholder="Email"
                className="rounded-md border border-slate-600 bg-transparent px-4 py-3 text-white placeholder:text-slate-400 focus:border-blue-500 focus:outline-none"
              />
              <input
                type="text"
                placeholder="Asunto"
                className="rounded-md border border-slate-600 bg-transparent px-4 py-3 text-white placeholder:text-slate-400 focus:border-blue-500 focus:outline-none md:col-span-2"
              />
              <textarea
                rows="5"
                placeholder="Mensaje"
                className="rounded-md border border-slate-600 bg-transparent px-4 py-3 text-white placeholder:text-slate-400 focus:border-blue-500 focus:outline-none md:col-span-2"
              />
              <button
                type="submit"
                className="w-full rounded-md bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700 md:col-span-2"
              >
                Enviar Solicitud
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-800 bg-slate-900 px-6 py-6">
        <p className="text-center text-xs text-slate-400">
          ASIR COMPANY EIRL © 2026. Todos los derechos reservados. | Av. Ejemplo 123, Lima - Perú | Términos y Condiciones
        </p>
      </footer>
    </div>
  )
}

export default App
