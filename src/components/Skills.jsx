import { skillGroups } from '../data/site'
import Rise from './Rise'
import Section from './Section'

export default function Skills() {
  return (
    <Section
      id="skills"
      label="Skills"
      title="Tools and technologies"
      lead="What I reach for across AI, backend and infrastructure work."
    >
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map(({ title, tags }, i) => (
          <Rise key={title} delay={i * 40} className="h-full">
            <div className="card h-full p-6">
              <h3 className="font-display text-sm font-semibold text-ink">{title}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {tags.map(t => (
                  <li key={t} className="chip">
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </Rise>
        ))}
      </div>
    </Section>
  )
}
