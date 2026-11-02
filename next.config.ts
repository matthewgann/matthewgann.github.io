import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  experimental: {
    viewTransition: true,
  },
  trailingSlash: true,
  images: {
    loader: "custom",
    loaderFile: "./lib/image-loader.ts",
    deviceSizes: [640, 960, 1280, 1920],
    imageSizes: [64, 128, 160, 320],
  },
};

export default nextConfig;
