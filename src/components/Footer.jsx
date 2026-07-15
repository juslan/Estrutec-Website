import { MapPin, Phone, MessageCircle, Mail } from 'lucide-react'
import icon from '../assets/estrutec-icon.png'

const LINKS = [
  { href: '#nosotros', label: 'Nosotros' },
  { href: '#servicios', label: 'Servicios' },
  { href: '#proyectos', label: 'Proyectos' },
  { href: '#contacto', label: 'Contacto' },
]

export default function Footer() {
  return (
    <footer className="bg-[#0a0a12] text-white/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-2">
            <img src={icon} alt="" className="h-12 w-auto mb-4" />
            <p className="font-display text-xl font-extrabold text-white mb-2">ESTRUTEC S.R.L.</p>
            <p className="text-sm leading-relaxed max-w-sm">
              Empresa constructora boliviana fundada en 2005, especializada en obras civiles e
              industria metalmecánica: naves industriales, torres, coliseos y edificios en todo el
              país.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wide mb-4">
              Navegación
            </h4>
            <ul className="space-y-2.5">
              {LINKS.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-sm hover:text-brand-orange-light transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wide mb-4">Contacto</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex gap-2">
                <MapPin size={16} className="shrink-0 mt-0.5 text-brand-orange-light" />
                Av. Circunvalación esq. Max Fernández Nº 1212, Cochabamba - Bolivia
              </li>
              <li className="flex gap-2">
                <Phone size={16} className="shrink-0 mt-0.5 text-brand-orange-light" />
                <a href="tel:+59144716506" className="hover:text-white">
                  (591 4) 471-6506
                </a>
              </li>
              <li className="flex gap-2">
                <MessageCircle size={16} className="shrink-0 mt-0.5 text-brand-orange-light" />
                <a href="https://wa.me/59176974555" className="hover:text-white">
                  WhatsApp: 769 74555
                </a>
              </li>
              <li className="flex gap-2">
                <Mail size={16} className="shrink-0 mt-0.5 text-brand-orange-light" />
                <a href="mailto:info@estrutec.com.bo" className="hover:text-white">
                  info@estrutec.com.bo
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/50">
          <p>© {new Date().getFullYear()} Estrutec S.R.L. Todos los derechos reservados.</p>
          <p>Cochabamba, Bolivia</p>
        </div>
      </div>
    </footer>
  )
}
