"use client";

import React from "react";
import Image from "next/image";
import {
  Tv,
  MousePointer,
  Zap,
  Fingerprint,
  MonitorPlay,
  Compass,
  Keyboard,
  Sliders,
  Layers,
  Sparkles,
} from "lucide-react";

export default function FeatureGrid() {
  const features = [
    {
      title: "Smart TV Kumandası & Medya Başlatıcılar",
      description:
        "YouTube, Netflix ve Spotify'a tek tıkla geçiş yapın. Ses ayarı, 10 saniye ileri/geri sarma rocker tuşları ve F11 tam ekran tuşu parmaklarınızın ucunda.",
      badge: "ERGONOMİK DOKUNSAL",
      color: "from-blue-500/20 to-[#00e5ff]/20",
      accent: "#00e5ff",
      icon: Tv,
      colSpan: "lg:col-span-7",
    },
    {
      title: "Dinamik Morphing Cam Trackpad",
      description:
        "Ortadaki alana dokunduğunuzda anında 1000Hz tepki süreli devasa bir cam trackpad'e dönüşür. Çift parmak kaydırma ve hassas imleç ivmelenmesi.",
      badge: "SUB-3MS TEPKİ",
      color: "from-emerald-500/20 to-[#00e676]/20",
      accent: "#00e676",
      icon: MousePointer,
      colSpan: "lg:col-span-5",
    },
    {
      title: "Wake-on-LAN (Kapalı PC'yi Aç)",
      description:
        "Bilgisayarınız tamamen kapalı veya uyku modundayken, yatağınızdan kalkmadan tek tuşla UDP 9 Magic Packet göndererek bilgisayarınızı başlatın.",
      badge: "PRO ÖZELLİK",
      color: "from-amber-500/20 to-[#ff9100]/20",
      accent: "#ff9100",
      icon: Zap,
      colSpan: "lg:col-span-4",
    },
    {
      title: "Windows Hello Parmak İzi ile Kilit Açma",
      description:
        "Telefondaki biyometrik parmak izinizle Windows oturumunuzu 500 milisaniyede açın. PIN yazma derdine son.",
      badge: "BİYOMETRİK GÜVENLİK",
      color: "from-cyan-500/20 to-blue-500/20",
      accent: "#00e5ff",
      icon: Fingerprint,
      colSpan: "lg:col-span-4",
    },
    {
      title: "Canlı Ekran Önizleme (Mini Mirror)",
      description:
        "Trackpad'in tam arkasında PC ekranınızı canlı olarak izleyin. TV ekranına kafanızı çevirmeden masaüstünüzde ne olduğunu takip edin.",
      badge: "GERÇEK ZAMANLI GDI",
      color: "from-purple-500/20 to-pink-500/20",
      accent: "#c084fc",
      icon: MonitorPlay,
      colSpan: "lg:col-span-4",
    },
    {
      title: "Gyroscope Air Mouse (Sihirli Kumanda)",
      description:
        "Telefonunuzu havada sihirli bir asa gibi hareket ettirin. Jiroskopik açısal hız algısı ve 0.12° titreme filtresiyle imleci havadan yönetin.",
      badge: "HAVADAN KONTROL",
      color: "from-indigo-500/20 to-blue-500/20",
      accent: "#818cf8",
      icon: Compass,
      colSpan: "lg:col-span-6",
    },
    {
      title: "Mekanik Sesli & Dokunsal Tam Klavye",
      description:
        "Gerçekçi mekanik switch ses efektleri (Blue Switch), Türkçe Q karakter desteği, Alt+Tab, Win tuşu, sesli dikte ve metin gönderme.",
      badge: "HAPTİK & AKUSTİK",
      color: "from-teal-500/20 to-emerald-500/20",
      accent: "#2dd4bf",
      icon: Keyboard,
      colSpan: "lg:col-span-6",
    },
  ];

  return (
    <section id="ozellikler" className="py-28 relative overflow-hidden bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-[#00e5ff]/30 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#00e5ff]" />
            <span className="text-xs font-semibold text-[#00e5ff] uppercase tracking-wider">
              Mühendislik Harikası Detaylar
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-6">
            Her Detayı Konforunuz İçin Tasarlandı.
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg leading-relaxed">
            TouchBase, sadece bir uzaktan kumanda değil; bilgisayarınızı ev eğlencesinin
            merkezi haline getiren yüksek performanslı bir kontrol istasyonudur.
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
