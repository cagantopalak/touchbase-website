"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "Does TouchBase require an active internet connection?",
      a: "No! TouchBase communicates 100% over your local Wi-Fi router via local WebSocket sockets. Even if your external broadband internet goes down, your phone and computer will communicate flawlessly as long as they are connected to the same local router.",
    },
    {
      q: "Is there really no monthly or annual recurring subscription?",
      a: "Zero recurring subscriptions. TouchBase Pro follows a transparent 'Lifetime License' model. You pay once—the price of a single coffee—and you own it forever. You can also restore purchases on any new Android device with a single tap.",
    },
    {
      q: "Which Windows operating system versions are supported?",
      a: "TouchBase is natively compatible with Windows 10 and Windows 11 (64-bit and ARM64). Our custom C# Win32 SendInput backend handles keyboard and mouse input without requiring intrusive kernel drivers.",
    },
    {
      q: "How does Wake-on-LAN power on my computer when it is shut down?",
      a: "When a computer is powered off or in sleep state, its motherboard and network interface card (NIC) remain in low-power standby (5VSB) listening for network packets. TouchBase broadcasts an industry-standard UDP Port 9 Magic Packet containing your MAC address, telling the hardware to boot up electrically.",
    },
    {
      q: "Is Windows Hello biometric unlock secure?",
      a: "Yes. Biometric verification takes place directly inside your Android device's hardware-backed Keystore enclave. Your master PIN or biometric tokens are never transmitted to external cloud servers; they are only shared over the local encrypted socket to unlock the desktop.",
    },
    {
      q: "Do I need to register an account or give my email address?",
      a: "Never. TouchBase is designed for frictionless utility. There are no sign-up forms, passwords, verification emails, or telemetry tracking. Just install and start controlling your PC immediately.",
    },
  ];

  return (
    <section id="faq" className="py-24 relative overflow-hidden bg-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 mb-4">
            <HelpCircle className="w-3.5 h-3.5 text-[#00e5ff]" />
            <span className="text-xs font-semibold text-[#00e5ff] uppercase tracking-wider">
              Common Questions
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base">
            Everything you need to know about TouchBase, connectivity, and licensing.
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
