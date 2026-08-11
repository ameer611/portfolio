// Every piece of content on the page lives here. Edit this file, not the
// components — they only decide how it is laid out.

export const profile = {
  name: 'Mukhammad Usmonov',
  first: 'Mukhammad',
  last: 'Usmonov',
  role: 'AI Engineer & Backend Developer',
  location: 'Tashkent, Uzbekistan',
  email: 'm.usmon.1606@gmail.com',
  phone: '+998 (95) 010-1606',
  available: true,
  tagline:
    'I design and ship intelligent systems in Python — production RAG pipelines, LLM-backed products, and backend services built to hold up under real load.',
}

export const socials = [
  { label: 'GitHub', key: 'github', href: 'https://github.com/ameer611' },
  { label: 'LinkedIn', key: 'linkedin', href: 'https://linkedin.com/in/muhammad-usmonov-oo1' },
  { label: 'Medium', key: 'medium', href: 'https://usmon-muxammad.medium.com/' },
]

// Taken from the delivery numbers in the experience entries below.
export const metrics = [
  { value: '40%', label: 'Reduction in API response latency' },
  { value: '50k+', label: 'Events per day through Kafka' },
  { value: '100k+', label: 'Records served per endpoint' },
]

export const profileCopy = {
  heading: 'Bridging AI research and dependable backend engineering',
  paragraphs: [
    "I'm an AI Engineer with hands-on experience designing and deploying intelligent applications in Python. My work spans machine learning, large language models, RAG architectures, and high-load data processing.",
    "I've built production-ready solutions with FastAPI, Scikit-learn, Keras, PostgreSQL, and Qdrant — always with an eye toward performance, maintainability, and real-world impact.",
  ],
  focus: [
    'Machine Learning',
    'Large Language Models',
    'RAG Systems',
    'Backend Engineering',
    'Data Processing',
    'Vector Search',
    'API Design',
    'Microservices',
  ],
}

export const jobs = [
  {
    role: 'Python Developer',
    company: 'Ministry of Economy and Finance',
    detail: 'Republic of Uzbekistan',
    period: "Jul 2025 — Jan 2026",
    stack: ['Python', 'FastAPI', 'Apache Kafka', 'PostgreSQL', 'Docker', 'Microservices'],
    points: [
      'Designed RESTful APIs for datasets exceeding 100k records, adding pagination and query optimisation that cut response latency by 40%.',
      'Built a centralised logging system on Apache Kafka handling 50k+ events per day, enabling real-time monitoring and faster incident resolution.',
      'Developed and deployed an MD5-hashing URL shortener microservice to manage links for SMS marketing campaigns and improve campaign tracking.',
      'Contributed to backend architecture design and code review, improving maintainability across multiple services.',
    ],
  },
  {
    role: 'Software Developer — Volunteer',
    company: 'United Nations Development Programme',
    detail: 'UNDP',
    period: "Nov 2025 — Jan 2026",
    stack: ['Python'],
    points: [
      'Contributed development work to UNDP digital initiatives alongside a distributed volunteer engineering team.',
    ],
  },
]

export const projects = [
  {
    title: 'Postgres Pro Support',
    kind: 'Retrieval-augmented assistant',
    period: 'May — Jun 2026',
    blurb:
      'A production RAG assistant over the PostgreSQL 14 documentation that answers technical questions with exact source citations.',
    points: [
      'Built the retrieval stack on LangChain, Qdrant, Hugging Face embeddings and Groq LLMs.',
      'Engineered the full semantic pipeline: preprocessing, chunking, embedding generation and vector similarity search.',
      'Grounded every response strictly in the official documentation to minimise hallucination.',
    ],
    tech: ['LangChain', 'Qdrant', 'Hugging Face', 'Groq API', 'Streamlit', 'Python'],
    link: 'https://huggingface.co/spaces/Ameer1606/PostgresPro-Support',
    linkLabel: 'View on Hugging Face Spaces',
  },
  {
    title: 'AI Medicine Reminder',
    kind: 'Multimodal Telegram assistant',
    period: 'Apr 2026',
    blurb:
      'A Telegram bot that reads a photograph of a prescription and turns it into a scheduled course of medication reminders.',
    points: [
      'Built scheduling and notification delivery on FastAPI, Aiogram and APScheduler.',
      'Integrated Google Gemini for multimodal prescription processing, automating data entry through image-to-text OCR.',
      'Used the Cerebras AI API to validate and normalise extracted drug information, improving data accuracy.',
    ],
    tech: ['FastAPI', 'Aiogram', 'APScheduler', 'Google Gemini', 'Cerebras AI'],
    link: 'https://t.me/dorivor_eslatma_bot',
    linkLabel: 'Open the Telegram bot',
  },
]

export const skillGroups = [
  { title: 'Languages', tags: ['Python'] },
  {
    title: 'Machine learning & data',
    tags: ['pandas', 'polars', 'numpy', 'Scikit-learn', 'Keras', 'matplotlib', 'seaborn', 'LangChain', 'RAG'],
  },
  {
    title: 'LLM platforms & APIs',
    tags: ['OpenAI', 'Anthropic (Claude)', 'Google Gemini', 'Groq', 'Cerebras', 'Hugging Face', 'EasyOCR'],
  },
  {
    title: 'Agentic tooling',
    tags: ['MCP', 'Claude Code', 'Codex', 'GitHub Copilot', 'Antigravity', 'Cursor'],
  },
  {
    title: 'Backend',
    tags: ['FastAPI', 'Django', 'Django REST Framework', 'Nginx', 'Docker', 'CI/CD'],
  },
  {
    title: 'Databases & vector search',
    tags: ['PostgreSQL', 'Qdrant', 'MySQL', 'SQLite', 'MongoDB', 'Redis'],
  },
  { title: 'Cloud', tags: ['GCP', 'AWS', 'DigitalOcean'] },
  {
    title: 'Infrastructure & tools',
    tags: ['Git', 'Linux', 'Kafka', 'RabbitMQ', 'Celery', 'SQLAlchemy', 'Alembic', 'Postman', 'Swagger', 'Jira'],
  },
  {
    title: 'Concepts',
    tags: [
      'Supervised learning', 'Unsupervised learning', 'Model evaluation', 'Tokenisation',
      'Async processing', 'Caching', 'OOP', 'Microservices', 'JWT', 'Multiprocessing',
      'Multithreading', 'Linear algebra', 'Agile / Kanban',
    ],
  },
]

export const education = [
  {
    qualification: 'BSc Computer Science',
    field: 'AI Solutions and Applications',
    institution: 'PDP University',
    institutionUrl: 'https://pdpu.uz/',
    place: 'Tashkent, Uzbekistan',
    period: '',
  },
]

export const resumes = [
  {
    code: 'EN',
    label: 'English',
    href: './resume-en.pdf',
    file: 'Mukhammad_Usmonov_Resume_EN.pdf',
  },
  {
    code: 'RU',
    label: 'Русский',
    href: './resume-ru.pdf',
    file: 'Mukhammad_Usmonov_Resume_RU.pdf',
  },
]

// Recruiters read in this order: who, what have you done, what have you
// built, what do you know, credentials, how to reach you.
export const sections = [
  { id: 'profile', label: 'Profile' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
]
