// @ts-check

/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
  output: 'export',
  basePath: '/dependency-dashboard',
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig
