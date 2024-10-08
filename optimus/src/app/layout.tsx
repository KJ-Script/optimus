import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/navbar";


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
  title: "Optimus",
  description: "Interview Preparation tool",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-neutral-900 min-h-screen`}
      >       
        <div className="w-full flex justify-center font-[family-name:var(--font-geist-sans)] p-4">
          <Navbar />
        </div>
        <div className="font-[family-name:var(--font-geist-sans)] text-white flex justify-center">
        {children}
        </div>
      </body>
    </html>
  );
}
