"use client";

import React, { useEffect, useMemo, useState } from "react";
import {
    Brain,
    Database,
    Cloud,
    ShieldCheck,
    Code2,
    PlugZap,
    ChevronRight,
} from "lucide-react";
import { Eyebrow } from "../ui/Typography";

type StackNode = {
    key: string;
    title: string;
    tagline: string;
    bullets: string[];
    Icon: React.ComponentType<{ size?: number; strokeWidth?: number }>;
    px: number; // position in percent (0..100)
    py: number; // position in percent (0..100)
    tone: "blue" | "slate" | "indigo" | "teal" | "violet" | "amber";
};

export default function PravidhiEcosystemStack() {
    const nodes: StackNode[] = useMemo(
        () => [
            {
                key: "ai",
                title: "AI & Intelligence",
                tagline: " Decision-support, automation, copilots",
                bullets: ["LLM orchestration", "Agent workflows", "Model serving & evaluation"],
                Icon: Brain,
                px: 74,
                py: 30,
                tone: "indigo",
            },
            {
                key: "data",
                title: "Data & Analytics",
                tagline: " Trusted data pipelines and insights",
                bullets: ["Warehousing & ETL", "Real-time analytics", "Search + vector retrieval"],
                Icon: Database,
                px: 78,
                py: 68,
                tone: "violet",
            },
            {
                key: "cloud",
                title: "Cloud & DevOps",
                tagline: " Reliable delivery at scale",
                bullets: ["CI/CD pipelines", "Container platforms", "Observability & SRE"],
                Icon: Cloud,
                px: 50,
                py: 86,
                tone: "teal",
            },
            {
                key: "security",
                title: "Security & Governance",
                tagline: " Compliance-ready by design",
                bullets: ["Access control & audit", "Policy enforcement", "Data protection"],
                Icon: ShieldCheck,
                px: 22,
                py: 68,
                tone: "amber",
            },
            {
                key: "engineering",
                title: "Product Engineering",
                tagline: " Fast builds, maintainable systems",
                bullets: ["Web & mobile apps", "API-first architecture", "Performance budgets"],
                Icon: Code2,
                px: 22,
                py: 32,
                tone: "blue",
            },
            {
                key: "integration",
                title: "Integrations",
                tagline: " Systems that connect cleanly",
                bullets: ["Versioned contracts", "Event-driven flows", "Third-party connectors"],
                Icon: PlugZap,
                px: 50,
                py: 14,
                tone: "slate",
            },
        ],
        []
    );

    const [active, setActive] = useState(0);
    const [paused, setPaused] = useState(false);

    // Auto-cycle focus (paused on hover/focus). Respects reduced motion.
    useEffect(() => {
        const mq =
            typeof window !== "undefined"
                ? window.matchMedia("(prefers-reduced-motion: reduce)")
                : null;

        if (mq?.matches) return;

        if (paused) return;
        const id = window.setInterval(() => {
            setActive((v) => (v + 1) % nodes.length);
        }, 3600);

        return () => window.clearInterval(id);
    }, [nodes.length, paused]);

    const A = nodes[active];

    return (
        <section id="technology" className="eco-tech">
            {/* Background */}
            <div className="eco-tech__bg" aria-hidden>
                <div className="eco-tech__grid" />
                <div className="eco-tech__sweep" />
                <div className="eco-tech__noise" />
            </div>

            <div className="relative z-[1]">
                <div className="pravidhi-container">
                    <div className="eco-tech__container">
                        {/* LEFT: narrative */}
                        <div>
                            <div className="eco-tech__eyebrow">
                                <span className="eco-tech__dot" aria-hidden />
                                <Eyebrow>Pravidhi Ecosystem</Eyebrow>
                            </div>

                            <h2 className="eco-tech__title">
                                A technology stack designed for{" "}
                                <span className="studio-gradient-text">trust</span>,{" "}
                                <span className="studio-gradient-text">scale</span>, and{" "}
                                <span className="studio-gradient-text">AI enablement</span>.
                            </h2>

                            <p className="eco-tech__lead">
                                We assemble modern engineering building blocks into a coherent ecosystem so
                                delivery stays predictable, systems stay governable, and AI features remain
                                measurable and safe to operate.
                            </p>

                            <div className="eco-tech__list">
                                <div className="eco-pillrow">
                                    <span className="eco-pill">Architecture-first</span>
                                    <span className="eco-pill">Security by default</span>
                                    <span className="eco-pill">Observability built-in</span>
                                </div>

                                <div className="eco-lines">
                                    <div className="eco-line">
                                        <span className="eco-bullet" aria-hidden />
                                        <div>
                                            <div className="t">Modular foundations</div>
                                            <div className="s">Clear interfaces, versioned contracts, clean boundaries.</div>
                                        </div>
                                    </div>

                                    <div className="eco-line">
                                        <span className="eco-bullet" aria-hidden />
                                        <div>
                                            <div className="t">AI-ready pipelines</div>
                                            <div className="s">Data quality, lineage, evaluation, and lifecycle management.</div>
                                        </div>
                                    </div>

                                    <div className="eco-line">
                                        <span className="eco-bullet" aria-hidden />
                                        <div>
                                            <div className="t">Operate with confidence</div>
                                            <div className="s">Monitoring, audit trails, performance budgets, reliability targets.</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT: animated ecosystem map */}
                        <div
                            className="eco-map"
                            onMouseEnter={() => setPaused(true)}
                            onMouseLeave={() => setPaused(false)}
                            onFocusCapture={() => setPaused(true)}
                            onBlurCapture={() => setPaused(false)}
                        >
                            {/* Animated connectors */}
                            <svg
                                className="eco-map__svg"
                                viewBox="0 0 100 100"
                                preserveAspectRatio="none"
                                aria-hidden
                            >
                                <defs>
                                    <linearGradient id="ecoLine" x1="0" y1="0" x2="1" y2="1">
                                        <stop offset="0" stopColor="rgba(27,89,167,0.40)" />
                                        <stop offset="1" stopColor="rgba(11,30,58,0.10)" />
                                    </linearGradient>
                                </defs>

                                {/* Hub ring */}
                                <circle cx="50" cy="50" r="18" fill="none" stroke="rgba(11,30,58,0.10)" />
                                <circle
                                    cx="50"
                                    cy="50"
                                    r="18"
                                    fill="none"
                                    stroke="rgba(27,89,167,0.18)"
                                    className="eco-dash"
                                />

                                {/* Lines from hub to nodes */}
                                {nodes.map((n) => (
                                    <line
                                        key={n.key}
                                        x1="50"
                                        y1="50"
                                        x2={n.px}
                                        y2={n.py}
                                        stroke="url(#ecoLine)"
                                        strokeWidth="0.8"
                                        className={n.key === A.key ? "eco-link eco-link--active" : "eco-link"}
                                    />
                                ))}
                            </svg>

                            {/* Core */}
                            <div className="eco-core" aria-label="Pravidhi technology core">
                                <div className="eco-core__badge">PRAVIDHI CORE</div>
                                <div className="eco-core__title">Ecosystem Stack</div>
                                <div className="eco-core__meta">
                                    Governable delivery • Secure data flows • AI enablement
                                </div>
                            </div>

                            {/* Nodes */}
                            {nodes.map((n, idx) => {
                                const isActive = idx === active;
                                const Icon = n.Icon;

                                return (
                                    <button
                                        key={n.key}
                                        type="button"
                                        className={
                                            (idx === active ? "eco-node eco-node--active" : "eco-node") + ` eco-node--${n.tone}`
                                        }
                                        style={{ left: `${n.px}%`, top: `${n.py}%` } as React.CSSProperties}
                                        onMouseEnter={() => setActive(idx)}
                                        onFocus={() => setActive(idx)}
                                        onClick={() => setActive(idx)}
                                        aria-label={n.title}
                                    >
                                        <span className="eco-node__icon" aria-hidden>
                                            <Icon size={18} strokeWidth={2.5} />
                                        </span>
                                        <span className="eco-node__text">
                                            <span className="eco-node__t">{n.title}</span>
                                            <span className="eco-node__s">{n.tagline}</span>
                                        </span>
                                    </button>
                                );
                            })}

                            {/* HUD panel (minimal detail, changes with active node) */}


                            {/* small floating metric chip */}
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
