const cards = [
  {
    type: '🎓 Education',
    title: 'Bachelor of Computer Science',
    sub: 'AI Solutions and Applications',
    org: 'PDP University — Tashkent',
    period: '',
  },
  {
    type: '🌍 Volunteering',
    title: 'Software Developer',
    sub: '',
    org: 'United Nations Development Programme (UNDP)',
    period: "Nov '25 — Jan '26",
  },
]

export default function Education() {
  return (
    <section id="education" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <p className="text-xs font-bold tracking-widest uppercase text-indigo-600 mb-3">Background</p>
        <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 mb-10">Education & volunteering</h2>
        <div className="grid sm:grid-cols-2 gap-5">
          {cards.map((c) => (
            <div key={c.title}
              className="bg-slate-50 border border-slate-200 rounded-xl p-6 hover:border-indigo-300 hover:shadow-md transition-all duration-200">
              <p className="text-sm font-semibold text-indigo-600 mb-2">{c.type}</p>
              <h3 className="text-lg font-bold text-slate-900">{c.title}</h3>
              {c.sub && <p className="text-sm text-slate-500 mt-0.5">{c.sub}</p>}
              <p className="text-sm font-semibold text-indigo-500 mt-2">{c.org}</p>
              {c.period && <p className="text-xs text-slate-400 mt-1.5">{c.period}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
