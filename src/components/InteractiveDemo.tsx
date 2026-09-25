"use client";

import React, { useState, useRef } from "react";
import {
  Volume2,
  Play,
  Pause,
  FastForward,
  Rewind,
  MousePointer,
  Tv,
  Sparkles,
  Fingerprint,
  Power,
  Plus,
  Minus,
} from "lucide-react";

export default function InteractiveDemo() {
  const [activeTab, setActiveTab] = useState<"remote" | "trackpad">("remote");
  const [isPlaying, setIsPlaying] = useState(true);
  const [volume, setVolume] = useState(65);
  const [feedback, setFeedback] = useState("System Ready • CAGAN-PC Paired");
  const [cursorPos, setCursorPos] = useState({ x: 50, y: 50 });
  const [clickEffect, setClickEffect] = useState<string | null>(null);

  const trackpadRef = useRef<HTMLDivElement>(null);

  const triggerAction = (msg: string) => {
    setFeedback(msg);
  };

  const handleTrackpadMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!trackpadRef.current) return;
    const rect = trackpadRef.current.getBoundingClientRect();
    const x = Math.round(((e.clientX - rect.left) / rect.width) * 100);
    const y = Math.round(((e.clientY - rect.top) / rect.height) * 100);
    setCursorPos({ x, y });
    setFeedback(`Cursor Stream: X:${x}% Y:${y}% (Sub-2ms)`);
  };

  const handleLeftClick = () => {
    setClickEffect("left");
    setFeedback("Dispatched Left Click (L-CLICK)");
    setTimeout(() => setClickEffect(null), 300);
  };

  const handleRightClick = () => {
    setClickEffect("right");
    setFeedback("Dispatched Right Click (R-CLICK)");
    setTimeout(() => setClickEffect(null), 300);
  };

  return (
    <section id="live-demo" className="py-24 relative overflow-hidden bg-black">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#00e5ff]/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-[#00e5ff]/30 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#00e5ff]" />
            <span className="text-xs font-semibold text-[#00e5ff] uppercase tracking-wider">
              In-Browser Experience
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Feel the Tactile Ergonomics Before Installing.
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg">
            Interact with our virtual remote and morphing trackpad below. Click the tactile keys,
            glide your cursor over the glass surface, and see how fast it responds.
          </p>
        </div>

        {/* Interactive Device Container */}
        <div className="max-w-md mx-auto">
          {/* Mode Switcher Tabs */}
          <div className="flex items-center justify-center p-1.5 rounded-2xl bg-[#14141c] border border-white/10 mb-6 shadow-inner">
            <button
              onClick={() => {
                setActiveTab("remote");
                triggerAction("Switched to Smart TV Remote Mode");
              }}
              className={`flex-1 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 ${
                activeTab === "remote"
                  ? "bg-[#21212B] text-white shadow-md border border-white/10"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              <Tv className="w-4 h-4 text-[#00e5ff]" />
              <span>Smart TV Remote</span>
            </button>
            <button
              onClick={() => {
                setActiveTab("trackpad");
                triggerAction("Switched to Dynamic Glass Trackpad Mode");
              }}
              className={`flex-1 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 ${
                activeTab === "trackpad"
                  ? "bg-[#21212B] text-white shadow-md border border-white/10"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              <MousePointer className="w-4 h-4 text-[#00e676]" />
              <span>Dynamic Trackpad</span>
            </button>
          </div>

          {/* Obsidian Tactile Frame */}
          <div className="p-6 rounded-[2.5rem] bg-gradient-to-b from-[#1c1c26] to-[#0e0e14] border border-white/15 shadow-[0_20px_50px_rgba(0,0,0,0.8),inset_0_1px_1px_rgba(255,255,255,0.15)] select-none">
            {/* Top Bar inside Demo: Status & Fingerprint */}
            <div className="flex items-center justify-between pb-4 mb-5 border-b border-white/[0.08]">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#00e676] animate-pulse"></span>
                <span className="text-xs font-bold text-zinc-300 font-mono">
                  CAGAN-PC
                </span>
                <span className="text-[10px] text-[#00e676] px-1.5 py-0.5 rounded bg-[#00e676]/10 font-mono">
                  1.8ms
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => triggerAction("Biometric Windows Hello Clearance Granted! Desktop Unlocked.")}
                  title="Windows Hello Unlock"
                  className="w-8 h-8 rounded-full bg-[#181822] border border-[#00e676]/30 flex items-center justify-center text-[#00e676] hover:scale-105 active:scale-95 transition-all"
                >
                  <Fingerprint className="w-4 h-4" />
                </button>
                <button
                  onClick={() => triggerAction("Wake-on-LAN Magic Packet Dispatched! PC Powering On.")}
                  title="Power / Standby"
                  className="w-8 h-8 rounded-full bg-[#181822] border border-[#ff3b30]/30 flex items-center justify-center text-[#ff3b30] hover:scale-105 active:scale-95 transition-all"
                >
                  <Power className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Content Based on Selected Tab */}
            {activeTab === "remote" ? (
              <div className="flex flex-col gap-5">
                {/* Media Launcher Row */}
                <div className="grid grid-cols-4 gap-2">
                  <button
                    onClick={() => triggerAction("YouTube Launched (Theater Mode)")}
                    className="p-3 rounded-xl bg-[#181824] border border-white/10 hover:border-red-500/50 flex flex-col items-center justify-center gap-1 active:scale-95 transition-all group"
                  >
                    <div className="w-7 h-7 rounded-full bg-red-600/20 flex items-center justify-center text-red-500 group-hover:scale-110 transition-transform">
                      <Play className="w-3.5 h-3.5 fill-current" />
                    </div>
                    <span className="text-[10px] font-semibold text-zinc-300">
                      YouTube
                    </span>
                  </button>

                  <button
                    onClick={() => triggerAction("Netflix Launched")}
                    className="p-3 rounded-xl bg-[#181824] border border-white/10 hover:border-red-600/50 flex flex-col items-center justify-center gap-1 active:scale-95 transition-all group"
                  >
                    <div className="w-7 h-7 rounded-full bg-red-700/20 flex items-center justify-center text-red-600 font-black text-xs group-hover:scale-110 transition-transform">
                      N
                    </div>
                    <span className="text-[10px] font-semibold text-zinc-300">
                      Netflix
                    </span>
                  </button>

                  <button
                    onClick={() => triggerAction("Spotify Opened")}
                    className="p-3 rounded-xl bg-[#181824] border border-white/10 hover:border-emerald-500/50 flex flex-col items-center justify-center gap-1 active:scale-95 transition-all group"
                  >
                    <div className="w-7 h-7 rounded-full bg-emerald-500/20 flex items-center justify-center text-[#00e676] group-hover:scale-110 transition-transform">
                      <Volume2 className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-[10px] font-semibold text-zinc-300">
                      Spotify
                    </span>
                  </button>

                  <button
                    onClick={() => triggerAction("F11 Fullscreen Mode Toggled")}
                    className="p-3 rounded-xl bg-[#181824] border border-white/10 hover:border-[#00e5ff]/50 flex flex-col items-center justify-center gap-1 active:scale-95 transition-all group"
                  >
                    <div className="w-7 h-7 rounded-full bg-[#00e5ff]/20 flex items-center justify-center text-[#00e5ff] font-bold text-xs group-hover:scale-110 transition-transform">
                      F11
                    </div>
                    <span className="text-[10px] font-semibold text-[#00e5ff]">
                      Fullscreen
                    </span>
                  </button>
                </div>

                {/* Center Core: Flanking Rockers + Mini Glide Disc */}
                <div className="flex items-stretch justify-between gap-3 h-44">
                  {/* Left Volume Rocker */}
                  <div className="w-16 rounded-2xl bg-[#161622] border border-white/10 flex flex-col justify-between p-1.5 shadow-lg">
                    <button
                      onClick={() => {
                        const newVol = Math.min(100, volume + 5);
                        setVolume(newVol);
                        triggerAction(`Master Volume Up: ${newVol}%`);
                      }}
                      className="flex-1 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] flex items-center justify-center text-zinc-200 active:scale-90 transition-all"
                    >
                      <Plus className="w-5 h-5 text-[#00e5ff]" />
                    </button>
                    <div className="py-2 text-center">
                      <span className="text-[10px] font-bold text-zinc-400 font-mono">
                        {volume}%
                      </span>
                    </div>
                    <button
                      onClick={() => {
                        const newVol = Math.max(0, volume - 5);
                        setVolume(newVol);
                        triggerAction(`Master Volume Down: ${newVol}%`);
                      }}
                      className="flex-1 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] flex items-center justify-center text-zinc-200 active:scale-90 transition-all"
                    >
                      <Minus className="w-5 h-5 text-zinc-400" />
                    </button>
                  </div>

                  {/* Center Tactile Squircle Pad */}
                  <div
                    onClick={() => {
                      setActiveTab("trackpad");
                      triggerAction("Expanded to Dynamic Glass Trackpad");
                    }}
                    className="flex-1 rounded-2xl bg-gradient-to-b from-[#222232] to-[#12121a] border border-white/15 p-4 flex flex-col items-center justify-center text-center cursor-pointer hover:border-[#00e5ff]/50 transition-all group shadow-xl"
                  >
                    <div className="w-12 h-12 rounded-full bg-[#00e5ff]/10 border border-[#00e5ff]/30 flex items-center justify-center text-[#00e5ff] mb-2 group-hover:scale-110 transition-transform">
                      <MousePointer className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-bold text-white tracking-wide">
                      TOUCH &amp; GLIDE
                    </span>
                    <span className="text-[10px] text-zinc-400 mt-0.5">
                      Switch to Glass Trackpad
                    </span>
                  </div>

                  {/* Right Seek Rocker */}
                  <div className="w-16 rounded-2xl bg-[#161622] border border-white/10 flex flex-col justify-between p-1.5 shadow-lg">
                    <button
                      onClick={() => triggerAction("Jumped 10s Forward (+10s)")}
                      className="flex-1 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] flex flex-col items-center justify-center text-zinc-200 active:scale-90 transition-all"
                    >
                      <FastForward className="w-4 h-4 text-[#ff9100]" />
                      <span className="text-[9px] font-bold text-zinc-400">+10s</span>
                    </button>
                    <div className="py-2 text-center">
                      <span className="text-[9px] font-bold text-zinc-500 uppercase">
                        SEEK
                      </span>
                    </div>
                    <button
                      onClick={() => triggerAction("Rewound 10s Back (-10s)")}
                      className="flex-1 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] flex flex-col items-center justify-center text-zinc-200 active:scale-90 transition-all"
                    >
                      <Rewind className="w-4 h-4 text-[#ff9100]" />
                      <span className="text-[9px] font-bold text-zinc-400">-10s</span>
                    </button>
                  </div>
                </div>

                {/* Primary Playback Strip */}
                <div className="p-2.5 rounded-2xl bg-[#14141e] border border-white/10 flex items-center justify-between shadow-xl">
                  <button
                    onClick={() => triggerAction("Previous Media Track")}
                    className="w-11 h-11 rounded-xl bg-[#1c1c28] flex items-center justify-center text-zinc-300 hover:text-white active:scale-90 transition-all"
                  >
                    <Rewind className="w-5 h-5" />
                  </button>

                  {/* Jewel Play/Pause Button */}
                  <button
                    onClick={() => {
                      setIsPlaying(!isPlaying);
                      triggerAction(
                        isPlaying ? "Media Paused (PAUSE)" : "Media Playing (PLAY)"
                      );
                    }}
                    className="w-14 h-14 rounded-full bg-gradient-to-tr from-[#00e5ff] via-[#00c8e0] to-[#00e676] p-0.5 shadow-[0_0_20px_rgba(0,229,255,0.4)] hover:scale-105 active:scale-95 transition-all"
                  >
                    <div className="w-full h-full rounded-full bg-[#181822] flex items-center justify-center text-[#00e5ff]">
                      {isPlaying ? (
                        <Pause className="w-6 h-6 fill-current" />
                      ) : (
                        <Play className="w-6 h-6 fill-current ml-0.5" />
                      )}
                    </div>
                  </button>

                  <button
                    onClick={() => triggerAction("Next Media Track")}
                    className="w-11 h-11 rounded-xl bg-[#1c1c28] flex items-center justify-center text-zinc-300 hover:text-white active:scale-90 transition-all"
                  >
                    <FastForward className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ) : (
              /* Trackpad View */
              <div className="flex flex-col gap-4">
                {/* Simulated Glass Trackpad Surface */}
                <div
                  ref={trackpadRef}
                  onMouseMove={handleTrackpadMove}
                  onClick={handleLeftClick}
                  className="relative h-60 rounded-2xl bg-gradient-to-b from-[#181824] to-[#0e0e14] border border-[#00e5ff]/30 p-4 flex flex-col items-center justify-center cursor-crosshair overflow-hidden shadow-inner group"
                >
                  {/* Subtle Grid / Crosshair */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-25">
                    <div className="w-24 h-24 rounded-full border border-dashed border-[#00e5ff]"></div>
                    <div className="absolute w-full h-[1px] bg-white/10"></div>
                    <div className="absolute h-full w-[1px] bg-white/10"></div>
                  </div>

                  {/* Mouse Position Indicator Light */}
                  <div
                    className="absolute w-8 h-8 rounded-full bg-[#00e5ff]/30 blur-md pointer-events-none transition-all duration-75"
                    style={{
                      left: `${cursorPos.x}%`,
                      top: `${cursorPos.y}%`,
                      transform: "translate(-50%, -50%)",
                    }}
                  />
                  <div
                    className="absolute w-2 h-2 rounded-full bg-[#00e5ff] shadow-[0_0_10px_#00e5ff] pointer-events-none transition-all duration-75"
                    style={{
                      left: `${cursorPos.x}%`,
                      top: `${cursorPos.y}%`,
                      transform: "translate(-50%, -50%)",
                    }}
                  />

                  {/* Center Text */}
                  <div className="text-center z-10 pointer-events-none">
                    <p className="text-sm font-bold text-white tracking-wide">
                      1000Hz Ultra-Responsive Glass Surface
                    </p>
                    <p className="text-[11px] text-zinc-400 mt-1">
                      Glide your mouse or click anywhere in this area
                    </p>
                    <span className="inline-block mt-2 px-2.5 py-1 rounded-full bg-black/60 border border-white/10 text-[10px] text-[#00e5ff] font-mono">
                      X: {cursorPos.x}% • Y: {cursorPos.y}%
                    </span>
                  </div>
                </div>

                {/* Divided Left & Right Click Bases */}
                <div className="grid grid-cols-5 gap-2">
                  <button
                    onClick={handleLeftClick}
                    className={`col-span-3 py-3 rounded-xl border text-xs font-bold transition-all flex items-center justify-center gap-2 ${
                      clickEffect === "left"
                        ? "bg-[#00e5ff] text-black border-[#00e5ff] scale-95"
                        : "bg-[#1c1c28] text-white border-white/15 hover:border-[#00e5ff]/50"
                    }`}
                  >
                    <span>L-CLICK (Left Click)</span>
                  </button>

                  <button
                    onClick={handleRightClick}
                    className={`col-span-2 py-3 rounded-xl border text-xs font-bold transition-all flex items-center justify-center gap-2 ${
                      clickEffect === "right"
                        ? "bg-[#00e676] text-black border-[#00e676] scale-95"
                        : "bg-[#1c1c28] text-zinc-300 border-white/15 hover:border-[#00e676]/50"
                    }`}
                  >
                    <span>R-CLICK (Right Click)</span>
                  </button>
                </div>
              </div>
            )}

            {/* Live Terminal Feedback Console */}
            <div className="mt-5 p-3 rounded-xl bg-black/80 border border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-2 overflow-hidden">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00e5ff] shrink-0 animate-pulse"></span>
                <span className="text-[11px] font-mono text-zinc-300 truncate">
                  {feedback}
                </span>
              </div>
              <span className="text-[9px] font-mono text-[#00e5ff] uppercase px-1.5 py-0.5 rounded bg-[#00e5ff]/10 shrink-0">
                1-3ms
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
