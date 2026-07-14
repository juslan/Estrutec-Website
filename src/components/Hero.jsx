import { ArrowRight, MapPin, MessageCircle } from 'lucide-react'
import heroImg from '../assets/projects/hero-torre-alta-tension.jpg'

const WHATSAPP_URL =
  'https://wa.me/59176974555?text=Hola%2C%20quisiera%20solicitar%20una%20cotizaci%C3%B3n%20para%20mi%20proyecto.'

export default function Hero() {
  return (
    <section id="inicio" className="relative flex items-center min-h-[92vh] pt-20">
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Equipo de Estrutec montando una torre de alta tensión"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#000814]/90 via-[#000814]/70 to-[#000814]/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#000814]/80 via-transparent to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 text-brand-orange-light font-semibold text-sm tracking-wide uppercase mb-5">
            <MapPin size={16} />
            Cochabamba, Bolivia · desde 2005
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.05] mb-6 text-balance">
            Construimos y montamos la infraestructura que mueve Bolivia
          </h1>

          <p className="text-lg text-white/85 leading-relaxed mb-10 max-w-xl">
            Estrutec S.R.L. diseña, calcula, construye y monta obras civiles e industria
            metalmecánica: naves industriales, torres de transmisión, coliseos, edificios y
            estaciones de servicio, con personal propio y materiales certificados.
          </p>

          <div className="flex flex-wrap gap-4 mb-16">
            <a
              href="#proyectos"
              className="inline-flex items-center gap-2 bg-brand-red hover:bg-brand-red-dark text-white font-bold px-6 py-3.5 rounded transition-colors"
            >
              Ver proyectos
              <ArrowRight size={18} />
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold px-6 py-3.5 rounded backdrop-blur-sm transition-colors"
            >
              <MessageCircle size={18} />
              Solicitar cotización
            </a>
          </div>

          <dl className="grid grid-cols-3 gap-6 max-w-lg border-t border-white/20 pt-8">
            <div>
              <dt className="sr-only">Año de fundación</dt>
              <dd className="font-display text-3xl font-extrabold text-white">2005</dd>
              <p className="text-xs text-white/70 mt-1">Fundada en Cochabamba</p>
            </div>
            <div>
              <dt className="sr-only">Líneas de negocio</dt>
              <dd className="font-display text-3xl font-extrabold text-white">2</dd>
              <p className="text-xs text-white/70 mt-1">Obras civiles y metalmecánica</p>
            </div>
            <div>
              <dt className="sr-only">Empresas que confiaron</dt>
              <dd className="font-display text-3xl font-extrabold text-white">12+</dd>
              <p className="text-xs text-white/70 mt-1">Empresas que confiaron en Estrutec</p>
            </div>
          </dl>
        </div>
      </div>
    </section>
  )
}
