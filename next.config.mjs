/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    qualities: [100, 75],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        port: "",
        pathname: "/p/**",
      },
    ],
  },
}

export default nextConfig
