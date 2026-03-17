/** @type {import('next').NextConfig} */
const nextConfig = { 
  output: 'export', 
  images: { unoptimized: true },
  basePath: '/peepaw',
  assetPrefix: '/peepaw'
}
module.exports = nextConfig
