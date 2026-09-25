"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle, Sparkles } from "lucide-react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "TouchBase kullanmak için aktif internet bağlantısı gerekir mi?",
      a: "Hayır! TouchBase %100 yerel Wi-Fi ağı üzerinden WebSocket ile iletişim kurar. Evinizdeki internet bağlantısı tamamen kesilse bile telefonunuz ve bilgisayarınız aynı modeme bağlı olduğu sürece kusursuz çalışır.",
    },
    {
      q: "Gerçekten aylık veya yıllık bir abonelik yok mu?",
      a: "Kesinlikle hayır. TouchBase Pro'da kullanıcıları bezdiren abonelik modellerine yer yoktur. Tek seferlik ömür boyu (Lifetime) lisans ile bir fincan kahve fiyatına satın alır, yeni cihazlarınızda da tek tıkla lisansınızı geri yükleyebilirsiniz.",
    },
    {
      q: "Hangi Windows sürümleri desteklenmektedir?",
      a: "Windows 10 ve Windows 11 (64-bit ve ARM) işletim sistemleriyle %100 yerel uyumludur. C# Win32 SendInput motoru sayesinde hiçbir harici sürücü yüklemenize gerek kalmaz.",
    },
    {
      q: "Wake-on-LAN bilgisayar kapalıyken nasıl çalışır?",
      a: "Bilgisayarınız kapalıyken anakart ve ağ kartı düşük güç modunda (5VSB) Magic Packet dinler. TouchBase telefonunuzdan UDP 9 portuna tek tıkla paket fırlatarak bilgisayarınızı yatağınızdan kalkmadan elektriksel olarak uyandırır.",
    },
    {
      q: "Biyometrik Windows Hello kilit açma güvenli midir?",
      a: "Son derece güvenlidir. Telefondaki parmak iziniz yerel Android Keystore donanımında doğrulanır. PIN kodunuz asla harici bir bulut sunucusuna gönderilmez; yalnızca yerel şifreli soket üzerinden PC'ye iletilir.",
    },
    {
      q: "Herhangi bir hesap açmam veya e-posta vermem gerekiyor mu?",
      a: "Hayır. TouchBase sıfır sürtünme prensibiyle tasarlanmıştır. Hesap açma, şifre belirleme, e-posta onaylama gibi gereksiz adımlar yoktur. İndirin, çalıştırın ve hemen kullanın.",
    },
  ];

  return (
    <section id="sss" className="py-24 relative overflow-hidden bg-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 mb-4">
            <HelpCircle className="w-3.5 h-3.5 text-[#00e5ff]" />
            <span className="text-xs font-semibold text-[#00e5ff] uppercase tracking-wider">
              Aklınıza Takılanlar
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Sıkça Sorulan Sorular
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base">
            TouchBase ve sistemin çalışmasıyla ilgili en çok merak edilen konular.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="glass-card rounded-2xl border border-white/10 overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full py-5 px-6 flex items-center justify-between text-left group"
                >
                  <span className="text-base font-bold text-white group-hover:text-[#00e5ff] transition-colors pr-4">
                    {faq.q}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-[#00e5ff] border-[#00e5ff]/40" : ""
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-sm text-zinc-400 leading-relaxed border-t border-white/[0.04]">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
