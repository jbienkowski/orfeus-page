/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/orfeus',
  trailingSlash: true,
  output: "export",
  images: { unoptimized: true }
};

export default nextConfig;
