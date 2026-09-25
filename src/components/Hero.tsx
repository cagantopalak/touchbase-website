"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Download,
  Smartphone,
  Monitor,
  Zap,
  Shield,
  Wifi,
  Sparkles,
  CheckCircle2,
  Play,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      {/* Background Lighting Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00e5ff]/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-[#00e676]/5 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-1/4 w-[500px] h-[500px] bg-[#ff9100]/5 rounded-full blur-[130px] pointer-events-none -z-10" />

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none -z-10"
        style={{
          backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`,
          backgroundSize: "48px 48px",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Value Proposition & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
            {/* Top Micro Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 mb-6 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-[#00e5ff] shadow-[0_0_8px_#00e5ff] animate-pulse"></span>
              <span className="text-xs font-semibold tracking-wider text-zinc-300 uppercase">
                %100 Yerel Wi-Fi • Sıfır Bulut • &lt;3ms Gecikme
              </span>
            </div>

            {/* Main Catchy Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12] mb-6">
              Yatağından PC&apos;ni{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00e5ff] via-[#c3f5ff] to-[#00e676]">
                Gerçek Bir TV Kumandası
              </span>{" "}
              Gibi Yönet.
            </h1>

            {/* Clear Subtitle */}
            <p className="text-lg sm:text-xl text-zinc-400 font-normal leading-relaxed max-w-2xl mb-8">
              Hantal kablosuz klavyelerden ve 2012&apos;den kalma reklam dolu
              uygulamalardan kurtulun. TouchBase;{" "}
              <strong className="text-zinc-200">YouTube, Netflix, Spotify</strong>{" "}
              kısayolları, 1000Hz akıcı dinamik cam trackpad, parmak iziyle Windows
              kilit açma ve <strong className="text-[#00e5ff]">Wake-on-LAN</strong>{" "}
              gücünü saf OLED siyahında buluşturur.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-6">
              {/* Google Play Button */}
              <a
                href="https://play.google.com/store/apps/details?id=com.touchbase.remote"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative px-6 py-4 rounded-2xl bg-gradient-to-b from-[#252536] to-[#161622] border border-white/20 hover:border-[#00e5ff]/80 shadow-[0_8px_25px_rgba(0,0,0,0.6)] hover:shadow-[0_0_30px_rgba(0,229,255,0.3)] transition-all duration-300 flex items-center justify-center sm:justify-start gap-4"
              >
                <div className="w-10 h-10 rounded-xl bg-black/60 border border-white/10 flex items-center justify-center text-[#00e5ff] group-hover:scale-110 transition-transform">
                  <Smartphone className="w-6 h-6" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-zinc-400">
                    Android İçin İndir
                  </span>
                  <span className="text-sm font-bold text-white group-hover:text-[#00e5ff] transition-colors">
                    Google Play Store
                  </span>
                </div>
              </a>

              {/* Windows Host Server Download */}
              <a
                href="/downloads/TouchBase_Windows_Host.zip"
                download
                className="group relative px-6 py-4 rounded-2xl bg-gradient-to-r from-[#00e5ff] to-[#00b4d8] text-black font-bold shadow-[0_8px_25px_rgba(0,229,255,0.3)] hover:shadow-[0_0_35px_rgba(0,229,255,0.5)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center sm:justify-start gap-4"
              >
                <div className="w-10 h-10 rounded-xl bg-black/15 flex items-center justify-center text-black">
                  <Monitor className="w-6 h-6" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-black/70">
                    Bilgisayar İçin İndir
                  </span>
                  <span className="text-sm font-black text-black flex items-center gap-1.5">
                    Windows Sunucusu <Download className="w-4 h-4" />
                  </span>
                </div>
              </a>
            </div>

            {/* Direct APK Link */}
            <div className="flex items-center gap-2 text-xs text-zinc-400 mb-8">
              <span>Google Play yok mu?</span>
              <a
                href="/downloads/TouchBase.apk"
                download
                className="text-[#00e5ff] hover:underline font-semibold flex items-center gap-1"
              >
                Doğrudan APK İndir (v1.0.0 • 2.4 MB)
              </a>
            </div>

            {/* Trust Points / Highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-white/[0.08] w-full">
              <div className="flex items-center gap-2 text-left">
                <Shield className="w-4 h-4 text-[#00e676] shrink-0" />
                <span className="text-xs text-zinc-300 font-medium">
                  Sıfır Bulut / Tam Gizlilik
                </span>
              </div>
              <div className="flex items-center gap-2 text-left">
                <Zap className="w-4 h-4 text-[#00e5ff] shrink-0" />
                <span className="text-xs text-zinc-300 font-medium">
                  1-3ms Yanıt Süresi
                </span>
              </div>
              <div className="flex items-center gap-2 text-left">
                <CheckCircle2 className="w-4 h-4 text-[#ff9100] shrink-0" />
                <span className="text-xs text-zinc-300 font-medium">
                  Abonelik Yok / Ömür Boyu
                </span>
              </div>
              <div className="flex items-center gap-2 text-left">
                <Wifi className="w-4 h-4 text-[#c3f5ff] shrink-0" />
                <span className="text-xs text-zinc-300 font-medium">
                  Otomatik Wi-Fi Keşfi
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: 3D Hardware-Grade Phone Mockup */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            {/* Ambient Background Aura */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#00e5ff]/20 via-transparent to-[#00e676]/15 blur-3xl opacity-60 rounded-full"></div>

            {/* Floating Hardware Phone Shell */}
            <div className="relative w-[310px] sm:w-[350px] p-3 rounded-[3.2rem] bg-gradient-to-b from-[#2a2a38] via-[#15151f] to-[#0c0c12] border-2 border-white/20 shadow-[0_25px_60px_rgba(0,0,0,0.9),0_0_50px_rgba(0,229,255,0.18)] animate-subtle-float">
              {/* Phone Speaker Notch */}
              <div className="absolute top-6 left-1/2 -translate-x-1/2 w-20 h-4 bg-black rounded-full z-30 border border-white/10 flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-zinc-900 border border-zinc-700 mr-2"></div>
                <div className="w-8 h-1 bg-zinc-800 rounded-full"></div>
              </div>

              {/* Screen Canvas (Obsidian OLED) */}
              <div className="relative rounded-[2.6rem] overflow-hidden bg-black aspect-[9/19.5] border border-white/10">
                <Image
                  src="/images/remote_tactile.png"
                  alt="TouchBase Smart TV Remote UI"
                  width={720}
                  height={1560}
                  priority
                  className="w-full h-full object-cover"
                />

                {/* Interactive Overlay Badge: Live Latency */}
                <div className="absolute top-12 left-4 right-4 bg-black/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/15 flex items-center justify-between shadow-xl">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#00e676] animate-pulse"></span>
                    <span className="text-[11px] font-bold text-white tracking-wide">
                      CAGAN-PC
                    </span>
                  </div>
                  <span className="text-[10px] font-mono font-bold text-[#00e676] px-2 py-0.5 rounded-full bg-[#00e676]/10 border border-[#00e676]/30">
                    2ms • 1000Hz
                  </span>
                </div>

                {/* Bottom Overlay Hint */}
                <div className="absolute bottom-4 inset-x-4 bg-gradient-to-t from-black via-black/90 to-transparent p-3 rounded-2xl border border-white/10 backdrop-blur-sm text-center">
                  <p className="text-[11px] font-semibold text-zinc-300">
                    OLED Saf Siyah • Squircle Hissiyat
                  </p>
                  <p className="text-[9px] text-[#00e5ff] uppercase font-bold tracking-widest mt-0.5">
                    100% Batarya Dostu
                  </p>
                </div>
              </div>
            </div>

            {/* Floating Badge 1: Wake on LAN */}
            <div className="absolute -left-6 top-1/4 hidden sm:flex items-center gap-3 p-3.5 rounded-2xl glass-card border border-white/15 shadow-2xl animate-bounce [animation-duration:4s]">
              <div className="w-9 h-9 rounded-xl bg-[#00e5ff]/20 border border-[#00e5ff]/40 flex items-center justify-center text-[#00e5ff]">
                <Zap className="w-5 h-5" />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-xs font-bold text-white">Wake-on-LAN</span>
                <span className="text-[10px] text-zinc-400">Kapalı PC&apos;yi Aç</span>
              </div>
            </div>

            {/* Floating Badge 2: Fingerprint Unlock */}
            <div className="absolute -right-6 bottom-1/4 hidden sm:flex items-center gap-3 p-3.5 rounded-2xl glass-card border border-white/15 shadow-2xl animate-bounce [animation-duration:5s]">
              <div className="w-9 h-9 rounded-xl bg-[#00e676]/20 border border-[#00e676]/40 flex items-center justify-center text-[#00e676]">
                <Shield className="w-5 h-5" />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-xs font-bold text-white">Windows Hello</span>
                <span className="text-[10px] text-zinc-400">Parmak İzi ile Aç</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
