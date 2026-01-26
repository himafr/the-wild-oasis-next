import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'fslvzslmpmavpanfriyi.supabase.co',
        pathname: '/storage/v1/object/public/**',
      },
    ],
  },
  // output:"export",
  /* config options here */
};

export default nextConfig;
