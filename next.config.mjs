/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // The site only uses 2 hand-optimised WebP files (20 KB + 1.4 KB).
    // Skipping /_next/image avoids a serverless cold start on the
    // Vercel Hobby tier — files are served directly from the CDN.
    unoptimized: true,
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60 * 60 * 24 * 30,
  },
  compress: true,
};

export default nextConfig;
