"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Download, Menu, X, ShieldCheck, ArrowRight } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/85 backdrop-blur-xl border-b border-white/[0.08] shadow-[0_4px_30px_rgba(0,0,0,0.8)]"
          : "bg-transparent border-b border-white/[0.03]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand & Connection Status Pill */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 rounded-2xl bg-gradient-to-br from-[#242433] to-[#151520] border border-white/15 flex items-center justify-center shadow-lg group-hover:border-[#00e5ff]/50 transition-all duration-300">
            <Image
              src="/images/icon.png"
              alt="TouchBase Logo"
              width={28}
              height={28}
              className="object-contain drop-shadow"
            />
          </div>

          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="text-base font-bold tracking-tight text-white group-hover:text-[#00e5ff] transition-colors">
                TouchBase
              </span>
              <span className="px-1.5 py-0.5 rounded-full bg-[#21212B] text-[10px] font-bold text-[#00e5ff] border border-[#00e5ff]/30 tracking-wider">
                PRO
              </span>
            </div>

            {/* Live Simulated Latency Pill */}
            <div className="flex items-center gap-1.5 mt-0.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00e676] shadow-[0_0_8px_#00e676] animate-pulse"></span>
              <span className="text-[11px] font-medium text-zinc-400 font-mono">
                CAGAN-PC <span className="text-[#00e676]/90 ml-1">2ms</span>
              </span>
            </div>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
          <Link
            href="#ozellikler"
            className="hover:text-white transition-colors duration-200"
          >
            Özellikler
          </Link>
          <Link
            href="#canli-demo"
            className="hover:text-[#00e5ff] transition-colors duration-200 flex items-center gap-1"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#00e5ff] animate-ping"></span>
            Canlı Demo
          </Link>
          <Link
            href="#galeri"
            className="hover:text-white transition-colors duration-200"
          >
            Galeri
          </Link>
          <Link
            href="#karsilastirma"
            className="hover:text-white transition-colors duration-200"
          >
            Free vs PRO
          </Link>
          <Link
            href="#nasil-calisir"
            className="hover:text-white transition-colors duration-200"
          >
            Kurulum
          </Link>
          <Link
            href="#sss"
            className="hover:text-white transition-colors duration-200"
          >
            SSS
          </Link>
        </nav>

        {/* Action Button */}
        <div className="hidden sm:flex items-center gap-3">
          <Link
            href="#indir"
            className="squircle-button px-5 py-2.5 rounded-2xl text-xs font-semibold text-white flex items-center gap-2 group hover:text-[#00e5ff]"
          >
            <Download className="w-4 h-4 text-[#00e5ff] group-hover:translate-y-0.5 transition-transform" />
            <span>Hemen İndir</span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-xl bg-zinc-900/80 border border-white/10 text-zinc-300 hover:text-white"
          aria-label="Menüyü Aç"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-2xl border-b border-white/10 px-6 py-6 flex flex-col gap-4 animate-in slide-in-from-top-2">
          <Link
            href="#ozellikler"
            onClick={() => setMobileMenuOpen(false)}
            className="text-base text-zinc-300 hover:text-white py-2"
          >
            Özellikler
          </Link>
          <Link
            href="#canli-demo"
            onClick={() => setMobileMenuOpen(false)}
            className="text-base text-[#00e5ff] py-2 flex items-center gap-2"
          >
            <span className="w-2 h-2 rounded-full bg-[#00e5ff]"></span>
            Canlı Demo
          </Link>
          <Link
            href="#galeri"
            onClick={() => setMobileMenuOpen(false)}
            className="text-base text-zinc-300 hover:text-white py-2"
          >
            Galeri & Video
          </Link>
          <Link
            href="#karsilastirma"
            onClick={() => setMobileMenuOpen(false)}
            className="text-base text-zinc-300 hover:text-white py-2"
          >
            Free vs PRO Karşılaştırması
          </Link>
          <Link
            href="#nasil-calisir"
            onClick={() => setMobileMenuOpen(false)}
            className="text-base text-zinc-300 hover:text-white py-2"
          >
            Kurulum (60 Saniye)
          </Link>
          <Link
            href="#sss"
            onClick={() => setMobileMenuOpen(false)}
            className="text-base text-zinc-300 hover:text-white py-2"
          >
            Sıkça Sorulan Sorular
          </Link>
          <div className="pt-4 border-t border-white/10 flex flex-col gap-2">
            <Link
              href="#indir"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-[#00e5ff] to-[#00b4d8] text-black font-bold text-center flex items-center justify-center gap-2"
            >
              <Download className="w-5 h-5" />
              <span>Uygulamayı & Sunucuyu İndir</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
