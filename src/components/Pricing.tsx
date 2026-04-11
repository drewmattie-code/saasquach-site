import { Check, Zap, Shield, Building2 } from 'lucide-react'

const tiers = [
  {
    name: 'Starter',
    icon: <Zap size={20} className="text-teal-500" />,
    price: '$2,500',
    period: '/month',
    description: 'For growing distributors taking their first step into AI-powered supply chain intelligence.',
    badge: null,
    cta: 'Start free trial',
    ctaStyle: 'border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white hover:border-teal-500 dark:hover:border-teal-500',
    features: [
      'Sentinel dashboard (read-only)',
      'Up to 5,000 SKUs',
      '1 ERP connector (Timber)',
      'Canopy sidebar (5 tabs)',
      'Risk index monitoring',
      'Standard support (email)',
      'Single tenant',
      '99.5% uptime SLA',
    ],
  },
  {
    name: 'Professional',
    icon: <Shield size={20} className="text-white" />,
    price: '$8,500',
    period: '/month',
    description: 'Full Canopy access with all three AI agents and real-time risk intelligence for mid-market distributors.',
    badge: 'Most Popular',
    cta: 'Request demo',
    ctaStyle: 'bg-teal-500 hover:bg-teal-600 text-white shadow-lg shadow-teal-500/25',
    features: [
      'Everything in Starter',
      'Up to 50,000 SKUs',
      '2 ERP connectors',
      'Full Canopy (14 tabs)',
      'Ranger + Trapper + Bounty',
      'Foresight simulation engine',
      'Hawk sales intelligence',
      'Priority support (chat + phone)',
      '99.9% uptime SLA',
      'Custom domain',
    ],
  },
  {
    name: 'Enterprise',
    icon: <Building2 size={20} className="text-violet-500" />,
    price: 'Custom',
    period: '',
    description: 'Bespoke deployment for large distributors and manufacturers with complex ERP landscapes and compliance needs.',
    badge: null,
    cta: 'Contact sales',
    ctaStyle: 'border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white hover:border-teal-500 dark:hover:border-teal-500',
    features: [
      'Everything in Professional',
      'Unlimited SKUs',
      'All 4 ERP connectors',
      'On-premise AI (Yetti + Bigfoot)',
      'Cascades LOA engine',
      'Warden SOX compliance',
      'Dedicated CSM + SLA',
      'Custom integrations',
      '99.99% uptime SLA',
      'Multi-tenant / white-label',
      'SSO / SAML 2.0',
    ],
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 dark:bg-teal-900/30 border border-teal-200 dark:border-teal-800 text-teal-700 dark:text-teal-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Shield size={12} />
            Pricing
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
            Simple, transparent{' '}
            <span className="gradient-text">pricing</span>
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-400 text-lg">
            All plans include a 30-day free trial. No credit card required. Cancel anytime.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative rounded-2xl p-8 flex flex-col ${
                tier.badge
                  ? 'bg-teal-500 text-white ring-2 ring-teal-500 ring-offset-2 dark:ring-offset-gray-950'
                  : 'bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800'
              }`}
            >
              {/* Popular badge */}
              {tier.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1 rounded-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-xs font-bold">
                    {tier.badge}
                  </span>
                </div>
              )}

              {/* Header */}
              <div className="flex items-center gap-3 mb-4">
                <div className={`p-2 rounded-lg ${tier.badge ? 'bg-white/20' : 'bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700'}`}>
                  {tier.icon}
                </div>
                <h3 className={`font-bold text-xl ${tier.badge ? 'text-white' : 'text-gray-900 dark:text-white'}`}>
                  {tier.name}
                </h3>
              </div>

              {/* Price */}
              <div className="mb-4">
                <span className={`text-4xl font-extrabold ${tier.badge ? 'text-white' : 'text-gray-900 dark:text-white'}`}>
                  {tier.price}
                </span>
                {tier.period && (
                  <span className={`text-sm ${tier.badge ? 'text-teal-100' : 'text-gray-500 dark:text-gray-400'}`}>
                    {tier.period}
                  </span>
                )}
              </div>

              <p className={`text-sm mb-6 leading-relaxed ${tier.badge ? 'text-teal-100' : 'text-gray-600 dark:text-gray-400'}`}>
                {tier.description}
              </p>

              {/* CTA */}
              <a
                href="#contact"
                className={`block text-center px-6 py-3 rounded-xl font-semibold text-sm transition-all mb-8 ${tier.ctaStyle}`}
              >
                {tier.cta}
              </a>

              {/* Features */}
              <ul className="space-y-3 flex-1">
                {tier.features.map(f => (
                  <li key={f} className="flex items-start gap-2.5">
                    <Check size={16} className={`mt-0.5 flex-shrink-0 ${tier.badge ? 'text-teal-100' : 'text-teal-500'}`} />
                    <span className={`text-sm ${tier.badge ? 'text-teal-50' : 'text-gray-600 dark:text-gray-400'}`}>
                      {f}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="text-center text-xs text-gray-400 dark:text-gray-600 mt-8">
          Prices shown are placeholder estimates. Contact sales for a custom quote based on your SKU count, ERP connectors, and support tier.
        </p>
      </div>
    </section>
  )
}
