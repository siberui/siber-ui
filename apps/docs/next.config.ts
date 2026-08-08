import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  transpilePackages: ['@siberui/react'],
  experimental: {
    optimizePackageImports: ['@siberui/react', 'lucide-react'],
  },
};

export default nextConfig;
