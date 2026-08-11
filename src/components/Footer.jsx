import { ArrowUp } from 'lucide-react'
import { profile, socials } from '../data/site'
import { socialIcons } from './iconRegistry'

export default function Footer() {
  return (
    <footer className="pb-6 pt-8">
      <div className="shell">
        <div className="card flex flex-col gap-6 p-7 sm:flex-row sm:items-center sm:justify-between sm:p-9">
          <div>
            <p className="font-display text-base font-semibold text-ink">{profile.name}</p>
            <p className="mt-1 text-sm text-ink-muted">
              {profile.role} · {profile.location}
            </p>
            <p className="mt-3 text-xs text-ink-faint">
              © {new Date().getFullYear()} — All rights reserved
            </p>
          </div>

          <div className="no-print flex items-center gap-2">
            {socials.map(({ label, key, href }) => {
              const Icon = socialIcons[key]
              return (
                <a
                  key={key}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="rounded-pill border border-edge bg-card-2 p-3 text-ink-muted transition-colors hover:text-ink"
                >
                  <Icon size={16} />
                </a>
              )
            })}
            <a
              href="#top"
              aria-label="Back to top"
              className="rounded-pill border border-edge bg-card-2 p-3 text-ink-muted transition-colors hover:text-ink"
            >
              <ArrowUp size={16} aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
