import towerImg from '../assets/projects/hero-torre-alta-tension.jpg'

export default function ImpactBanner() {
  return (
    <section className="relative h-[70vh] min-h-[420px] flex items-center justify-center overflow-hidden">
      <img
        src={towerImg}
        alt="Equipo de Estrutec montando una torre de alta tensión"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-[#050507]/55" />

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="text-brand-orange-light font-bold text-sm tracking-wide uppercase">
          Industria metalmecánica
        </span>
        <p className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mt-4 text-balance">
          La misma precisión en el aire que en la tierra.
        </p>
        <p className="text-white/80 mt-6 text-lg">
          Torres de alta tensión, telecomunicación y estructuras industriales montadas por personal
          propio, con protocolos de seguridad para trabajo en altura.
        </p>
      </div>
    </section>
  )
}
