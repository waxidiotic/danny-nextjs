/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cloudinary-cdn.ffm.to",
      },
    ],
  },
};

export default nextConfig;
