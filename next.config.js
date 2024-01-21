/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  distDir: "dist",
  // output: "export",

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "***"
      },
      {
        protocol: "http",
        hostname: "***"
      }
    ]
  },
  compiler: {
    // removeConsole: { exclude: ["info", "error"] },
    reactRemoveProperties: { properties: ["^data-testid$"] }
  }
};

module.exports = nextConfig;
