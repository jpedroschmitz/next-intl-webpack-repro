import type { NextConfig } from 'next'
import createNextIntlPlugin from 'next-intl/plugin'

const withNextIntl = createNextIntlPlugin({
  experimental: {
    srcPath: './app',
    extract: true,
    messages: {
      path: './messages',
      format: 'json',
      locales: 'infer',
      sourceLocale: 'en',
    },
  },
})

const nextConfig: NextConfig = {
  webpack(config) {
    // Same as what e.g. @sentry/nextjs sets to upload source maps
    config.devtool = 'source-map'
    return config
  },
}

export default withNextIntl(nextConfig)
