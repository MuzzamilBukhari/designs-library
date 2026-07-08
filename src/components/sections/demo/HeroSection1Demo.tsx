"use client";

import React from "react";
import HeroSection from "@/components/ui/hero-section-1";

export default function HeroSection1Demo() {
  const handleWaitlistSubmit = (email: string) => {
    // Replace with real API integration
    console.log("Waitlist submitted:", email);
  };

  return (
    <div
      className="w-full min-h-screen antialiased text-white overflow-hidden relative"
      style={{
        backgroundColor: "hsl(var(--background))",
      }}
      data-theme="dark"
    >
      <HeroSection
        backgroundImage="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1920&q=80"
        logoText="[ O ]"
        navLinks={[
          { href: "#explore", label: "Explore" },
          { href: "#collections", label: "Collections" },
          { href: "#stories", label: "Stories" },
          { href: "#community", label: "Community" },
          { href: "#about", label: "About" },
          { href: "#contact", label: "Contact" },
        ]}
        avatarSrcList={[
          "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=32&h=32&q=80",
          "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=32&h=32&q=80",
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=32&h=32&q=80",
        ]}
        userCount={1000}
        title="Discover Bold, Futuristic Style"
        description="Enter a realm where fashion fuses with innovation. Our vision combines art, technology, and individuality."
        placeholder="Enter your email"
        ctaText="Join Waitlist"
        onSubmit={handleWaitlistSubmit}
        footerVersion="02. Maya"
      />
    </div>
  );
}
