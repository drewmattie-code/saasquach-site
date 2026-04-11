const footerLinks = {
  Products: [
    { label: 'Sentinel', href: '#products' },
    { label: 'Canopy', href: '#products' },
    { label: 'ClawGentics', href: '#products' },
    { label: 'ClawShop', href: '#products' },
  ],
  Platform: [
    { label: 'Features', href: '#features' },
    { label: 'Architecture', href: '#architecture' },
    { label: 'ERP Connectors', href: '#architecture' },
    { label: 'Pricing', href: '#pricing' },
  ],
  Company: [
    { label: 'Charles & Roe', href: '#' },
    { label: 'Request Demo', href: '#contact' },
    { label: 'Contact Sales', href: '#contact' },
  ],
  Legal: [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
    { label: 'Security', href: '#' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <a href="#" className="flex items-center gap-2 font-bold text-xl text-white mb-4">
              <span className="w-8 h-8 rounded-lg bg-teal-500 flex items-center justify-center text-white text-sm font-bold">S</span>
              <span>SaaSquach<span className="text-teal-500"> AI</span></span>
            </a>
            <p className="text-sm leading-relaxed text-gray-500">
              Enterprise supply chain intelligence for distribution and manufacturing. Powered by AI, connected to your ERP.
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-4">{category}</h4>
              <ul className="space-y-2.5">
                {links.map(link => (
                  <li key={link.label}>
                    <a href={link.href} className="text-sm text-gray-400 hover:text-teal-400 transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-600">
            © {new Date().getFullYear()} Charles & Roe, Inc. All rights reserved.
          </p>
          <p className="text-xs text-gray-700">
            Oracle, Blue Yonder, and Epicor are registered trademarks of their respective owners. SaaSquach is built for, not endorsed by, these platforms.
          </p>
        </div>
      </div>
    </footer>
  )
}
