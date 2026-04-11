import { useState, type FormEvent } from 'react'
import { Mail, CheckCircle, ArrowRight, Building2, User, MessageSquare } from 'lucide-react'

interface FormState {
  name: string
  email: string
  company: string
  role: string
  message: string
}

const STORAGE_KEY = 'saasquach_demo_requests'

export default function Contact() {
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    company: '',
    role: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setLoading(true)

    // Store in localStorage
    const existing = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
    existing.push({ ...form, submittedAt: new Date().toISOString() })
    localStorage.setItem(STORAGE_KEY, JSON.stringify(existing))

    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 800)
  }

  if (submitted) {
    return (
      <section id="contact" className="py-24 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-xl mx-auto px-4 text-center">
          <div className="inline-flex p-4 rounded-full bg-teal-50 dark:bg-teal-900/30 mb-6">
            <CheckCircle size={40} className="text-teal-500" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
            We'll be in touch shortly!
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            Thanks, <strong>{form.name}</strong>. A member of the SaaSquach team will reach out to <strong>{form.email}</strong> within one business day to schedule your personalized demo.
          </p>
          <button
            onClick={() => { setSubmitted(false); setForm({ name: '', email: '', company: '', role: '', message: '' }) }}
            className="text-sm text-teal-600 dark:text-teal-400 hover:underline"
          >
            Submit another request
          </button>
        </div>
      </section>
    )
  }

  return (
    <section id="contact" className="py-24 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left column */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 dark:bg-teal-900/30 border border-teal-200 dark:border-teal-800 text-teal-700 dark:text-teal-400 text-xs font-semibold uppercase tracking-wider mb-6">
              <Mail size={12} />
              Request a Demo
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
              See SaaSquach in{' '}
              <span className="gradient-text">your environment</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg mb-8 leading-relaxed">
              Schedule a personalized demo tailored to your ERP, SKU count, and supply chain pain points. We'll connect Sentinel directly to your data.
            </p>

            {/* Value props */}
            <div className="space-y-4">
              {[
                { icon: <Building2 size={18} className="text-teal-500" />, text: 'Connect to your Oracle, Blue Yonder, or Epicor ERP in minutes' },
                { icon: <CheckCircle size={18} className="text-teal-500" />, text: '30-day free trial — no credit card, no commitment' },
                { icon: <MessageSquare size={18} className="text-teal-500" />, text: 'Live walkthrough with our implementation team' },
              ].map(item => (
                <div key={item.text} className="flex items-start gap-3">
                  <div className="p-1.5 rounded-lg bg-teal-50 dark:bg-teal-900/30 flex-shrink-0 mt-0.5">
                    {item.icon}
                  </div>
                  <span className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 p-8 shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                    <User size={14} className="inline mr-1" />
                    Full name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Jane Smith"
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                    <Mail size={14} className="inline mr-1" />
                    Work email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="jane@company.com"
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                  <Building2 size={14} className="inline mr-1" />
                  Company *
                </label>
                <input
                  type="text"
                  name="company"
                  required
                  value={form.company}
                  onChange={handleChange}
                  placeholder="Acme Distribution Co."
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                  Your role
                </label>
                <select
                  name="role"
                  value={form.role}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm"
                >
                  <option value="">Select your role</option>
                  <option>VP / Director of Supply Chain</option>
                  <option>VP / Director of Operations</option>
                  <option>VP / Director of Procurement</option>
                  <option>CTO / CIO</option>
                  <option>CEO / President</option>
                  <option>Supply Chain Analyst</option>
                  <option>IT / Systems Administrator</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                  <MessageSquare size={14} className="inline mr-1" />
                  What's your biggest supply chain challenge?
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={3}
                  placeholder="Tell us about your ERP, SKU count, and pain points..."
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-teal-500 hover:bg-teal-600 disabled:opacity-60 text-white font-semibold text-sm transition-all shadow-lg shadow-teal-500/25"
              >
                {loading ? (
                  <span className="inline-block w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <>Request Demo <ArrowRight size={16} /></>
                )}
              </button>

              <p className="text-xs text-center text-gray-400 dark:text-gray-600">
                By submitting, you agree to our privacy policy. We'll never share your information.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
