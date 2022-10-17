/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ['ko'],
    defaultLocale: 'ko',
  },
  images: {
    domains: ['www.koreanair.com'],
  },
};

module.exports = nextConfig;
