import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import logo from '../assets/logo.png'

const links = ['About', 'Skills', 'Experience', 'Projects', 'Resume', 'Contact']

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        <img src={logo} alt="Mukhammad Usmonov" className="h-10 w-auto" />
        <div className="hidden md:flex gap-8">
          {links.map(l => (
            <a key={l} href={`#${l.toLowerCase()}`}
              className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">
              {l}
            </a>
          ))}
        </div>
        <button className="md:hidden text-slate-700" onClick={() => setOpen(!open)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-white border-t border-slate-100 px-6 py-4 flex flex-col gap-4">
          {links.map(l => (
            <a key={l} href={`#${l.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className="text-sm font-medium text-slate-700 hover:text-indigo-600">
              {l}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
