// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Removed static export settings for Vercel deployment
  // Vercel handles Next.js builds automatically
  
  // Configure allowed image domains for external images
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'github.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'githubusercontent.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

module.exports = nextConfig;
