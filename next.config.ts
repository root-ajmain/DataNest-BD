import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Static HTML export — compatible with Hostinger shared hosting (no Node.js server needed)
  output: 'export',

  // Generate /about/index.html instead of /about.html — works better on shared hosting
  trailingSlash: true,

  // Next.js image optimization requires a server; disable for static export
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: 'https', hostname: 'i.ibb.co.com' },
      { protocol: 'https', hostname: 'i.ibb.co' },
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'i.pravatar.cc' },
    ],
  },

  // NOTE: headers() is not supported in static export.
  // Security headers (X-Frame-Options, X-Content-Type-Options, Referrer-Policy)
  // are handled via the .htaccess file instead.
};

export default nextConfig;
