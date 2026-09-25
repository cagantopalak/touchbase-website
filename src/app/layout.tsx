import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://touchbase-website.vercel.app"),
  title: "TouchBase Pro — PC Remote Controller | Smart TV Remote & Dynamic Trackpad",
  description:
    "Control your Windows PC from bed or couch with the ergonomics of a physical Smart TV remote. 1000Hz glass trackpad, Wake-on-LAN, Windows Hello fingerprint unlock, zero cloud, sub-3ms ultra-low latency.",
  keywords: [
    "TouchBase",
    "PC Remote Controller",
    "Windows Remote Control Android",
    "Smart TV Remote PC",
    "Wake on LAN Android App",
    "Windows Hello Fingerprint Unlock Remote",
    "Gyroscope Air Mouse PC",
    "Stream Deck Alternative",
  ],
  authors: [{ name: "TouchBase Systems" }],
  creator: "Çağan Topalak",
  publisher: "TouchBase",
  icons: {
    icon: "/favicon.ico",
    apple: "/images/icon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://touchbase-website.vercel.app",
    title: "TouchBase Pro — PC Remote Controller",
    description:
      "Control your Windows PC from bed or couch like a physical Smart TV remote. Zero cloud, sub-3ms local Wi-Fi, lifetime one-time license.",
    siteName: "TouchBase Pro",
    images: [
      {
        url: "/images/remote_tactile.png",
        width: 1080,
        height: 1920,
        alt: "TouchBase Pro Smart TV Remote Interface",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TouchBase Pro — PC Remote Controller",
    description:
      "Transform your Android phone into an ergonomic Smart TV remote and 1000Hz glass trackpad for Windows. 100% Local Wi-Fi, sub-3ms response.",
    images: ["/images/remote_tactile.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`dark ${inter.variable} scroll-smooth`}>
      <body className="bg-black text-[#e4e1e7] min-h-screen flex flex-col antialiased selection:bg-[#00e5ff] selection:text-black">
        {children}
      </body>
    </html>
  );
}
