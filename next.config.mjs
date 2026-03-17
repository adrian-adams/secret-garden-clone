/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactStrictMode: true,
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "eu-west-2.graphassets.com",
        pathname: "/**", // allow all images under this domain
        // qualities: [25, 50, 75, 100]
      },
    ],
  },
  typescript: {
    ignoreBuildErrors: true
  },
};

export default nextConfig;
