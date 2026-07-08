import { GlowCard } from "@/components/ui/spotlight-card";

export default function GlowCardDemo() {
  return (
    <section className="w-full min-h-screen bg-slate-950 flex flex-col md:flex-row items-center justify-center gap-10 p-10 custom-cursor overflow-hidden">
      <GlowCard glowColor="blue">
        <div className="flex flex-col h-full items-center justify-center space-y-4 z-10 text-white">
          <h3 className="text-xl font-bold">Pro Plan</h3>
          <p className="text-sm text-center text-slate-300">Unlock all premium features and components.</p>
        </div>
      </GlowCard>
      
      <GlowCard glowColor="purple" size="lg">
        <div className="flex flex-col h-full items-center justify-center space-y-4 z-10 text-white">
          <h3 className="text-2xl font-bold">Enterprise</h3>
          <p className="text-base text-center text-slate-300">Custom solutions for your growing team.</p>
        </div>
      </GlowCard>
      
      <GlowCard glowColor="green">
        <div className="flex flex-col h-full items-center justify-center space-y-4 z-10 text-white">
          <h3 className="text-xl font-bold">Basic</h3>
          <p className="text-sm text-center text-slate-300">Perfect for getting started.</p>
        </div>
      </GlowCard>
    </section>
  );
}
