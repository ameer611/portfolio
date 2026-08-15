import { skillGroups } from '../data/site'
import Rise from './Rise'
import Section from './Section'

const total = skillGroups.reduce((n, g) => n + g.tags.length, 0)

export default function Skills() {
  return (
    <Section
      id="skills"
      label="Skills"
      title="Tools and technologies"
      lead={`${total} technologies across ${skillGroups.length} areas of AI, backend and infrastructure work.`}
    >
      {/* One panel of grouped rows rather than a grid of look-alike cards —
          easier to scan and it stops long groups from ballooning a tile. */}
      <Rise className="card p-2 sm:p-3">
        <ul>
          {skillGroups.map(({ title, tags }, i) => (
            <li
              key={title}
              className={`rounded-2xl px-4 py-5 transition-colors duration-200 hover:bg-card-2 sm:grid sm:grid-cols-[12rem_1fr] sm:gap-8 sm:px-6 ${
                i < skillGroups.length - 1 ? 'border-b border-edge' : ''
              }`}
            >
              <h3 className="font-display text-sm font-semibold text-ink">
                {title}{' '}
                <span className="ml-1 font-sans text-xs font-normal text-ink-faint">
                  <span className="sr-only">— </span>
                  {tags.length}
                  <span className="sr-only">
                    {tags.length === 1 ? ' technology' : ' technologies'}
                  </span>
                </span>
              </h3>

              <ul className="mt-3 flex flex-wrap gap-2 sm:mt-0">
                {tags.map(t => (
                  <li key={t} className="chip">
                    {t}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Rise>
    </Section>
  )
}
