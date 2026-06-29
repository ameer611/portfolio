import { useState } from 'react'
import { Mail, Phone, MapPin, Send } from 'lucide-react'

const contactItems = [
  { icon: Mail, label: 'Email', value: 'm.usmon.1606@gmail.com' },
  { icon: Phone, label: 'Phone', value: '+998 (95) 010-1606' },
  { icon: MapPin, label: 'Location', value: 'Tashkent, Uzbekistan' },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handle = e => setForm({ ...form, [e.target.name]: e.target.value })
  const submit = e => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 3000)
    setForm({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="py-24 px-6 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <p className="text-xs font-bold tracking-widest uppercase text-indigo-600 mb-3">Contact</p>
        <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 mb-3">Let's work together</h2>
        <p className="text-slate-500 mb-10">Open to AI engineering and backend roles. Feel free to reach out.</p>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-4">
            {contactItems.map(({ icon: Icon, label, value }) => (
              <div key={label}
                className="flex items-center gap-4 bg-white border border-slate-200 rounded-xl px-5 py-4 hover:border-indigo-300 hover:shadow-sm transition-all">
                <div className="w-10 h-10 bg-indigo-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon size={18} className="text-indigo-600" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide">{label}</p>
                  <p className="text-sm font-semibold text-slate-800">{value}</p>
                </div>
              </div>
            ))}
          </div>
          <form onSubmit={submit} className="space-y-4">
            {[
              { name: 'name', label: 'Name', type: 'text', placeholder: 'Your full name' },
              { name: 'email', label: 'Email', type: 'email', placeholder: 'your@email.com' },
            ].map(f => (
              <div key={f.name}>
                <label className="block text-sm font-semibold text-slate-600 mb-1.5">{f.label}</label>
                <input type={f.type} name={f.name} value={form[f.name]} onChange={handle}
                  placeholder={f.placeholder} required
                  className="w-full bg-white border border-slate-200 rounded-lg px-4 py-2.5 text-sm text-slate-800 outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 transition-all placeholder:text-slate-300" />
              </div>
            ))}
            <div>
              <label className="block text-sm font-semibold text-slate-600 mb-1.5">Message</label>
              <textarea name="message" value={form.message} onChange={handle} rows={5}
                placeholder="Tell me about your project or opportunity…" required
                className="w-full bg-white border border-slate-200 rounded-lg px-4 py-2.5 text-sm text-slate-800 outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 transition-all resize-none placeholder:text-slate-300" />
            </div>
            <button type="submit"
              className="w-full flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-lg transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-indigo-200">
              {sent ? '✓ Sent!' : (<><Send size={16} /> Send Message</>)}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
