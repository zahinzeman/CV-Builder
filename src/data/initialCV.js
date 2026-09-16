export const INITIAL_CV = {
  personal: {
    fullName: "Alexander Vance",
    title: "Principal Software Architect",
    email: "alex.vance@workfolio.io",
    phone: "+1 (415) 892-4102",
    location: "San Francisco, CA (Open to Remote)",
    website: "https://alexvance.dev",
    linkedin: "linkedin.com/in/alexvance-arch",
    github: "github.com/alexvance",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80"
  },
  summary: "Results-driven Principal Architect with 10+ years of experience pioneering hyper-scale distributed platforms, cloud native architecture, and elite engineering teams. Successfully spearheaded high-throughput microservices handling 450M+ daily API transactions at 99.99% uptime while slashing cloud operational costs by $1.4M annually.",
  experience: [
    {
      id: "exp-1",
      position: "Principal Cloud Architect",
      company: "Starlight Technologies",
      location: "San Francisco, CA",
      startDate: "2022",
      endDate: "Present",
      current: true,
      description: "Directing the global architecture guild of 45+ engineers across distributed streaming, real-time analytics, and Kubernetes cloud infrastructure.",
      highlights: [
        "Architected multi-region event mesh handling 450M+ events/day, reducing p99 latency by 38ms.",
        "Devised automated FinOps cost governance engine that saved $1.4M annually in AWS compute spend.",
        "Championed enterprise migration from legacy monolithic systems to event-driven microservices."
      ]
    },
    {
      id: "exp-2",
      position: "Lead Full-Stack Engineer",
      company: "Aether Dynamics",
      location: "New York, NY",
      startDate: "2019",
      endDate: "2022",
      current: false,
      description: "Spearheaded core product development of client-facing fintech SaaS platform serving 180,000+ active enterprise users.",
      highlights: [
        "Led a squad of 8 engineers delivering real-time portfolio rebalancing engine with sub-second execution.",
        "Upgraded legacy React frontend to modern Next.js architecture, boosting Web Vitals score from 54 to 98.",
        "Instituted automated CI/CD pipelines reducing deployment cycle time from 3 days to 14 minutes."
      ]
    },
    {
      id: "exp-3",
      position: "Senior Software Engineer",
      company: "Helix Systems",
      location: "Boston, MA",
      startDate: "2016",
      endDate: "2019",
      current: false,
      description: "Designed resilient backend APIs, real-time WebSockets, and data ingestion pipelines for health-tech diagnostics.",
      highlights: [
        "Built HIPAA-compliant telemetry ingestion pipeline processing 10k sensory metrics per second.",
        "Refactored PostgreSQL queries and implemented Redis caching, speeding up critical endpoints by 400%."
      ]
    }
  ],
  education: [
    {
      id: "edu-1",
      degree: "M.S. in Computer Science (Distributed Systems)",
      institution: "Stanford University",
      location: "Stanford, CA",
      year: "2016",
      honors: "Summa Cum Laude, Graduate Fellowship"
    },
    {
      id: "edu-2",
      degree: "B.S. in Electrical Engineering & Computer Sciences",
      institution: "University of California, Berkeley",
      location: "Berkeley, CA",
      year: "2014",
      honors: "Dean's Honor Roll"
    }
  ],
  skills: [
    { name: "TypeScript & JavaScript", level: 95, category: "Languages" },
    { name: "Go & Python", level: 90, category: "Languages" },
    { name: "React / Next.js", level: 95, category: "Frontend" },
    { name: "Node.js & GraphQL", level: 92, category: "Backend" },
    { name: "Kubernetes & Docker", level: 88, category: "DevOps" },
    { name: "AWS & Google Cloud", level: 90, category: "Cloud" },
    { name: "PostgreSQL & Redis", level: 85, category: "Databases" },
    { name: "System Architecture & RFCs", level: 95, category: "Leadership" }
  ],
  projects: [
    {
      id: "proj-1",
      title: "PulseMesh Observability",
      link: "https://github.com/alexvance/pulsemesh",
      description: "Open-source distributed tracing library built on OpenTelemetry with automated anomaly detection."
    },
    {
      id: "proj-2",
      title: "FlowSync Engine",
      link: "https://github.com/alexvance/flowsync",
      description: "High-concurrency data replication agent syncing SQLite to cloud storage with zero-copy stream processing."
    }
  ],
  certifications: [
    {
      id: "cert-1",
      name: "AWS Certified Solutions Architect – Professional",
      issuer: "Amazon Web Services",
      year: "2024"
    },
    {
      id: "cert-2",
      name: "Certified Kubernetes Administrator (CKA)",
      issuer: "Linux Foundation / CNCF",
      year: "2023"
    }
  ]
};
