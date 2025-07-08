import { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";
const withNextIntl = createNextIntlPlugin("./app/i18n/request.ts");

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
  webpack(config) {
    return config;
  },
};

export default withNextIntl(nextConfig);
