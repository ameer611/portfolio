import { ArrowUpRight } from 'lucide-react'
import { projects } from '../data/site'
import Rise from './Rise'
import Section from './Section'

export default function Projects() {
  return (
    <Section
      id="projects"
      label="Projects"
      title="Things I've built and shipped"
      lead="Working systems rather than demos — each one is live and linked."
    >
      <ul className="grid gap-3 lg:grid-cols-2">
        {projects.map((p, i) => (
          <Rise as="li" key={p.title} delay={i * 70}>
            <article className="card-interactive group relative flex h-full flex-col p-7 sm:p-9">
              <div className="flex items-start justify-between gap-4">
                <span className="chip">{p.kind}</span>
                <span className="flex h-9 w-9 flex-none items-center justify-center rounded-pill bg-card-2 ring-1 ring-inset ring-edge transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                  <ArrowUpRight size={16} aria-hidden="true" className="text-ink" />
                </span>
              </div>

              <h3 className="mt-5 font-display text-xl font-semibold text-ink sm:text-2xl">
                <a href={p.link} target="_blank" rel="noreferrer">
                  {/* Stretched so the whole card is one hit target. */}
                  <span aria-hidden="true" className="absolute inset-0" />
                  {p.title}
                  <span className="sr-only"> — {p.linkLabel}</span>
                </a>
              </h3>

              <p className="mt-1.5 text-sm text-ink-faint">{p.period}</p>

              <p className="mt-4 text-[0.95rem] leading-relaxed text-ink-muted">{p.blurb}</p>

              <ul className="mt-5 space-y-2.5">
                {p.points.map(pt => (
                  <li key={pt} className="flex gap-3 text-sm leading-relaxed text-ink-muted">
                    <span
                      aria-hidden="true"
                      className="mt-2 h-1 w-1 flex-none rounded-pill bg-ink-faint"
                    />
                    {pt}
                  </li>
                ))}
              </ul>

              <ul className="mt-auto flex flex-wrap gap-2 pt-6">
                {p.tech.map(t => (
                  <li key={t} className="chip">
                    {t}
                  </li>
                ))}
              </ul>
            </article>
          </Rise>
        ))}
      </ul>
    </Section>
  )
}
