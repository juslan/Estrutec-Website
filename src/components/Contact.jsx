import { useState } from 'react'
import { MapPin, Phone, Mail, Loader2, CircleCheck, CircleAlert } from 'lucide-react'
import WhatsAppIcon from './icons/WhatsAppIcon'

const MAPS_LINK =
  'https://www.google.com/maps/place/Estrutec+S.R.L./@-17.3741299,-66.1059649,17z/data=!4m2!3m1!1s0x93e376cfe2c76d35:0xc249820e6ed40f37'
const MAPS_EMBED_SRC = 'https://www.google.com/maps?q=-17.3741299,-66.1059649&z=17&output=embed'

const INFO = [
  {
    icon: MapPin,
    label: 'Dirección',
    value: 'Av. Circunvalación esq. Max Fernández Nº 1212, Zona Arocagua, Cochabamba - Bolivia',
    href: MAPS_LINK,
  },
  { icon: Phone, label: 'Teléfono', value: '(591 4) 471-6506', href: 'tel:+59144716506' },
  {
    icon: WhatsAppIcon,
    label: 'WhatsApp',
    value: '769 74555',
    href: 'https://wa.me/59176974555',
  },
  {
    icon: Mail,
    label: 'Correo',
    value: 'info@estrutec.com.bo',
    href: 'mailto:info@estrutec.com.bo',
  },
]

export default function Contact() {
  const [status, setStatus] = useState('idle') // idle | sending | sent | error
  const [errorMsg, setErrorMsg] = useState('')

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('sending')
    setErrorMsg('')

    const form = e.target
    const payload = Object.fromEntries(new FormData(form).entries())

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        throw new Error(data.error || 'No se pudo enviar el mensaje.')
      }

      setStatus('sent')
      form.reset()
    } catch (err) {
      setStatus('error')
      setErrorMsg(err.message)
    }
  }

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

            <div className="rounded-lg overflow-hidden border border-paper-sunken bg-white h-56">
              <iframe
                title="Ubicación de Estrutec S.R.L. en Cochabamba"
                src={MAPS_EMBED_SRC}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
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
              disabled={status === 'sending'}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-brand-red hover:bg-brand-red-dark disabled:opacity-60 text-white font-bold px-8 py-3 rounded transition-colors"
            >
              {status === 'sending' && <Loader2 size={18} className="animate-spin" />}
              {status === 'sending' ? 'Enviando…' : 'Enviar mensaje'}
            </button>

            {status === 'sent' && (
              <p className="flex items-center gap-2 text-sm font-semibold text-emerald-600">
                <CircleCheck size={18} />
                Mensaje enviado. Te contactaremos pronto.
              </p>
            )}
            {status === 'error' && (
              <p className="flex items-center gap-2 text-sm font-semibold text-brand-red">
                <CircleAlert size={18} />
                {errorMsg}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
