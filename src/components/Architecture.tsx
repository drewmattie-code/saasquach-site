import { ArrowRight, Database, Cpu, Globe, BarChart3, Shield } from 'lucide-react'

const layers = [
  {
    label: 'Data Ingestion',
    color: 'bg-blue-500',
    textColor: 'text-blue-700 dark:text-blue-400',
    borderColor: 'border-blue-200 dark:border-blue-900',
    bgColor: 'bg-blue-50 dark:bg-blue-900/20',
    icon: <Globe size={16} />,
    items: ['AIS / OpenSky', 'FRED / BLS / EIA', 'GDELT / ACLED', 'OFAC / USGS', 'Yahoo Finance', '18 more adapters'],
  },
  {
    label: 'Intelligence Engine',
    color: 'bg-teal-500',
    textColor: 'text-teal-700 dark:text-teal-400',
    borderColor: 'border-teal-200 dark:border-teal-900',
    bgColor: 'bg-teal-50 dark:bg-teal-900/20',
    icon: <Cpu size={16} />,
    items: ['Risk scoring (EDRI/MRDRI)', 'Foresight simulation', 'RAG + vector search', 'Commodity indices', 'Yetti + Bigfoot AI', 'WebSocket broadcast'],
  },
  {
    label: 'ERP Connectors',
    color: 'bg-violet-500',
    textColor: 'text-violet-700 dark:text-violet-400',
    borderColor: 'border-violet-200 dark:border-violet-900',
    bgColor: 'bg-violet-50 dark:bg-violet-900/20',
    icon: <Database size={16} />,
    items: ['Summit (Oracle)', 'Ridgeline (Blue Yonder)', 'Timber (Epicor)', 'Elder (COBOL)', 'Lookout supervisor', 'MCP protocol'],
  },
  {
    label: 'Applications',
    color: 'bg-amber-500',
    textColor: 'text-amber-700 dark:text-amber-400',
    borderColor: 'border-amber-200 dark:border-amber-900',
    bgColor: 'bg-amber-50 dark:bg-amber-900/20',
    icon: <BarChart3 size={16} />,
    items: ['Sentinel dashboard', 'Canopy sidebar (14 tabs)', 'Ranger / Trapper / Bounty', 'Cascades LOA engine', 'Hawk sales intelligence', 'Warden SOX compliance'],
  },
  {
    label: 'Security & Infra',
    color: 'bg-rose-500',
    textColor: 'text-rose-700 dark:text-rose-400',
    borderColor: 'border-rose-200 dark:border-rose-900',
    bgColor: 'bg-rose-50 dark:bg-rose-900/20',
    icon: <Shield size={16} />,
    items: ['JWT + SSO auth', 'SHA-256 API keys', 'Rate limiting', 'Multi-tenant schemas', 'CI/CD GitHub Actions', 'Cloudflare / Render'],
  },
]

export default function Architecture() {
  return (
    <section id="architecture" className="py-24 bg-gray-50 dark:bg-gray-900/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 dark:bg-teal-900/30 border border-teal-200 dark:border-teal-800 text-teal-700 dark:text-teal-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Database size={12} />
            Platform Architecture
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
            Five layers, one{' '}
            <span className="gradient-text">unified platform</span>
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-400 text-lg">
            From raw data ingestion to enterprise applications — every layer purpose-built for distribution and manufacturing intelligence.
          </p>
        </div>

        {/* Architecture diagram */}
        <div className="flex flex-col lg:flex-row items-stretch gap-3 lg:gap-0">
          {layers.map((layer, i) => (
            <div key={layer.label} className="flex lg:flex-col items-stretch lg:items-center flex-1">
              {/* Layer card */}
              <div className={`flex-1 rounded-2xl border ${layer.borderColor} ${layer.bgColor} p-5 relative`}>
                {/* Header */}
                <div className="flex items-center gap-2 mb-4">
                  <span className={`p-1.5 rounded-lg ${layer.color} text-white`}>
                    {layer.icon}
                  </span>
                  <span className={`text-xs font-bold uppercase tracking-wide ${layer.textColor}`}>
                    {layer.label}
                  </span>
                </div>

                {/* Items */}
                <ul className="space-y-1.5">
                  {layer.items.map(item => (
                    <li key={item} className="text-xs text-gray-600 dark:text-gray-400 flex items-center gap-1.5">
                      <span className={`w-1.5 h-1.5 rounded-full ${layer.color} flex-shrink-0`} />
                      {item}
                    </li>
                  ))}
                </ul>

                {/* Layer number */}
                <div className={`absolute top-3 right-3 text-xs font-bold ${layer.textColor} opacity-40`}>
                  0{i + 1}
                </div>
              </div>

              {/* Arrow connector (hidden on last) */}
              {i < layers.length - 1 && (
                <div className="flex lg:flex-col items-center justify-center px-2 lg:px-0 lg:py-2 text-gray-300 dark:text-gray-700">
                  <ArrowRight size={16} className="rotate-0 lg:rotate-90" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Tech stack footnote */}
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500 dark:text-gray-500 mb-4">Powered by</p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'React 18 + Vite', 'Node.js / Express', 'TypeScript', 'PostgreSQL 16',
              'TimescaleDB', 'pgvector', 'PostGIS', 'Redis 7', 'Socket.io',
              'Deck.gl', 'MapLibre GL', 'Python FastAPI', 'Docker',
            ].map(tech => (
              <span key={tech} className="text-xs px-3 py-1.5 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 font-mono">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
