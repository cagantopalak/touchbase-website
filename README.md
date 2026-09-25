# 📱 TouchBase Pro — Official Web Site & Landing Page

[![Framework: Next.js 15](https://img.shields.io/badge/Framework-Next.js%2015-000000?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![Tailwind CSS v4](https://img.shields.io/badge/Styling-Tailwind%20CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Language: TypeScript](https://img.shields.io/badge/Language-TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![License: Private/Proprietary](https://img.shields.io/badge/License-Proprietary-FF3B30?style=for-the-badge)](https://touchbase.vercel.app)

Windows bilgisayarınızı yatağınızdan veya koltuğunuzdan Android telefonunuzla TV kumandası ergonomisinde yönetmenizi sağlayan **TouchBase Pro**'nun resmi landing page ve web sitesi projesidir.

---

## 🚀 Öne Çıkan Özellikler

- 📺 **Smart TV Kumandası + Dinamik Cam Trackpad Füzyonu**: YouTube, Netflix, Spotify kısayolları ve 1000Hz tepki süreli cam trackpad.
- ⚡ **100% Saf OLED Siyahı (`#000000`)**: Sıfır pil tüketimi ve modern obsidian cam dokunsal tasarım dili.
- 🛡️ **%100 Yerel Wi-Fi, %0 Bulut**: WebSocket (Port 38472) üzerinden sub-3ms ışık hızında doğrudan iletişim.
- ☕ **Abonelik Yok, Ömür Boyu Lisans**: ₺89.99 (%40 lansman indirimi) / $4.99 USD tek seferlik satın alım psikolojisi.
- 🖱️ **İnteraktif Canlı Demo**: Ziyaretçilerin tarayıcı üzerinde kumandayı ve trackpad'i test edebileceği çalışan simülatör.
- 📱 **Kolay İndirme Hub'ı**:
  - Android: Google Play Store bağlantısı + Doğrudan APK indirme seçeneği.
  - Windows: Sıfır kurulum gerektiren taşınabilir sunucu paketi (`TouchBase_Windows_Host.zip`).

---

## 🛠️ Mimari ve Teknoloji Yığını

| Katman | Teknoloji | Açıklama |
| :--- | :--- | :--- |
| **Framework** | Next.js 15 (App Router) | SEO dostu, hibrit derleme, yüksek performans |
| **UI Kütüphanesi** | React 19 & TypeScript | Tip güvenliği ve modüler bileşen mimarisi |
| **Stil Sistemi** | Tailwind CSS & Obsidian Tokens | `#000000` zemin, neon kehribar, buz mavisi ve zümrüt yeşili vurgular |
| **İkon Seti** | Lucide React | Modern, minimalist SVG sembolleri |
| **Statik Varlıklar** | Next/Image & Public Assets | Yüksek çözünürlüklü OLED arayüz ekranları ve indirme dosyaları |

---

## 📂 Dizin Yapısı

```
touchbase-website/
├── public/
│   ├── downloads/
│   │   ├── TouchBase.apk                # 2.4 MB doğrudan Android kurulum paketi
│   │   └── TouchBase_Windows_Host.zip   # 11 KB taşınabilir Windows sunucusu
│   ├── images/
│   │   ├── remote_tactile.png           # Smart TV Kumandası arayüz görseli
│   │   ├── dynamic_trackpad.png         # Dinamik cam trackpad görseli
│   │   ├── settings_screen.png          # Gelişmiş ayarlar ekranı
│   │   └── icon.png                     # Yüksek çözünürlüklü TouchBase logosu
│   └── favicon.ico
├── src/
│   ├── app/
│   │   ├── globals.css                  # Obsidian tactile tasarım sınıfları
│   │   ├── layout.tsx                   # SEO, OpenGraph ve Inter font ayarları
│   │   └── page.tsx                     # Landing page ana montaj noktası
│   └── components/
│       ├── Navbar.tsx                   # Canlı gecikme simülasyonu (2ms) & Menü
│       ├── Hero.tsx                     # Değer önerisi, ikili indirme butonları & 3D mockup
│       ├── InteractiveDemo.tsx          # Tarayıcı içi interaktif kumanda & trackpad simülatörü
│       ├── WhyTouchBase.tsx             # Eski nesil uygulamalar ile karşılaştırma
│       ├── FeatureGrid.tsx              # Bento grid donanım özellikleri (WoL, Hello, Air Mouse)
│       ├── ShowcaseGallery.tsx          # Fotoğraf galerisi ve video tanıtım vitrini
│       ├── ComparisonMatrix.tsx         # Free vs PRO detaylı matris ve lansman indirimi
│       ├── HowItWorks.tsx               # 60 saniyede 3 adımda kurulum rehberi
│       ├── SecurityPledge.tsx           # %100 Yerel Wi-Fi, sıfır bulut taahhüdü
│       ├── FAQ.tsx                      # Akordeon soru-cevap bölümü
│       ├── DownloadCTA.tsx              # Büyük indirme kartları
│       └── Footer.tsx                   # Telif, yasal uyarılar ve GitHub bağlantısı
├── package.json
└── vercel.json
```

---

## 💻 Yerel Geliştirme

```bash
# Bağımlılıkları yükleyin
npm install

# Geliştirme sunucusunu başlatın
npm run dev

# Üretim derlemesi (Production Build)
npm run build
```

---

## 🌐 Vercel Dağıtımı

1. Proje GitHub üzerinde [cagantopalak/touchbase-website](https://github.com/cagantopalak/touchbase-website) adresindedir.
2. Vercel paneline giriş yapıp **"Add New Project" -> "Import Git Repository"** seçeneğiyle repoyu seçerek tek tıkla otomatik dağıtım sağlayabilirsiniz.
3. Veya Vercel CLI kullanarak `vercel deploy --prod` komutunu çalıştırabilirsiniz.

---

Developed by **Çağan Topalak** • TouchBase Systems © 2026
