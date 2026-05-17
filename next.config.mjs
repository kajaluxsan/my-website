/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
    // Caches the optimised image variants for 30 days at the edge.
    minimumCacheTTL: 60 * 60 * 24 * 30,
  },
  // Smaller production bundles and faster repeat navigations.
  compress: true,
};

export default nextConfig;
