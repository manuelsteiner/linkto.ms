/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: '/fonts/urbanist.woff2',
        headers: [
          {
            key: 'Cache-control',
            value: 'public, immutable, max-age=31536000',
          },
        ],
      },
    ]
  },
  reactStrictMode: true,
  experimental: {
    images: {
      allowFutureImage: true,
    },
  },
}

module.exports = nextConfig
