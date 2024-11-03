import React from "react";
import { BackgroundLines } from "../ui/background-lines";

export default function BackgroundLinesDemo() {
  return (
    <BackgroundLines className="flex items-center mt-[-50px] justify-center w-full flex-col px-4 py-4">
      <h2
        className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-6 relative z-20 font-bold tracking-tight">
        Empowering your
        <br /> Digital Transformation
      </h2>
      <p
        className="max-w-xl mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-center">
        Providing high-quality, affordable software solutions powered
        by a global team.
      </p>
      <div className="flex gap-4 mt-4"> {/* Added margin-top to button container */}
        <button className="bg-purple-600 text-white px-8 py-3 rounded-full hover:bg-purple-700 transition-colors">
          LEARN MORE
        </button>
        <button className="border border-white text-white px-8 py-3 rounded-full hover:bg-white/10 transition-colors">
          START
        </button>
      </div>
    </BackgroundLines>
  );
}
