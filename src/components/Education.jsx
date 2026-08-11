import { ArrowUpRight, GraduationCap } from 'lucide-react'
import { education } from '../data/site'
import Rise from './Rise'
import Section from './Section'

export default function Education() {
  return (
    <Section id="education" label="Education" title="Academic background">
      <ul className="grid gap-3 sm:grid-cols-2">
        {education.map(({ qualification, field, institution, institutionUrl, place, period }) => (
          <Rise as="li" key={qualification} className="card p-7 sm:p-9">
            <span className="flex h-11 w-11 items-center justify-center rounded-pill bg-card-2 ring-1 ring-inset ring-edge">
              <GraduationCap size={18} aria-hidden="true" className="text-ink" />
            </span>

            <h3 className="mt-5 font-display text-xl font-semibold text-ink">{qualification}</h3>
            {field && <p className="mt-1.5 text-base text-ink-muted">{field}</p>}
            <p className="mt-4 text-sm font-medium text-ink">
              {institutionUrl ? (
                <a
                  href={institutionUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="group/link inline-flex items-center gap-1 hover:underline"
                >
                  {institution}
                  <ArrowUpRight
                    size={13}
                    aria-hidden="true"
                    className="text-ink-faint transition-transform duration-200 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
                  />
                  <span className="sr-only"> — opens the university website</span>
                </a>
              ) : (
                institution
              )}
            </p>
            {place && <p className="mt-0.5 text-sm text-ink-faint">{place}</p>}
            {period && <p className="mt-3 text-sm text-ink-faint">{period}</p>}
          </Rise>
        ))}
      </ul>
    </Section>
  )
}
