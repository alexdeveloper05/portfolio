import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  // disable image optimization for static export
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
