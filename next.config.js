/** @type {import('next').NextConfig} */
const withNextIntl = require('next-intl/plugin')('./src/i18n/request.ts');

const nextConfig = {
  // Additional Next.js config options here
};

module.exports = withNextIntl(nextConfig); 