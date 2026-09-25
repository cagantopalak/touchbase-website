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
  title: "TouchBase Pro — PC Remote Controller | Akıllı TV Kumandası & Dinamik Trackpad",
  description:
    "Windows bilgisayarınızı yatağınızdan veya koltuğunuzdan Android telefonunuzla TV kumandası ergonomisinde yönetin. 1000Hz cam trackpad, Wake-on-LAN, parmak iziyle PC kilit açma, sıfır bulut, sub-3ms ultra düşük gecikme.",
  keywords: [
    "TouchBase",
    "PC Remote Controller",
    "Bilgisayar Uzaktan Kumanda",
    "Android PC Remote",
    "Smart TV Remote PC",
    "Wake on LAN Android",
    "Windows Hello Fingerprint Unlock",
    "Air Mouse Gyroscope",
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
    locale: "tr_TR",
    url: "https://touchbase-website.vercel.app",
    title: "TouchBase Pro — PC Remote Controller",
    description:
      "Yatağından veya koltuğundan PC'ni gerçek bir Smart TV kumandası gibi yönet. Sıfır bulut, sub-3ms yerel Wi-Fi, ömür boyu tek seferlik lisans.",
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
      "Bilgisayarını Android telefonundan gerçek bir TV kumandası ergonomisinde kontrol et. 100% Yerel Wi-Fi, sub-3ms tepki süresi.",
    images: ["/images/remote_tactile.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" className={`dark ${inter.variable} scroll-smooth`}>
      <body className="bg-black text-[#e4e1e7] min-h-screen flex flex-col antialiased selection:bg-[#00e5ff] selection:text-black">
        {children}
      </body>
    </html>
  );
}
