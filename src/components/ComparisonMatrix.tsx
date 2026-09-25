"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Check, X, Sparkles, Coffee } from "lucide-react";

export default function ComparisonMatrix() {
  const [currency, setCurrency] = useState<"USD" | "TRY">("USD");

  const plans = {
    USD: {
      price: "$4.99",
      regularPrice: "$8.99",
      currencyLabel: "USD",
      discountBadge: "40% OFF Launch Special",
      payOnce: "Single coffee price, own forever!",
    },
    TRY: {
      price: "₺89.99",
      regularPrice: "₺149.99",
      currencyLabel: "TRY",
      discountBadge: "%40 Lansman İndirimi",
      payOnce: "Bir kahve fiyatına tek seferlik öde!",
    },
  };

  const currentPlan = plans[currency];

  const matrix = [
    {
      feature: "Smart TV Remote Interface",
      free: true,
      freeNote: "Full Access",
      pro: true,
      proNote: "Full Access",
      highlight: false,
    },
    {
      feature: "Dynamic Glass Trackpad & Multi-touch",
      free: true,
      freeNote: "Full Access",
      pro: true,
      proNote: "Full Access",
      highlight: false,
    },
    {
      feature: "Media Launchers (YouTube, Netflix, Spotify)",
      free: true,
      freeNote: "Included",
      pro: true,
      proNote: "Included",
      highlight: false,
    },
    {
      feature: "Master Volume & 10s Scrub Rocker Keys",
      free: true,
      freeNote: "Included",
      pro: true,
      proNote: "Included",
      highlight: false,
    },
    {
      feature: "Acoustic Mechanical Keyboard (Full Layout)",
      free: true,
      freeNote: "Included",
      pro: true,
      proNote: "Included",
      highlight: false,
    },
    {
      feature: "OLED Obsidian Black Theme (#000000)",
      free: true,
      freeNote: "Included",
      pro: true,
      proNote: "Included",
      highlight: false,
    },
    {
      feature: "Windows Hello Unlock",
      free: true,
      freeNote: "4-Digit PIN",
      pro: true,
      proNote: "Fingerprint & Instant",
      highlight: false,
    },
    {
      feature: "Wake-on-LAN (Boot Sleeping PC via Wi-Fi)",
      free: false,
      freeNote: "Locked",
      pro: true,
      proNote: "Unlimited (1-Click)",
      highlight: true,
    },
    {
      feature: "Live Screen Preview (Mini Screen Mirror)",
      free: false,
      freeNote: "Locked",
      pro: true,
      proNote: "Unlimited (Behind Trackpad)",
      highlight: true,
    },
    {
      feature: "Gyroscope Air Mouse (Magic Wand Motion)",
      free: false,
      freeNote: "Locked",
      pro: true,
      proNote: "Unlimited (Air Control)",
      highlight: true,
    },
    {
      feature: "Stream Deck & Rapid Macro Directives",
      free: false,
      freeNote: "Locked",
      pro: true,
      proNote: "Unlimited (Snip, Mic, Tab)",
      highlight: true,
    },
    {
      feature: "Multi-PC Management (Living Room, Desk, Office)",
      free: "1 Computer",
      freeNote: "1 Device",
      pro: true,
      proNote: "Unlimited Computers",
      highlight: true,
    },
    {
      feature: "VIP Themes (Titanium, Cyberpunk Neon)",
      free: false,
      freeNote: "Locked",
      pro: true,
      proNote: "All Themes Unlocked",
      highlight: true,
    },
  ];

  return (
    <section id="pricing" className="py-28 relative overflow-hidden bg-black">
      {/* Background Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-[#ff9100]/5 rounded-full blur-[170px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-[#ff9100]/30 mb-4">
            <Coffee className="w-3.5 h-3.5 text-[#ff9100]" />
            <span className="text-xs font-semibold text-[#ff9100] uppercase tracking-wider">
              No Subscriptions • Lifetime License
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-6">
            Free vs. PRO: Pick What You Need.
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg">
            Enjoy foundational remote controls completely free forever. Unlock Wake-on-LAN,
            live screen streaming, and Gyro Air Mouse for the price of a single coffee.
          </p>

          {/* Currency Toggle */}
          <div className="inline-flex items-center p-1 rounded-xl bg-[#14141c] border border-white/10 mt-8">
            <button
              onClick={() => setCurrency("USD")}
              className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${
                currency === "USD"
                  ? "bg-[#21212B] text-white shadow border border-white/15"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              Global (USD $)
            </button>
            <button
              onClick={() => setCurrency("TRY")}
              className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${
                currency === "TRY"
                  ? "bg-[#21212B] text-white shadow border border-white/15"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              Türkiye (TRY ₺)
            </button>
          </div>
        </div>

        {/* Pricing Cards Header */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* FREE PLAN CARD */}
          <div className="p-8 rounded-3xl bg-[#121218] border border-white/10 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-extrabold uppercase tracking-widest text-zinc-400">
                  FREE TIER
                </span>
                <span className="px-2.5 py-1 rounded-full bg-white/5 text-[11px] text-zinc-300 font-semibold border border-white/10">
                  Free Forever
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">TouchBase Free</h3>
              <p className="text-sm text-zinc-400 mb-6">
                All essential media playback and mouse trackpad controls to get started.
              </p>
              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-4xl font-extrabold text-white">$0</span>
                <span className="text-xs text-zinc-500 font-medium">Forever</span>
              </div>
            </div>

            <Link
              href="#download"
              className="w-full py-3.5 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/15 text-sm font-bold text-white text-center transition-colors block"
            >
              Start Free
            </Link>
          </div>

          {/* PRO PLAN CARD (HERO) */}
          <div className="p-8 rounded-3xl bg-gradient-to-b from-[#222232] to-[#12121c] border-2 border-[#00e5ff]/50 shadow-[0_0_40px_rgba(0,229,255,0.2)] flex flex-col justify-between relative overflow-hidden">
            {/* Discount Badge */}
            <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-[#ff9100]/20 border border-[#ff9100]/40 text-[#ff9100] text-[11px] font-extrabold tracking-wide uppercase flex items-center gap-1">
              <Sparkles className="w-3 h-3" />
              {currentPlan.discountBadge}
            </div>

            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xs font-extrabold uppercase tracking-widest text-[#00e5ff]">
                  LIFETIME LICENSE (ONE-TIME)
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
                TouchBase PRO
                <span className="px-2 py-0.5 rounded-full bg-[#00e5ff]/20 text-[#00e5ff] text-[10px] font-black uppercase">
                  LIFETIME
                </span>
              </h3>
              <p className="text-sm text-zinc-300 mb-6">
                Wake-on-LAN, Live Screen Mirror, Gyro Air Mouse, Stream Deck, and Multi-PC management.
              </p>
              <div className="flex items-baseline gap-3 mb-2">
                <span className="text-4xl sm:text-5xl font-extrabold text-[#00e5ff]">
                  {currentPlan.price}
                </span>
                <span className="text-lg text-zinc-500 line-through">
                  {currentPlan.regularPrice}
                </span>
                <span className="text-xs text-[#00e676] font-bold">
                  {currentPlan.payOnce}
                </span>
              </div>
              <p className="text-xs text-zinc-400 mb-6">
                * Zero subscriptions. Includes 3-day full free trial on Google Play.
              </p>
            </div>

            <Link
              href="#download"
              className="w-full py-4 rounded-2xl bg-gradient-to-r from-[#00e5ff] to-[#00b4d8] text-black font-extrabold text-sm text-center shadow-[0_0_25px_rgba(0,229,255,0.3)] hover:shadow-[0_0_35px_rgba(0,229,255,0.5)] transition-all block hover:scale-[1.01]"
            >
              Get PRO on Google Play (3-Day Free Trial)
            </Link>
          </div>
        </div>

        {/* Detailed Feature Comparison Table */}
        <div className="rounded-3xl border border-white/10 overflow-hidden bg-[#101016]/80 backdrop-blur-xl shadow-2xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/10 bg-white/[0.02]">
                  <th className="py-5 px-6 text-xs font-bold text-zinc-400 uppercase tracking-wider">
                    Feature &amp; Capability
                  </th>
                  <th className="py-5 px-6 text-xs font-bold text-zinc-300 uppercase tracking-wider text-center w-40">
                    Free Tier
                  </th>
                  <th className="py-5 px-6 text-xs font-bold text-[#00e5ff] uppercase tracking-wider text-center w-52 bg-[#00e5ff]/5">
                    TouchBase PRO
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.06] text-sm">
                {matrix.map((row, idx) => (
                  <tr
                    key={idx}
                    className={`hover:bg-white/[0.02] transition-colors ${
                      row.highlight ? "bg-white/[0.01]" : ""
                    }`}
                  >
                    <td className="py-4 px-6 font-medium text-white flex items-center gap-2">
                      {row.highlight && (
                        <span className="w-1.5 h-1.5 rounded-full bg-[#00e5ff]"></span>
                      )}
                      <span>{row.feature}</span>
                    </td>
                    <td className="py-4 px-6 text-center">
                      {typeof row.free === "boolean" ? (
                        row.free ? (
                          <span className="inline-flex items-center gap-1 text-xs font-semibold text-zinc-300">
                            <Check className="w-4 h-4 text-[#00e676]" />
                            {row.freeNote}
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1 text-xs font-semibold text-zinc-500">
                            <X className="w-4 h-4 text-red-500/70" />
                            {row.freeNote}
                          </span>
                        )
                      ) : (
                        <span className="text-xs text-zinc-400 font-semibold">
                          {row.free}
                        </span>
                      )}
                    </td>
                    <td className="py-4 px-6 text-center bg-[#00e5ff]/[0.02]">
                      <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#00e5ff]">
                        <Check className="w-4 h-4 text-[#00e676]" />
                        {row.proNote}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
