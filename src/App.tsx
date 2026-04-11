import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Products from './components/Products'
import Features from './components/Features'
import Architecture from './components/Architecture'
import Pricing from './components/Pricing'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('darkMode')
    if (saved !== null) return saved === 'true'
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  })

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode)
    localStorage.setItem('darkMode', String(darkMode))
  }, [darkMode])

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 font-sans">
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <main>
        <Hero />
        <Products />
        <Features />
        <Architecture />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
