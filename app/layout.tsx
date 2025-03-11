import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GALAXED PERSONALIZED",
  description: "game by creaive",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="max-h-screenflex items-center justify-center bg-red-200 overflow-hidden">
        <div className="w-full max-w-[520px] rounded-lg shadow ">
          {children}
        </div>
      </body>
    </html>
  );
}