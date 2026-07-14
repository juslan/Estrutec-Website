import { Building2, Factory, CircleCheck } from 'lucide-react'

const CIVIL = [
  'Estructuras de hormigón armado',
  'Edificios y complejos industriales',
  'Hoteles, auditorios y unidades educativas',
  'Puentes y pasarelas',
  'Gaviones y colchonetas',
  'Planos arquitectónicos y proyectos',
  'Presupuestos y especificaciones técnicas',
]

const METALMECANICA = [
  'Naves industriales',
  'Estéreo estructuras y coliseos deportivos',
  'Torres de telecomunicación',
  'Torres de alta tensión y subestaciones eléctricas',
  'Estaciones de servicio',
  'Gradas industriales y arquitectónicas',
  'Cálculo, diseño, construcción y montaje',
]

function ServiceCard({ icon: Icon, tint, title, tagline, items }) {
  return (
    <div className="bg-white border border-paper-sunken rounded-xl p-8 flex flex-col h-full">
      <div
        className="w-14 h-14 rounded-lg flex items-center justify-center mb-6"
        style={{ background: tint === 'blue' ? '#001881' : '#e0030a' }}
      >
        <Icon size={26} className="text-white" />
      </div>
      <h3 className="font-display text-2xl font-extrabold text-ink mb-2">{title}</h3>
      <p className="text-ink-soft text-sm mb-6">{tagline}</p>
      <ul className="space-y-3 mt-auto">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2.5 text-sm text-ink">
            <CircleCheck
              size={18}
              className={`shrink-0 mt-0.5 ${tint === 'blue' ? 'text-brand-blue' : 'text-brand-red'}`}
            />
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function Services() {
  return (
    <section id="servicios" className="py-24 bg-paper-sunken">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-14">
          <span className="text-brand-red font-bold text-sm tracking-wide uppercase">
            Servicios
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-ink mt-3 text-balance">
            Dos especialidades, un mismo estándar de calidad
          </h2>
          <p className="text-ink-soft mt-4 leading-relaxed">
            Cubrimos el ciclo completo de un proyecto: diseño, cálculo estructural, construcción y
            montaje, tanto en obra civil como en estructuras metálicas industriales.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <ServiceCard
            icon={Building2}
            tint="blue"
            title="Obras Civiles y Arquitectónicas"
            tagline="Construcción de estructuras de hormigón armado y proyectos arquitectónicos llave en mano."
            items={CIVIL}
          />
          <ServiceCard
            icon={Factory}
            tint="red"
            title="Industria Metalmecánica"
            tagline="Cálculo, diseño, construcción y montaje de estructuras metálicas para la industria."
            items={METALMECANICA}
          />
        </div>
      </div>
    </section>
  )
}
