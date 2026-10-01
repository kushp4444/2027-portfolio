import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  // GitHub Pages serves this as a project site under /2027-portfolio/
  basePath: process.env.NODE_ENV === "production" ? "/2027-portfolio" : "",
};

export default nextConfig;
