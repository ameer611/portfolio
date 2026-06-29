import { ExternalLink } from 'lucide-react'

const projects = [
  {
    title: 'Postgres Pro Support — RAG System',
    period: "May '26 – Jun '26",
    points: [
      'Built a production-ready RAG system for PostgreSQL 14 documentation using LangChain, Qdrant vector DB, Hugging Face embeddings, and Groq LLMs.',
      'Developed a Streamlit-based AI assistant capable of answering contextual PostgreSQL technical questions with exact source citations.',
      'Engineered a complete semantic search pipeline: document preprocessing, text chunking, embedding generation, and vector similarity search.',
      'Integrated LLMs via Groq API to minimize hallucinations by grounding responses strictly within official documentation.',
    ],
    tech: ['LangChain', 'Qdrant', 'Hugging Face', 'Groq API', 'Streamlit', 'RAG', 'Python'],
    link: 'https://huggingface.co/spaces/Ameer1606/PostgresPro-Support',
  },
  {
    title: 'AI Medicine Reminder System',
    period: "Apr '26",
    points: [
      'Developed an AI-driven medication scheduling and notification system using FastAPI, Aiogram, and APScheduler.',
      'Created an intuitive Telegram bot interface for users to manage treatment courses and receive timely alerts.',
      'Integrated Google Gemini API for multimodal prescription processing — automating data entry via image-to-text OCR extraction.',
      'Used Cerebras AI API to validate, normalize, and enhance extracted drug information, significantly boosting data accuracy and UX.',
    ],
    tech: ['FastAPI', 'Aiogram', 'APScheduler', 'Google Gemini', 'Cerebras AI', 'Telegram Bot'],
    link: 'https://t.me/dorivor_eslatma_bot',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <p className="text-xs font-bold tracking-widest uppercase text-indigo-600 mb-3">Projects</p>
        <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 mb-10">Things I've built</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p) => (
            <div key={p.title}
              className="relative bg-white border border-slate-200 rounded-2xl p-7 hover:border-indigo-400 hover:shadow-xl hover:shadow-indigo-100 hover:-translate-y-1 transition-all duration-250 overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-indigo-500 to-violet-500" />
              <div className="flex justify-between items-start mb-2 gap-3">
                <h3 className="text-lg font-bold text-slate-900 leading-snug">{p.title}</h3>
                <a href={p.link} className="text-slate-400 hover:text-indigo-500 flex-shrink-0 mt-0.5">
                  <ExternalLink size={16} />
                </a>
              </div>
              <span className="inline-block text-xs font-semibold text-slate-400 bg-slate-50 border border-slate-200 px-2.5 py-1 rounded mb-4">
                {p.period}
              </span>
              <ul className="space-y-2 mb-5">
                {p.points.map((pt, i) => (
                  <li key={i} className="flex gap-2 text-sm text-slate-500 leading-relaxed">
                    <span className="text-indigo-400 mt-0.5 flex-shrink-0">▸</span> {pt}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-1.5">
                {p.tech.map(t => (
                  <span key={t} className="text-xs font-semibold text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-md">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
