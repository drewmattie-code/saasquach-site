import { ArrowRight, Package, Brain, ShoppingBag, TrendingUp, Shield, Zap } from 'lucide-react'

const products = [
  {
    name: 'Sentinel',
    tagline: 'Enterprise Supply Chain Intelligence',
    description: 'Real-time risk scoring, commodity tracking, satellite analysis, and AI-powered scenario simulation for electrical, MRO, and HVAC distributors.',
    icon: <Shield size={28} className="text-teal-500" />,
    color: 'from-teal-500/10 to-teal-600/5',
    border: 'border-teal-200 dark:border-teal-900',
    badge: 'Core Platform',
    features: ['15-min risk refresh cycle', '25K+ SKUs tracked', 'Foresight simulation engine', 'ERP connectors'],
    href: '#contact',
  },
  {
    name: 'Canopy',
    tagline: 'Procurement Intelligence Dashboard',
    description: 'AI-powered sidebar with 14+ tabs — inventory, PO pipeline, supplier scorecards, returns, clawbacks, and three specialized chat agents (Ranger, Trapper, Bounty).',
    icon: <Brain size={28} className="text-violet-500" />,
    color: 'from-violet-500/10 to-violet-600/5',
    border: 'border-violet-200 dark:border-violet-900',
    badge: 'Main Product',
    features: ['Ranger (inventory ops)', 'Trapper (supplier intel)', 'Bounty (recovery)', 'Cascades LOA engine'],
    href: '#contact',
  },
  {
    name: 'ClawGentics',
    tagline: 'Agentic Financial & Ops Software',
    description: 'Next-generation financial intelligence with AI agents that automate operations, surface insights, and act on your behalf across financial workflows.',
    icon: <TrendingUp size={28} className="text-amber-500" />,
    color: 'from-amber-500/10 to-amber-600/5',
    border: 'border-amber-200 dark:border-amber-900',
    badge: 'New',
    features: ['Agent-driven workflows', 'Financial forecasting', 'Ops automation', 'Real-time signals'],
    href: '#contact',
  },
  {
    name: 'ClawShop',
    tagline: 'AI-Powered Commerce Platform',
    description: 'Intelligent e-commerce with AI personas, dynamic product bundling, and prompt-driven merchandising for modern retail and B2B distribution.',
    icon: <ShoppingBag size={28} className="text-rose-500" />,
    color: 'from-rose-500/10 to-rose-600/5',
    border: 'border-rose-200 dark:border-rose-900',
    badge: 'Coming Soon',
    features: ['AI persona engine', 'Smart bundling', 'B2B & retail', 'Prompt packs'],
    href: '#contact',
  },
]

export default function Products() {
  return (
    <section id="products" className="py-24 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 dark:bg-teal-900/30 border border-teal-200 dark:border-teal-800 text-teal-700 dark:text-teal-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Package size={12} />
            Product Suite
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
            A platform built for the{' '}
            <span className="gradient-text">enterprise edge</span>
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-400 text-lg">
            Four integrated products covering supply chain intelligence, procurement, financial operations, and commerce — all connected to your ERP.
          </p>
        </div>

        {/* Product grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {products.map((product) => (
            <div
              key={product.name}
              className={`relative rounded-2xl border ${product.border} bg-gradient-to-br ${product.color} bg-white dark:bg-gray-900 p-8 flex flex-col group hover:shadow-lg transition-all duration-300`}
            >
              {/* Badge */}
              <span className="absolute top-6 right-6 text-xs font-semibold px-2.5 py-1 rounded-full bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-700">
                {product.badge}
              </span>

              {/* Icon + Name */}
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-xl bg-white dark:bg-gray-800 shadow-sm border border-gray-100 dark:border-gray-700">
                  {product.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">{product.name}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{product.tagline}</p>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-600 dark:text-gray-400 mb-6 flex-1 leading-relaxed">
                {product.description}
              </p>

              {/* Feature pills */}
              <div className="flex flex-wrap gap-2 mb-6">
                {product.features.map(f => (
                  <span key={f} className="inline-flex items-center gap-1 text-xs px-2.5 py-1 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400">
                    <Zap size={10} className="text-teal-500" />
                    {f}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <a
                href={product.href}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-teal-600 dark:text-teal-400 hover:gap-2.5 transition-all"
              >
                Learn more <ArrowRight size={16} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
