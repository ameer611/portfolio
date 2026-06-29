import { FileDown } from 'lucide-react'

export default function Resume() {
  return (
    <section id="resume" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <p className="text-xs font-bold tracking-widest uppercase text-indigo-600 mb-3">Resume</p>
        <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 mb-3">Download Resume</h2>
        <p className="text-slate-500 mb-10">Choose your preferred language version.</p>
        <div className="grid sm:grid-cols-2 gap-5 max-w-xl">

          <a href="./resume-en.pdf" download="Mukhammad_Usmonov_Resume_EN.pdf"
            className="flex flex-col items-center gap-4 bg-slate-50 border-2 border-slate-200 hover:border-indigo-400 hover:bg-indigo-50 rounded-2xl p-8 transition-all duration-200 group">
            <div className="w-14 h-14 bg-indigo-100 group-hover:bg-indigo-200 rounded-xl flex items-center justify-center transition-all">
              <FileDown size={28} className="text-indigo-600" />
            </div>
            <div className="text-center">
              <p className="font-bold text-slate-900 text-lg">🇬🇧 English</p>
              <p className="text-sm text-slate-500 mt-1">PDF · English version</p>
            </div>
          </a>

          <a href="./resume-ru.pdf" download="Mukhammad_Usmonov_Resume_RU.pdf"
            className="flex flex-col items-center gap-4 bg-slate-50 border-2 border-slate-200 hover:border-indigo-400 hover:bg-indigo-50 rounded-2xl p-8 transition-all duration-200 group">
            <div className="w-14 h-14 bg-indigo-100 group-hover:bg-indigo-200 rounded-xl flex items-center justify-center transition-all">
              <FileDown size={28} className="text-indigo-600" />
            </div>
            <div className="text-center">
              <p className="font-bold text-slate-900 text-lg">🇷🇺 Russian</p>
              <p className="text-sm text-slate-500 mt-1">PDF · Русская версия</p>
            </div>
          </a>

        </div>
      </div>
    </section>
  )
}