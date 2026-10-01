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
    tagline: "1st place — MakeUofT",
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
      "Real-time architecture discovery: LLM analysis of source code generating architecture diagrams, service inventory, and a full technical wiki",
      "Multi-agent orchestration — parallel agents analyzing multiple repositories for a holistic view, launched from the RTAD homepage UI",
      "Refactored the service behind a single API, enabling CI/CD integration (fresh architecture on every prod deploy) and MCP consumption",
      "Built and deployed a full-stack portal for Claude Code access requests during the company-wide rollout — LOB leads request access for their teams; VPs and senior management use it for cost and budget tracking",
    ],
  },
  {
    company: "Moriroku Technology North America",
    role: "Software Engineering Intern",
    period: "Jun 2025 – Aug 2025",
    bullets: [
      "Automated job-shop scheduling with Google OR-Tools (CP-SAT): syncs Dynamics 365 orders, generates due-date-prioritized machine assignments rendered as a Gantt chart in Vue",
      "Replaced the floor manager's daily manual scheduling — system re-optimizes as orders arrive, human just confirms",
    ],
  },
  {
    company: "PBJ Cleaning Depot",
    role: "Software Engineering Intern",
    period: "May 2024 – Aug 2024",
    bullets: [
      "Built an ERP system from scratch for franchise locations — inventory, orders, customers, invoicing, shipping labels — to replace expensive per-location ERP licenses",
      "Designed for daily use across the warehouse floor, accounting, sales, and management",
    ],
  },
];

export const aboutLines = [
  "I build production AI systems — not demos.",
  "Currently at RBC Enterprise Architecture.\nPreviously shipping software at Moriroku Technology North America and PBJ Cleaning Depot.",
  "McMaster CS, Minor in Statistics — graduating May 2028.",
];

export const nav = [
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];
