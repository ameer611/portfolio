import { Code2, BookOpen, ArrowDown, Mail } from 'lucide-react'

export default function Hero() {
  return (
    <section id="hero" className="py-24 px-6 bg-gradient-to-br from-white via-indigo-50/40 to-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-[1fr_auto] gap-12 items-center">
        <div>
          <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-600 text-xs font-bold px-4 py-1.5 rounded-full mb-6 tracking-wide uppercase">
            <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
            Available for opportunities
          </div>
          <h1 className="text-5xl md:text-6xl font-black tracking-tight text-slate-900 leading-[1.05] mb-3">
            Mukhammad<br />Usmonov
          </h1>
          <p className="text-xl md:text-2xl font-semibold text-indigo-600 mb-4">
            AI Engineer & Backend Developer
          </p>
          <p className="text-lg text-slate-500 max-w-xl leading-relaxed mb-8">
            Building high-performance intelligent systems, production-ready RAG pipelines, and optimized backend microservices.
          </p>
          <div className="flex flex-wrap gap-3 mb-8">
            <a href="#projects"
              className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3 rounded-lg transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-indigo-200">
              View Projects <ArrowDown size={16} />
            </a>
            <a href="#contact"
              className="inline-flex items-center gap-2 border-2 border-slate-200 hover:border-indigo-400 text-slate-700 hover:text-indigo-600 font-semibold px-6 py-3 rounded-lg transition-all hover:-translate-y-0.5">
              Contact Me <Mail size={16} />
            </a>
          </div>
          <div className="flex flex-wrap gap-3">
            {[
              { label: 'GitHub', icon: Code2, href: 'https://github.com' },
              { label: 'LinkedIn', icon: BookOpen, href: 'https://linkedin.com' },
              { label: 'Medium', icon: Mail, href: 'https://medium.com' },
            ].map(({ label, icon: Icon, href }) => (
              <a key={label} href={href} target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-indigo-600 border border-slate-200 hover:border-indigo-300 hover:bg-indigo-50 px-4 py-2 rounded-lg transition-all">
                <Icon size={16} /> {label}
              </a>
            ))}
          </div>
        </div>
        <div className="hidden md:flex w-52 h-52 rounded-3xl bg-gradient-to-br from-indigo-500 to-violet-600 items-center justify-center text-7xl font-black text-white/90 shadow-2xl shadow-indigo-200 flex-shrink-0">
          MU
        </div>
      </div>
    </section>
  )
}
