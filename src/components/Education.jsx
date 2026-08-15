import { ArrowUpRight, BadgeCheck, GraduationCap, Languages, Trophy } from 'lucide-react'
import { awards, certifications, education, spokenLanguages } from '../data/site'
import Rise from './Rise'
import Section from './Section'

/** Circular icon plate used at the top of every card in this section. */
function Plate({ icon: Icon }) {
  return (
    <span className="flex h-11 w-11 items-center justify-center rounded-pill bg-card-2 ring-1 ring-inset ring-edge">
      <Icon size={18} aria-hidden="true" className="text-ink" />
    </span>
  )
}

export default function Education() {
  return (
    <Section id="education" label="Education" title="Studies and credentials">
      <div className="grid gap-3">
        {/* Degree and headline award share the top row. */}
        <div className="grid gap-3 sm:grid-cols-2">
          {education.map(
            ({ qualification, field, institution, institutionUrl, place, period, grade }) => (
              <Rise key={qualification} className="card p-7 sm:p-9">
                <Plate icon={GraduationCap} />

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
                {grade && <p className="chip mt-3">Grade {grade}</p>}
              </Rise>
            ),
          )}

          {awards.map(({ title, issuer, period, detail }) => (
            <Rise key={title} delay={80} className="card p-7 sm:p-9">
              <Plate icon={Trophy} />

              <h3 className="mt-5 font-display text-xl font-semibold text-ink">{title}</h3>
              <p className="mt-4 text-sm font-medium text-ink">{issuer}</p>
              <p className="mt-0.5 text-sm text-ink-faint">{period}</p>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-ink-muted">{detail}</p>
            </Rise>
          ))}
        </div>

        <div className="grid gap-3 lg:grid-cols-[1.4fr_1fr]">
          <Rise className="card p-7 sm:p-9">
            <Plate icon={BadgeCheck} />
            <h3 className="mt-5 font-display text-sm font-semibold text-ink">
              Licences &amp; certifications
            </h3>

            <ul className="mt-5 grid gap-3">
              {certifications.map(({ title, issuer, period, detail }) => (
                <li
                  key={title}
                  className="rounded-xl bg-card-2 px-4 py-3.5 ring-1 ring-inset ring-edge"
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <p className="text-sm font-medium text-ink">{title}</p>
                    <span className="text-xs text-ink-faint">{period}</span>
                  </div>
                  <p className="mt-1 text-sm text-ink-muted">{issuer}</p>
                  {detail && <p className="mt-1 text-xs text-ink-faint">{detail}</p>}
                </li>
              ))}
            </ul>
          </Rise>

          <Rise delay={80} className="card p-7 sm:p-9">
            <Plate icon={Languages} />
            <h3 className="mt-5 font-display text-sm font-semibold text-ink">Languages</h3>

            <dl className="mt-5 grid gap-3">
              {spokenLanguages.map(({ name, level }) => (
                <div
                  key={name}
                  className="rounded-xl bg-card-2 px-4 py-3.5 ring-1 ring-inset ring-edge"
                >
                  <dt className="text-sm font-medium text-ink">{name}</dt>
                  <dd className="mt-0.5 text-sm text-ink-muted">{level}</dd>
                </div>
              ))}
            </dl>
          </Rise>
        </div>
      </div>
    </Section>
  )
}
