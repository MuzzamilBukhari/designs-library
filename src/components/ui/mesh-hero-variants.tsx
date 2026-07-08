"use client";
import { useEffect, useState } from "react"
import { MeshGradient } from "@paper-design/shaders-react"
import { ChevronDown } from "lucide-react"

interface HeroVariationProps {
  title?: string
  highlightText?: string
  description?: string
  buttonText?: string
  colors?: string[]
  distortion?: number
  swirl?: number
  speed?: number
  offsetX?: number
  veilOpacity?: string
  fontFamily?: string
  fontWeight?: number
}

const HeroVariation1 = ({
  title = "Intelligent AI Agents for",
  highlightText = "Smart Brands",
  description = "Transform your brand and evolve it through AI-driven brand guidelines and always up-to-date core components.",
  buttonText = "Join Waitlist",
  colors = ["#72b9bb", "#b5d9d9", "#ffd1bd", "#ffebe0", "#8cc5b8", "#dbf4a4"],
  distortion = 0.8,
  swirl = 0.6,
  speed = 0.42,
  offsetX = 0.08,
  veilOpacity = "bg-white/20 dark:bg-black/25",
  fontFamily = "Satoshi, sans-serif",
  fontWeight = 500,
}: HeroVariationProps) => {
  const [dimensions, setDimensions] = useState({ width: 1920, height: 1080 })
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const update = () =>
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    update()
    window.addEventListener("resize", update)
    return () => window.removeEventListener("resize", update)
  }, [])

  return (
    <section className="relative w-full h-full min-h-screen overflow-hidden bg-background flex items-center justify-center">
      <div className="fixed inset-0 w-screen h-screen">
        {mounted && (
          <>
            <MeshGradient
              width={dimensions.width}
              height={dimensions.height}
              colors={colors}
              distortion={distortion}
              swirl={swirl}
              grainMixer={0}
              grainOverlay={0}
              speed={speed}
              offsetX={offsetX}
            />
            <div className={`absolute inset-0 pointer-events-none ${veilOpacity}`} />
          </>
        )}
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
        <div className="text-center">
          <h1
            className="font-bold text-foreground text-balance text-4xl sm:text-5xl md:text-6xl xl:text-[80px] leading-tight sm:leading-tight md:leading-tight lg:leading-tight xl:leading-[1.1] mb-6 lg:text-7xl"
            style={{ fontFamily, fontWeight }}
          >
            {title} <span className="text-primary">{highlightText}</span>
          </h1>
          <p className="text-lg sm:text-xl text-white text-pretty max-w-2xl mx-auto leading-relaxed mb-10 px-4">
            {description}
          </p>
          <button className="px-6 py-4 sm:px-8 sm:py-6 rounded-full border-4 bg-[rgba(63,63,63,1)] border-card text-sm sm:text-base text-white hover:bg-[rgba(63,63,63,0.9)] transition-colors">
            {buttonText}
          </button>
        </div>
      </div>
    </section>
  )
}

const HeroVariation2 = ({
  title = "Intelligent AI Agents for",
  highlightText = "Smart Brands",
  description = "Transform your brand and evolve it through AI-driven brand guidelines and always up-to-date core components.",
  buttonText = "Join Waitlist",
  colors = ["#ff6b6b", "#ee5a6f", "#c44569", "#f8b500", "#feca57"],
  distortion = 1.2,
  swirl = 0.3,
  speed = 0.6,
  offsetX = 0.15,
  veilOpacity = "bg-black/40",
  fontFamily = "Satoshi, sans-serif",
  fontWeight = 700,
}: HeroVariationProps) => {
  const [dimensions, setDimensions] = useState({ width: 1920, height: 1080 })
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const update = () =>
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    update()
    window.addEventListener("resize", update)
    return () => window.removeEventListener("resize", update)
  }, [])

  return (
    <section className="relative w-full h-full min-h-screen overflow-hidden bg-background flex items-start justify-center pt-32">
      <div className="fixed inset-0 w-screen h-screen">
        {mounted && (
          <>
            <MeshGradient
              width={dimensions.width}
              height={dimensions.height}
              colors={colors}
              distortion={distortion}
              swirl={swirl}
              grainMixer={0}
              grainOverlay={0}
              speed={speed}
              offsetX={offsetX}
            />
            <div className={`absolute inset-0 pointer-events-none ${veilOpacity}`} />
          </>
        )}
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 w-full">
        <div className="text-left">
          <h1
            className="font-bold text-white text-balance text-5xl md:text-7xl xl:text-8xl leading-[1.05] mb-8"
            style={{ fontFamily, fontWeight }}
          >
            {title}<br /><span className="text-primary">{highlightText}</span>
          </h1>
          <p className="text-xl text-white/90 max-w-xl leading-relaxed mb-12">
            {description}
          </p>
          <button className="px-10 py-5 rounded-lg bg-primary text-primary-foreground text-lg font-semibold hover:opacity-90 transition-opacity shadow-2xl">
            {buttonText}
          </button>
        </div>
      </div>
    </section>
  )
}

