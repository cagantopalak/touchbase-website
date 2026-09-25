"use client";

import React from "react";
import { ShieldCheck, Lock, Wifi, EyeOff, Cpu, Terminal } from "lucide-react";

export default function SecurityPledge() {
  const points = [
    {
      title: "100% Local Network",
      description:
        "All commands and packets travel strictly inside your home Wi-Fi router. Works seamlessly even if your internet connection goes down.",
      icon: Wifi,
    },
    {
      title: "Zero Cloud & Zero Telemetry",
      description:
        "We do not store passwords, telemetry, or user accounts. What you type and what you watch remains 100% private to you.",
      icon: EyeOff,
    },
    {
      title: "Biometric Hardware Vault",
      description:
        "Windows Hello PIN and biometric tokens are stored safely inside your Android device's hardware Keystore.",
      icon: Lock,
    },
    {
      title: "Transparent Lightweight Core",
      description:
        "The Windows host is an open, transparent Node.js and Win32 SendInput engine that never bogs down your PC (<0.05% CPU).",
      icon: Cpu,
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-black/95 border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-card p-8 sm:p-12 rounded-[2.5rem] border border-[#00e676]/30 shadow-[0_0_50px_rgba(0,230,118,0.08)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Header */}
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00e676]/10 border border-[#00e676]/30 mb-4">
                <ShieldCheck className="w-4 h-4 text-[#00e676]" />
                <span className="text-xs font-bold text-[#00e676] uppercase tracking-wider">
                  Engineering Privacy Pledge
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4 leading-tight">
                Your Data Never Leaves Your Local Network.
              </h2>

              <p className="text-zinc-400 text-sm sm:text-base leading-relaxed mb-6">
                TouchBase is built with privacy-first engineering standards. Unlike commercial
                remote desktop tools, your keystrokes, biometric credentials, and screen frames
                are never relayed through external cloud servers.
              </p>

              <div className="p-4 rounded-2xl bg-black/60 border border-white/10 flex items-center gap-3">
                <Terminal className="w-5 h-5 text-[#00e5ff] shrink-0" />
                <p className="text-xs font-mono text-zinc-300">
                  Protocol: ws://192.168.x.x:38472 • UDP Port 9 Magic Packet
                </p>
              </div>
            </div>

            {/* Right Points Grid */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {points.map((p, idx) => {
                const Icon = p.icon;
                return (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-[#00e676]/40 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#00e676]/10 border border-[#00e676]/20 flex items-center justify-center text-[#00e676] mb-3">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-white mb-1.5">
                      {p.title}
                    </h3>
                    <p className="text-xs text-zinc-400 leading-relaxed">
                      {p.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
