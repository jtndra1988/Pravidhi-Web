import React from "react";

/**
 * Light-theme animated AI background:
 * - subtle grid scan
 * - floating gradient orbs
 * - SVG node network with animated line dashes + pulsing nodes
 *
 * No client JS needed; deterministic positions to avoid hydration issues.
 */
export function AIAmbientBackground() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Soft orbs */}
      <div className="ai-orb ai-orb-1" />
      <div className="ai-orb ai-orb-2" />
      <div className="ai-orb ai-orb-3" />

      {/* Grid + scan */}
      <div className="ai-grid" />
      <div className="ai-scan" />

      {/* Node network */}
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 1200 700"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="aiLine" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0" stopColor="rgba(27,89,167,0.15)" />
            <stop offset="1" stopColor="rgba(11,30,58,0.10)" />
          </linearGradient>

          <radialGradient id="aiNode" cx="50%" cy="50%" r="60%">
            <stop offset="0" stopColor="rgba(27,89,167,0.35)" />
            <stop offset="1" stopColor="rgba(27,89,167,0.0)" />
          </radialGradient>
        </defs>

        {/* Connections */}
        <g stroke="url(#aiLine)" strokeWidth="2" fill="none" className="ai-lines">
          <path d="M120 520 L320 420 L520 460 L760 320 L980 360" />
          <path d="M180 180 L360 260 L520 220 L720 260 L940 180" />
          <path d="M260 620 L420 520 L640 560 L860 500 L1080 580" />
          <path d="M120 320 L320 340 L520 300 L760 420 L980 300" />
        </g>

        {/* Nodes */}
        <g className="ai-nodes">
          {[
            [120, 520],
            [320, 420],
            [520, 460],
            [760, 320],
            [980, 360],
            [180, 180],
            [360, 260],
            [520, 220],
            [720, 260],
            [940, 180],
            [260, 620],
            [420, 520],
            [640, 560],
            [860, 500],
            [1080, 580],
            [120, 320],
            [320, 340],
            [520, 300],
            [760, 420],
            [980, 300],
          ].map(([x, y], i) => (
            <g key={i} transform={`translate(${x} ${y})`} className="ai-node">
              <circle r="22" fill="url(#aiNode)" />
              <circle r="4.5" fill="rgba(27,89,167,0.70)" />
            </g>
          ))}
        </g>
      </svg>

      {/* Edge fade so it doesn't feel "busy" */}
      <div className="absolute inset-0 bg-[radial-gradient(900px_450px_at_50%_45%,rgba(255,255,255,0)_0%,rgba(255,255,255,0.65)_70%,rgba(255,255,255,0.9)_100%)]" />
    </div>
  );
}
