/** @type {import("next").NextConfig} */
module.exports = {
  reactStrictMode: true,
  experimental: {
    ...(process.env.NEXT_PUBLIC_VERCEL_ENV === 'production'
      ? {
        workerThreads: false,
        cpus: 5,
      }
      : {}),
    scrollRestoration: true,
  },
  swcMinify: true,
  trailingSlash: true,
  i18n: {
    locales: ['nl', 'en'],
    defaultLocale: 'en',
    localeDetection: false,
    domains: [
      {
        domain: 'www.link-demo.nl',
        defaultLocale: 'nl',
      },
      {
        domain: 'www.link-demo.com',
        defaultLocale: 'en',
      },
    ]
  }
}
