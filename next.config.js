/** @type {import('next').NextConfig} */
const nextConfig = {

  images: {
    unoptimized: true, // wajib untuk next export agar tidak error

    domains: ["127.0.0.1", "localhost", "bumimorowaliutama.com"],

    remotePatterns: [
      {
        protocol: "http",
        hostname: "127.0.0.1",
      },
      {
        protocol: "http",
        hostname: "localhost",
      },
      {
        protocol: "https",
        hostname: "bumimorowaliutama.com",
      },
      {
        protocol: "https",
        hostname: "www.bumimorowaliutama.com",
      },
    ],
  },
};

module.exports = nextConfig;
