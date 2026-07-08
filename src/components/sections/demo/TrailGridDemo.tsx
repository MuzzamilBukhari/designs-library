"use client";

import React, { useState } from "react";
import TrailGrid from "@/components/ui/trail-grid";

export default function TrailGridDemo() {
  // Using CellSize guarantees perfect squares without math errors from rows/cols stretching
  const [cellSize, setCellSize] = useState(40);
  const [duration, setDuration] = useState(150);
  const [bgColor, setBgColor] = useState("#1a1a1a");
  const [cellColor, setCellColor] = useState("#e5e5e5");
  const [isPanelVisible, setIsPanelVisible] = useState(false);

  const handleReset = () => {
    setCellSize(40);
    setDuration(150);
    setBgColor("#1a1a1a");
    setCellColor("#e5e5e5");
  };

  return (
    <div
      className="antialiased min-h-screen w-full flex flex-col relative"
      style={{
        backgroundColor: bgColor,
        color: "#f8fafc",
        fontFamily:
          'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
        transition: "background-color 0.3s ease",
        overflowX: "hidden",
      }}
    >
      <style>{`
        #controls-panel {
          transition: opacity 0.3s ease, transform 0.3s ease, visibility 0.3s;
        }
        .panel-hidden {
          opacity: 0;
          transform: translateY(10px);
          visibility: hidden;
          pointer-events: none;
        }
        .panel-visible {
          opacity: 1;
          transform: translateY(0);
          visibility: visible;
          pointer-events: auto;
        }
      `}</style>

      {/* Background Interactive Grid (Stays Fixed, Perfect Squares) */}
      <TrailGrid
        cellSize={cellSize}
        duration={duration}
        cellColor={cellColor}
      />

      {/* =====================================================================
        FOREGROUND CONTENT (AFFECTED BY INVERSION)
        Everything inside this <main> element will dynamically invert colors
        when the grid flashes behind it due to mix-blend-mode: difference.
        =====================================================================
      */}
      <main
        className="relative z-10 flex-grow flex flex-col p-6 sm:p-12 md:p-24 w-full max-w-5xl mx-auto pointer-events-none"
        style={{ mixBlendMode: "difference" }}
      >
        <div className="pointer-events-auto max-w-3xl mt-12 mb-32">
          <header className="mb-10">
            <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight mb-4 text-slate-100">
              Grid Canvas
            </h1>
            <h2 className="text-2xl sm:text-3xl font-semibold text-slate-400">
              Responsive, Scrollable & Configurable
            </h2>
          </header>

          <section className="space-y-8 text-xl leading-relaxed text-slate-300">
            <p>
              This boilerplate text has been expanded to allow you to test the
              scrolling functionality. Notice that while you scroll up and down
              through this document, the interactive grid remains absolutely
              fixed in the background, anchoring the visual experience.
            </p>
            <p>
              The color inversion is powered by a CSS blend mode. This means it
              will consistently interact with the foreground—inverting the colors
              of this text flawlessly—regardless of how the grid changes, what
              colors are applied, or how far down the page you have scrolled.
            </p>

            <div className="my-8 relative group overflow-hidden rounded-xl border border-slate-700">
              <img
                src="https://picsum.photos/seed/grid/800/400"
                alt="Random Grid Placeholder"
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
                onError={(e) => {
                  e.currentTarget.src =
                    "https://via.placeholder.com/800x400?text=Image+Unavailable";
                }}
              />
            </div>

            <p>
              <strong>Adjusting the Grid:</strong> In the bottom right corner,
              there is a collapsible settings menu. You can use it to instantly
              alter the dimensions of the grid. Want to see a dense matrix?
              Or perhaps a chunky layout? The grid dynamically recalculates and 
              reshapes itself into perfect squares without requiring a page reload.
            </p>
            <p>
              The dynamic adjacency logic ensures that no matter how many rows or
              columns you select, the cells are aware of their neighbors. If you
              increase the hover duration to 500ms or 1000ms using the slider,
              you can easily "paint" a continuous path across the screen. The
              touching edges of active cells will dynamically flatten their
              rounded corners to merge into a single continuous block.
            </p>
            <p>
              Try increasing the duration and swiping across the screen. The
              math powering the grid translates your mouse's viewport position
              into exact column and row indices in real-time, completely
              sidestepping any issues that might arise from scroll offsets.
            </p>
            <p>
              This final paragraph just ensures that there is enough vertical
              height on most modern desktop monitors to trigger the scrollbar.
              Keep scrolling, keep hovering, and enjoy the robust configuration
              controls!
            </p>
          </section>
        </div>
      </main>

      {/* =====================================================================
        CONTROLS (IGNORED BY INVERSION)
        Because this block is a sibling placed OUTSIDE of the <main> tag, 
        it ignores the mix-blend-mode effect entirely. The panel and buttons 
        will retain their original colors regardless of what the grid does.
        =====================================================================
      */}
      <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end pointer-events-auto">
        <div
          id="controls-panel"
          className={`mb-3 bg-slate-900/90 backdrop-blur-md border border-slate-700 p-5 rounded-xl shadow-2xl w-64 text-sm text-slate-200 ${
            isPanelVisible ? "panel-visible" : "panel-hidden"
          }`}
        >
          <div className="mb-4">
            <label className="block text-slate-400 mb-1 flex justify-between">
              <span>BG Color</span>
              <span className="font-mono text-white uppercase">
                {bgColor.toUpperCase()}
              </span>
            </label>
            <input
              type="color"
              value={bgColor}
              onChange={(e) => setBgColor(e.target.value)}
              className="w-full h-8 rounded cursor-pointer border-0 p-0 bg-transparent"
            />
          </div>
          <div className="mb-4">
            <label className="block text-slate-400 mb-1 flex justify-between">
              <span>Cell Color</span>
              <span className="font-mono text-white uppercase">
                {cellColor.toUpperCase()}
              </span>
            </label>
            <input
              type="color"
              value={cellColor}
              onChange={(e) => setCellColor(e.target.value)}
              className="w-full h-8 rounded cursor-pointer border-0 p-0 bg-transparent"
            />
          </div>
          <div className="mb-4">
            <label className="block text-slate-400 mb-1 flex justify-between">
              <span>Cell Size (px)</span>
              <span className="font-mono text-white">{cellSize}</span>
            </label>
            <input
              type="range"
              min="10"
              max="150"
              value={cellSize}
              onChange={(e) => setCellSize(parseInt(e.target.value, 10))}
              className="w-full accent-indigo-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-slate-400 mb-1 flex justify-between">
              <span>Duration (ms)</span>
              <span className="font-mono text-white">{duration}</span>
            </label>
            <input
              type="range"
              min="50"
              max="2000"
              step="50"
              value={duration}
              onChange={(e) => setDuration(parseInt(e.target.value, 10))}
              className="w-full accent-indigo-500"
            />
          </div>
          <button
            onClick={handleReset}
            className="w-full bg-slate-700 hover:bg-slate-600 text-slate-200 py-2 rounded-lg transition-colors font-medium text-sm"
          >
            Reset to Defaults
          </button>
        </div>

        <button
          onClick={() => setIsPanelVisible(!isPanelVisible)}
          className="bg-slate-800 hover:bg-slate-700 text-white p-3 rounded-full shadow-lg border border-slate-600 transition-colors"
          title="Settings"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path>
            <circle cx="12" cy="12" r="3"></circle>
          </svg>
        </button>
      </div>
    </div>
  );
}
