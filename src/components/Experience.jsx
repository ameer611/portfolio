const jobs = [
  {
    role: 'Python Developer',
    company: 'Ministry of Economy and Finance — Republic of Uzbekistan',
    period: "Jul '25 — Jan '26",
    points: [
      'Developed and deployed an MD5-hashing URL shortener microservice to efficiently manage links for SMS marketing campaigns and improve campaign tracking.',
      'Designed RESTful APIs for datasets exceeding 100k+ records — implemented pagination and query optimization, reducing response latency by 40%.',
      'Built a centralized logging system powered by Apache Kafka handling 50k+ events/day, enabling real-time monitoring and faster incident resolution.',
      'Contributed to backend architecture design and code reviews, enhancing maintainability across multiple services.',
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <p className="text-xs font-bold tracking-widest uppercase text-indigo-600 mb-3">Experience</p>
        <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 mb-10">Where I've worked</h2>
        <div className="relative pl-6 border-l-2 border-indigo-200">
          {jobs.map((job, i) => (
            <div key={i} className="relative mb-10 pl-6">
              <div className="absolute -left-[1.65rem] top-1.5 w-3.5 h-3.5 rounded-full bg-indigo-600 border-2 border-white ring-2 ring-indigo-300" />
              <div className="flex flex-wrap items-start justify-between gap-3 mb-1">
                <h3 className="text-lg font-bold text-slate-900">{job.role}</h3>
                <span className="text-xs font-semibold text-white bg-indigo-600 px-3 py-1 rounded-full">
                  {job.period}
                </span>
              </div>
              <p className="text-sm font-semibold text-indigo-600 mb-3">{job.company}</p>
              <ul className="space-y-2">
                {job.points.map((p, j) => (
                  <li key={j} className="flex gap-2 text-sm text-slate-500 leading-relaxed">
                    <span className="text-indigo-400 mt-0.5 flex-shrink-0">▸</span> {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
