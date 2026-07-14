import { MapPin, Phone, Printer, Mail } from 'lucide-react'

const INFO = [
  {
    icon: MapPin,
    label: 'Dirección',
    value: 'Av. Circunvalación esq. Max Fernández Nº 1212, Zona Arocagua, Cochabamba - Bolivia',
  },
  { icon: Phone, label: 'Teléfono', value: '(591 4) 471-6506', href: 'tel:+59144716506' },
  { icon: Printer, label: 'Fax', value: '(591 4) 471-5902' },
  {
    icon: Mail,
    label: 'Correo',
    value: 'grupoestrutec@hotmail.com',
    href: 'mailto:grupoestrutec@hotmail.com',
  },
]

export default function Contact() {
  return (
    <section id="contacto" className="py-24 bg-paper-sunken">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-14">
          <span className="text-brand-red font-bold text-sm tracking-wide uppercase">
            Contacto
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-ink mt-3 text-balance">
            Conversemos sobre tu proyecto
          </h2>
          <p className="text-ink-soft mt-4 leading-relaxed">
            Escríbenos los detalles de tu obra y te contactaremos para coordinar una visita técnica
            o una cotización.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2 space-y-5">
            {INFO.map(({ icon: Icon, label, value, href }) => (
              <div key={label} className="flex gap-4 bg-white border border-paper-sunken rounded-lg p-5">
                <div className="w-11 h-11 shrink-0 rounded-lg bg-brand-blue/10 flex items-center justify-center">
                  <Icon size={20} className="text-brand-blue" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wide text-ink-soft mb-1">
                    {label}
                  </p>
                  {href ? (
                    <a href={href} className="text-ink font-semibold hover:text-brand-red">
                      {value}
                    </a>
                  ) : (
                    <p className="text-ink font-semibold">{value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          <form
            action="mailto:grupoestrutec@hotmail.com"
            method="post"
            encType="text/plain"
            className="lg:col-span-3 bg-white border border-paper-sunken rounded-xl p-8 space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="nombre" className="block text-sm font-semibold text-ink mb-1.5">
                  Nombre
                </label>
                <input
                  id="nombre"
                  name="nombre"
                  type="text"
                  required
                  className="w-full rounded-md border border-paper-sunken bg-paper px-4 py-2.5 text-sm text-ink focus:outline-none focus:ring-2 focus:ring-brand-blue"
                />
              </div>
              <div>
                <label htmlFor="telefono" className="block text-sm font-semibold text-ink mb-1.5">
                  Teléfono
                </label>
                <input
                  id="telefono"
                  name="telefono"
                  type="tel"
                  className="w-full rounded-md border border-paper-sunken bg-paper px-4 py-2.5 text-sm text-ink focus:outline-none focus:ring-2 focus:ring-brand-blue"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-ink mb-1.5">
                Correo electrónico
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full rounded-md border border-paper-sunken bg-paper px-4 py-2.5 text-sm text-ink focus:outline-none focus:ring-2 focus:ring-brand-blue"
              />
            </div>

            <div>
              <label htmlFor="mensaje" className="block text-sm font-semibold text-ink mb-1.5">
                Cuéntanos sobre tu proyecto
              </label>
              <textarea
                id="mensaje"
                name="mensaje"
                rows={5}
                required
                className="w-full rounded-md border border-paper-sunken bg-paper px-4 py-2.5 text-sm text-ink focus:outline-none focus:ring-2 focus:ring-brand-blue resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full sm:w-auto bg-brand-red hover:bg-brand-red-dark text-white font-bold px-8 py-3 rounded transition-colors"
            >
              Enviar mensaje
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
