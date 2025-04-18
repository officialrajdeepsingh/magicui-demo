import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { DotPattern } from "@/components/magicui/dot-pattern";
import { Header } from "@/components/header";
import { cn } from "@/lib/utils";
import { Meteors } from "@/components/magicui/meteors";
import { ThemeProvider } from "next-themes";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "How to use Magic UI Library in Next.js 15?",
  description:
    "Learn how to integrate the Magic UI library into a Next.js 15 project.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      >
        <ThemeProvider>
          <div className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden rounded-lg ">
            <Meteors />

            <DotPattern
              className={cn(
                "[mask-image:radial-gradient(1200px_circle_at_center,white,transparent)]",
              )}
            />

            {children}
            <Header />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
