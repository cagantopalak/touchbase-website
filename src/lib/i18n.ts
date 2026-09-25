// Internationalization (i18n) Dictionary Architecture
// Primary default language: EN (Active)
// Scaled secondary language: TR (Prepared for future activation)

export type Locale = "en" | "tr";

export const defaultLocale: Locale = "en";

export const translations = {
  en: {
    nav: {
      features: "Features",
      liveDemo: "Live Demo",
      gallery: "Gallery",
      comparison: "Free vs PRO",
      setup: "Setup",
      faq: "FAQ",
      downloadNow: "Download Now",
      hostStatus: "CAGAN-PC",
      latency: "2ms",
    },
    hero: {
      eyebrow: "100% LOCAL WI-FI • ZERO CLOUD • SUB-3MS LATENCY",
      headlineStart: "Control Your PC Like a",
      headlineAccent: "Smart TV Remote",
      headlineEnd: "From Your Bed or Couch.",
      subheadline:
        "Ditch clumsy wireless keyboards and bloated, ad-infested 2012 remote apps. TouchBase unifies YouTube, Netflix, and Spotify media controls, a 1000Hz dynamic glass trackpad, biometric Windows Hello unlock, and Wake-on-LAN power—all enveloped in pure OLED black.",
      downloadAndroid: "Get for Android",
      googlePlay: "Google Play Store",
      downloadWindows: "Download Host for PC",
      windowsServer: "Windows Server",
      directApk: "Don't have Google Play? Direct APK Download (v1.0.0 • 2.4 MB)",
      trustZeroCloud: "Zero Cloud / Full Privacy",
      trustLatency: "1-3ms Response Time",
      trustNoSubscription: "No Subscription / Lifetime",
      trustAutoWifi: "Zero-Config Local Discovery",
      phoneScreenHint: "OLED Pitch Black • Tactile Squircles",
      phoneScreenSub: "100% Battery Friendly",
      badgeWolTitle: "Wake-on-LAN",
      badgeWolSub: "Turn On Sleeping PC",
      badgeHelloTitle: "Windows Hello",
      badgeHelloSub: "Fingerprint Unlock",
    },
    demo: {
      tag: "IN-BROWSER TACTILE EXPERIENCE",
      title: "Feel the Hardware Ergonomics Before Installing.",
      description:
        "Interact with our virtual remote and morphing trackpad below. Click the tactile keys, glide your cursor over the glass surface, and experience real-time sub-2ms responsiveness.",
      tabRemote: "Smart TV Remote",
      tabTrackpad: "Dynamic Trackpad",
      statusReady: "System Online • CAGAN-PC Paired",
      cmdLeftClick: "Dispatched Left Click (L-CLICK)",
      cmdRightClick: "Dispatched Right Click (R-CLICK)",
      cursorGlide: "Cursor Vector: Sub-2ms Latency",
      volIncreased: "Volume Adjusted",
      volDecreased: "Volume Lowered",
      ytLaunched: "Launched YouTube (Theater Mode)",
      netflixLaunched: "Launched Netflix",
      spotifyLaunched: "Launched Spotify Player",
      f11Toggled: "Toggled F11 Fullscreen",
      wolTriggered: "Wake-on-LAN Magic Packet Dispatched!",
      helloVerified: "Biometric Windows Hello Clearance Granted! Desktop Unlocked.",
    },
    whyTouchBase: {
      tag: "WHY TOUCHBASE?",
      title: "Forget Legacy, Clunky Remote Software.",
      description:
        "We engineered TouchBase from the ground up to eliminate every single friction point plaguing existing remote desktop utilities.",
      competitorTitle: "Legacy Tools (2012 Era)",
      competitorSub: "Unified Remote, Remote Mouse, etc.",
      competitorBottom: "Aggressive ads, frustrating latency, and battery drain",
      touchbaseTitle: "TouchBase Pro",
      touchbaseBadge: "NEXT-GEN",
      touchbaseSub: "Precision Engineering & Tactile Craft",
      touchbaseBottom: "Pay Once, Own Forever. Zero Ads.",
      rows: [
        {
          category: "UI & Usability",
          others: "2012-era cluttered gray buttons and complex nested menus",
          touchbase: "Smart TV remote ergonomics fused with a dynamic 1000Hz glass trackpad",
        },
        {
          category: "Business Model",
          others: "Aggressive interstitial video ads or pricey recurring subscriptions",
          touchbase: "Zero ads. Single coffee-price lifetime purchase—no recurring fees ever",
        },
        {
          category: "Latency & Connectivity",
          others: "High-latency traffic bounced through third-party internet cloud servers",
          touchbase: "100% Local Wi-Fi WebSocket channel delivering sub-3ms ultra-low latency",
        },
        {
          category: "Battery & Display",
          others: "Bright white themes draining your phone battery within hours",
          touchbase: "100% Pure OLED Black (#000000) with disabled pixels for near-zero drain",
        },
        {
          category: "Hardware Power",
          others: "Basic cursor emulation only",
          touchbase: "Hardware Wake-on-LAN (UDP 9), biometric Windows Hello, and Gyro Air Mouse",
        },
      ],
    },
    features: {
      tag: "ENGINEERING HIGHLIGHTS",
      title: "Engineered for Peak Comfort & Power.",
      description:
        "TouchBase is not just another mouse pointer app—it turns your computer into an effortless home entertainment command center.",
      items: [
        {
          title: "Smart TV Remote & Media Launchers",
          description:
            "Dedicated launchers for YouTube, Netflix, and Spotify. Flanking tactile volume and 10s scrub rockers, plus instant F11 theater mode.",
          badge: "TACTILE HARDWARE",
        },
        {
          title: "Dynamic Morphing Glass Trackpad",
          description:
            "Touch the center disc and watch it fluidly expand into a massive 1000Hz precision glass trackpad with smooth acceleration and two-finger scrolling.",
          badge: "SUB-3MS RESPONSE",
        },
        {
          title: "Wake-on-LAN (Turn On Sleeping PC)",
          description:
            "Even when your PC is completely turned off or in sleep mode, wake it up from bed with a single tap via UDP Port 9 Magic Packet broadcast.",
          badge: "PRO CAPABILITY",
        },
        {
          title: "Windows Hello Biometric Unlock",
          description:
            "Use your phone's fingerprint sensor to unlock your Windows desktop in 500 milliseconds. No typing 4-digit PINs in the dark.",
          badge: "BIOMETRIC SECURITY",
        },
        {
          title: "Live Mini Screen Mirror",
          description:
            "Stream your desktop screen live right underneath the trackpad surface at 60fps. Navigate without straining your neck toward the TV.",
          badge: "REAL-TIME GDI FEED",
        },
        {
          title: "Gyroscope Air Mouse (Magic Wand)",
          description:
            "Move your phone through the air like a magic wand. Built-in angular rate integration and 0.12° deadzone filtering eliminate hand jitters.",
          badge: "MOTION SENSING",
        },
        {
          title: "Acoustic Mechanical Keyboard",
          description:
            "Full physical keyboard layout with realistic mechanical Blue Switch click acoustics and LRA haptic pulse feedback.",
          badge: "HAPTIC & ACOUSTIC",
        },
      ],
    },
    gallery: {
      tag: "INTERFACE & VIDEO SHOWCASE",
      title: "Striking Visuals. Precision Ergonomics.",
      description:
        "Every single pixel of TouchBase was calibrated for dark home theater rooms and tactile thumb comfort.",
      tabs: {
        remote: "Smart TV Remote",
        trackpad: "Dynamic Trackpad",
        settings: "Hardware Preferences",
        video: "Video Demo Showcase",
      },
      videoTitle: "TouchBase Official Video Walkthrough",
      videoSub: "Watch the seamless Smart TV remote controls, 1000Hz trackpad morphing, and Wake-on-LAN power in real-time.",
    },
    pricing: {
      tag: "NO SUBSCRIPTIONS • LIFETIME LICENSE",
      title: "Free vs. PRO: Pick What You Need.",
      description:
        "Enjoy foundational remote controls completely free forever. Unlock Wake-on-LAN, live screen streaming, and Gyro Air Mouse for the price of a single coffee.",
      freeTitle: "TouchBase Free",
      freeSub: "All the essential media playback and mouse trackpad features to get started.",
      freePrice: "$0",
      freePeriod: "Forever",
      freeCta: "Start Free",
      proTitle: "TouchBase PRO",
      proBadge: "LIFETIME",
      proSub: "Wake-on-LAN, Live Screen Mirror, Gyro Air Mouse, Stream Deck, and Multi-PC management.",
      proPriceUsd: "$4.99",
      proRegularUsd: "$8.99",
      proPriceTry: "₺89.99",
      proRegularTry: "₺149.99",
      launchDiscount: "40% OFF LAUNCH SPECIAL",
      payOncePledge: "Pay once, own forever! No recurring fees.",
      trialNote: "* Zero subscriptions. Includes 3-day full free trial.",
      proCta: "Unlock PRO on Google Play (3-Day Free Trial)",
      colFeature: "Feature & Capability",
      colFree: "Free Tier",
      colPro: "TouchBase PRO",
    },
    setup: {
      tag: "60-SECOND SETUP",
      title: "Up and Running in 3 Simple Steps.",
      description: "No complex port forwarding, manual IP entry, or router configuration needed.",
      step1Title: "Download Windows Host",
      step1Desc: "Download our lightweight companion ZIP. Double-click start_server.bat. It idles silently in the background consuming <15MB RAM.",
      step1Badge: "Zero Install Needed",
      step2Title: "Install TouchBase on Phone",
      step2Desc: "Grab it from Google Play or download the direct APK. No account creation, passwords, or emails required.",
      step2Badge: "No Account / Frictionless",
      step3Title: "Auto-Pair & Enjoy",
      step3Desc: "As long as you are on the same Wi-Fi, TouchBase discovers your PC automatically in under 1 second. Start controlling instantly!",
      step3Badge: "Automatic Discovery",
    },
    security: {
      tag: "ENGINEERING PRIVACY PLEDGE",
      title: "Your Data Never Leaves Your Local Network.",
      description:
        "TouchBase is built with privacy-first engineering standards. Unlike commercial remote tools, your keystrokes, biometric credentials, and screen frames are never relayed through external cloud servers.",
      protocol: "Protocol: ws://192.168.x.x:38472 • UDP Port 9 Magic Packet",
      p1Title: "100% Local Network",
      p1Desc: "All commands and packets travel strictly inside your home Wi-Fi router. Works seamlessly even if your internet connection goes down.",
      p2Title: "Zero Cloud & Zero Telemetry",
      p2Desc: "We do not store passwords, telemetry, or user accounts. What you type and what you watch remains 100% private to you.",
      p3Title: "Biometric Hardware Vault",
      p3Desc: "Windows Hello PIN and biometric tokens are stored safely inside your Android device's hardware Keystore.",
      p4Title: "Transparent Lightweight Core",
      p4Desc: "The Windows host is an open, transparent Node.js and Win32 SendInput engine that never bogs down your PC (<0.05% CPU).",
    },
    faq: {
      tag: "FREQUENTLY ASKED QUESTIONS",
      title: "Common Questions Answered.",
      description: "Everything you need to know about TouchBase, connectivity, and licensing.",
    },
    download: {
      tag: "DOWNLOAD CENTER",
      title: "Get TouchBase Now. Start in 60 Seconds.",
      description: "Install the Android remote on your phone and the Windows companion on your PC. No accounts, no credit cards required.",
      androidCardTitle: "TouchBase Android Remote",
      androidCardSub: "Smart TV remote layout, 1000Hz glass trackpad, biometric unlock, and Wake-on-LAN magic packet transmitter.",
      androidMin: "Android 8.0+",
      googlePlayBtn: "Get it on Google Play Store",
      directApkBtn: "Direct APK Sideload (v1.0.0 • 2.4 MB)",
      windowsCardTitle: "TouchBase Windows Host Server",
      windowsCardSub: "Lightweight, whisper-quiet background host service providing sub-3ms WebSocket communication via Win32 SendInput.",
      windowsMin: "Windows 10 / 11 (64-Bit & ARM)",
      windowsBtn: "Download Windows Host (.ZIP • v1.0.0)",
      githubReleasesBtn: "View GitHub Releases & Tray Companion",
      checksumNote: "Scanned & Verified Malware-Free (SHA-256 Validated)",
      portNote: "Port: 38472 (Local Wi-Fi Only)",
    },
    footer: {
      description:
        "Control your Windows PC from bed or couch with physical Smart TV remote ergonomics. 100% Local Wi-Fi, sub-3ms ultra-low latency, zero cloud dependency.",
      zeroTelemetry: "Zero Telemetry & Full Privacy Guarantee",
      quickLinks: "Quick Navigation",
      downloadsAndSource: "Downloads & Source",
      allRights: "TouchBase Pro. All rights reserved.",
      developedBy: "Engineered with precision by Çağan Topalak",
    },
  },
  tr: {
    // Scaled Turkish dictionary for future multi-lang switcher
    nav: {
      features: "Özellikler",
      liveDemo: "Canlı Demo",
      gallery: "Galeri",
      comparison: "Free vs PRO",
      setup: "Kurulum",
      faq: "SSS",
      downloadNow: "Hemen İndir",
      hostStatus: "CAGAN-PC",
      latency: "2ms",
    },
  },
};
