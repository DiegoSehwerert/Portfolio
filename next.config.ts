import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "media.licdn.com",
        pathname:
          "/dms/image/D4D03AQF0mmv4AcAHjQ/profile-displayphoto-shrink_200_200/0/1737065924268",
      },
    ],
  },
  webpack(config: any) {
    config.module.rules.push({
      test: /\.(tsx?|js|css|html)$/,
      resourceQuery: /raw/, // solo cuando haces `?raw`
      use: "raw-loader",
    });

    return config;
  },
};

export default nextConfig;
