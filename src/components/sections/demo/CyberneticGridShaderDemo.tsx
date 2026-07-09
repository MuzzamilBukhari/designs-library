"use client";

import CyberneticGridShader from "@/components/ui/cybernetic-grid-shader";

export default function CyberneticGridShaderDemo() {
  return (
    <div className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden">
      <CyberneticGridShader />
      <div className="relative z-10 text-center text-white pointer-events-none p-4 rounded-lg bg-black/30 backdrop-blur-sm border border-white/10">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-wider">Cybernetic Grid</h1>
        <p className="text-xl md:text-2xl text-blue-200">An Interactive WebGL Shader</p>
      </div>
    </div>
  );
}
