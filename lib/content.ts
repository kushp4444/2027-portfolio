export const profile = {
  name: "Kush Patel",
  firstName: "Kush",
  lastName: "Patel",
  email: "kmpatel@mcmaster.ca",
  github: "https://github.com/kushp4444",
  githubHandle: "kushp4444",
  // TODO: replace with the real LinkedIn profile URL
  linkedin: "",
  resume: "https://kushpatel.ca/resume.pdf",
  school: "McMaster University",
  degree: "B.A.Sc. Computer Science, Statistics minor",
  grad: "May 2028",
  location: "Toronto, Canada",
};

export const hero = {
  eyebrow: "Portfolio — 2027",
  positioning: "Software Development Intern @ RBC Enterprise Architecture,",
  positioningAccent: "building production AI systems.",
};

export type Project = {
  id: string;
  index: string;
  title: string;
  tagline: string;
  description: string;
  tags: string[];
  year: string;
};

export const projects: Project[] = [
  {
    id: "mesh",
    index: "01",
    title: "Mesh",
    tagline: "3D mesh segmentation pipeline",
    description:
      "Gemini / GPT-4 pipeline for 3D mesh segmentation, with a Three.js and React Three Fiber engine and BLE hardware input at 500 Hz using a Madgwick filter.",
    tags: ["Python", "Three.js", "React Three Fiber", "BLE", "LLMs"],
    year: "2025",
  },
  {
    id: "rxid",
    index: "02",
    title: "RxID",
    tagline: "1st place — MakeUofT",
    description: "First place out of 60+ teams at MakeUofT.",
    tags: ["Hackathon", "Hardware"],
    year: "2025",
  },
  {
    id: "resdex",
    index: "03",
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
};

export const experience: Experience[] = [
  {
    company: "RBC",
    role: "Software Developer Intern — Enterprise Architecture",
    period: "Jan 2026 – Present",
    bullets: [
      "AI disaster-recovery generator across 50+ repositories",
      "LLM-based architecture discovery and diagram generation",
      "Architecture drift / compliance detection integrated into CI/CD across 30+ services",
      "AI agent with custom MCP server automating control-book creation from JIRA",
    ],
  },
  {
    company: "Moriroku Technology North America",
    role: "Software Engineering Intern",
    period: "Jun 2025 – Aug 2025",
    bullets: [
      "CP-SAT scheduling with Google OR-Tools",
      "Vue OEE dashboard",
      "PostgreSQL / Node / FastAPI template platform",
    ],
  },
  {
    company: "PBJ Cleaning Depot",
    role: "Software Engineering Intern",
    period: "May 2024 – Aug 2024",
    bullets: ["Shipped internal tooling for a cleaning-supply distributor."],
  },
];

export const aboutLines = [
  "I build production AI systems — not demos.",
  "Currently at RBC Enterprise Architecture. Previously shipping at Moriroku and PBJ.",
  "McMaster CS + Statistics, graduating May 2028.",
];

export const nav = [
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];
