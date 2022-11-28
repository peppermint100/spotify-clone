/** @type {import('next').NextConfig} */
const Dotenv = require("dotenv-webpack")

const nextConfig = {
  reactStrictMode: true,
  webpack5: true,
  webpack: (config) => {
    config.resolve.fallback = { fs: false };

    return config;
  },
};

module.exports = nextConfig
