import { Lock, Zap, TestTube, Globe, Database, Activity, Cpu, GitBranch } from 'lucide-react'

const features = [
  {
    icon: <Lock size={22} className="text-teal-500" />,
    title: 'Enterprise SSO & Security',
    description: 'SAML 2.0 / OIDC SSO, JWT auth with refresh, SHA-256 API key auth, rate limiting, and security headers out of the box.',
  },
  {
    icon: <Zap size={22} className="text-amber-500" />,
    title: 'Event-Driven Architecture',
    description: 'Redis pub/sub powers 7 real-time WebSocket channels. Data flows from 23 adapters — AIS, OpenSky, FRED, GDELT, ACLED, and more.',
  },
  {
    icon: <TestTube size={22} className="text-violet-500" />,
    title: '700+ Automated Tests',
    description: 'Comprehensive unit, integration, and smoke test suites with CI/CD via GitHub Actions. Every push validated against PostgreSQL 16 + Redis 7.',
  },
  {
    icon: <Database size={22} className="text-blue-500" />,
    title: 'TimescaleDB + pgvector',
    description: 'Time-series compression, hypertable partitioning, and vector similarity search for AI embeddings — all on PostgreSQL 16 with PostGIS.',
  },
  {
    icon: <Globe size={22} className="text-emerald-500" />,
    title: 'ERP Connectors (MCP)',
    description: 'Summit (Oracle Fusion), Ridgeline (Blue Yonder SCPO), Timber (Epicor Eclipse), and Elder (COBOL) connectors via Model Context Protocol.',
  },
  {
    icon: <Activity size={22} className="text-rose-500" />,
    title: 'Real-Time Risk Engine',
    description: '15-minute commodity sub-index refresh cycle. Four indices: EDRI, MRDRI, HVDRI, plus cross-vertical composite scoring with Telegram alerts.',
  },
  {
    icon: <Cpu size={22} className="text-orange-500" />,
    title: 'On-Premise AI Inference',
    description: 'Yetti (GPT-OSS-20B) and Bigfoot (Qwen3:14B) run locally via MLX on Mac Studio. No data leaves your network for AI-powered decisions.',
  },
  {
    icon: <GitBranch size={22} className="text-pink-500" />,
    title: 'Multi-Tenant Architecture',
    description: 'Isolated tenant provisioning with auto-generated JWTs, per-tenant PostgreSQL schemas, and Render-ready deployment via render.yaml.',
  },
]

export default function Features() {
  return (
    <section id="features" className="py-24 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 dark:bg-teal-900/30 border border-teal-200 dark:border-teal-800 text-teal-700 dark:text-teal-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Zap size={12} />
            Platform Features
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
            Built for enterprise,{' '}
            <span className="gradient-text">ready on day one</span>
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-400 text-lg">
            Every feature shipped to production. No vaporware — just battle-tested infrastructure for the most demanding supply chain environments.
          </p>
        </div>

        {/* Feature grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="p-6 rounded-2xl border border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 hover:border-teal-200 dark:hover:border-teal-800 hover:shadow-md transition-all duration-300 group"
            >
              <div className="p-2.5 rounded-xl bg-white dark:bg-gray-800 inline-block mb-4 shadow-sm border border-gray-100 dark:border-gray-700 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-2 text-sm leading-snug">
                {feature.title}
              </h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats banner */}
        <div className="mt-16 rounded-2xl bg-gradient-to-r from-teal-500 to-teal-600 p-8 grid sm:grid-cols-4 gap-6 text-center">
          {[
            { value: '23', label: 'Data Adapters' },
            { value: '290+', label: 'Source Files' },
            { value: '27', label: 'DB Migrations' },
            { value: '7', label: 'WebSocket Channels' },
          ].map(stat => (
            <div key={stat.label}>
              <div className="text-3xl font-extrabold text-white mb-1">{stat.value}</div>
              <div className="text-teal-100 text-sm font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
