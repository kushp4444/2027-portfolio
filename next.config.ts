import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  // GitHub Pages uses a project path; Netlify overrides it to the domain root.
  basePath:
    process.env.NEXT_PUBLIC_BASE_PATH ??
    (process.env.NODE_ENV === "production" ? "/2027-portfolio" : ""),
};

export default nextConfig;
