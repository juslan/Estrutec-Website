const CLIENTS = [
  'Industrias RAVI S.A.',
  'Univalle S.A.',
  'Sinature',
  'UPRE',
  'EBC',
  'AMVI',
  'Inga Gongora Ltda.',
  'Albomonte S.R.L.',
  'Import Export Salcedo Ltda.',
  'ELFEC S.A.',
  'Nuevatel PCS de Bolivia S.A.',
  'C.M.C. Ingeniería',
]

export default function Clients() {
  return (
    <section id="clientes" className="py-24 bg-brand-blue">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-14">
          <span className="text-brand-orange-light font-bold text-sm tracking-wide uppercase">
            Clientes
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white mt-3 text-balance">
            Empresas que confiaron en Estrutec
          </h2>
          <p className="text-white/70 mt-4 leading-relaxed">
            Industria, telecomunicaciones, energía y universidades cuentan con nuestra experiencia
            en diseño y construcción.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {CLIENTS.map((name) => (
            <div
              key={name}
              className="bg-white/5 border border-white/15 rounded-lg px-5 py-6 flex items-center justify-center text-center hover:bg-white/10 transition-colors"
            >
              <span className="text-white/90 font-display font-bold text-sm sm:text-base leading-snug">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
