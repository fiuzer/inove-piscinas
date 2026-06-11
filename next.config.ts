import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    qualities: [20, 40, 60, 75, 80, 90],
    formats: ["image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
