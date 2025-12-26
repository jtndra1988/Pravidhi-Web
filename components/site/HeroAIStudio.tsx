"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { H2 } from "../ui/Typography";

type Tilt = { rx: number; ry: number; mx: number; my: number };


function cellStyle(i: number): React.CSSProperties {
  // Deterministic color assignment (no random)
  const mod = i % 6;

  const variants = [
    // Blue → Teal
    {
      bg: `linear-gradient(135deg, rgba(27,89,167,0.26), rgba(20,212,177,0.22))`,
      glow: `0 0 0 1px rgba(27,89,167,0.22), 0 10px 30px rgba(27,89,167,0.08)`,
    },
    // Teal → Amber
    {
      bg: `linear-gradient(135deg, rgba(20,212,177,0.24), rgba(245,158,11,0.18))`,
      glow: `0 0 0 1px rgba(20,212,177,0.20), 0 10px 30px rgba(20,212,177,0.07)`,
    },
    // Blue only
    {
      bg: `radial-gradient(circle at 30% 30%, rgba(27,89,167,0.34), rgba(27,89,167,0.10))`,
      glow: `0 0 0 1px rgba(27,89,167,0.18), 0 10px 26px rgba(27,89,167,0.06)`,
    },
    // Teal only
    {
      bg: `radial-gradient(circle at 30% 30%, rgba(20,212,177,0.34), rgba(20,212,177,0.10))`,
      glow: `0 0 0 1px rgba(20,212,177,0.18), 0 10px 26px rgba(20,212,177,0.06)`,
    },
    // Amber only
    {
      bg: `radial-gradient(circle at 30% 30%, rgba(245,158,11,0.26), rgba(245,158,11,0.10))`,
      glow: `0 0 0 1px rgba(245,158,11,0.16), 0 10px 24px rgba(245,158,11,0.05)`,
    },
    // Blue → Amber
    {
      bg: `linear-gradient(135deg, rgba(27,89,167,0.22), rgba(245,158,11,0.16))`,
      glow: `0 0 0 1px rgba(27,89,167,0.16), 0 10px 24px rgba(245,158,11,0.05)`,
    },
  ];

  const v = variants[mod];

  return {
    background: v.bg,
    boxShadow: v.glow,
    animationDelay: `${i * 70}ms`,
  };
}
function useAutoLoopVpxVpy(containerRef: React.RefObject<HTMLElement | null>) {
  const target = useRef({ x: 0.6, y: 0.4 });   // normalized 0..1
  const current = useRef({ x: 0.6, y: 0.4 });  // normalized 0..1
  const lastPointerTs = useRef<number>(0);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const mq = window.matchMedia?.("(prefers-reduced-motion: reduce)");
    const reduced = !!mq?.matches;

    // If reduced motion, keep it static but still set a good center.
    if (reduced) {
      el.style.setProperty("--vpx", "60%");
      el.style.setProperty("--vpy", "40%");
      return;
    }

    const onPointerMove = (e: PointerEvent) => {
      const rect = el.getBoundingClientRect();
      const nx = (e.clientX - rect.left) / Math.max(1, rect.width);
      const ny = (e.clientY - rect.top) / Math.max(1, rect.height);
      // Clamp to avoid extreme edges (keeps it minimal/premium)
      target.current.x = Math.min(0.85, Math.max(0.15, nx));
      target.current.y = Math.min(0.80, Math.max(0.20, ny));
      lastPointerTs.current = performance.now();
    };

    el.addEventListener("pointermove", onPointerMove, { passive: true });

    let raf = 0;
    const start = performance.now();

    const tick = () => {
      const now = performance.now();
      const t = (now - start) / 1000; // seconds

      // Auto-loop path (slow, “designer” motion)
      // Lissajous-like movement around a calm center.
      const autoX = 0.56 + 0.10 * Math.sin(t * 0.35) + 0.05 * Math.sin(t * 0.90);
      const autoY = 0.42 + 0.08 * Math.cos(t * 0.30) + 0.05 * Math.cos(t * 0.75);

      // If pointer moved recently, follow pointer target, otherwise follow auto-loop.
      const pointerActive = now - lastPointerTs.current < 1200;
      const desiredX = pointerActive ? target.current.x : autoX;
      const desiredY = pointerActive ? target.current.y : autoY;

      // Smooth interpolation (keeps it minimal, no “jitter”)
      const ease = pointerActive ? 0.10 : 0.06;
      current.current.x += (desiredX - current.current.x) * ease;
      current.current.y += (desiredY - current.current.y) * ease;

      el.style.setProperty("--vpx", `${(current.current.x * 100).toFixed(2)}%`);
      el.style.setProperty("--vpy", `${(current.current.y * 100).toFixed(2)}%`);

      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      el.removeEventListener("pointermove", onPointerMove as any);
    };
  }, [containerRef]);
}
export function HeroAIStudio() {
  const heroRef = useRef<HTMLElement | null>(null);
  useAutoLoopVpxVpy(heroRef);
  const wrapRef = useRef<HTMLElement | null>(null);
  const [tilt, setTilt] = useState<Tilt>({ rx: 0, ry: 0, mx: 50, my: 50 });

  // Deterministic “node” positions for the circuit layer (no runtime random flicker)
  const nodes = useMemo(
    () => [
      { x: 8, y: 22, r: 3 },
      { x: 18, y: 42, r: 2.5 },
      { x: 26, y: 18, r: 2.5 },
      { x: 38, y: 34, r: 3 },
      { x: 52, y: 20, r: 2.5 },
      { x: 64, y: 38, r: 3 },
      { x: 72, y: 18, r: 2.5 },
      { x: 84, y: 30, r: 3 },
      { x: 90, y: 54, r: 2.5 },
      { x: 66, y: 62, r: 2.5 },
      { x: 46, y: 58, r: 3 },
      { x: 24, y: 64, r: 2.5 },
    ],
    []
  );

  const setVars = (xPct: number, yPct: number) => {
    const el = wrapRef.current;
    if (!el) return;
    el.style.setProperty("--px", `${xPct}%`);
    el.style.setProperty("--py", `${yPct}%`);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const xPct = Math.max(0, Math.min(100, (x / rect.width) * 100));
    const yPct = Math.max(0, Math.min(100, (y / rect.height) * 100));

    // Slightly restrained “premium” tilt
    const rx = ((yPct - 50) / 50) * 6; // -6..6
    const ry = ((50 - xPct) / 50) * 8; // -8..8

    setTilt({ rx, ry, mx: xPct, my: yPct });
    setVars(xPct, yPct);
  };

  const resetTilt = () => {
    setTilt({ rx: 0, ry: 0, mx: 50, my: 50 });
    setVars(50, 50);
  };

  // Drive subtle parallax in background using viewport mouse
  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;

    // Ensure vars are set even if the user never hovers the device.
    setVars(50, 50);
    el.style.setProperty("--vpx", "60%");
    el.style.setProperty("--vpy", "40%");

    const onMove = (ev: MouseEvent) => {
      const vw = window.innerWidth || 1;
      const vh = window.innerHeight || 1;
      const xPct = (ev.clientX / vw) * 100;
      const yPct = (ev.clientY / vh) * 100;
      el.style.setProperty("--vpx", `${xPct}%`);
      el.style.setProperty("--vpy", `${yPct}%`);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  return (
    <section ref={wrapRef as any} className="zyposoft-hero" aria-label="Hero">
      {/* BACKGROUND LAYERS (auto-loop, minimal futuristic) */}
<div className="zyposoft-hero__bg" aria-hidden="true">
  <svg
    className="zyposoft-hero__quantum"
    viewBox="0 0 1200 600"
    preserveAspectRatio="xMidYMid slice"
  >
    <defs>
      <radialGradient id="qWashA" cx="50%" cy="45%" r="70%">
        <stop offset="0%" stopColor="rgba(20,212,177,0.18)" />
        <stop offset="55%" stopColor="rgba(20,212,177,0.00)" />
      </radialGradient>
      <radialGradient id="qWashB" cx="75%" cy="25%" r="70%">
        <stop offset="0%" stopColor="rgba(27,89,167,0.16)" />
        <stop offset="60%" stopColor="rgba(27,89,167,0.00)" />
      </radialGradient>
      <radialGradient id="qWashC" cx="20%" cy="20%" r="60%">
        <stop offset="0%" stopColor="rgba(245,158,11,0.10)" />
        <stop offset="55%" stopColor="rgba(245,158,11,0.00)" />
      </radialGradient>

      <linearGradient id="qStrokeA" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="rgba(27,89,167,0.00)" />
        <stop offset="35%" stopColor="rgba(27,89,167,0.55)" />
        <stop offset="70%" stopColor="rgba(20,212,177,0.55)" />
        <stop offset="100%" stopColor="rgba(20,212,177,0.00)" />
      </linearGradient>

      <linearGradient id="qStrokeB" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="rgba(245,158,11,0.00)" />
        <stop offset="40%" stopColor="rgba(245,158,11,0.45)" />
        <stop offset="75%" stopColor="rgba(20,212,177,0.45)" />
        <stop offset="100%" stopColor="rgba(27,89,167,0.00)" />
      </linearGradient>
    </defs>

    {/* Soft wash (very minimal) */}
    <rect width="1200" height="600" fill="rgba(255,255,255,0.96)" />
    <rect width="1200" height="600" fill="url(#qWashA)" />
    <rect width="1200" height="600" fill="url(#qWashB)" />
    <rect width="1200" height="600" fill="url(#qWashC)" />

    {/* Slow orbital rings */}
    <g className="q-orbits">
      <ellipse className="q-ring" cx="600" cy="300" rx="520" ry="210" />
      <ellipse className="q-ring q-ring--thin" cx="600" cy="300" rx="360" ry="150" />
      <ellipse className="q-ring q-ring--thin" cx="600" cy="300" rx="210" ry="90" />
    </g>

    {/* Quantum weave paths (dash energy travels along them) */}
    <g className="q-weave">
      <path
        className="q-path q-path--a"
        d="M-40,360 C140,210 300,410 480,290 C660,170 820,360 980,250 C1080,180 1140,140 1240,220"
        stroke="url(#qStrokeA)"
      />
      <path
        className="q-path q-path--b"
        d="M-60,260 C120,340 280,140 450,240 C620,340 760,160 930,260 C1080,350 1180,320 1260,300"
        stroke="url(#qStrokeB)"
      />
      <path
        className="q-path q-path--c"
        d="M-40,430 C160,520 320,300 510,390 C700,480 830,260 1010,350 C1120,405 1180,440 1260,410"
        stroke="url(#qStrokeA)"
      />
    </g>

    {/* Minimal nodes (twinkle gently) */}
    <g className="q-nodes">
      <circle className="q-node" cx="240" cy="240" r="2.2" />
      <circle className="q-node q-node--b" cx="420" cy="310" r="2.0" />
      <circle className="q-node" cx="610" cy="260" r="2.2" />
      <circle className="q-node q-node--b" cx="780" cy="330" r="2.0" />
      <circle className="q-node" cx="980" cy="260" r="2.2" />
      <circle className="q-node q-node--b" cx="720" cy="210" r="1.8" />
      <circle className="q-node" cx="520" cy="420" r="1.8" />
    </g>
  </svg>

  <div className="zyposoft-hero__quantumVignette" />
  <div className="zyposoft-hero__quantumNoise" />
</div>


      {/* CONTENT */}
      <div className="zyposoft-hero__content">
        <div>
          <div className="zyposoft-hero__badge">
            <span className="zyposoft-hero__dot" />
            <span className="zyposoft-hero__badgeText">AI-Enabled Systems</span>
          </div>

          <h1 className="zyposoft-hero__title">
            ZypoSoft
            <H2 className="mt-6">
              <span className="studio-gradient-text font-extrabold">
                Turning Complex Data into Decisive Action
              </span>
            </H2>
          </h1>

          <p className="zyposoft-hero__subtitle mt-4">
            We build AI-powered software systems that stay reliable after launch—secure foundations,
            governed data flows, and operational intelligence designed for real-world adoption.
          </p>

          {/* Keep CTA row empty if your page injects buttons elsewhere */}
          <div className="zyposoft-hero__ctaRow" />

          <div className="zyposoft-hero__miniGrid" role="list">
            <div className="zyposoft-hero__miniCard_V" role="listitem">
              <div className="miniK">Intelligence</div>
              <div className="miniV">Predictive signals for decisions</div>
            </div>
            <div className="zyposoft-hero__miniCard_G" role="listitem">
              <div className="miniK">Operations</div>
              <div className="miniV">Workflows, uptime, governance</div>
            </div>
            <div className="zyposoft-hero__miniCard_O" role="listitem">
              <div className="miniK">Delivery</div>
              <div className="miniV">Build, ship, and continuously improve</div>
            </div>
          </div>
        </div>

        {/* PREMIUM DEVICE / SHOWCASE */}
        <div className="zyposoft-hero__showcaseWrap">
          <div
            className="zyposoft-tilt"
            onMouseMove={handleMouseMove}
            onMouseLeave={resetTilt}
            style={
              {
                ["--rx" as any]: `${tilt.rx}deg`,
                ["--ry" as any]: `${tilt.ry}deg`,
                ["--mx" as any]: `${tilt.mx}%`,
                ["--my" as any]: `${tilt.my}%`,
              } as React.CSSProperties
            }
          >
            <div className="zyposoft-device">
              <div className="zyposoft-device__topbar">
                <div className="dots">
                  <span className="d d1" />
                  <span className="d d2" />
                  <span className="d d3" />
                </div>
                <div className="url">arogyasara.com/dashboard</div>
                <div className="pill">LIVE</div>
              </div>

              <div className="zyposoft-device__body">
                <div className="leftnav">
                  <div className="navBrand">ArogyaSara</div>
                  <div className="navItem active">Command Center</div>
                  <div className="navItem">Facilities</div>
                  <div className="navItem">Surveillance</div>
                  <div className="navItem">Telemedicine</div>
                  <div className="navItem">Reports</div>
                </div>

                <div className="main">
                  <div className="kpiRow">
                    <div className="kpi">
                      <div className="kLabel">Hotspot Risk</div>
                      <div className="kValue">Moderate</div>
                      <div className="kSub">AI confidence trending up</div>
                    </div>
                    <div className="kpi">
                      <div className="kLabel">Admissions</div>
                      <div className="kValue">+12.8%</div>
                      <div className="kSub">Last 7 days</div>
                    </div>
                    <div className="kpi">
                      <div className="kLabel">Bed Availability</div>
                      <div className="kValue">74%</div>
                      <div className="kSub">Statewide</div>
                    </div>
                  </div>

                  <div className="panelRow">
                    <div className="panel">
                      <div className="pTitle">AI Signal Stream</div>
                      <svg className="signal" viewBox="0 0 600 140" preserveAspectRatio="xMidYMid slice">
                        <path
                          className="signalLine"
                          d="M0,90 C60,40 120,130 180,80 C240,35 300,120 360,70 C420,25 480,120 540,65 C570,40 585,55 600,50"
                          fill="none"
                        />
                        <path
                          className="signalGlow"
                          d="M0,90 C60,40 120,130 180,80 C240,35 300,120 360,70 C420,25 480,120 540,65 C570,40 585,55 600,50"
                          fill="none"
                        />
                      </svg>

                      {/* Use the chip* classes that already exist in your globals.css */}
                      <div className="chips">
                        <span className="chip1">Outbreak early-warning</span>
                        <span className="chip2">Bed load forecast</span>
                        <span className="chip3">Supply anomaly</span>
                      </div>
                    </div>

                    <div className="panel panel--map">
                      <div className="pTitle">District Pulse</div>
                      <div className="mapGrid">
                        {Array.from({ length: 18 }).map((_, i) => (
                          <span key={i} className="cell" style={cellStyle(i)} />
                        ))}
                      </div>
                      <div className="legend">
                        <span className="lgDot" /> Emerging <span className="lgDot lgDot2" /> Stable
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sheen + rim + scanline inside device */}
              <div className="zyposoft-device__sheen" aria-hidden="true" />
              <div className="zyposoft-device__rim" aria-hidden="true" />
              <div className="zyposoft-device__scanline" aria-hidden="true" />
            </div>

            {/* Floating callout */}
            <div className="zyposoft-floatCard" aria-hidden="true">
              <div className="fcIcon">✓</div>
              <div>
                <div className="fcT">Actionable Insight</div>
                <div className="fcS">AI flags a rising cluster</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
