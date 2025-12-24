"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";

type Station = { key: string; label: string; frac: number };

const CYCLE_MS = 14000;

export default function DeliveryLifecycleVisual() {
  const pathOuterRef = useRef<SVGPathElement | null>(null);
  const pathInnerRef = useRef<SVGPathElement | null>(null);
  const capMainRef = useRef<SVGGElement | null>(null);
  const capQaRef = useRef<SVGGElement | null>(null);
  const capObsRef = useRef<SVGGElement | null>(null);

  const [pts, setPts] = useState<Array<{ x: number; y: number }>>([]);
  const [passed, setPassed] = useState<Record<string, boolean>>({});
  const [pingKey, setPingKey] = useState<string | null>(null);

  const stations: Station[] = useMemo(
    () => [
      { key: "discover", label: "Discover", frac: 0.02 },
      { key: "design", label: "Design", frac: 0.18 },
      { key: "build", label: "Build", frac: 0.38 },
      { key: "test", label: "Test", frac: 0.56 },
      { key: "launch", label: "Launch", frac: 0.74 },
      { key: "operate", label: "Operate", frac: 0.92 },
    ],
    []
  );

  useEffect(() => {
    const outer = pathOuterRef.current;
    const inner = pathInnerRef.current;
    if (!outer || !inner) return;

    const mq = window.matchMedia?.("(prefers-reduced-motion: reduce)");
    const reduced = !!mq?.matches;

    const outerLen = outer.getTotalLength();
    const innerLen = inner.getTotalLength();

    // Station points on outer loop
    const stationPts = stations.map((s) => {
      const p = outer.getPointAtLength(outerLen * s.frac);
      return { x: p.x, y: p.y };
    });
    setPts(stationPts);

    if (reduced) {
      // static placement
      const p0 = outer.getPointAtLength(outerLen * 0.02);
      capMainRef.current?.setAttribute("transform", `translate(${p0.x} ${p0.y}) rotate(0)`);
      const p1 = inner.getPointAtLength(innerLen * 0.15);
      capQaRef.current?.setAttribute("transform", `translate(${p1.x} ${p1.y}) rotate(0)`);
      const p2 = inner.getPointAtLength(innerLen * 0.62);
      capObsRef.current?.setAttribute("transform", `translate(${p2.x} ${p2.y}) rotate(0)`);
      return;
    }

    let raf: number | null = null;
    let lastIdx = -1;

    const step = (now: number) => {
      const prog = (now % CYCLE_MS) / CYCLE_MS; // 0..1
      const a = outerLen * prog;
      const b = innerLen * ((prog * 1.25) % 1); // QA stream slightly faster
      const c = innerLen * ((prog * 0.92 + 0.28) % 1); // Obs stream offset

      // Main capsule (outer)
      const p = outer.getPointAtLength(a);
      const p2 = outer.getPointAtLength(Math.min(outerLen, a + 0.9));
      const ang = (Math.atan2(p2.y - p.y, p2.x - p.x) * 180) / Math.PI;
      capMainRef.current?.setAttribute("transform", `translate(${p.x} ${p.y}) rotate(${ang})`);

      // QA capsule (inner)
      const q = inner.getPointAtLength(b);
      const q2 = inner.getPointAtLength(Math.min(innerLen, b + 0.9));
      const angQ = (Math.atan2(q2.y - q.y, q2.x - q.x) * 180) / Math.PI;
      capQaRef.current?.setAttribute("transform", `translate(${q.x} ${q.y}) rotate(${angQ})`);

      // Observability capsule (inner)
      const r = inner.getPointAtLength(c);
      const r2 = inner.getPointAtLength(Math.min(innerLen, c + 0.9));
      const angR = (Math.atan2(r2.y - r.y, r2.x - r.x) * 180) / Math.PI;
      capObsRef.current?.setAttribute("transform", `translate(${r.x} ${r.y}) rotate(${angR})`);

      // Gate logic
      const idx = stations.reduce((acc, s, i) => (prog >= s.frac ? i : acc), 0);

      if (idx < lastIdx) setPassed({}); // new loop

      if (idx !== lastIdx) {
        const k = stations[idx]?.key;
        if (k) {
          setPassed((prev) => ({ ...prev, [k]: true }));
          setPingKey(k);
          window.setTimeout(() => setPingKey((cur) => (cur === k ? null : cur)), 620);
        }
        lastIdx = idx;
      }

      raf = requestAnimationFrame(step);
    };

    raf = requestAnimationFrame(step);
    return () => {
      if (raf) cancelAnimationFrame(raf);
    };
  }, [stations]);

  return (
    <div className="del-life" aria-hidden>
      <div className="del-life__bg" />

      <svg className="del-life__svg" viewBox="0 0 100 100" preserveAspectRatio="none">
        <defs>
          <linearGradient id="dlStroke" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="rgba(27,89,167,0.36)" />
            <stop offset="0.5" stopColor="rgba(20,184,166,0.26)" />
            <stop offset="1" stopColor="rgba(139,92,246,0.26)" />
            <animateTransform
              attributeName="gradientTransform"
              type="rotate"
              from="0 0.5 0.5"
              to="360 0.5 0.5"
              dur="18s"
              repeatCount="indefinite"
            />
          </linearGradient>

          <filter id="dlGlow" x="-35%" y="-35%" width="170%" height="170%">
            <feGaussianBlur stdDeviation="0.7" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Outer lifecycle loop (fills the panel) */}
          <path
            id="outerLoop"
            d="M 14 52
               a 36 26 0 1 0 72 0
               a 36 26 0 1 0 -72 0"
          />

          {/* Inner control loop (quality/ops streams) */}
          <path
            id="innerLoop"
            d="M 22 52
               a 28 20 0 1 0 56 0
               a 28 20 0 1 0 -56 0"
          />
        </defs>

        {/* faint inner grid rings to occupy negative space */}
        <g opacity="0.85">
          <ellipse cx="50" cy="52" rx="40" ry="30" fill="none" stroke="rgba(11,30,58,0.04)" strokeWidth="1" />
          <ellipse cx="50" cy="52" rx="32" ry="24" fill="none" stroke="rgba(11,30,58,0.035)" strokeWidth="1" />
          <ellipse cx="50" cy="52" rx="24" ry="18" fill="none" stroke="rgba(11,30,58,0.03)" strokeWidth="1" />
        </g>

        {/* outer base rail */}
        <path
          ref={pathOuterRef}
          d="M 14 52
             a 36 26 0 1 0 72 0
             a 36 26 0 1 0 -72 0"
          fill="none"
          stroke="rgba(11,30,58,0.08)"
          strokeWidth="4.0"
          strokeLinecap="round"
        />

        {/* outer active overlay */}
        <use
          href="#outerLoop"
          fill="none"
          stroke="url(#dlStroke)"
          strokeWidth="1.35"
          strokeLinecap="round"
          strokeDasharray="7 16"
          className="del-life__dash"
          opacity="0.95"
        />

        {/* inner base rail */}
        <path
          ref={pathInnerRef}
          d="M 22 52
             a 28 20 0 1 0 56 0
             a 28 20 0 1 0 -56 0"
          fill="none"
          stroke="rgba(11,30,58,0.06)"
          strokeWidth="2.6"
          strokeLinecap="round"
        />

        {/* inner stream overlays */}
        <use
          href="#innerLoop"
          fill="none"
          stroke="rgba(20,184,166,0.18)"
          strokeWidth="1.05"
          strokeLinecap="round"
          strokeDasharray="6 14"
          className="del-life__dash2"
        />
        <use
          href="#innerLoop"
          fill="none"
          stroke="rgba(139,92,246,0.14)"
          strokeWidth="0.95"
          strokeLinecap="round"
          strokeDasharray="4 18"
          className="del-life__dash3"
        />

        {/* stage gate stations */}
        {pts.length === stations.length &&
          stations.map((s, i) => {
            const p = pts[i];
            const isPassed = !!passed[s.key];
            const isPing = pingKey === s.key;

            return (
              <g
                key={s.key}
                className={["dl-st", isPassed ? "is-passed" : "", isPing ? "is-ping" : ""].join(" ")}
                transform={`translate(${p.x} ${p.y})`}
              >
                <circle className="dl-st__halo" r="5.0" />
                <circle className="dl-st__ring" r="2.6" />
                <circle className="dl-st__core" r="1.25" />
                <path className="dl-st__check" d="M -1.1 0.1 L -0.2 1.1 L 1.5 -0.8" fill="none" />
                <text className="dl-st__txt" x="0" y="7.5" textAnchor="middle">
                  {s.label}
                </text>
              </g>
            );
          })}

        {/* center label to use space and explain meaning */}
        <g className="del-life__center">
          <text x="50" y="48.5" textAnchor="middle" className="del-life__k">
            DELIVERY LIFECYCLE
          </text>
          <text x="50" y="54.0" textAnchor="middle" className="del-life__s">
            Stage gates • Release flow • Operate & improve
          </text>
        </g>

        {/* Main moving capsule (release item) */}
        <g ref={capMainRef} filter="url(#dlGlow)" className="dl-cap dl-cap--main">
          <circle r="3.6" fill="url(#dlStroke)" opacity="0.16" />
          <rect x="-3.0" y="-1.55" width="6.0" height="3.1" rx="1.55" fill="url(#dlStroke)" opacity="0.92" />
          <circle r="0.8" fill="rgba(255,255,255,0.86)" />
        </g>

        {/* Inner capsules (QA + Observability streams) */}
        <g ref={capQaRef} filter="url(#dlGlow)" className="dl-cap dl-cap--qa">
          <circle r="2.8" fill="rgba(20,184,166,0.18)" />
          <rect x="-2.3" y="-1.2" width="4.6" height="2.4" rx="1.2" fill="rgba(20,184,166,0.74)" />
        </g>

        <g ref={capObsRef} filter="url(#dlGlow)" className="dl-cap dl-cap--obs">
          <circle r="2.8" fill="rgba(139,92,246,0.16)" />
          <rect x="-2.3" y="-1.2" width="4.6" height="2.4" rx="1.2" fill="rgba(139,92,246,0.70)" />
        </g>
      </svg>

      {/* HUD micro-panels (fills empty space with meaning, not noise) */}
      <div className="del-life__hud del-life__hud--tl">
        <div className="k">Release health</div>
        <div className="v">Green gates • Predictable rollouts</div>
      </div>

      <div className="del-life__hud del-life__hud--tr">
        <div className="k">Quality loop</div>
        <div className="v">Tests • Reviews • Compliance checks</div>
      </div>

      <div className="del-life__hud del-life__hud--br">
        <div className="k">Operate & improve</div>
        <div className="v">Telemetry • Incidents • Continuous change</div>
      </div>
    </div>
  );
}
