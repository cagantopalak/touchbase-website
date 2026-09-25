"use client";

import React, { useState } from "react";
import {
  Download,
  Smartphone,
  Monitor,
  CheckCircle2,
  Sparkles,
  ExternalLink,
  Shield,
  FileCode,
} from "lucide-react";

export default function DownloadCTA() {
  const [downloadNotice, setDownloadNotice] = useState<string | null>(null);

  const handleDownload = (name: string) => {
    setDownloadNotice(`Downloading ${name}...`);
    setTimeout(() => setDownloadNotice(null), 4000);
  };

  return (
    <section id="download" className="py-28 relative overflow-hidden bg-gradient-to-b from-black via-[#0c0c12] to-black">
      {/* Background Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#00e5ff]/10 rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-[#00e5ff]/30 mb-4">
            <Download className="w-3.5 h-3.5 text-[#00e5ff]" />
            <span className="text-xs font-semibold text-[#00e5ff] uppercase tracking-wider">
              Download Center
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-6">
            Get TouchBase Now. Start in 60 Seconds.
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg">
            Install the Android remote on your phone and the companion server on your PC.
            No sign-ups, no accounts, and no credit cards needed.
          </p>

          {downloadNotice && (
            <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#00e5ff]/20 border border-[#00e5ff]/50 text-xs font-bold text-[#00e5ff] animate-in fade-in">
              <Sparkles className="w-4 h-4" />
              <span>{downloadNotice}</span>
            </div>
          )}
        </div>

        {/* Dual Download Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Card 1: Android Mobile App */}
          <div className="glass-card p-8 sm:p-10 rounded-3xl border-2 border-white/15 hover:border-[#00e5ff]/40 shadow-2xl flex flex-col justify-between relative group transition-all duration-300">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 rounded-2xl bg-[#00e5ff]/10 border border-[#00e5ff]/30 flex items-center justify-center text-[#00e5ff] shadow-lg group-hover:scale-105 transition-transform">
                  <Smartphone className="w-8 h-8" />
                </div>
                <span className="text-xs font-bold text-[#00e676] px-3 py-1 rounded-full bg-[#00e676]/10 border border-[#00e676]/30">
                  Android 8.0 &amp; Above
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-2">
                TouchBase Android Remote
              </h3>
              <p className="text-sm text-zinc-400 mb-6 leading-relaxed">
                Smart TV interface, 1000Hz glass trackpad, biometric fingerprint unlock,
                and Wake-on-LAN magic packet broadcaster.
              </p>

              <ul className="space-y-3 mb-8 text-sm text-zinc-300">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#00e676]" />
                  <span>Pure OLED Black (#000000) for zero battery drain</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#00e676]" />
                  <span>Tactile squircle buttons with LRA haptic pulses</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#00e676]" />
                  <span>Zero ads, zero background telemetry tracking</span>
                </li>
              </ul>
            </div>

            <div className="space-y-3 pt-6 border-t border-white/[0.08]">
              {/* Google Play Button */}
              <a
                href="https://play.google.com/store/apps/details?id=com.touchbase.remote"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 rounded-2xl bg-white/[0.08] hover:bg-white/[0.14] border border-white/20 text-white font-bold text-sm flex items-center justify-center gap-3 transition-all hover:border-[#00e5ff]/50 shadow-md group/btn"
              >
                <div className="w-5 h-5 flex items-center justify-center text-[#00e5ff]">
                  <ExternalLink className="w-4 h-4" />
                </div>
                <span>Get on Google Play Store</span>
              </a>

              {/* Direct APK Link */}
              <a
                href="/downloads/TouchBase.apk"
                download
                onClick={() => handleDownload("TouchBase.apk")}
                className="w-full py-3 rounded-xl bg-black/40 hover:bg-black/60 border border-white/10 text-xs font-semibold text-zinc-400 hover:text-white flex items-center justify-center gap-2 transition-colors"
              >
                <FileCode className="w-4 h-4 text-[#00e5ff]" />
                <span>Direct APK Sideload (v1.0.0 • 2.4 MB)</span>
              </a>
            </div>
          </div>

          {/* Card 2: Windows Server Host */}
          <div className="glass-card p-8 sm:p-10 rounded-3xl border-2 border-[#00e5ff]/40 shadow-[0_0_40px_rgba(0,229,255,0.15)] flex flex-col justify-between relative group transition-all duration-300">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 rounded-2xl bg-[#00e5ff]/20 border border-[#00e5ff]/40 flex items-center justify-center text-[#00e5ff] shadow-lg group-hover:scale-105 transition-transform">
                  <Monitor className="w-8 h-8" />
                </div>
                <span className="text-xs font-bold text-[#00e5ff] px-3 py-1 rounded-full bg-[#00e5ff]/10 border border-[#00e5ff]/30">
                  Windows 10 / 11 (64-Bit &amp; ARM)
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-2">
                TouchBase Windows Host Server
              </h3>
              <p className="text-sm text-zinc-300 mb-6 leading-relaxed">
                Lightweight, whisper-quiet background host service providing sub-3ms
                WebSocket communication via Win32 SendInput.
              </p>

              <ul className="space-y-3 mb-8 text-sm text-zinc-300">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#00e676]" />
                  <span>Zero installation required (Portable ZIP)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#00e676]" />
                  <span>Idles silently with &lt;15MB RAM and %0.05 CPU</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#00e676]" />
                  <span>Single-click Windows Startup folder integration</span>
                </li>
              </ul>
            </div>

            <div className="space-y-3 pt-6 border-t border-white/[0.08]">
              {/* Primary Windows Download */}
              <a
                href="/downloads/TouchBase_Windows_Host.zip"
                download
                onClick={() => handleDownload("TouchBase Windows Host ZIP")}
                className="w-full py-4 rounded-2xl bg-gradient-to-r from-[#00e5ff] to-[#00b4d8] text-black font-extrabold text-sm flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(0,229,255,0.4)] hover:shadow-[0_0_35px_rgba(0,229,255,0.6)] hover:scale-[1.01] active:scale-[0.99] transition-all"
              >
                <Download className="w-5 h-5" />
                <span>Download Windows Host (.ZIP • v1.0.0)</span>
              </a>

              {/* GitHub Releases Link */}
              <a
                href="https://github.com/cagantopalak/TouchBase/releases"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-xl bg-black/40 hover:bg-black/60 border border-white/10 text-xs font-semibold text-zinc-400 hover:text-white flex items-center justify-center gap-2 transition-colors"
              >
                <ExternalLink className="w-4 h-4 text-zinc-400" />
                <span>View GitHub Releases &amp; Tray Companion</span>
              </a>
            </div>
          </div>
        </div>

        {/* Quick Instructions Bottom Strip */}
        <div className="mt-12 max-w-3xl mx-auto p-4 rounded-2xl bg-white/[0.02] border border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-400 gap-4 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-[#00e676]" />
            <span>Malware &amp; Virus Scanned (SHA-256 Checksum Verified)</span>
          </div>
          <span className="font-mono text-[#00e5ff]">Port: 38472 (Local Wi-Fi Only)</span>
        </div>
      </div>
    </section>
  );
}
