import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: "/edstellar_course_catalog.pdf",
        headers: [
          {
            key: "Content-Disposition",
            value: 'attachment; filename="edstellar_course_catalog.pdf"',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
