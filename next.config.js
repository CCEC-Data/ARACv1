/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: "/ARACv1",
  assetPrefix: "/ARACv1/",
};

module.exports = nextConfig;
