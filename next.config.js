const nextConfig = {
    basePath: '/timson-homepage',
    assetPrefix: '/timson-homepage/',
    reactStrictMode: true,
    output: 'export',
    trailingSlash: true,
    images: {
        // Disable Image Optimization API
        unoptimized: true,
      },
  }
   
  module.exports = nextConfig