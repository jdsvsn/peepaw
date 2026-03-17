/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,                 // needed for GitHub Pages routing
  basePath: '/<repo-name>',            // replace <repo-name> with your GitHub repo name
  assetPrefix: '/<repo-name>/',        // ensures CSS/JS assets load correctly
  images: { unoptimized: true },
};

module.exports = nextConfig;
