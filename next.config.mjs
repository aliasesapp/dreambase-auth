/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  // Configure for Cloudflare Pages
  skipMiddlewareUrlNormalize: true,
  skipTrailingSlashRedirect: true,
  experimental: {
    optimizePackageImports: ["@radix-ui/react-icons"],
    serverActions: true,
  },
  webpack: (config, { isServer, dev }) => {
    if (!isServer && !dev) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        async_hooks: false,
        fs: false,
        net: false,
        tls: false,
        child_process: false,
      };
    }
    return config;
  },
};

export default nextConfig;
