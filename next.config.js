/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  async redirects() {
    return [{ source: "/favicon.ico", destination: "/favicon.png", permanent: true }];
  },
  async headers() {
    return [{
      source: "/:path*",
      headers: [
        { key: "X-Content-Type-Options", value: "nosniff" },
        { key: "X-Frame-Options", value: "SAMEORIGIN" },
        { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        { key: "Content-Security-Policy", value: "object-src 'none'; base-uri 'self'; frame-ancestors 'self'" },
      ],
    }];
  },

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
