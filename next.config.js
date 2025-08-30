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