const HeroVariation3 = ({
  title = "Intelligent AI Agents for",
  highlightText = "Smart Brands",
  description = "Transform your brand and evolve it through AI-driven brand guidelines and always up-to-date core components.",
  buttonText = "Join Waitlist",
  colors = ["#667eea", "#764ba2", "#f093fb", "#4facfe", "#00f2fe"],
  distortion = 0.5,
  swirl = 1.2,
  speed = 0.3,
  offsetX = 0.0,
  veilOpacity = "bg-gradient-to-b from-transparent via-black/20 to-black/60",
  fontFamily = "Satoshi, sans-serif",
  fontWeight = 600,
}: HeroVariationProps) => {
  const [dimensions, setDimensions] = useState({ width: 1920, height: 1080 })
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const update = () =>
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    update()
    window.addEventListener("resize", update)
    return () => window.removeEventListener("resize", update)
  }, [])

  return (
    <section className="relative w-full h-full min-h-screen overflow-hidden bg-background flex flex-col items-center justify-center">
      <div className="fixed inset-0 w-screen h-screen">
        {mounted && (
          <>
            <MeshGradient
              width={dimensions.width}
              height={dimensions.height}
              colors={colors}
              distortion={distortion}
              swirl={swirl}
              grainMixer={0}
              grainOverlay={0}
              speed={speed}
              offsetX={offsetX}
            />
            <div className={`absolute inset-0 pointer-events-none ${veilOpacity}`} />
          </>
        )}
      </div>
      
      <div className="relative z-10 max-w-5xl mx-auto px-6 w-full text-center">
        <div className="inline-block mb-6 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
          <span className="text-white text-sm font-medium">✨ Next Generation AI</span>
        </div>
        <h1
          className="font-bold text-white text-balance text-5xl md:text-6xl xl:text-7xl leading-tight mb-6"
          style={{ fontFamily, fontWeight }}
        >
          {title}<br /><span className="bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">{highlightText}</span>
        </h1>
        <p className="text-lg text-white/80 max-w-2xl mx-auto leading-relaxed mb-10">
          {description}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="px-8 py-4 rounded-full bg-white text-black font-semibold hover:bg-white/90 transition-colors shadow-xl">
            {buttonText}
          </button>
          <button className="px-8 py-4 rounded-full border-2 border-white/30 text-white font-semibold hover:bg-white/10 transition-colors backdrop-blur-sm">
            Learn More
          </button>
        </div>
      </div>
    </section>
  )
}

const HeroVariation4 = ({
  title = "Intelligent AI Agents for",
  highlightText = "Smart Brands",
  description = "Transform your brand and evolve it through AI-driven brand guidelines and always up-to-date core components.",
  buttonText = "Join Waitlist",
  colors = ["#0f2027", "#203a43", "#2c5364", "#00d2ff", "#3a7bd5"],
  distortion = 0.6,
  swirl = 0.8,
  speed = 0.25,
  offsetX = 0.12,
  veilOpacity = "bg-black/30",
  fontFamily = "Satoshi, sans-serif",
  fontWeight = 800,
}: HeroVariationProps) => {
  const [dimensions, setDimensions] = useState({ width: 1920, height: 1080 })
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const update = () =>
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    update()
    window.addEventListener("resize", update)
    return () => window.removeEventListener("resize", update)
  }, [])

  return (
    <section className="relative w-full h-full min-h-screen overflow-hidden bg-background flex items-end justify-start pb-24 pl-8 md:pl-16">
      <div className="fixed inset-0 w-screen h-screen">
        {mounted && (
          <>
            <MeshGradient
              width={dimensions.width}
              height={dimensions.height}
              colors={colors}
              distortion={distortion}
              swirl={swirl}
              grainMixer={0}
              grainOverlay={0}
              speed={speed}
              offsetX={offsetX}
            />
            <div className={`absolute inset-0 pointer-events-none ${veilOpacity}`} />
          </>
        )}
      </div>
      
      <div className="relative z-10 max-w-3xl">
        <h1
          className="font-bold text-white text-6xl md:text-7xl xl:text-8xl leading-[0.95] mb-6 tracking-tight"
          style={{ fontFamily, fontWeight }}
        >
          {title}<br /><span className="text-primary italic">{highlightText}</span>
        </h1>
        <p className="text-base md:text-lg text-white/70 max-w-lg leading-relaxed mb-8">
          {description}
        </p>
        <button className="px-6 py-3 rounded-md bg-primary text-primary-foreground font-bold hover:opacity-90 transition-opacity">
          {buttonText} →
        </button>
      </div>
    </section>
  )
}

