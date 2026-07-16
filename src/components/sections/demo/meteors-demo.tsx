import React from "react";
import { Meteors } from "@/components/ui/meteors";
import { ArrowUpRight } from "lucide-react";

export function MeteorsDemo() {
  return (
    <div className="flex justify-center py-20">
      <div className="w-full relative max-w-xs">
        <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
        <div className="relative shadow-xl bg-gray-900 border border-gray-800 px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
          <div className="h-6 w-6 rounded-full border flex items-center justify-center mb-4 border-gray-500 bg-gray-800">
            <ArrowUpRight className="h-3 w-3 text-gray-300" />
          </div>

          <h1 className="font-bold text-xl text-white mb-4 relative z-50">
            Meteors because they&apos;re cool
          </h1>

          <p className="font-normal text-base text-slate-500 mb-4 relative z-50">
            I don&apos;t know what to write so I&apos;ll just paste something
            cool here. One more sentence because lorem ipsum is just
            unacceptable. Won&apos;t ChatGPT the shit out of this.
          </p>

          <button className="border px-4 py-1 rounded-lg border-gray-500 text-gray-300 hover:bg-gray-800 transition-colors z-50 relative cursor-pointer">
            Explore
          </button>

          {/* Meaty part - Meteor effect */}
          <Meteors number={20} />
        </div>
      </div>
    </div>
  );
}
