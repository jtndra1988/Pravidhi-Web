"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { Reveal } from "./Reveal";
import { H2 } from "../ui/Typography";

type Tilt = { rx: number; ry: number; mx: number; my: number };

export function HeroAIStudio() {
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

  // Also drive subtle parallax in background using viewport mouse
  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;

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
  }, []);

  return (
    <section
      ref={wrapRef as any}
      className="zyposoft-hero"
      aria-label="ZypoSoft hero"
    >
      {/* BACKGROUND LAYERS */}
      <div className="zyposoft-hero__bg" aria-hidden="true">
        <div className="zyposoft-hero__mesh" />
        <div className="zyposoft-hero__aurora" />
        <div className="zyposoft-hero__noise" />
        <div className="zyposoft-hero__grid" />
        <div className="zyposoft-hero__scan" />

        <div className="zyposoft-hero__orb orb--a" />
        <div className="zyposoft-hero__orb orb--b" />
        <div className="zyposoft-hero__orb orb--c" />

        {/* Circuit layer */}
        <svg
          className="zyposoft-hero__circuit"
          viewBox="0 0 100 70"
          preserveAspectRatio="none"
        >
          <path
            className="circuit-line"
            d="M8 22 L18 42 L38 34 L52 20 L64 38 L84 30 L90 54 L66 62 L46 58 L24 64"
            fill="none"
          />
          <path
            className="circuit-line circuit-line--alt"
            d="M26 18 L38 34 L64 38 L72 18 L84 30"
            fill="none"
          />
          {nodes.map((n, i) => (
            <circle
              key={i}
              className="circuit-node"
              cx={n.x}
              cy={n.y}
              r={n.r}
            />
          ))}
        </svg>
      </div>

      {/* CONTENT */}
      <div className="zyposoft-hero__content">
        <Reveal>
          <div className="zyposoft-hero__badge">
            <span className="zyposoft-hero__dot" />
            <span className="zyposoft-hero__badgeText">
              AI-Enabled Health Systems
            </span>
          </div>

          <h1 className="zyposoft-hero__title">
            ZypoSoft
            <H2 className="mt-4">
              <span className="studio-gradient-text font-extrabold">Building Intelligent Public Health Infrastructure</span>
            </H2>
            {/* <span className="zyposoft-hero__titleAccent">
              Building Intelligent Public Health Infrastructure
            </span> */}
          </h1>

          <p className="zyposoft-hero__subtitle">
            Introducing <strong>ArogyaSara</strong> - An AI/ML-powered platform
            for EHR, HMS, disease surveillance, hotspot detection, and
            decision support.
          </p>

          <div className="zyposoft-hero__ctaRow">
            {/* <a className="zyposoft-btn-secondary" href="#features">
              Explore Capabilities
            </a> */}
          </div>

          <div className="zyposoft-hero__miniGrid" role="list">
            <div className="zyposoft-hero__miniCard_V" role="listitem">
              <div className="miniK">AI Surveillance</div>
              <div className="miniV">Hotspot signals in near real-time</div>
            </div>
            <div className="zyposoft-hero__miniCard_G" role="listitem">
              <div className="miniK">State-scale HMS</div>
              <div className="miniV">Facilities, beds, queues, inventory</div>
            </div>
            <div className="zyposoft-hero__miniCard_O" role="listitem">
              <div className="miniK">EHR + Citizen Care</div>
              <div className="miniV">Longitudinal records + workflows</div>
            </div>
          </div>
        </Reveal>

        {/* PREMIUM DEVICE / SHOWCASE */}
        <Reveal delayMs={240}>
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
                        <svg
                          className="signal"
                          viewBox="0 0 600 140"
                          preserveAspectRatio="none"
                        >
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
                        <div className="chips">
                          <span className="chip">Outbreak early-warning</span>
                          <span className="chip">Bed load forecast</span>
                          <span className="chip">Supply anomaly</span>
                        </div>
                      </div>

                      <div className="panel panel--map">
                        <div className="pTitle">District Pulse</div>
                        <div className="mapGrid">
                          {Array.from({ length: 18 }).map((_, i) => (
                            <span key={i} className="cell" />
                          ))}
                        </div>
                        <div className="legend">
                          <span className="lgDot" /> Emerging
                          <span className="lgDot lgDot2" /> Stable
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
        </Reveal>
      </div>
    </section>
  );
}
