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
  demoUrl?: string;
  tags: string[];
  year: string;
  status?: "In progress";
  preview?: boolean;
};

export const projects: Project[] = [
  {
    id: "mini-nota",
    index: "01",
    title: "Mini-Nota",
    description:
      "An interactive demo, inspired by Altis Labs, that traces how lung CT scans become model-based risk rankings.",
    demoUrl: "https://mini-nota.vercel.app/",
    tags: ["Python", "Next.js", "PyRadiomics"],
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
    demoUrl: "https://mesh-3d.vercel.app/",
    tags: ["Python", "Three.js", "React Three Fiber", "BLE", "LLMs"],
    year: "2025",
  },
  {
    id: "resdex",
    index: "03",
    title: "ResDex",
    tagline: "Research collaboration platform",
    description:
      "Built with a team of 5, in collaboration with 12+ PhDs. 200+ signups.",
    demoUrl: "https://resdex.vercel.app/",
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
      "Saved 26k+ hours of manual documentation YTD across 1,316 unique repositories by building an LLM pipeline that turns code into architecture diagrams and technical wikis",
      "Doubled analysis speed and concurrent capacity from 10 to 20 repos by leveraging multi-agent orchestration",
      "Split a UI-bound monolith into microservices behind a singular API, enabling MCP and CI/CD adoption",
      "Built a full-stack governance portal for Claude Code wave 1 rollout with 3-tier RBAC, audit trails, and spend analytics on 3273 license requests across all lines of business",
    ],
  },
  {
    company: "Moriroku Technology North America",
    role: "Software Engineering Intern",
    period: "Jun 2025 – Aug 2025",
    bullets: [
      "Automated and expanded production scheduling by 3-4x per cycle by building a live data pipeline feeding Dynamics 365 orders into Google’s CP-SAT model delivering a Gantt Chart in Vue",
      "Improved downtime response speed by ~30% across 20+ production lines by building a live OEE dashboard in Vue.",
    ],
  },
  {
    company: "PBJ Cleaning Depot",
    role: "Software Engineering Intern",
    period: "May 2024 – Aug 2024",
    bullets: [
      "Built a multi-module ERP system projected to reduce external software licenses by ~80% and save ~$25K per year",
      "Built RESTful APIs in Go with JWT-based auth, bcrypt, and RBAC across 20+ protected endpoints",
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
