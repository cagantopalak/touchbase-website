"use client";

import React from "react";
import { Check, X, ShieldAlert, Sparkles, BatteryCharging, Zap } from "lucide-react";

export default function WhyTouchBase() {
  const comparisons = [
    {
      category: "Arayüz & Kullanılabilirlik",
      others: "2012'den kalma gri buton karmaşası, karmaşık menüler",
      touchbase: "Smart TV kumandası + Dinamik cam trackpad füzyonu",
    },
    {
      category: "Gelir & Fiyat Modeli",
      others: "Her tıklamada video reklam veya aylık/yıllık fahiş abonelik",
      touchbase: "Sıfır reklam! Bir kahve fiyatına ömür boyu öde, sonsuza dek kullan",
    },
    {
      category: "Gecikme & İletişim",
      others: "Veriyi harici internet sunucularından geçiren yüksek gecikmeli bulut",
      touchbase: "%100 Yerel Wi-Fi WebSocket kanalıyla sub-3ms ışık hızı",
    },
    {
      category: "Ekran & Batarya",
      others: "Parlak beyaz temalarla telefonun pilini hızla tüketen ekranlar",
      touchbase: "%100 Saf OLED siyahı (#000000) ile pikseller kapalı, sıfır pil kaybı",
    },
    {
      category: "Donanım Gücü",
      others: "Sadece basit fare emülasyonu",
      touchbase: "Wake-on-LAN (Kapalı PC'yi açma), Windows Hello parmak izi, Gyro Air Mouse",
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-black/60 border-y border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#ff9100]" />
            <span className="text-xs font-semibold text-[#ff9100] uppercase tracking-wider">
              Neden TouchBase?
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Eski Nesil Kumanda Uygulamalarını Unutun.
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg">
            Pazardaki mevcut uzaktan kontrol yazılımlarının kullanıcıyı bezdiren
            tüm sorunlarını kökten çözdük.
          </p>
        </div>

        {/* Comparison Table / Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          {/* Competitor / Old Apps Card */}
          <div className="p-8 rounded-3xl bg-[#121218]/80 border border-red-500/20 shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
                <div className="w-10 h-10 rounded-2xl bg-red-500/10 border border-red-500/30 flex items-center justify-center text-red-500">
                  <X className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Geleneksel Uygulamalar</h3>
                  <p className="text-xs text-zinc-400">Unified Remote, Remote Mouse vb.</p>
                </div>
              </div>

              <ul className="space-y-5">
                {comparisons.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center shrink-0 mt-0.5">
                      <X className="w-3 h-3" />
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-zinc-500 uppercase tracking-wide block">
                        {item.category}
                      </span>
                      <p className="text-sm text-zinc-300 mt-0.5">{item.others}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 pt-4 border-t border-white/[0.08] text-center">
              <span className="text-xs text-red-400/80 font-medium">
                Sürekli reklamlar, yüksek gecikme ve pil israfı
              </span>
            </div>
          </div>

          {/* TouchBase Pro Card */}
          <div className="p-8 rounded-3xl bg-gradient-to-b from-[#1b1b26] to-[#0f0f15] border-2 border-[#00e5ff]/40 shadow-[0_0_40px_rgba(0,229,255,0.15)] flex flex-col justify-between relative overflow-hidden">
            {/* Top Accent Light */}
            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#00e5ff] via-[#00e676] to-[#00e5ff]"></div>

            <div>
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-[#00e5ff]/20 border border-[#00e5ff]/40 flex items-center justify-center text-[#00e5ff]">
                    <Check className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white flex items-center gap-2">
                      TouchBase Pro
                      <span className="px-2 py-0.5 rounded-full bg-[#00e5ff]/20 text-[#00e5ff] text-[10px] font-extrabold uppercase">
                        Yeni Nesil
                      </span>
                    </h3>
                    <p className="text-xs text-[#00e5ff]">Mühendislik Harikası Deneyim</p>
                  </div>
                </div>
              </div>

              <ul className="space-y-5">
                {comparisons.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#00e676]/20 text-[#00e676] flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-[#00e5ff] uppercase tracking-wide block">
                        {item.category}
                      </span>
                      <p className="text-sm font-medium text-white mt-0.5">
                        {item.touchbase}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 pt-4 border-t border-white/[0.08] text-center">
              <span className="text-xs text-[#00e676] font-semibold flex items-center justify-center gap-1.5">
                <Zap className="w-3.5 h-3.5" />
                Tek Seferlik Öde, Sonsuza Kadar Sahip Ol
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
