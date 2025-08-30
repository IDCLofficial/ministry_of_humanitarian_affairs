/** @type {import('next').NextConfig} */
const nextConfig = {
  // Optimize for production builds
  swcMinify: true,
  
  // Reduce memory usage during build
  experimental: {
    // Enable SWC minification for better performance
    swcMinify: true,
    // Reduce memory usage
    workerThreads: false,
    // Optimize bundle size
    optimizeCss: true,
  },
  
  // Optimize images
  images: {
    formats: ['image/webp', 'image/avif'],
  },
  
  // Reduce bundle size
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
      };
    }
    
    // Optimize for memory usage
    config.optimization = {
      ...config.optimization,
      splitChunks: {
        chunks: 'all',
        cacheGroups: {
          default: {
            minChunks: 2,
            priority: -20,
            reuseExistingChunk: true,
          },
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            priority: -10,
            chunks: 'all',
          },
        },
      },
    };
    
    return config;
  },
  
  // Compress output
  compress: true,
  
  // Optimize for production
  poweredByHeader: false,
  generateEtags: false,
};

module.exports = nextConfig;
