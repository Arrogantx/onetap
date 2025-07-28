const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  trailingSlash: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60,
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  env: {
    NEXT_PUBLIC_SITE_URL: process.env.SITE_URL || 'https://onetapxmedia.com',
  },
  webpack: (config, { dev, isServer }) => {
    // Disable file system caching in development to prevent ENOENT errors
    if (dev) {
      config.cache = false;
    } else {
      config.cache = {
        type: 'memory',
        maxGenerations: 1,
      };
    }
    
    return config;
  },
  // Optimize image loading
  experimental: {
    optimizeCss: true,
    optimizeServerReact: true,
  },
};

module.exports = nextConfig;