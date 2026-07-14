import { Target, Eye } from 'lucide-react'
import officeImg from '../assets/projects/oficina-estrutec.jpg'

export default function About() {
  return (
    <section id="nosotros" className="py-24 bg-paper">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <span className="text-brand-red font-bold text-sm tracking-wide uppercase">
              Nosotros
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-ink mt-3 mb-6 text-balance">
              Casi dos décadas construyendo con fuerza y coraje
            </h2>
            <p className="text-ink-soft leading-relaxed mb-6">
              ESTRUTEC S.R.L. fue fundada el <strong className="text-ink">7 de noviembre de 2005</strong> por{' '}
              <strong className="text-ink">José Pedro Vargas Peñarrieta</strong>, con la decisión de
              emprender un nuevo horizonte plasmado en pura fuerza y coraje. Desde entonces, la
              empresa se mantiene en funcionamiento continuo desde Cochabamba, aportando al
              desarrollo de la región con obras civiles e industria metalmecánica en todo el país.
            </p>

            <div className="grid sm:grid-cols-2 gap-5 mt-8">
              <div className="bg-white border border-paper-sunken rounded-lg p-6 border-l-4 border-l-brand-blue">
                <Eye size={22} className="text-brand-blue mb-3" />
                <h3 className="font-display font-bold text-ink mb-2">Visión</h3>
                <p className="text-sm text-ink-soft leading-relaxed">
                  Posicionarnos en el ámbito nacional como una empresa líder en el ramo de la
                  Ingeniería, Diseño y Construcción, a la par de las nuevas tecnologías, mediante la
                  capacitación y especialización de nuestro personal.
                </p>
              </div>
              <div className="bg-white border border-paper-sunken rounded-lg p-6 border-l-4 border-l-brand-red">
                <Target size={22} className="text-brand-red mb-3" />
                <h3 className="font-display font-bold text-ink mb-2">Misión</h3>
                <p className="text-sm text-ink-soft leading-relaxed">
                  Proporcionar a nuestros clientes servicios de diseño y construcción con
                  asesoramiento de la mejor calidad, superando expectativas, con tecnología y
                  materiales certificados y personal altamente calificado.
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              src={officeImg}
              alt="Oficinas centrales de Estrutec S.R.L. en Cochabamba"
              className="rounded-xl shadow-xl w-full h-auto object-cover"
            />
            <div className="absolute -bottom-6 -left-6 bg-brand-blue text-white rounded-lg px-6 py-4 shadow-lg hidden sm:block">
              <p className="font-display text-2xl font-extrabold leading-none">Cochabamba</p>
              <p className="text-xs text-white/75 mt-1">Av. Circunvalación esq. Max Fernández</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
