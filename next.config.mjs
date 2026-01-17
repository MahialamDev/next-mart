/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
   images: {
    remotePatterns: [
      {
        protocol: "https",          // যেই protocol ব্যবহার হবে
        hostname: "static.vecteezy.com", // domain
        port: "",                   // empty হলে default port use হবে
        pathname: "/**",            // কোন path allow করা হবে
       },
      {
        protocol: 'https',
        hostname: 'www.themealdb.com',
        port: '',
        pathname: '/images/media/**',
        search: '',
      },
      {
        protocol: 'https',
        hostname: 'randomuser.me',
        port: '',
        pathname: '/api/portraits/**',
        search: '',
       },
       // ✅ Add Unsplash
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
