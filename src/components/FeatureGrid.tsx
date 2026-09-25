"use client";

import React from "react";
import {
  Tv,
  MousePointer,
  Zap,
  Fingerprint,
  MonitorPlay,
  Compass,
  Keyboard,
  Sparkles,
} from "lucide-react";

export default function FeatureGrid() {
  const features = [
    {
      title: "Smart TV Remote & Media Launchers",
      description:
        "Instant one-tap launchers for YouTube, Netflix, and Spotify. Dual tactile volume & 10s scrub rockers, plus instant F11 theater mode.",
      badge: "TACTILE HARDWARE",
      color: "from-blue-500/20 to-[#00e5ff]/20",
      accent: "#00e5ff",
      icon: Tv,
      colSpan: "lg:col-span-7",
    },
    {
      title: "Dynamic Morphing Glass Trackpad",
      description:
        "Touch the center disc and watch it fluidly expand into a massive 1000Hz precision glass trackpad with smooth acceleration and two-finger scrolling.",
      badge: "SUB-3MS RESPONSE",
      color: "from-emerald-500/20 to-[#00e676]/20",
      accent: "#00e676",
      icon: MousePointer,
      colSpan: "lg:col-span-5",
    },
    {
      title: "Wake-on-LAN (Turn On Sleeping PC)",
      description:
        "Even when your PC is completely turned off or in sleep mode, power it on right from bed via UDP Port 9 Magic Packet broadcast.",
      badge: "PRO CAPABILITY",
      color: "from-amber-500/20 to-[#ff9100]/20",
      accent: "#ff9100",
      icon: Zap,
      colSpan: "lg:col-span-4",
    },
    {
      title: "Windows Hello Biometric Unlock",
      description:
        "Use your phone's fingerprint sensor to unlock your Windows desktop in 500 milliseconds. No typing 4-digit PINs in the dark.",
      badge: "BIOMETRIC SECURITY",
      color: "from-cyan-500/20 to-blue-500/20",
      accent: "#00e5ff",
      icon: Fingerprint,
      colSpan: "lg:col-span-4",
    },
    {
      title: "Live Mini Screen Mirror",
      description:
        "Stream your desktop screen live right underneath the trackpad surface at 60fps. Navigate without straining your neck toward the TV.",
      badge: "REAL-TIME GDI FEED",
      color: "from-purple-500/20 to-pink-500/20",
      accent: "#c084fc",
      icon: MonitorPlay,
      colSpan: "lg:col-span-4",
    },
    {
      title: "Gyroscope Air Mouse (Magic Wand)",
      description:
        "Move your phone through the air like a magic wand. Built-in angular rate integration and 0.12° deadzone filtering eliminate hand jitters.",
      badge: "MOTION SENSING",
      color: "from-indigo-500/20 to-blue-500/20",
      accent: "#818cf8",
      icon: Compass,
      colSpan: "lg:col-span-6",
    },
    {
      title: "Acoustic Mechanical Keyboard",
      description:
        "Full keyboard layout with realistic mechanical Blue Switch click acoustics, LRA haptic pulses, Alt+Tab, and voice dictation.",
      badge: "HAPTIC & ACOUSTIC",
      color: "from-teal-500/20 to-emerald-500/20",
      accent: "#2dd4bf",
      icon: Keyboard,
      colSpan: "lg:col-span-6",
    },
  ];

  return (
    <section id="features" className="py-28 relative overflow-hidden bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-[#00e5ff]/30 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#00e5ff]" />
            <span className="text-xs font-semibold text-[#00e5ff] uppercase tracking-wider">
              Engineering Highlights
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-6">
            Engineered for Peak Comfort &amp; Power.
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg leading-relaxed">
            TouchBase is not just another mouse pointer app—it turns your computer into
            an effortless home entertainment command center.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <div
                key={i}
                className={`${f.colSpan} glass-card glass-card-hover p-8 rounded-3xl flex flex-col justify-between relative overflow-hidden group`}
              >
                {/* Background Ambient Corner */}
                <div
                  className={`absolute -top-12 -right-12 w-48 h-48 bg-gradient-to-br ${f.color} rounded-full blur-3xl opacity-40 group-hover:opacity-80 transition-opacity duration-500 pointer-events-none`}
                />

                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center border shadow-lg group-hover:scale-110 transition-transform duration-300"
                      style={{
                        backgroundColor: "rgba(22, 22, 32, 0.8)",
                        borderColor: "rgba(255, 255, 255, 0.12)",
                        color: f.accent,
                      }}
                    >
                      <Icon className="w-6 h-6" />
                    </div>

                    <span
                      className="text-[10px] font-extrabold uppercase tracking-widest px-2.5 py-1 rounded-full border"
                      style={{
                        backgroundColor: "rgba(255, 255, 255, 0.04)",
                        borderColor: "rgba(255, 255, 255, 0.1)",
                        color: f.accent,
                      }}
                    >
                      {f.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-zinc-100 transition-colors">
                    {f.title}
                  </h3>

                  <p className="text-zinc-400 text-sm leading-relaxed">
                    {f.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs text-zinc-500 font-mono">
                  <span>TOUCHBASE CORE</span>
                  <span className="text-zinc-400 font-bold group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
