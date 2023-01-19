/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: `${process.env.GRAPHQL_API_URL}/:path*`,
      }
    ]
  }
}

module.exports = nextConfig
