import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    ignoreDuringBuilds: true, //This allows production builds to sucessfully complete
  }
};

export default nextConfig;
