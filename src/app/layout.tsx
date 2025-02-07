import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import MasterWrapper from "@/utils/wrappers/masterWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pokemon Search App",
  description: "Created as a case study for Yolk Studio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <MasterWrapper>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased w-screen h-screen overflow-x-hidden`}
        >
          {children}
        </body>
      </MasterWrapper>
    </html>
  );
}
