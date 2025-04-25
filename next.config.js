const nextConfig = {
    reactStrictMode: true,
    output: 'export',
    trailingSlash: true,
    images: {
        // Disable Image Optimization API
        unoptimized: true,
      },
  }
   
  module.exports = nextConfig