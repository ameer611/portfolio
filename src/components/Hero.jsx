import { ArrowDown, Download, MapPin } from 'lucide-react'
import { profile, resumes, socials } from '../data/site'
import { socialIcons } from './iconRegistry'
import avatar from '../assets/avatar.jpg'

const cv = resumes[0]

export default function Hero() {
  return (
    <section id="top" className="pb-8 pt-10 sm:pt-16">
      <div className="shell">
        <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,1fr)_20rem] lg:gap-14">
          <div className="animate-rise">
            {profile.available && (
              <p className="badge">
                <span className="relative flex h-1.5 w-1.5 items-center justify-center">
                  <span className="absolute h-1.5 w-1.5 animate-halo rounded-full bg-ink" />
                  <span className="h-1.5 w-1.5 rounded-full bg-ink" />
                </span>
                Available for opportunities
              </p>
            )}

            <h1 className="mt-6 text-display font-bold text-ink">
              {profile.first}
              <br />
              {profile.last}
            </h1>

            <p className="mt-5 font-display text-lg font-medium text-ink sm:text-xl">
              {profile.role}
            </p>

            <p className="mt-4 max-w-readable text-base leading-relaxed text-ink-muted sm:text-lg">
              {profile.tagline}
            </p>

            <p className="mt-5 inline-flex items-center gap-1.5 text-sm text-ink-faint">
              <MapPin size={14} aria-hidden="true" />
              {profile.location}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href={cv.href} download={cv.file} className="btn-solid">
                <Download size={15} aria-hidden="true" />
                Download CV
              </a>
              <a href="#experience" className="btn-quiet">
                See my work
                <ArrowDown size={15} aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Portrait framed as a surface, with the social links docked beneath. */}
          <div className="order-first mx-auto w-full max-w-xs lg:order-none lg:max-w-none">
            <div className="card overflow-hidden p-2">
              {/* Native 2:3 aspect — the frame matches the photo so nothing is cropped. */}
              <img
                src={avatar}
                width="950"
                height="1392"
                alt={`Portrait of ${profile.name}`}
                className="aspect-[950/1392] w-full rounded-[0.95rem] object-cover"
              />
            </div>

            <ul className="no-print mt-3 grid grid-cols-3 gap-3">
              {socials.map(({ label, key, href }) => {
                const Icon = socialIcons[key]
                return (
                  <li key={key}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      className="card-interactive flex flex-col items-center gap-1.5 px-2 py-3 text-ink-muted hover:text-ink"
                    >
                      <Icon size={16} />
                      <span className="text-xs font-medium">{label}</span>
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
