import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      new URL(
        "https://media.licdn.com/dms/image/D4D03AQF0mmv4AcAHjQ/profile-displayphoto-shrink_200_200/0/1737065924268"
      ),
    ],
  },
};

export default nextConfig;
