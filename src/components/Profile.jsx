import { profileCopy } from '../data/site'
import Rise from './Rise'
import Section from './Section'

export default function Profile() {
  return (
    <Section id="profile" label="Profile" title={profileCopy.heading}>
      <div className="grid gap-3 lg:grid-cols-[1.4fr_1fr]">
        <Rise className="card p-7 sm:p-9">
          <div className="max-w-readable space-y-5 text-base leading-relaxed text-ink-muted sm:text-lg">
            {profileCopy.paragraphs.map(p => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </Rise>

        <Rise delay={80} className="card p-7 sm:p-9">
          <p className="font-display text-sm font-semibold text-ink">Focus areas</p>
          <ul className="mt-5 flex flex-wrap gap-2">
            {profileCopy.focus.map(f => (
              <li key={f} className="chip">
                {f}
              </li>
            ))}
          </ul>
        </Rise>
      </div>
    </Section>
  )
}
