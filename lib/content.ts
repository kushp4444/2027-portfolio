export const profile = {
  name: "Kush Patel",
  firstName: "Kush",
  lastName: "Patel",
  email: "patek190@mcmaster.ca",
  github: "https://github.com/kushp4444",
  githubHandle: "kushp4444",
  linkedin: "https://www.linkedin.com/in/kushp4444/",
  resume: "https://kushpatel.ca/resume.pdf",
  school: "McMaster University",
  degree: "B.A.Sc. Computer Science, Statistics minor",
  grad: "May 2028",
  location: "Toronto, Canada",
};

export const hero = {
  eyebrow: "Software Engineer",
  positioning: "Software Development Intern @ RBC Enterprise Architecture,",
  positioningAccent: "building production AI systems.",
};

export type Project = {
  id: string;
  index: string;
  title: string;
  tagline?: string;
  description: string;
  tags: string[];
  year: string;
  status?: "In progress";
  preview?: boolean;
};

export const projects: Project[] = [
  {
    id: "mini-ipro",
    index: "01",
    title: "Mini-IPRO",
    status: "In progress",
    description:
      "Toy-scale replica of a production oncology-imaging pipeline: DICOM QC → radiomic feature extraction → survival modeling on public lung-cancer data.",
    tags: ["Python", "PyRadiomics", "lifelines"],
    year: "2026",
    preview: false,
  },
  {
    id: "mesh",
    index: "02",
    title: "Mesh",
    tagline: "3D mesh segmentation pipeline",
    description:
      "Gemini / GPT-4 pipeline for 3D mesh segmentation, with a Three.js and React Three Fiber engine and BLE hardware input at 500 Hz using a Madgwick filter.",
    tags: ["Python", "Three.js", "React Three Fiber", "BLE", "LLMs"],
    year: "2025",
  },
  {
    id: "rxid",
    index: "03",
    title: "RxID",
    tagline: "1st place - MakeUofT",
    description: "First place out of 60+ teams at MakeUofT.",
    tags: ["Hackathon", "Hardware"],
    year: "2025",
  },
  {
    id: "resdex",
    index: "04",
    title: "ResDex",
    tagline: "Research collaboration platform",
    description:
      "Built with a team of 5, in collaboration with 12+ PhDs. 500+ pre-signups.",
    tags: ["Web", "Team of 5"],
    year: "2024",
  },
];

export type Experience = {
  company: string;
  role: string;
  period: string;
  bullets: string[];
  current?: boolean;
};

export const experience: Experience[] = [
  {
    company: "RBC - Enterprise Architecture",
    current: true,
    role: "Software Developer Intern",
    period: "Jan 2026 – Present",
    bullets: [
      "Eliminated stale documentation, saving 26k+ hours of manual documentation YTD across 1,316 unique repos — LLMs analyze codebases to generate architecture diagrams and full technical wikis",
      "Accelerated multi-repo analysis speed by 100%, doubling capacity from 10 to 20 concurrent repos per analysis, via a parallel multi-agent orchestration system",
      "Decoupled a legacy UI-locked monolith into independent microservices, exposing the platform through a single API to enable MCP and CI/CD adoption — fresh documentation on every production release",
      "Drove a company-wide Claude Code rollout to 100% business-line adoption — single-handedly built a full-stack governance portal with 3-tier RBAC, audit trails, and spend analytics for VP-level ROI tracking",
    ],
  },
  {
    company: "Moriroku Technology North America",
    role: "Software Engineering Intern",
    period: "Jun 2025 – Aug 2025",
    bullets: [
      "Automated production scheduling: live order-data pipeline from MS Dynamics 365 to MS SQL into a CP-SAT model (Google OR-Tools), delivering a Gantt chart in Vue — 3-4x scheduling capacity per cycle",
      "Real-time Vue OEE dashboard across 20+ production lines, boosting downtime response speed by ~30%",
      "Centralized template management platform (PostgreSQL + Node.js/Express + FastAPI) with auth and audit logging — update time from hours to minutes, 80% fewer errors",
    ],
  },
  {
    company: "PBJ Cleaning Depot",
    role: "Software Engineering Intern",
    period: "May 2024 – Aug 2024",
    bullets: [
      "Multi-module ERP system projected to save ~$25K/year by cutting external licenses 80%",
      "Cut manual data entry 60% and lifted inventory accuracy to 99.5% via automated stock monitoring and purchase-order workflows with real-time tracking",
      "RESTful APIs in Go — JWT auth, bcrypt, RBAC across 20+ protected endpoints",
    ],
  },
];

export const aboutLines = [
  "I build production AI systems - not demos.",
  "Currently at RBC Enterprise Architecture.\nPreviously shipping software at Moriroku Technology North America and PBJ Cleaning Depot.",
  "McMaster CS, Minor in Statistics - graduating May 2028.",
];

export const nav = [
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];
