const competencies = [
  'Machine Learning', 'Large Language Models',
  'RAG Systems', 'Backend Engineering',
  'Data Processing', 'Vector Search',
  'API Design', 'Microservices',
]

export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <p className="text-xs font-bold tracking-widest uppercase text-indigo-600 mb-3">About</p>
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 mb-6 leading-tight">
              Engineering intelligent systems that ship
            </h2>
            <div className="space-y-4 text-slate-500 text-[1.02rem] leading-relaxed">
              <p>
                I'm an AI Engineer with hands-on experience designing and deploying intelligent applications
                in Python. My work spans machine learning, large language models, RAG architectures, and
                high-load data processing.
              </p>
              <p>
                I've built production-ready solutions using FastAPI, Scikit-learn, Keras, PostgreSQL, and
                Qdrant — always with an eye toward performance, maintainability, and real-world impact.
              </p>
              <p>
                My core focus: bridging the gap between cutting-edge AI research and reliable backend engineering.
              </p>
            </div>
          </div>
          <div>
            <p className="text-xs font-bold tracking-widest uppercase text-indigo-600 mb-4">Core competencies</p>
            <div className="grid grid-cols-2 gap-2.5">
              {competencies.map(c => (
                <div key={c}
                  className="flex items-center gap-2 bg-indigo-50 text-indigo-700 text-sm font-medium px-3 py-2.5 rounded-lg">
                  <span className="font-bold text-indigo-400">→</span> {c}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
