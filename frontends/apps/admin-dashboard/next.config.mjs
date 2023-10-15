/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  distDir: "./dist",
  transpilePackages: ["@ui/components"],
};

export default nextConfig;
