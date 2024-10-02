/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "img.youtube.com",
            },
            {
                protocol: "https",
                hostname: "ljwuobgffkzesfcujvmv.supabase.co",
            },
        ],
    },
};

export default nextConfig;
