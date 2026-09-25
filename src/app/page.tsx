import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import InteractiveDemo from "@/components/InteractiveDemo";
import WhyTouchBase from "@/components/WhyTouchBase";
import FeatureGrid from "@/components/FeatureGrid";
import ShowcaseGallery from "@/components/ShowcaseGallery";
import ComparisonMatrix from "@/components/ComparisonMatrix";
import HowItWorks from "@/components/HowItWorks";
import SecurityPledge from "@/components/SecurityPledge";
import FAQ from "@/components/FAQ";
import DownloadCTA from "@/components/DownloadCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-[#e4e1e7] flex flex-col selection:bg-[#00e5ff] selection:text-black">
      {/* Sticky Header with Latency Pulse */}
      <Navbar />

      <main className="flex-1 flex flex-col">
        {/* High-Converting Hero Section */}
        <Hero />

        {/* Live Interactive In-Browser Demo */}
        <InteractiveDemo />

        {/* Pain Point Contrast: Old 2012 Apps vs TouchBase Pro */}
        <WhyTouchBase />

        {/* Bento Grid Features */}
        <FeatureGrid />

        {/* Real App Screenshots & Dedicated Video Showcase Gallery */}
        <ShowcaseGallery />

        {/* Free vs PRO Feature Matrix & Lifetime Coffee Price Psychology */}
        <ComparisonMatrix />

        {/* 3-Step Setup in 60 Seconds */}
        <HowItWorks />

        {/* Engineering Privacy & Zero-Cloud Pledge */}
        <SecurityPledge />

        {/* Frequently Asked Questions */}
        <FAQ />

        {/* Dedicated Dual Download CTA Hub (Android & Windows) */}
        <DownloadCTA />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
