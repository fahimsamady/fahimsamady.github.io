// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // <-- enables static HTML export
  images: {
    unoptimized: true, // GH Pages doesn't support Next/Image optimization
  },
  basePath: "/me", // replace with your repo name
  assetPrefix: "/me/",
};

module.exports = nextConfig;
