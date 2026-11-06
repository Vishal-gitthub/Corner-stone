// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   async redirects() {
//     return [
//       {
//         source: "/:path*",
//         has: [{ type: "host", value: "www.cornerstonepub.com.au" }],
//         destination: "https://cornerstonepub.com.au/:path*",
//         permanent: true,
//       },
//       {
//         source: "/:path*",
//         has: [{ type: "host", value: "thecornerstonepub.com.au" }],
//         destination: "https://cornerstonepub.com.au/:path*",
//         permanent: true,
//       },
//       {
//         source: "/:path*",
//         has: [{ type: "host", value: "www.thecornerstonepub.com.au" }],
//         destination: "https://cornerstonepub.com.au/:path*",
//         permanent: true,
//       },
//       { source: "/club", destination: "/venue", permanent: true },
//       { source: "/function-space", destination: "/spaces", permanent: true },
//     ];
//   },
//   async headers() {
//     return [
//       {
//         source: "/:path*",
//         has: [{ type: "host", value: ".*\\.vercel\\.app" }],
//         headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }],
//       },
//     ];
//   },
// };

// export default nextConfig;




import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Only keep your page redirects. 
      // We are deleting the domain (host) redirects so Vercel can handle them.
      { source: "/club", destination: "/venue", permanent: true },
      { source: "/function-space", destination: "/spaces", permanent: true },
    ];
  },
  async headers() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: ".*\\.vercel\\.app" }],
        headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }],
      },
    ];
  },
};

export default nextConfig;