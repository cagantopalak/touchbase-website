"use client";

import React from "react";
import { Download, Smartphone, Wifi, CheckCircle2 } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      step: "01",
      title: "Download Windows Host",
      description:
        "Download the TouchBase Windows package. Double-click start_server.bat. It idles silently in the background consuming <15MB RAM.",
      icon: Download,
      badge: "Zero Install Needed",
    },
    {
      step: "02",
      title: "Install TouchBase on Phone",
      description:
        "Install from Google Play Store or download our direct APK. No account creation, passwords, or emails required.",
      icon: Smartphone,
      badge: "No Account / Frictionless",
    },
    {
      step: "03",
      title: "Auto-Pair & Control",
      description:
        "As long as you are on the same Wi-Fi, TouchBase discovers your computer automatically. No typing IP addresses or opening router ports.",
      icon: Wifi,
      badge: "Automatic Discovery",
    },
  ];

  return (
    <section id="setup" className="py-24 relative overflow-hidden bg-black/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 mb-4">
            <span className="w-2 h-2 rounded-full bg-[#00e676]"></span>
            <span className="text-xs font-semibold text-zinc-300 uppercase tracking-wider">
              60-Second Setup
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Up and Running in 3 Simple Steps.
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg">
            No complex port forwarding, manual IP entry, or router configuration needed.
          </p>
        </div>

        {/* Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div
                key={idx}
                className="glass-card p-8 rounded-3xl relative overflow-hidden flex flex-col justify-between group hover:border-[#00e5ff]/40 transition-all duration-300"
              >
                {/* Step Watermark */}
                <span className="absolute top-4 right-6 text-6xl font-black text-white/[0.03] select-none group-hover:text-[#00e5ff]/[0.06] transition-colors">
                  {s.step}
                </span>

                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-[#1c1c28] border border-white/10 flex items-center justify-center text-[#00e5ff] shadow-md group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold text-[#00e676] px-2.5 py-1 rounded-full bg-[#00e676]/10 border border-[#00e676]/20">
                      {s.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3">
                    {s.title}
                  </h3>

                  <p className="text-sm text-zinc-400 leading-relaxed">
                    {s.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-white/[0.06] flex items-center gap-2 text-xs font-semibold text-zinc-400">
                  <CheckCircle2 className="w-4 h-4 text-[#00e5ff]" />
                  <span>Instant Response</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
