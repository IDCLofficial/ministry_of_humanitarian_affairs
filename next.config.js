/** @type {import('next').NextConfig} */
const nextConfig = {
  // Optimize for production builds
  swcMinify: true,
  
  // Minimal experimental features to reduce memory usage
  experimental: {
    // Reduce memory usage
    workerThreads: false,
  },
  
  // Optimize images
  images: {
    formats: ['image/webp', 'image/avif'],
    domains: [
      'images.ctfassets.net',
      'downloads.ctfassets.net'
    ],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  
  // Minimal webpack config to reduce memory usage
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
      };
    }
    return config;
  },
  
  // Compress output
  compress: true,
  
  // Optimize for production
  poweredByHeader: false,
  generateEtags: false,
  
  // Reduce memory usage during build
  output: 'standalone',
  
  // Disable source maps to save memory
  productionBrowserSourceMaps: false,
};

module.exports = nextConfig;
