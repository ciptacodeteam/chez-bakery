import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: `${process.env.NEXT_PUBLIC_BLOB_HOST}`, // replace with your domain
        port: '', // keep empty unless custom port
        pathname: '/**', // allow all paths
      },
    ],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  redirects: async () => {
    return [
      {
        source: '/dashboard',
        destination: '/dashboard/categories',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
