"use client";

import React, { useRef } from "react";
import { AIAmbientBackground } from "@/components/site/AIAmbientBackground";
import { Reveal } from "@/components/site/Reveal";

function useTilt() {
  const ref = useRef<HTMLDivElement | null>(null);

  function onMove(e: React.MouseEvent) {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;   // 0..1
    const py = (e.clientY - r.top) / r.height;   // 0..1

    const ry = (px - 0.5) * 10;  // rotateY
    const rx = (0.5 - py) * 8;   // rotateX

    el.style.setProperty("--ry", `${ry.toFixed(2)}deg`);
    el.style.setProperty("--rx", `${rx.toFixed(2)}deg`);
    el.style.setProperty("--mx", `${(px * 100).toFixed(0)}%`);
    el.style.setProperty("--my", `${(py * 100).toFixed(0)}%`);
  }

  function onLeave() {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty("--ry", `0deg`);
    el.style.setProperty("--rx", `0deg`);
    el.style.setProperty("--mx", `50%`);
    el.style.setProperty("--my", `50%`);
  }

  return { ref, onMove, onLeave };
}

export function HeroPremium() {
  const { ref, onMove, onLeave } = useTilt();

  return (
    <section className="hero-premium relative min-h-[100svh] flex items-center overflow-hidden">
      {/* Art-directed background layers */}
      <div className="hero-halo" />
      <div className="hero-grid" />
      <div className="hero-scan" />
      <div className="hero-noise" />
      {/* Your existing AI network layer (kept, but now sits inside a designed system) */}
      <AIAmbientBackground />

      <div className="relative mx-auto w-full max-w-6xl px-5 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
          {/* Left: copy */}
          <div className="lg:col-span-7">
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(11,30,58,.12)] bg-white/70 px-3 py-1 text-xs font-semibold text-[rgba(11,30,58,.70)]">
                <span className="h-2 w-2 rounded-full bg-[#1b59a7]" />
                Government-ready AI Health Platform
                <span className="ml-2 rounded-full bg-[rgba(27,89,167,.10)] px-2 py-0.5 text-[11px] font-semibold text-[#1b59a7]">
                  AI + Governance
                </span>
              </div>

              <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-[#0b1e3a]">
                Pravidhi Softtech builds{" "}
                <span className="hero-gradient-text">AI-powered</span> public{" "}
                health systems.
              </h1>

              <p className="mt-5 max-w-2xl text-base sm:text-lg leading-7 text-[rgba(11,30,58,.72)]">
                ArogyaSara unifies EHR, HMS, surveillance, and state dashboards into one
                secure, explainable platform—designed for scale, audits, and outcomes.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#features"
                  className="rounded-xl bg-[#1b59a7] px-5 py-3 text-sm font-semibold text-white shadow-sm transition-transform duration-200 hover:-translate-y-0.5"
                >
                  Explore capabilities
                </a>
                <a
                  href="#contact"
                  className="rounded-xl border border-[rgba(11,30,58,.16)] bg-white/70 px-5 py-3 text-sm font-semibold text-[#0b1e3a] transition-transform duration-200 hover:-translate-y-0.5"
                >
                  Request a demo
                </a>
              </div>

              {/* “Designer detail”: trust micro-row */}
              <div className="mt-8 flex flex-wrap items-center gap-3 text-xs text-[rgba(11,30,58,.62)]">
                <span className="inline-flex items-center gap-2 rounded-full border border-[rgba(11,30,58,.10)] bg-white/60 px-3 py-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#1b59a7]" />
                  Explainable AI signals
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-[rgba(11,30,58,.10)] bg-white/60 px-3 py-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#1b59a7]" />
                  State-ready reporting
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-[rgba(11,30,58,.10)] bg-white/60 px-3 py-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#1b59a7]" />
                  Secure & auditable workflows
                </span>
              </div>
            </Reveal>
          </div>

          {/* Right: premium “product” card with tilt + sheen */}
          <div className="lg:col-span-5">
            <Reveal delayMs={120}>
              <div className="tilt-wrap">
                <div
                  ref={ref}
                  onMouseMove={onMove}
                  onMouseLeave={onLeave}
                  className="tilt-card relative rounded-[26px] card-glass"
                >
                  <div className="tilt-sheen" />

                  {/* Top bar */}
                  <div className="flex items-center justify-between gap-3 px-6 pt-6">
                    <div>
                      <div className="text-xs font-semibold text-[rgba(11,30,58,.65)]">
                        ArogyaSara • State Overview
                      </div>
                      <div className="mt-1 text-sm font-semibold text-[#0b1e3a]">
                        Live Intelligence Console
                      </div>
                    </div>

                    <div className="accent-ring rounded-xl bg-white/70 px-3 py-2">
                      <div className="text-[11px] font-semibold text-[rgba(11,30,58,.65)]">
                        AI Confidence
                      </div>
                      <div className="mt-0.5 text-sm font-semibold text-[#1b59a7]">
                        High
                      </div>
                    </div>
                  </div>

                  {/* “Dashboard” body */}
                  <div className="px-6 pb-6 pt-5">
                    <div className="grid grid-cols-2 gap-4">
                      {[
                        ["State Dashboards", "Operational KPIs + insights"],
                        ["Hotspot Alerts", "Explainable AI signals"],
                        ["Facility Ops", "HMS workflows at scale"],
                        ["Citizen Care", "Telemedicine + triage"],
                      ].map(([t, d]) => (
                        <div
                          key={t}
                          className="rounded-2xl border border-[rgba(11,30,58,.10)] bg-white/70 p-4 transition-transform duration-200 hover:-translate-y-0.5"
                        >
                          <div className="text-sm font-semibold text-[#0b1e3a]">
                            {t}
                          </div>
                          <div className="mt-1 text-xs leading-5 text-[rgba(11,30,58,.65)]">
                            {d}
                          </div>
                          <div className="mt-3 h-1.5 w-16 rounded-full bg-[rgba(27,89,167,.18)]">
                            <div className="h-1.5 w-10 rounded-full bg-[#1b59a7]" />
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Bottom mini-chart */}
                    <div className="mt-5 rounded-2xl border border-[rgba(11,30,58,.10)] bg-white/70 p-4">
                      <div className="flex items-center justify-between">
                        <div className="text-xs font-semibold text-[rgba(11,30,58,.70)]">
                          Trend signal
                        </div>
                        <div className="text-xs font-semibold text-[#1b59a7]">
                          Improving
                        </div>
                      </div>

                      <svg viewBox="0 0 220 42" className="mt-3 h-10 w-full">
                        <path
                          d="M2 34 C 35 30, 40 10, 70 18 C 95 24, 120 8, 145 12 C 170 16, 188 6, 218 10"
                          fill="none"
                          stroke="rgba(27,89,167,0.75)"
                          strokeWidth="2.5"
                        />
                        <path
                          d="M2 34 C 35 30, 40 10, 70 18 C 95 24, 120 8, 145 12 C 170 16, 188 6, 218 10"
                          fill="none"
                          stroke="rgba(27,89,167,0.18)"
                          strokeWidth="7"
                        />
                      </svg>
                    </div>
                  </div>

                  {/* Edge highlight */}
                  <div className="pointer-events-none absolute inset-0 rounded-[26px] border border-[rgba(255,255,255,0.65)] opacity-60" />
                </div>
              </div>

              <div className="mt-4 text-center text-xs text-[rgba(11,30,58,.55)]">
                Subtle 3D tilt + designed dashboard preview (light theme).
              </div>
            </Reveal>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="mt-10 flex justify-center">
          <a
            href="#features"
            className="inline-flex items-center gap-2 text-xs font-semibold text-[rgba(11,30,58,.65)] hover:text-[rgba(11,30,58,.85)]"
          >
            <span className="flex h-8 w-5 items-start justify-center rounded-full border border-[rgba(11,30,58,.18)] bg-white/60 p-1">
              <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-[#1b59a7]" />
            </span>
            Scroll
          </a>
        </div>
      </div>
    </section>
  );
}
