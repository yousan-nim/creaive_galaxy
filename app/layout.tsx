import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PERSONALIZED GALAXED",
  description: "game by creaive",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="max-h-screen flex items-center justify-center bg-red-200 ">
        <div className="w-full max-w-[520px] rounded-lg shadow ">
          {children}
        </div>
      </body>
    </html>
  );
}