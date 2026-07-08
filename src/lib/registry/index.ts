import dynamic from 'next/dynamic';

export type SectionRegistryEntry = {
  id: string;
  name: string;
  description: string;
  category: string;
  component: React.ComponentType<any>;
};

export const sections: Record<string, SectionRegistryEntry> = {
  "hero-1": {
    id: "hero-1",
    name: "Hero Section 1",
    description: "A placeholder hero section to test the registry pipeline.",
    category: "hero",
    component: dynamic(() => import('@/components/sections/hero/Hero1')),
  },
  "glow-card-demo": {
    id: "glow-card-demo",
    name: "Spotlight Glow Card Demo",
    description: "Demo of the spotlight glow card component.",
    category: "demo",
    component: dynamic(() => import('@/components/sections/demo/GlowCardDemo')),
  },
  "animated-cards-demo": {
    id: "animated-cards-demo",
    name: "Animated Cards Stack Demo",
    description: "A scrolling animated cards stack component.",
    category: "demo",
    component: dynamic(() => import('@/components/sections/demo/AnimatedCardsDemo')),
  },
  "bouncy-accordion-demo": {
    id: "bouncy-accordion-demo",
    name: "Bouncy Accordion Demo",
    description: "A spring-animated bouncy accordion component.",
    category: "demo",
    component: dynamic(() => import('@/components/sections/demo/BouncyAccordionDemo')),
  },
  "trail-grid-demo": {
    id: "trail-grid-demo",
    name: "Trail Grid Demo",
    description: "An interactive background grid that trails the mouse cursor.",
    category: "demo",
    component: dynamic(() => import('@/components/sections/demo/TrailGridDemo')),
  },
  "sticky-scroll-cards-demo": {
    id: "sticky-scroll-cards-demo",
    name: "Sticky Scroll Cards Demo",
    description: "A section where feature cards stack responsively as you scroll.",
    category: "demo",
    component: dynamic(() => import('@/components/sections/demo/StickyScrollCardsDemo')),
  },
  "feature-carousel-demo": {
    id: "feature-carousel-demo",
    name: "Feature Carousel Demo",
    description: "An animated, auto-playing carousel of features with dynamic image transitions.",
    category: "demo",
    component: dynamic(() => import('@/components/sections/demo/FeatureCarouselDemo')),
  },
  "background-paths-demo": {
    id: "background-paths-demo",
    name: "Background Paths Demo",
    description: "A gorgeous animated SVG background path component with staggered text.",
    category: "demo",
    component: dynamic(() => import('@/components/sections/demo/BackgroundPathsDemo')),
  },
  "shaders-hero-demo": {
    id: "shaders-hero-demo",
    name: "Shaders Hero Demo",
    description: "An immersive landing page hero section utilizing advanced WebGL shaders.",
    category: "demo",
    component: dynamic(() => import('@/components/sections/demo/ShadersHeroDemo')),
  },
  "the-infinite-grid-demo": {
    id: "the-infinite-grid-demo",
    name: "The Infinite Grid Demo",
    description: "An infinitely scrolling background grid pattern with a cursor spotlight effect.",
    category: "demo",
    component: dynamic(() => import('@/components/sections/demo/TheInfiniteGridDemo')),
  },
  "particle-effect-hero-demo": {
    id: "particle-effect-hero-demo",
    name: "Particle Effect Hero Demo",
    description: "A highly interactive, physics-based 2D canvas particle simulation.",
    category: "demo",
    component: dynamic(() => import('@/components/sections/demo/ParticleEffectHeroDemo')),
  },
  "morphing-card-stack-demo": {
    id: "morphing-card-stack-demo",
    name: "Morphing Card Stack Demo",
    description: "A card container that smoothly morphs between stack, grid, and list layouts.",
    category: "demo",
    component: dynamic(() => import('@/components/sections/demo/MorphingCardStackDemo')),
  },
  "hero-shutter-text-demo": {
    id: "hero-shutter-text-demo",
    name: "Hero Shutter Text Demo",
    description: "A highly stylized typographic Hero component with shutter slicing text animation.",
    category: "demo",
    component: dynamic(() => import('@/components/sections/demo/HeroShutterTextDemo')),
  },
  "glowy-waves-hero-demo": {
    id: "glowy-waves-hero-demo",
    name: "Glowy Waves Hero Demo",
    description: "A highly responsive interactive canvas hero with glowing math-based waves.",
    category: "demo",
    component: dynamic(() => import('@/components/sections/demo/GlowyWavesHeroDemo')),
  },
  "pixel-hero-demo": {
    id: "pixel-hero-demo",
    name: "Pixel Hero Demo",
    description: "A minimalist hero section with a staggered pixel background physics engine.",
    category: "demo",
    component: dynamic(() => import('@/components/sections/demo/PixelHeroDemo')),
  },
  "mesh-hero-variants-demo": {
    id: "mesh-hero-variants-demo",
    name: "Mesh Hero Variants Demo",
    description: "A showcase of 5 different mesh gradient hero variations.",
    category: "demo",
    component: dynamic(() => import('@/components/sections/demo/MeshHeroVariantsDemo')),
  },
  "clipped-video-tab-demo": {
    id: "clipped-video-tab-demo",
    name: "Clipped Video Tab Demo",
    description: "A highly interactive video tab layout with custom polygon clipping masks.",
    category: "demo",
    component: dynamic(() => import('@/components/sections/demo/ClippedVideoTabDemo')),
  },
  "feature-shader-cards-demo": {
    id: "feature-shader-cards-demo",
    name: "Feature Shader Cards Demo",
    description: "A grid of feature cards backed by performant WebGL shaders with unique configs.",
    category: "demo",
    component: dynamic(() => import('@/components/sections/demo/FeatureShaderCardsDemo')),
  },
  "halide-topo-hero-demo": {
    id: "halide-topo-hero-demo",
    name: "Halide Topo Hero Demo",
    description: "A topographic, brutalist 3D parallax hero with grain filters and nested 3D layers.",
    category: "demo",
    component: dynamic(() => import('@/components/sections/demo/HalideTopoHeroDemo')),
  },
  "hand-writing-text-demo": {
    id: "hand-writing-text-demo",
    name: "Hand Written Title Demo",
    description: "An animated hand written title using framer motion.",
    category: "demo",
    component: dynamic(() => import('@/components/sections/demo/HandWrittenTitleDemo')),
  },
  "aurora-borealis-shader-demo": {
    id: "aurora-borealis-shader-demo",
    name: "Aurora Borealis Shader Demo",
    description: "An interactive WebGL shader of the Aurora Borealis using Three.js.",
    category: "demo",
    component: dynamic(() => import('@/components/sections/demo/AuroraBorealisShaderDemo')),
  },
  "feature-with-image-comparison-demo": {
    id: "feature-with-image-comparison-demo",
    name: "Feature With Image Comparison Demo",
    description: "A feature section with an interactive image comparison slider.",
    category: "demo",
    component: dynamic(() => import('@/components/sections/demo/FeatureWithImageComparisonDemo')),
  },
  "display-cards-demo": {
    id: "display-cards-demo",
    name: "Display Cards Demo",
    description: "An elegant, interactive stack of overlapping display cards.",
    category: "demo",
    component: dynamic(() => import('@/components/sections/demo/DisplayCardsDemo')),
  },
  "premium-hero-demo": {
    id: "premium-hero-demo",
    name: "Premium Hero Demo",
    description: "An AI-focused premium hero with animated beam backgrounds.",
    category: "demo",
    component: dynamic(() => import('@/components/sections/demo/PremiumHeroDemo')),
  },
  "hero-section-1-demo": {
    id: "hero-section-1-demo",
    name: "Hero Section 1 Demo",
    description: "A dark futuristic hero section with user avatars and a waitlist form.",
    category: "demo",
    component: dynamic(() => import('@/components/sections/demo/HeroSection1Demo')),
  }
};
