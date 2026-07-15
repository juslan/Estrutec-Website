import { ArrowRight, MessageCircle } from 'lucide-react'
import heroImg from '../assets/projects/hero-oficina-estrutec.jpg'
import logo from '../assets/estrutec-logo.png'

const WHATSAPP_URL =
  'https://wa.me/59176974555?text=Hola%2C%20quisiera%20solicitar%20una%20cotizaci%C3%B3n%20para%20mi%20proyecto.'

export default function Hero() {
  return (
    <section id="inicio" className="relative flex items-center min-h-[92vh] pt-20">
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Fachada de las oficinas centrales de Estrutec en Cochabamba"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#050507]/45" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050507]/75 via-[#050507]/35 to-[#050507]/85" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full text-center flex flex-col items-center">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-orange-light leading-tight text-balance">
          Construyendo el futuro de Bolivia con
        </h1>

        <img src={logo} alt="Estrutec S.R.L. — Empresa Constructora" className="w-64 sm:w-80 h-auto my-6" />

        <p className="text-lg text-white/85 leading-relaxed mb-10 max-w-xl">
          Diseñamos, calculamos, construimos y montamos obras civiles e industria metalmecánica:
          naves industriales, torres de transmisión, coliseos, edificios y estaciones de servicio,
          desde Cochabamba para todo el país.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-16">
          <a
            href="#proyectos"
            className="inline-flex items-center gap-2 bg-brand-orange hover:bg-brand-orange-light text-white font-bold px-6 py-3.5 rounded transition-colors"
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

        <dl className="grid grid-cols-3 gap-6 w-full max-w-lg border-t border-white/20 pt-8">
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
    </section>
  )
}
