import Rise from './Rise'

/** Section shell: pill eyebrow, large display heading, then content. */
export default function Section({ id, label, title, lead, children }) {
  return (
    <section id={id} className="py-14 sm:py-20">
      <div className="shell">
        <Rise className="max-w-readable">
          <p className="badge">{label}</p>
          <h2 className="mt-5 text-section font-semibold text-ink">{title}</h2>
          {lead && <p className="mt-4 text-lg leading-relaxed text-ink-muted">{lead}</p>}
        </Rise>

        <div className="mt-10 sm:mt-12">{children}</div>
      </div>
    </section>
  )
}
