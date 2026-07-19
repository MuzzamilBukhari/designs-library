"use client";

import React from "react";
import { InteractiveRobotSpline } from "@/components/blocks/interactive-3d-robot";

export function Section() {
  const ROBOT_SCENE_URL =
    "https://prod.spline.design/PyzDhpQ9E5f1E3MT/scene.splinecode";

  return (
    <div className="relative h-screen w-screen overflow-hidden">
      <InteractiveRobotSpline
        scene={ROBOT_SCENE_URL}
        className="absolute inset-0 z-0"
      />

      <div
        className="
        pointer-events-none absolute
        inset-0 z-10
        px-4 pt-20
        md:px-8 md:pt-32            
        lg:pt-40     
      "
      >
        <div
          className="
          mx-auto                 // Center the block horizontally
          w-full max-w-2xl        // Max width for readability on large screens
          text-center             // Center the text within this block
          text-white              // Text color
          drop-shadow-lg          // Text shadow for readability
        "
        >
          <h1
            className="
            text-2xl font-bold md:text-3xl lg:text-4xl 
            xl:text-5xl 
           
          "
          >
            This is interactive 3d robot Whobee
          </h1>
        </div>
      </div>
    </div>
  );
}
