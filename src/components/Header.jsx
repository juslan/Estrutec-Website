import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import logo from '../assets/estrutec-logo.png'
import WhatsAppIcon from './icons/WhatsAppIcon'

const LINKS = [
  { href: '#nosotros', label: 'Nosotros' },
  { href: '#servicios', label: 'Servicios' },
  { href: '#proyectos', label: 'Proyectos' },
  { href: '#contacto', label: 'Contacto' },
]

const WHATSAPP_URL =
  'https://wa.me/59176974555?text=Hola%2C%20quisiera%20solicitar%20una%20cotizaci%C3%B3n%20para%20mi%20proyecto.'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all ${
        scrolled ? 'bg-paper/95 backdrop-blur shadow-md' : 'bg-paper/70 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#inicio" className="flex items-center gap-2 shrink-0">
            <img src={logo} alt="Estrutec S.R.L. — Empresa Constructora" className="h-14 w-auto" />
          </a>

          <nav className="hidden lg:flex items-center gap-8">
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-semibold text-ink-soft hover:text-brand-red transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-5">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-semibold text-ink-soft hover:text-brand-blue transition-colors"
            >
              <WhatsAppIcon size={16} className="text-brand-orange" />
              +591 769 74555
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-red hover:bg-brand-red-dark text-white text-sm font-bold px-5 py-2.5 rounded transition-colors"
            >
              Solicitar cotización
            </a>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden p-2 text-ink"
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={open}
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-paper-sunken bg-paper">
          <nav className="flex flex-col px-4 py-4 gap-1">
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="px-2 py-3 text-base font-semibold text-ink border-b border-paper-sunken last:border-0"
              >
                {link.label}
              </a>
            ))}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-3 text-center bg-brand-red text-white font-bold px-5 py-3 rounded"
            >
              Solicitar cotización
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
