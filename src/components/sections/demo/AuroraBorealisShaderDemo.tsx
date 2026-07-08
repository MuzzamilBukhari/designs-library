"use client";

import React from "react";
import AuroraBorealisShader from "@/components/ui/aurora-borealis-shader";

export default function AuroraBorealisShaderDemo() {
  return (
    <div className="relative min-h-[400px] md:min-h-[500px] w-full flex items-center justify-center overflow-hidden rounded-xl border bg-black">
      <AuroraBorealisShader />
      <div className="relative z-10 text-center pointer-events-none p-6 bg-black/20 backdrop-blur-sm rounded-xl border border-white/10">
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-2 tracking-tight">Aurora Borealis</h1>
        <p className="text-base md:text-lg text-white/80 font-medium">An Interactive WebGL Shader</p>
      </div>
    </div>
  );
}
