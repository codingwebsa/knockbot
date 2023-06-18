/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/webp"],
    domains: [
      "supertools.therundown.ai",
      "uploadthing.com",
      "webstack-screenshot-one.vercel.app",
    ],
  },
};

module.exports = nextConfig;
