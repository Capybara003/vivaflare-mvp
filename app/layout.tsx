import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./component/header/headerComponent";
import SidebarComponent from "./component/sidebar/sidebarComponent";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Viva Flare Official MVP",
  description: "Viva Flare Official MVP",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased h-screen flex flex-col`}
      >
        <Header />
        <div className="h-full w-screen flex flex-1/2 bg-gradient-to-b from-[#110C1A] to-black">
          <SidebarComponent />
          <div className="flex-1/2">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