const HeroVariation5 = ({
  title = "Intelligent AI Agents for",
  highlightText = "Smart Brands",
  description = "Transform your brand and evolve it through AI-driven brand guidelines and always up-to-date core components.",
  buttonText = "Join Waitlist",
  colors = ["#fa709a", "#fee140", "#30cfd0", "#330867", "#a8edea"],
  distortion = 1.5,
  swirl = 0.4,
  speed = 0.5,
  offsetX = 0.2,
  veilOpacity = "bg-white/30 dark:bg-black/50",
  fontFamily = "Satoshi, sans-serif",
  fontWeight = 900,
}: HeroVariationProps) => {
  const [dimensions, setDimensions] = useState({ width: 1920, height: 1080 })
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const update = () =>
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    update()
    window.addEventListener("resize", update)
    return () => window.removeEventListener("resize", update)
  }, [])

  return (
    <section className="relative w-full h-full min-h-screen overflow-hidden bg-background flex items-center justify-center">
      <div className="fixed inset-0 w-screen h-screen">
        {mounted && (
          <>
            <MeshGradient
              width={dimensions.width}
              height={dimensions.height}
              colors={colors}
              distortion={distortion}
              swirl={swirl}
              grainMixer={0}
              grainOverlay={0}
              speed={speed}
              offsetX={offsetX}
            />
            <div className={`absolute inset-0 pointer-events-none ${veilOpacity}`} />
          </>
        )}
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1
              className="font-bold text-foreground text-5xl md:text-6xl xl:text-7xl leading-[1.1] mb-6"
              style={{ fontFamily, fontWeight }}
            >
              {title} <span className="block text-primary mt-2">{highlightText}</span>
            </h1>
            <p className="text-lg text-white/90 leading-relaxed mb-8">
              {description}
            </p>
            <div className="flex gap-3">
              <button className="px-7 py-4 rounded-full bg-foreground text-background font-bold hover:opacity-90 transition-opacity">
                {buttonText}
              </button>
              <button className="px-7 py-4 rounded-full border-2 border-foreground/20 text-foreground font-bold hover:bg-foreground/10 transition-colors backdrop-blur-sm">
                Watch Demo
              </button>
            </div>
          </div>
          <div className="hidden md:flex items-center justify-center">
            <div className="w-64 h-64 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center">
              <div className="w-48 h-48 rounded-full bg-primary/20 backdrop-blur-sm"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function VariantShowcase() {
  const [selectedVariant, setSelectedVariant] = useState(1)

  const variants = [
    { id: 1, component: HeroVariation1 },
    { id: 2, component: HeroVariation2 },
    { id: 3, component: HeroVariation3 },
    { id: 4, component: HeroVariation4 },
    { id: 5, component: HeroVariation5 },
  ]

  const SelectedComponent = variants.find(v => v.id === selectedVariant)?.component || HeroVariation1

  return (
    <div className="flex flex-col md:flex-row h-screen w-full bg-background">
      <div className="md:hidden flex items-center gap-2 p-3 border-b border-border bg-background/95 backdrop-blur-sm z-50">
        <span className="text-sm font-medium text-muted-foreground mr-2">Variant:</span>
        <div className="flex gap-2 overflow-x-auto">
          {variants.map((variant) => (
            <button
              key={variant.id}
              onClick={() => setSelectedVariant(variant.id)}
              className={`flex-shrink-0 w-16 h-16 rounded-lg border-2 overflow-hidden transition-all ${
                selectedVariant === variant.id
                  ? "border-primary ring-2 ring-primary/20"
                  : "border-border hover:border-primary/50"
              }`}
            >
              <div className="relative w-full h-full bg-muted">
                <div
                  className="absolute pointer-events-none"
                  style={{
                    transform: "scale(0.08)",
                    transformOrigin: "top left",
                    width: "1250%",
                    height: "1250%",
                  }}
                >
                  <variant.component />
                </div>
                <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                  <span className="text-white text-xs font-bold">{variant.id}</span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      <div className="flex-1 w-full h-full overflow-hidden">
        <SelectedComponent />
      </div>

      <div className="hidden md:flex flex-col gap-3 p-4 border-l border-border bg-background/95 backdrop-blur-sm w-40">
        <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">
          Variants
        </div>
        {variants.map((variant) => (
          <button
            key={variant.id}
            onClick={() => setSelectedVariant(variant.id)}
            className={`w-full aspect-video rounded-lg border-2 overflow-hidden transition-all ${
              selectedVariant === variant.id
                ? "border-primary ring-2 ring-primary/20"
                : "border-border hover:border-primary/50"
            }`}
          >
            <div className="relative w-full h-full bg-muted">
              <div
                className="absolute pointer-events-none"
                style={{
                  transform: "scale(0.12)",
                  transformOrigin: "top left",
                  width: "833%",
                  height: "833%",
                }}
              >
                <variant.component />
              </div>
              <div className="absolute bottom-1 right-1 bg-black/60 text-white text-xs font-bold px-1.5 py-0.5 rounded">
                {variant.id}
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}

export default VariantShowcase;
