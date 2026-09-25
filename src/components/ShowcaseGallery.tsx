"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Sparkles,
  Smartphone,
  MousePointer,
  Settings,
  Play,
  Film,
  CheckCircle,
} from "lucide-react";

export default function ShowcaseGallery() {
  const [activeTab, setActiveTab] = useState<"remote" | "trackpad" | "settings" | "video">("remote");
  const [isPlayingVideo, setIsPlayingVideo] = useState(false);

  const tabs = [
    {
      id: "remote" as const,
      label: "Smart TV Remote",
      icon: Smartphone,
      title: "Obsidian Tactile Remote Interface",
      description:
        "One-touch quick launchers for YouTube, Netflix, and Spotify, flanked by dual volume and seek rocker columns with an illuminated Master Play/Pause jewel in the center.",
      image: "/images/remote_tactile.png",
      bullets: [
        "100% Pure OLED Black (#000000) for zero battery drain",
        "Tactile squircle buttons backed by LRA haptic pulses",
        "Sub-3ms ultra-low latency WebSocket streaming",
      ],
    },
    {
      id: "trackpad" as const,
      label: "Dynamic Trackpad",
      icon: MousePointer,
      title: "1000Hz Precision Dynamic Trackpad",
      description:
        "Fluidly transforms into a massive glass trackpad upon touch. Natural cursor acceleration curve, two-finger gesture scrolling, and split physical click zones.",
      image: "/images/dynamic_trackpad.png",
      bullets: [
        "Lag-free sub-pixel cursor tracking and inertia curves",
        "Real-time Live Mini Screen Mirror under the glass",
        "Divided physical Left and Right click trigger pads",
      ],
    },
    {
      id: "settings" as const,
      label: "Hardware Preferences",
      icon: Settings,
      title: "Customizable Hardware Controls",
      description:
        "Calibrate tactile haptic strength, cursor DPI sensitivity, Wake-on-LAN MAC address targets, and unlock VIP theme palettes in one clean interface.",
      image: "/images/settings_screen.png",
      bullets: [
        "Windows Hello fingerprint & 4-digit PIN management",
        "Silent background autostart on Windows boot",
        "Titanium and Cyberpunk VIP aesthetic themes",
      ],
    },
    {
      id: "video" as const,
      label: "Video Demo Showcase",
      icon: Film,
      title: "TouchBase Live In-Action",
      description:
        "Experience the effortless one-handed ergonomics from bed, sub-3ms latency, and fluid trackpad morphing in our video showcase.",
      image: "/images/remote_tactile.png",
      bullets: [
        "Calibrated for the natural Thumb Zone of modern phones",
        "Instant PC boot-up from cold sleep with Wake-on-LAN",
        "Zero-stutter desktop control across multiple monitors",
      ],
    },
  ];

  const currentTab = tabs.find((t) => t.id === activeTab) || tabs[0];

  return (
    <section id="gallery" className="py-28 relative overflow-hidden bg-black/90">
      {/* Background Lighting */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-[#00e5ff]/5 rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-[#00e5ff]/30 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#00e5ff]" />
            <span className="text-xs font-semibold text-[#00e5ff] uppercase tracking-wider">
              Interface &amp; Video Showcase
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-6">
            Striking Visuals. Precision Ergonomics.
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg">
            Every single pixel of TouchBase was calibrated for dark home theater rooms and
            tactile thumb comfort.
          </p>
        </div>

        {/* Tab Selector Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id);
                  setIsPlayingVideo(false);
                }}
                className={`px-5 py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all duration-300 flex items-center gap-2.5 ${
                  isActive
                    ? "bg-[#21212B] text-white border-2 border-[#00e5ff]/50 shadow-[0_0_20px_rgba(0,229,255,0.2)]"
                    : "bg-[#14141c] text-zinc-400 border border-white/10 hover:text-white hover:border-white/20"
                }`}
              >
                <Icon
                  className={`w-4 h-4 ${
                    isActive ? "text-[#00e5ff]" : "text-zinc-400"
                  }`}
                />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Showcase Content Card */}
        <div className="glass-card p-6 sm:p-10 rounded-[2.5rem] border border-white/15 shadow-2xl">
          {activeTab === "video" ? (
            /* Dedicated Video Player Area */
            <div className="flex flex-col items-center">
              <div className="relative w-full max-w-4xl aspect-video rounded-3xl overflow-hidden bg-gradient-to-b from-[#1c1c28] to-[#0a0a0f] border border-white/20 shadow-2xl flex items-center justify-center group">
                {!isPlayingVideo ? (
                  <>
                    <Image
                      src="/images/remote_tactile.png"
                      alt="TouchBase Video Preview Thumbnail"
                      fill
                      className="object-cover opacity-20 filter blur-sm group-hover:scale-105 transition-transform duration-700"
                    />

                    {/* Dark Glass Overlay */}
                    <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

                    {/* Large Glowing Play Trigger */}
                    <div className="relative z-10 flex flex-col items-center text-center p-6">
                      <button
                        onClick={() => setIsPlayingVideo(true)}
                        className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-tr from-[#00e5ff] to-[#00e676] p-1 shadow-[0_0_40px_rgba(0,229,255,0.5)] hover:scale-110 active:scale-95 transition-all mb-4 group/btn"
                        aria-label="Play Video"
                      >
                        <div className="w-full h-full rounded-full bg-[#161622] flex items-center justify-center text-white group-hover/btn:text-[#00e5ff] transition-colors">
                          <Play className="w-10 h-10 fill-current ml-1" />
                        </div>
                      </button>

                      <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                        TouchBase Official Video Showcase
                      </h3>
                      <p className="text-xs sm:text-sm text-zinc-400 max-w-md">
                        Watch the Smart TV remote layout, 1000Hz trackpad glide, and
                        instant Wake-on-LAN power in real-time action.
                      </p>

                      <div className="flex items-center gap-3 mt-4">
                        <span className="px-3 py-1 rounded-full bg-white/10 text-[11px] font-mono text-[#00e5ff] border border-white/10">
                          1080p 60FPS
                        </span>
                        <span className="px-3 py-1 rounded-full bg-[#00e676]/15 text-[11px] font-mono text-[#00e676] border border-[#00e676]/30">
                          Sub-3ms Latency
                        </span>
                      </div>
                    </div>
                  </>
                ) : (
                  /* Video Playing State Simulation */
                  <div className="w-full h-full flex flex-col items-center justify-center p-8 bg-black">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-3 h-3 rounded-full bg-red-500 animate-ping"></div>
                      <span className="text-sm font-bold text-zinc-300">
                        Live Demonstration Playing...
                      </span>
                    </div>

                    <div className="relative w-64 h-96 rounded-2xl overflow-hidden border border-[#00e5ff]/40 shadow-2xl">
                      <Image
                        src="/images/remote_tactile.png"
                        alt="TouchBase Video Simulation"
                        fill
                        className="object-cover"
                      />
                    </div>

                    <button
                      onClick={() => setIsPlayingVideo(false)}
                      className="mt-6 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-semibold text-white transition-colors"
                    >
                      Reset / Back to Preview
                    </button>
                  </div>
                )}
              </div>
            </div>
          ) : (
            /* Screenshot Presentation Grid */
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Text & Bullets (Left) */}
              <div className="lg:col-span-6 flex flex-col">
                <span className="text-xs font-extrabold uppercase tracking-widest text-[#00e5ff] mb-2">
                  OFFICIAL SCREEN CAPTURE
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
                  {currentTab.title}
                </h3>
                <p className="text-zinc-400 text-base leading-relaxed mb-8">
                  {currentTab.description}
                </p>

                <div className="space-y-4 mb-8">
                  {currentTab.bullets.map((b, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-[#00e676] shrink-0 mt-0.5" />
                      <span className="text-sm text-zinc-300 font-medium">{b}</span>
                    </div>
                  ))}
                </div>

                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#00e5ff]"></div>
                    <span className="text-xs font-mono text-zinc-300">
                      Display: Native OLED 1080p
                    </span>
                  </div>
                  <span className="text-xs font-mono text-[#00e676]">
                    100% Vector Tactile
                  </span>
                </div>
              </div>

              {/* High-Resolution Screenshot (Right) */}
              <div className="lg:col-span-6 flex items-center justify-center">
                <div className="relative w-full max-w-[320px] sm:max-w-[360px] p-3 rounded-[3rem] bg-gradient-to-b from-[#242434] via-[#14141e] to-[#0c0c12] border-2 border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.85)]">
                  <div className="rounded-[2.4rem] overflow-hidden bg-black border border-white/10 aspect-[9/19.5]">
                    <Image
                      src={currentTab.image}
                      alt={currentTab.title}
                      width={720}
                      height={1560}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
