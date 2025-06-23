import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['flagcdn.com'], // ✅ Allow this remote image domain
  },
};

export default nextConfig;
