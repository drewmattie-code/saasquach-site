import { ArrowRight, Zap, Shield, BarChart3 } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative hero-gradient overflow-hidden py-24 sm:py-32 lg:py-40">
      {/* Background grid */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.06]" style={{
        backgroundImage: 'linear-gradient(#0D6B65 1px, transparent 1px), linear-gradient(90deg, #0D6B65 1px, transparent 1px)',
        backgroundSize: '64px 64px'
      }} />

      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-teal-400/8 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 dark:bg-teal-900/30 border border-teal-200 dark:border-teal-800 text-teal-700 dark:text-teal-400 text-xs font-semibold uppercase tracking-wider mb-8">
          <Zap size={12} />
          Enterprise Supply Chain Intelligence
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-6 leading-[1.05]">
          Supply chain clarity,{' '}
          <span className="gradient-text">powered by AI</span>
        </h1>

        <p className="max-w-2xl mx-auto text-lg sm:text-xl text-gray-600 dark:text-gray-400 mb-10 leading-relaxed">
          SaaSquach AI gives distribution and manufacturing enterprises real-time intelligence across inventory, suppliers, risk, and operations — connected directly to your ERP.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-teal-500 hover:bg-teal-600 text-white font-semibold text-base transition-all shadow-lg shadow-teal-500/25 hover:shadow-teal-500/40"
          >
            Request Demo <ArrowRight size={18} />
          </a>
          <a
            href="#products"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-teal-500 dark:hover:border-teal-500 font-semibold text-base transition-all"
          >
            Explore Products
          </a>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-3 gap-8 max-w-xl mx-auto">
          {[
            { icon: <BarChart3 size={20} className="text-teal-500" />, value: '25K+', label: 'SKUs tracked' },
            { icon: <Shield size={20} className="text-teal-500" />, value: '99.9%', label: 'Uptime SLA' },
            { icon: <Zap size={20} className="text-teal-500" />, value: '<15 min', label: 'Risk refresh cycle' },
          ].map(s => (
            <div key={s.label} className="flex flex-col items-center gap-1">
              {s.icon}
              <div className="text-2xl font-bold text-gray-900 dark:text-white">{s.value}</div>
              <div className="text-xs text-gray-500 dark:text-gray-500">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
