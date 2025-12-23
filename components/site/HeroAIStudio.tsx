"use client";

import React, { useState, useEffect } from "react";
import { Reveal } from "./Reveal"; // Assuming your reveal wrapper exists

export function HeroAIStudio() {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  // 3D Tilt Effect logic
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - card.left;
    const y = e.clientY - card.top;
    const centerX = card.width / 2;
    const centerY = card.height / 2;
    const rotateX = (y - centerY) / 25;
    const rotateY = (centerX - x) / 25;

    setRotate({ x: rotateX, y: rotateY });
  };

  const resetRotate = () => setRotate({ x: 0, y: 0 });

  return (
    <section className="relative min-h-screen w-full flex flex-col items-center pt-32 pb-20 overflow-hidden">
      <div className="readylaunch-bg" />

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-5xl px-6 text-center">
        <Reveal>
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-black/5 bg-white/40 backdrop-blur-md mb-8 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#1b59a7] animate-pulse" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#0b1e3a]">
              Trusted by 1.2k+ Teams
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight text-[#0b1e3a] leading-[1.05]">
            Launch your AI <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1b59a7] to-[#7dd3fc]">
              project faster.
            </span>
          </h1>

          <p className="mt-8 mx-auto max-w-2xl text-lg md:text-xl text-[#0b1e3a]/60 font-medium leading-relaxed">
            Build a stunning landing page that communicates your value, captures leads, 
            and converts—without writing a single line of code.
          </p>

          {/* CTAs */}
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <button className="btn-shiny h-16 px-10 rounded-2xl bg-[#0b1e3a] text-white font-bold text-sm tracking-wide shadow-xl shadow-blue-900/10">
              Start Free Trial
            </button>
            <button className="h-16 px-10 rounded-2xl bg-white border border-black/10 text-[#0b1e3a] font-bold text-sm tracking-wide hover:bg-gray-50 transition-colors">
              Join Waitlist
            </button>
          </div>
        </Reveal>

        {/* The Floating Glass Feature Image/Card */}
        <Reveal delayMs={400}>
          <div className="mt-24 perspective-[1500px]">
            <div 
              onMouseMove={handleMouseMove}
              onMouseLeave={resetRotate}
              className="relative mx-auto w-full max-w-6xl aspect-[16/9] glass-panel rounded-[40px] transition-transform duration-200 ease-out flex items-center justify-center p-4 md:p-12"
              style={{ 
                transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
                transformStyle: "preserve-3d"
              }}
            >
              {/* This mimics the glossy product visual in ReadyLaunch */}
              <div className="relative w-full h-full rounded-[32px] bg-white shadow-2xl overflow-hidden border border-black/5">
                <div className="absolute top-0 inset-x-0 h-12 bg-gray-50 border-b border-black/5 flex items-center px-6 gap-2">
                  <div className="w-2 h-2 rounded-full bg-red-400" />
                  <div className="w-2 h-2 rounded-full bg-yellow-400" />
                  <div className="w-2 h-2 rounded-full bg-green-400" />
                </div>
                
                {/* Abstract Product Visual */}
                <div className="flex items-center justify-center h-full pt-12">
                   <div className="w-48 h-48 rounded-full glossy-chrome animate-pulse opacity-20" />
                </div>
              </div>

              {/* Decorative Floating Elements (Parallax) */}
              <div 
                className="absolute -top-12 -right-12 p-6 rounded-3xl bg-white/90 backdrop-blur-xl border border-white shadow-2xl hidden lg:block"
                style={{ transform: "translateZ(80px)" }}
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">✓</div>
                  <div className="text-left">
                    <div className="text-xs font-bold">Launch Successful</div>
                    <div className="text-[10px] text-gray-400">Deployed to Production</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      {/* Trust Logos (Grayscale) */}
      <div className="mt-20 w-full max-w-4xl opacity-30 px-6">
        <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-center mb-10">Powering Modern Workflows</p>
        <div className="flex flex-wrap justify-center items-center gap-12 text-2xl font-black italic">
          <span>TASKOS</span>
          <span>AETHER</span>
          <span>LUMINA</span>
          <span>QUANTUM</span>
        </div>
      </div>
    </section>
  );
}