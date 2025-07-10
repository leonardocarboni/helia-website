/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
  },
  transpilePackages: ['@mep-agency/next-iubenda'],
  trailingSlash: true,
};

module.exports = nextConfig;