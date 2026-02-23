import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    qualities: [40, 75],
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
