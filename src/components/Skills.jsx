const skillCategories = [
  { icon: '🐍', title: 'Languages', tags: ['Python'] },
  {
    icon: '📊', title: 'Data Science & ML',
    tags: ['pandas', 'polars', 'numpy', 'Scikit-learn', 'Keras', 'matplotlib', 'seaborn', 'LangChain'],
  },
  {
    icon: '🤖', title: 'Agentic Frameworks',
    tags: ['MCP', 'Claude Code', 'Codex', 'GitHub Copilot', 'Antigravity', 'Cursor'],
  },
  {
    icon: '🧠', title: 'LLM Platforms & APIs',
    tags: ['OpenAI', 'Anthropic (Claude)', 'Google Gemini', 'Groq API', 'CerebrasAI API', 'EasyOCR'],
  },
  {
    icon: '⚙️', title: 'Backend Engineering',
    tags: ['FastAPI', 'Django', 'Django REST Framework', 'CI/CD', 'Nginx', 'Docker'],
  },
  {
    icon: '🗄️', title: 'Databases & Vector Search',
    tags: ['Qdrant', 'PostgreSQL', 'MySQL', 'SQLite', 'MongoDB', 'Redis'],
  },
  {
    icon: '☁️', title: 'Cloud Platforms',
    tags: ['GCP', 'AWS', 'DigitalOcean'],
  },
  {
    icon: '🛠️', title: 'Infrastructure & Tools',
    tags: ['Git', 'Linux', 'Postman', 'Swagger', 'SQLAlchemy ORM', 'Kafka', 'RabbitMQ', 'Celery', 'Jira', 'Alembic'],
  },
  {
    icon: '💡', title: 'Concepts',
    tags: ['RAG', 'Machine Learning', 'Supervised Learning', 'Unsupervised Learning', 'Model Evaluation',
      'Tokenization', 'Async Processing', 'Caching', 'OOP', 'Microservices', 'JWT',
      'Agile / Kanban', 'Multiprocessing', 'Multithreading', 'Linear Algebra'],
    wide: true,
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <p className="text-xs font-bold tracking-widest uppercase text-indigo-600 mb-3">Tech Stack</p>
        <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 mb-10">Skills & technologies</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skillCategories.map(({ icon, title, tags, wide }) => (
            <div key={title}
              className={`bg-white border border-slate-200 rounded-xl p-5 hover:border-indigo-400 hover:shadow-lg hover:shadow-indigo-50 hover:-translate-y-0.5 transition-all duration-200 ${wide ? 'sm:col-span-2 lg:col-span-3' : ''}`}>
              <p className="text-xs font-bold tracking-widest uppercase text-indigo-600 mb-3 flex items-center gap-1.5">
                <span>{icon}</span> {title}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {tags.map(t => (
                  <span key={t}
                    className="text-xs font-medium text-slate-600 bg-slate-50 border border-slate-200 px-2.5 py-1 rounded-md">
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
