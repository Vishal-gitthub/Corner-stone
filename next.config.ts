import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/club", destination: "/venue", permanent: true },
      { source: "/function-space", destination: "/spaces", permanent: true },
    ];
  },
};

export default nextConfig;
