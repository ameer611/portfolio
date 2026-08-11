import { Check } from 'lucide-react'
import { jobs } from '../data/site'
import Rise from './Rise'
import Section from './Section'

export default function Experience() {
  return (
    <Section id="experience" label="Experience" title="Where I've worked">
      <ul className="grid gap-3">
        {jobs.map((job, i) => (
          <Rise as="li" key={`${job.company}-${job.period}`} delay={i * 70} className="card p-7 sm:p-9">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <h3 className="font-display text-xl font-semibold text-ink sm:text-2xl">
                  {job.role}
                </h3>
                <p className="mt-1.5 text-base font-medium text-ink-muted">{job.company}</p>
                {job.detail && <p className="mt-0.5 text-sm text-ink-faint">{job.detail}</p>}
              </div>
              <span className="chip whitespace-nowrap">{job.period}</span>
            </div>

            <ul className="mt-6 grid gap-3 md:grid-cols-2">
              {job.points.map(p => (
                <li key={p} className="flex gap-3 text-[0.95rem] leading-relaxed text-ink-muted">
                  <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-pill bg-card-2 ring-1 ring-inset ring-edge">
                    <Check size={11} aria-hidden="true" className="text-ink" />
                  </span>
                  {p}
                </li>
              ))}
            </ul>

            <ul className="mt-6 flex flex-wrap gap-2">
              {job.stack.map(t => (
                <li key={t} className="chip">
                  {t}
                </li>
              ))}
            </ul>
          </Rise>
        ))}
      </ul>
    </Section>
  )
}
