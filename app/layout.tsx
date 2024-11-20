import ChatBoard from "@/components/layout/Chat";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "DOLINE",
  description:
    "Your tech partner for software design, development, maintainance, integrations, and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased text-sky-900 dark:text-sky-100 scroll-smooth`}
      >
        <Navbar />
        <main className="flex flex-col min-h-screen py-5 relative">
          {children}
          <ChatBoard />
        </main>
        <Footer />
      </body>
    </html>
  );
}

// https://doline.vercel.app/
