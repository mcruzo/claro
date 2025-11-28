import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*.clarovideo.net',
        pathname: '/**',
        port: '',
        search: ''
      },
    ],
  },
};

export default nextConfig;
