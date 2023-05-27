/** @type {import('next').NextConfig} */

const { version } = require('./package.json');

const nextConfig = {
  publicRuntimeConfig: {
    version,
  },
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  output: 'export',
};

module.exports = nextConfig;
