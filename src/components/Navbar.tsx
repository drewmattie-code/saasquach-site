import { useState } from 'react'
import { Moon, Sun, Menu, X } from 'lucide-react'

interface NavbarProps {
  darkMode: boolean
  setDarkMode: (v: boolean) => void
}

const links = [
  { label: 'Products', href: '#products' },
  { label: 'Features', href: '#features' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar({ darkMode, setDarkMode }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/90 dark:bg-gray-950/90 backdrop-blur border-b border-gray-100 dark:border-gray-800">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 font-bold text-xl text-gray-900 dark:text-white">
          <span className="w-8 h-8 rounded-lg bg-teal-500 flex items-center justify-center text-white text-sm font-bold">S</span>
          <span>SaaSquach<span className="text-teal-500"> AI</span></span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-teal-500 dark:hover:text-teal-400 transition-colors">
              {l.label}
            </a>
          ))}
        </div>

        {/* Right controls */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-lg text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Toggle dark mode"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <a href="#contact" className="hidden md:inline-flex items-center px-4 py-2 rounded-lg bg-teal-500 hover:bg-teal-600 text-white text-sm font-semibold transition-colors">
            Request Demo
          </a>
          <button
            className="md:hidden p-2 rounded-lg text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-950 border-t border-gray-100 dark:border-gray-800 px-4 pb-4 pt-2 space-y-1">
          {links.map(l => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="block py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-teal-500"
            >
              {l.label}
            </a>
          ))}
          <a href="#contact" onClick={() => setMenuOpen(false)} className="block mt-2 text-center px-4 py-2 rounded-lg bg-teal-500 text-white text-sm font-semibold">
            Request Demo
          </a>
        </div>
      )}
    </header>
  )
}
