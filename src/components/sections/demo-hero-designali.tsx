"use client";

import Image from "next/image";
import { useEffect } from "react";
import Link from "next/link";
import { renderCanvas, ShineBorder, TypeWriter } from "@/components/ui/hero-designali";
import { Plus } from "lucide-react"; 

import { Button } from "@/components/ui/button"; 

export default function DemoHeroDesignali() {
  const talkAbout = [
    "Graphic Design",
    "Branding",
    "Web Design",
    "Web Develop",
    "Marketing",
    "UI UX",
    "Social Media",
  ];

  useEffect(() => {
    renderCanvas();
  }, []);

  return (
    <main className="overflow-hidden">
    <section id="home">
   <div className="absolute inset-0 max-md:hidden top-[400px] -z-10 h-[400px] w-full bg-transparent bg-[linear-gradient(to_right,#57534e_1px,transparent_1px),linear-gradient(to_bottom,#57534e_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-20 [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)] dark:bg-[linear-gradient(to_right,#a8a29e_1px,transparent_1px),linear-gradient(to_bottom,#a8a29e_1px,transparent_1px)]"></div>
      <div className="flex flex-col items-center justify-center px-6 text-center">
        <div className="mb-6 mt-10 sm:justify-center md:mb-4 md:mt-40">
          <div className="relative flex items-center rounded-full border bg-popover px-3 py-1 text-xs text-primary/60">
            Introducing Dicons.
            <Link
              href="/products/dicons"
              rel="noreferrer"
              className="ml-1 flex items-center font-semibold"
            >
              <div
                className="absolute inset-0 hover:font-semibold hover:text-ali flex"
                aria-hidden="true"
              />
              Explore <span aria-hidden="true"></span>
            </Link>
          </div>
        </div>

        <div className="mx-auto max-w-5xl">
                     <div className="border-text-red-500 relative mx-auto h-full bg-background border py-12 p-6 [mask-image:radial-gradient(800rem_96rem_at_center,white,transparent)]">

            <h1 className="flex flex-col text-center text-5xl font-semibold leading-none tracking-tight md:flex-col md:text-8xl lg:flex-row lg:text-8xl">
              <Plus
                strokeWidth={4}
                className="text-text-red-500 absolute -left-5 -top-5 h-10 w-10"
              />
              <Plus
                strokeWidth={4}
                className="text-text-red-500 absolute -bottom-5 -left-5 h-10 w-10"
              />
              <Plus
                strokeWidth={4}
                className="text-text-red-500 absolute -right-5 -top-5 h-10 w-10"
              />
              <Plus
                strokeWidth={4}
                className="text-text-red-500 absolute -bottom-5 -right-5 h-10 w-10"
              />
              <span>
                Your complete platform for the{" "}
                <span className="text-red-500">Design.</span>
              </span>
            </h1>
            <div className="flex items-center mt-4 justify-center gap-1">
              <span className="relative flex h-3 w-3 items-center justify-center">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
              </span>
              <p className="text-xs text-green-500">Available Now</p>
            </div>
          </div>

          <h1 className="mt-8 text-2xl md:text-2xl">
            Welcome to my creative playground! I&#39;m{" "}
            <span className="text-red-500 font-bold">Ali </span>
          </h1>

          <p className="text-primary/60 py-4">
            I craft enchanting visuals for brands, and conjure design resources
            to empower others. I am an expert in design like{" "}
            <span className="text-blue-500 font-semibold">
              <TypeWriter strings={talkAbout} />
            </span>.
          </p>
          <div className="flex items-center justify-center gap-2">
            <Link href="/graphic">
              <ShineBorder
                borderWidth={3}
                className="border cursor-pointer h-auto w-auto p-2 bg-white/5 backdrop-blur-md dark:bg-black/5"
                color={["#FF007F", "#39FF14", "#00FFFF"]}
              >
                <Button className="w-full rounded-xl" >
                  Start Posting
                </Button>
              </ShineBorder>
            </Link> 
            <Link href={"https://cal.com/aliimam/designali"} target="_blank">
              <Button className="rounded-xl" variant="outline">Book a call</Button>
            </Link>
          </div>
        </div>
      </div>
      <canvas
        className="pointer-events-none absolute inset-0 mx-auto"
        id="canvas"
      ></canvas>
    </section>
    <Image
        width={1512}
        height={550}
        className="absolute left-1/2 top-0 -z-10 -translate-x-1/2"
        src="https://raw.githubusercontent.com/designali-in/designali/refs/heads/main/apps/www/public/images/gradient-background-top.png"
        alt=""
        role="presentation"
        priority
      />
     </main>
  );
}
