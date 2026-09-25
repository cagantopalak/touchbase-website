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
  Maximize2,
  CheckCircle,
} from "lucide-react";

export default function ShowcaseGallery() {
  const [activeTab, setActiveTab] = useState<"remote" | "trackpad" | "settings" | "video">("remote");
  const [isPlayingVideo, setIsPlayingVideo] = useState(false);

  const tabs = [
    {
      id: "remote" as const,
      label: "Smart TV Kumandası",
      icon: Smartphone,
      title: "Obsidian Tactile Kumanda Arayüzü",
      description:
        "YouTube, Netflix ve Spotify için özel başlatıcılar, çift taraflı ses ve sarma sütunları, ortada ışıltılı Master Play/Pause mücevher butonu.",
      image: "/images/remote_tactile.png",
      bullets: [
        "100% Saf OLED Siyahı (#000000) ile sıfır pil tüketimi",
        "Dokunsal squircle tuşlar ve LRA titreşim motoru desteği",
        "Sub-3ms ışık hızında WebSocket bağlantısı",
      ],
    },
    {
      id: "trackpad" as const,
      label: "Dinamik Cam Trackpad",
      icon: MousePointer,
      title: "1000Hz Hassasiyetli Dinamik Trackpad",
      description:
        "Dokunduğunuzda tüm ekranı kaplayan pürüzsüz cam trackpad. Akıcı imleç ivmelenmesi, iki parmakla kaydırma ve altta çift tıklama butonları.",
      image: "/images/dynamic_trackpad.png",
      bullets: [
        "Gecikmesiz imleç takibi ve akıllı ivmelenme eğrisi",
        "Canlı Ekran Önizleme (Mini Screen Mirror) desteği",
        "Altta bölünmüş fiziksel Sol & Sağ tık alanları",
      ],
    },
    {
      id: "settings" as const,
      label: "Ayarlar & Özelleştirme",
      icon: Settings,
      title: "Kişiselleştirilebilir Donanım Ayarları",
      description:
        "Haptik titreşim şiddeti, fare DPI hassasiyeti, Wake-on-LAN MAC adresi yönetimi ve VIP temalar tek bir sade menüde.",
      image: "/images/settings_screen.png",
      bullets: [
        "Windows Hello parmak izi & 4 haneli PIN yönetimi",
        "Otomatik başlatma ve sessiz arka plan çalışma modu",
        "Titanium ve Cyberpunk VIP tema seçenekleri",
      ],
    },
    {
      id: "video" as const,
      label: "Video & Tanıtım Vitrini",
      icon: Film,
      title: "TouchBase Canlı Kullanım Deneyimi",
      description:
        "Uygulamanın yatakta ve koltukta kullanımını, tepki süresini ve ergonomik geçişlerini yakından inceleyin.",
      image: "/images/remote_tactile.png",
      bullets: [
        "Tek elle zahmetsiz kullanım ergonomisi (Thumb Zone)",
        "PC kapalıyken Wake-on-LAN ile anında açılış",
        "Windows masaüstü kontrolünde sıfır takılma",
      ],
    },
  ];

  const currentTab = tabs.find((t) => t.id === activeTab) || tabs[0];

  return (
    <section id="galeri" className="py-28 relative overflow-hidden bg-black/90">
      {/* Background Lighting */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-[#00e5ff]/5 rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-[#00e5ff]/30 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#00e5ff]" />
            <span className="text-xs font-semibold text-[#00e5ff] uppercase tracking-wider">
              Arayüz &amp; Video Vitrini
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-6">
            Göz Alıcı Tasarım, Eşsiz Mühendislik.
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg">
            TouchBase&apos;in her pikseli karanlık odalarda gözünüzü yormamak ve
            elinizde gerçek bir donanım kumandası hissi uyandırmak için çizildi.
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
                        aria-label="Videoyu Başlat"
                      >
                        <div className="w-full h-full rounded-full bg-[#161622] flex items-center justify-center text-white group-hover/btn:text-[#00e5ff] transition-colors">
                          <Play className="w-10 h-10 fill-current ml-1" />
                        </div>
                      </button>

                      <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                        TouchBase Tanıtım &amp; Özellik Videosu
                      </h3>
                      <p className="text-xs sm:text-sm text-zinc-400 max-w-md">
                        Smart TV kumandası ergonomisini, 1000Hz cam trackpad geçişini
                        ve Wake-on-LAN gücünü izleyin.
                      </p>

                      <div className="flex items-center gap-3 mt-4">
                        <span className="px-3 py-1 rounded-full bg-white/10 text-[11px] font-mono text-[#00e5ff] border border-white/10">
                          1080p 60FPS
                        </span>
                        <span className="px-3 py-1 rounded-full bg-[#00e676]/15 text-[11px] font-mono text-[#00e676] border border-[#00e676]/30">
                          Ultra Düşük Gecikme
                        </span>
                      </div>
                    </div>
                  </>
                ) : (
                  /* Video Playing State Simulation / HTML5 Video Holder */
                  <div className="w-full h-full flex flex-col items-center justify-center p-8 bg-black">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-3 h-3 rounded-full bg-red-500 animate-ping"></div>
                      <span className="text-sm font-bold text-zinc-300">
                        Canlı Demo Yayını Oynatılıyor...
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
                      Durdur / Başa Dön
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
                  RESMİ EKRAN GÖRÜNTÜSÜ
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
                      Çözünürlük: OLED Native 1080p
                    </span>
                  </div>
                  <span className="text-xs font-mono text-[#00e676]">
                    %100 Vektörel Hissiyat
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
