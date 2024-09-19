import "./globals.css";

import AsyncHeader from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import type { Metadata } from "next";
import { Sora } from "next/font/google";
import { Toaster } from "react-hot-toast";
import { cn } from "@/utils/tailwind/tw-merge";

const font = Sora({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const Header = await AsyncHeader();
    return (
        <html lang="en">
            <body
                className={cn(
                    "relative min-h-screen bg-gradient-to-b from-[#F9FFEF] to-[#D9F7FE] text-app-tertiary",
                    font.className,
                )}
            >
                <Toaster />
                {Header}
                {children}
                <Footer />
            </body>
        </html>
    );
}
