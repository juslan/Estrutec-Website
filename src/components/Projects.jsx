import { MapPin } from 'lucide-react'
import sanLuis from '../assets/projects/proyecto-san-luis-tarija.jpg'
import cocib from '../assets/projects/proyecto-cocib-tarija.jpg'
import torres from '../assets/projects/proyecto-torres-shinahota.jpg'
import domo from '../assets/projects/proyecto-coliseo-domo.jpg'
import estacion from '../assets/projects/proyecto-estacion-servicio.jpg'
import planta from '../assets/projects/planta-metalmecanica.jpg'

const PROJECTS = [
  {
    img: sanLuis,
    title: 'Complejo Deportivo San Luis',
    place: 'Tarija',
    tag: 'Estéreo estructura',
  },
  {
    img: cocib,
    title: 'Nave Industrial COCIB',
    place: 'Tarija',
    tag: 'Industria metalmecánica',
  },
  {
    img: torres,
    title: 'Línea de Alta Tensión',
    place: 'Shinahota',
    tag: 'Torres de transmisión',
  },
  {
    img: domo,
    title: 'Coliseo tipo domo',
    place: 'Cochabamba',
    tag: 'Estéreo estructura',
  },
  {
    img: estacion,
    title: 'Estación de Servicio Urkupiña',
    place: 'Cochabamba',
    tag: 'Obra civil + metalmecánica',
  },
  {
    img: planta,
    title: 'Planta propia de metalmecánica',
    place: 'Cochabamba',
    tag: 'Infraestructura propia',
  },
]

export default function Projects() {
  return (
    <section id="proyectos" className="py-24 bg-paper">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-14">
          <span className="text-brand-red font-bold text-sm tracking-wide uppercase">
            Proyectos
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-ink mt-3 text-balance">
            Obras que respaldan nuestra experiencia
          </h2>
          <p className="text-ink-soft mt-4 leading-relaxed">
            Una muestra de los proyectos civiles y metalmecánicos ejecutados por Estrutec en
            distintos departamentos de Bolivia.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((p) => (
            <article
              key={p.title}
              className="group relative rounded-xl overflow-hidden shadow-sm border border-paper-sunken h-80"
            >
              <img
                src={p.img}
                alt={`${p.title} — ${p.place}`}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <span className="inline-block bg-brand-orange text-white text-[11px] font-bold uppercase tracking-wide px-2.5 py-1 rounded mb-2">
                  {p.tag}
                </span>
                <h3 className="font-display text-lg font-bold text-white leading-tight mb-1">
                  {p.title}
                </h3>
                <p className="flex items-center gap-1.5 text-white/80 text-xs">
                  <MapPin size={13} />
                  {p.place}, Bolivia
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
