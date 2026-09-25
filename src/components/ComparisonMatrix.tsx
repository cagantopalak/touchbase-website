"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Check, X, Zap, Sparkles, Coffee, ShieldCheck, HelpCircle } from "lucide-react";

export default function ComparisonMatrix() {
  const [currency, setCurrency] = useState<"TRY" | "USD">("TRY");

  const plans = {
    TRY: {
      price: "₺89.99",
      regularPrice: "₺149.99",
      currencyLabel: "TL",
      discountBadge: "%40 Lansman İndirimi",
    },
    USD: {
      price: "$4.99",
      regularPrice: "$8.99",
      currencyLabel: "USD",
      discountBadge: "40% OFF Launch",
    },
  };

  const currentPlan = plans[currency];

  const matrix = [
    {
      feature: "Smart TV Kumanda Arayüzü",
      free: true,
      freeNote: "Tam Erişim",
      pro: true,
      proNote: "Tam Erişim",
      highlight: false,
    },
    {
      feature: "Dinamik Cam Trackpad & Çoklu Dokunma",
      free: true,
      freeNote: "Tam Erişim",
      pro: true,
      proNote: "Tam Erişim",
      highlight: false,
    },
    {
      feature: "Medya Başlatıcılar (YouTube, Netflix, Spotify)",
      free: true,
      freeNote: "Var",
      pro: true,
      proNote: "Var",
      highlight: false,
    },
    {
      feature: "Ses & 10s Sarma Rocker Tuşları",
      free: true,
      freeNote: "Var",
      pro: true,
      proNote: "Var",
      highlight: false,
    },
    {
      feature: "Mekanik Sesli Klavye (Türkçe Q Tam Düzen)",
      free: true,
      freeNote: "Var",
      pro: true,
      proNote: "Var",
      highlight: false,
    },
    {
      feature: "OLED Obsidian Siyah Tema (#000000)",
      free: true,
      freeNote: "Var",
      pro: true,
      proNote: "Var",
      highlight: false,
    },
    {
      feature: "Windows Hello Kilit Açma",
      free: true,
      freeNote: "4 Haneli PIN",
      pro: true,
      proNote: "Ultra Hızlı Parmak İzi",
      highlight: false,
    },
    {
      feature: "Wake-on-LAN (Kapalı PC'yi Wi-Fi ile Açma)",
      free: false,
      freeNote: "Kilitli",
      pro: true,
      proNote: "Sınırsız (Tek Tıkla)",
      highlight: true,
    },
    {
      feature: "Canlı Ekran Önizleme (Mini Screen Mirror)",
      free: false,
      freeNote: "Kilitli",
      pro: true,
      proNote: "Sınırsız (Trackpad Altında)",
      highlight: true,
    },
    {
      feature: "Gyroscope Air Mouse (Sihirli Kumanda)",
      free: false,
      freeNote: "Kilitli",
      pro: true,
      proNote: "Sınırsız (Havadan Kontrol)",
      highlight: true,
    },
    {
      feature: "Stream Deck & Hızlı Makro Tuşları",
      free: false,
      freeNote: "Kilitli",
      pro: true,
      proNote: "Sınırsız (Snip, Mic Mute vb.)",
      highlight: true,
    },
    {
      feature: "Çoklu PC Yönetimi (Salon, Ofis, Masa)",
      free: "1 Bilgisayar",
      freeNote: "1 Cihaz",
      pro: true,
      proNote: "Sınırsız Bilgisayar",
      highlight: true,
    },
    {
      feature: "VIP Temalar (Titanium, Cyberpunk Neon)",
      free: false,
      freeNote: "Kilitli",
      pro: true,
      proNote: "Tüm Temalar Açık",
      highlight: true,
    },
  ];

  return (
    <section id="karsilastirma" className="py-28 relative overflow-hidden bg-black">
      {/* Background Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-[#ff9100]/5 rounded-full blur-[170px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-[#ff9100]/30 mb-4">
            <Coffee className="w-3.5 h-3.5 text-[#ff9100]" />
            <span className="text-xs font-semibold text-[#ff9100] uppercase tracking-wider">
              Abonelik Yok • Ömür Boyu Lisans
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-6">
            Free ve PRO: İhtiyacınıza Göre Seçin.
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg">
            Temel uzaktan kumanda özelliklerini sonsuza kadar ücretsiz kullanın.
            Wake-on-LAN, Canlı Ekran ve Air Mouse gibi gelişmiş donanım özelliklerine
            bir kahve fiyatına ömür boyu sahip olun.
          </p>

          {/* Currency Toggle */}
          <div className="inline-flex items-center p-1 rounded-xl bg-[#14141c] border border-white/10 mt-8">
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
          </div>
        </div>

        {/* Pricing Cards Header */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* FREE PLAN CARD */}
          <div className="p-8 rounded-3xl bg-[#121218] border border-white/10 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-extrabold uppercase tracking-widest text-zinc-400">
                  ÜCRETSİZ KATMAN
                </span>
                <span className="px-2.5 py-1 rounded-full bg-white/5 text-[11px] text-zinc-300 font-semibold border border-white/10">
                  Süresiz Ücretsiz
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">TouchBase Free</h3>
              <p className="text-sm text-zinc-400 mb-6">
                Temel medya kontrolü ve fare trackpad deneyimi için ihtiyacınız olan her şey.
              </p>
              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-4xl font-extrabold text-white">₺0</span>
                <span className="text-xs text-zinc-500 font-medium">Sonsuza kadar</span>
              </div>
            </div>

            <Link
              href="#indir"
              className="w-full py-3.5 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/15 text-sm font-bold text-white text-center transition-colors block"
            >
              Ücretsiz Başla
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
                  ÖMÜR BOYU LİSANS (TEK SEFERLİK)
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
                TouchBase PRO
                <span className="px-2 py-0.5 rounded-full bg-[#00e5ff]/20 text-[#00e5ff] text-[10px] font-black uppercase">
                  LIFETIME
                </span>
              </h3>
              <p className="text-sm text-zinc-300 mb-6">
                Wake-on-LAN, Canlı Ekran, Air Mouse ve Stream Deck ile tam donanım kontrolü.
              </p>
              <div className="flex items-baseline gap-3 mb-2">
                <span className="text-4xl sm:text-5xl font-extrabold text-[#00e5ff]">
                  {currentPlan.price}
                </span>
                <span className="text-lg text-zinc-500 line-through">
                  {currentPlan.regularPrice}
                </span>
                <span className="text-xs text-[#00e676] font-bold">
                  Bir kez öde, ömür boyu kullan!
                </span>
              </div>
              <p className="text-xs text-zinc-400 mb-6">
                * Abonelik yoktur. 3 günlük ücretsiz deneme dahildir.
              </p>
            </div>

            <Link
              href="#indir"
              className="w-full py-4 rounded-2xl bg-gradient-to-r from-[#00e5ff] to-[#00b4d8] text-black font-extrabold text-sm text-center shadow-[0_0_25px_rgba(0,229,255,0.3)] hover:shadow-[0_0_35px_rgba(0,229,255,0.5)] transition-all block hover:scale-[1.01]"
            >
              PRO&apos;yu Google Play&apos;den Al (3 Gün Ücretsiz Dene)
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
                    Özellik &amp; Kabiliyet
                  </th>
                  <th className="py-5 px-6 text-xs font-bold text-zinc-300 uppercase tracking-wider text-center w-40">
                    Free (Ücretsiz)
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
