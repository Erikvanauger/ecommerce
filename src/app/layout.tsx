import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SUSE } from "next/font/google";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SuseSans = SUSE({
  variable: "--font-SUSE",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${SuseSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
