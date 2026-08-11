import { useEffect, useState } from 'react'
import { Check, Copy, Download, Mail, MapPin, Phone, Send } from 'lucide-react'
import { profile, resumes } from '../data/site'
import Rise from './Rise'
import Section from './Section'

const details = [
  { Icon: Mail, label: 'Email', value: profile.email, href: `mailto:${profile.email}`, copyable: true },
  {
    Icon: Phone,
    label: 'Phone',
    value: profile.phone,
    href: `tel:${profile.phone.replace(/[^+\d]/g, '')}`,
    copyable: true,
  },
  { Icon: MapPin, label: 'Location', value: profile.location },
]

const fields = [
  { name: 'name', label: 'Name', type: 'text', placeholder: 'Your full name', autoComplete: 'name' },
  { name: 'email', label: 'Email', type: 'email', placeholder: 'you@company.com', autoComplete: 'email' },
]

const empty = { name: '', email: '', message: '' }

const input =
  'w-full rounded-xl border border-edge bg-card-2 px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-ink-faint focus:border-ink-faint'

export default function Contact() {
  const [form, setForm] = useState(empty)
  const [sent, setSent] = useState(false)
  const [copied, setCopied] = useState('')

  const handle = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  // GitHub Pages has no backend, so this hands off to the visitor's mail client
  // with everything pre-filled. Swap in a Formspree/Web3Forms POST here if you
  // want submissions delivered to an inbox automatically instead.
  const submit = e => {
    e.preventDefault()
    const subject = `Portfolio enquiry from ${form.name}`
    const body = `${form.message}\n\n—\n${form.name}\n${form.email}`
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`
    setSent(true)
    setForm(empty)
  }

  const copy = async value => {
    try {
      await navigator.clipboard.writeText(value)
      setCopied(value)
    } catch {
      /* clipboard blocked — the mailto/tel link still works */
    }
  }

  useEffect(() => {
    if (!sent) return
    const t = setTimeout(() => setSent(false), 8000)
    return () => clearTimeout(t)
  }, [sent])

  useEffect(() => {
    if (!copied) return
    const t = setTimeout(() => setCopied(''), 2000)
    return () => clearTimeout(t)
  }, [copied])

  return (
    <Section
      id="contact"
      label="Contact"
      title="Let's talk"
      lead="Open to AI engineering and backend roles. Email is the fastest way to reach me."
    >
      <div className="grid gap-3 lg:grid-cols-2">
        <Rise className="card flex flex-col p-7 sm:p-9">
          <ul className="grid gap-3">
            {details.map(({ Icon, label, value, href, copyable }) => (
              <li
                key={label}
                className="flex items-center gap-4 rounded-xl bg-card-2 px-4 py-3.5 ring-1 ring-inset ring-edge"
              >
                <span className="flex h-9 w-9 flex-none items-center justify-center rounded-pill bg-card ring-1 ring-inset ring-edge">
                  <Icon size={15} aria-hidden="true" className="text-ink" />
                </span>

                <span className="min-w-0 flex-1">
                  <span className="block text-xs font-medium text-ink-faint">{label}</span>
                  {href ? (
                    <a
                      href={href}
                      className="mt-0.5 block truncate text-sm font-medium text-ink hover:underline"
                    >
                      {value}
                    </a>
                  ) : (
                    <span className="mt-0.5 block truncate text-sm font-medium text-ink">
                      {value}
                    </span>
                  )}
                </span>

                {copyable && (
                  <button
                    type="button"
                    onClick={() => copy(value)}
                    aria-label={`Copy ${label.toLowerCase()}`}
                    className="no-print flex-none rounded-pill p-2 text-ink-faint transition-colors hover:text-ink"
                  >
                    {copied === value ? (
                      <Check size={14} aria-hidden="true" />
                    ) : (
                      <Copy size={14} aria-hidden="true" />
                    )}
                  </button>
                )}
              </li>
            ))}
          </ul>

          <div className="no-print mt-6">
            <p className="font-display text-sm font-semibold text-ink">Curriculum vitae</p>
            {/* Flag emoji do not render on Windows, so the language is a text badge. */}
            <div className="mt-4 flex flex-wrap gap-2">
              {resumes.map(({ code, label, href, file }) => (
                <a key={code} href={href} download={file} className="btn-quiet !px-4 !py-2.5 !text-[0.8rem]">
                  <Download size={14} aria-hidden="true" />
                  {label}
                  <span className="text-ink-faint">{code}</span>
                </a>
              ))}
            </div>
          </div>
        </Rise>

        <Rise delay={80} className="no-print card p-7 sm:p-9">
          <form onSubmit={submit} className="space-y-4">
            {fields.map(f => (
              <div key={f.name}>
                <label
                  htmlFor={`contact-${f.name}`}
                  className="mb-1.5 block text-xs font-medium text-ink-muted"
                >
                  {f.label}
                </label>
                <input
                  id={`contact-${f.name}`}
                  name={f.name}
                  type={f.type}
                  autoComplete={f.autoComplete}
                  value={form[f.name]}
                  onChange={handle}
                  placeholder={f.placeholder}
                  required
                  className={input}
                />
              </div>
            ))}

            <div>
              <label
                htmlFor="contact-message"
                className="mb-1.5 block text-xs font-medium text-ink-muted"
              >
                Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                rows={4}
                value={form.message}
                onChange={handle}
                placeholder="Tell me about the role or the problem you're solving…"
                required
                className={`${input} resize-none`}
              />
            </div>

            <button type="submit" className="btn-solid w-full">
              <Send size={15} aria-hidden="true" />
              Send message
            </button>

            <p aria-live="polite" className="text-center text-xs leading-relaxed text-ink-faint">
              {sent ? (
                <>
                  Your email app should have opened. If nothing happened, write to{' '}
                  <a href={`mailto:${profile.email}`} className="font-medium text-ink underline">
                    {profile.email}
                  </a>
                  .
                </>
              ) : (
                'This opens your email app with the message pre-filled.'
              )}
            </p>
          </form>
        </Rise>
      </div>
    </Section>
  )
}
