import Image from "next/image";
import Link from "next/link";

import { home } from "@/lib/content";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/site/Reveal";
import Button from "@/components/ui/Button";
import { Card, CardBody } from "@/components/ui/Card";
import { Eyebrow, H2, H3, P } from "@/components/ui/Typography";
import { FeatureTabs } from "@/components/sections/FeatureTabs";
import { AIAmbientBackground } from "@/components/site/AIAmbientBackground";
import { HeroAIStudio } from "@/components/site/HeroAIStudio";

export default function HomePage() {
  return (
    <main className="pravidhi-site text-[#0b1e3a]">
      {/* HERO (keep as-is) */}
      <HeroAIStudio />

      {/* ABOUT (non-box editorial) */}
      <section id="about" className="pravidhi-section theme--violet">
        <div className="pravidhi-section__bg" aria-hidden>
          <div className="pravidhi-section__mesh" />
          <div className="pravidhi-section__grid" />
          <div className="pravidhi-section__noise" />
          <div className="pravidhi-section__sweep" />
        </div>

        <div className="relative z-[1]">
          <div className="pravidhi-container">
            <Reveal threshold={0.35} rootMargin="0px 0px -35% 0px">
              <div className="grid gap-10 md:grid-cols-12 md:items-start">
                <div className="md:col-span-6">
                  <Eyebrow>About Pravidhi Softtech</Eyebrow>
                  <div className="mt-3 text-xs text-spaced text-[rgba(11,30,58,0.55)]">
                    ENGINEERING • AI • GOVERNMENT-GRADE DELIVERY
                  </div>

                  <H2 className="mt-4">
                    We build{" "}
                    <span className="studio-gradient-text font-extrabold">trusted digital systems</span>{" "}
                    that are secure, scalable, and governable.
                  </H2>

                  <P className="mt-4 max-w-xl">
                    Pravidhi Softtech is a software development company focused on delivering
                    reliable platforms for public-sector and enterprise programs—where availability,
                    data governance, and measurable outcomes matter.
                  </P>

                  {/* Minimal, colorful “principles” (no cards) */}
                  <div className="mt-8">
                    <div className="pravidhi-rule" />
                    <div className="pravidhi-lines">
                      <div className="pravidhi-line">
                        <span className="dot dot--blue" aria-hidden />
                        <div>
                          <div className="t">Delivery discipline</div>
                          <div className="s">Milestones, acceptance criteria, and operational readiness.</div>
                        </div>
                      </div>

                      <div className="pravidhi-line">
                        <span className="dot dot--teal" aria-hidden />
                        <div>
                          <div className="t">Security-first architecture</div>
                          <div className="s">Least-privilege access, auditability, controlled integrations.</div>
                        </div>
                      </div>

                      <div className="pravidhi-line">
                        <span className="dot dot--violet" aria-hidden />
                        <div>
                          <div className="t">Practical AI</div>
                          <div className="s">Automation and insights tied to real operational KPIs.</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Subtle colored tags (pills, not boxes) */}
                  <div className="mt-7 flex flex-wrap gap-2">
                    <span className="pravidhi-pill pill--blue">Public-sector systems</span>
                    <span className="pravidhi-pill pill--teal">Secure data flows</span>
                    <span className="pravidhi-pill pill--violet">AI enablement</span>
                    <span className="pravidhi-pill pill--amber">Long-term maintainability</span>
                  </div>

                  
                </div>

                {/* Right: statement + numbers (no cards) */}
                <div className="md:col-span-6">
                  <div className="pravidhi-quote">
                    <div className="pravidhi-quote__bar" aria-hidden />
                    <div className="pravidhi-quote__k">Company focus</div>
                    <div className="pravidhi-quote__t">
                      Build systems that remain stable under load, evolve safely, and stay
                      maintainable for internal teams.
                    </div>
                    <div className="pravidhi-quote__s">
                      Clean architecture, disciplined delivery, and measurable outcomes.
                    </div>
                  </div>

                  <div className="mt-8 pravil-kpis">
                    <div className="k">
                      <div className="n">01</div>
                      <div className="l">Discover</div>
                    </div>
                    <div className="k">
                      <div className="n">02</div>
                      <div className="l">Design</div>
                    </div>
                    <div className="k">
                      <div className="n">03</div>
                      <div className="l">Build</div>
                    </div>
                    <div className="k">
                      <div className="n">04</div>
                      <div className="l">Operate</div>
                    </div>
                  </div>

                  <div className="mt-7 pr-1">
                    <div className="pravidhi-rule" />
                    <div className="mt-5 space-y-4">
                      <div className="pravidhi-micro">
                        <div className="h">Ownership-friendly engineering</div>
                        <div className="p">Documentation, runbooks, and handover-ready delivery.</div>
                      </div>
                      <div className="pravidhi-micro">
                        <div className="h">Operational visibility</div>
                        <div className="p">Monitoring and reliability targets built in, not added later.</div>
                      </div>
                      <div className="pravidhi-micro">
                        <div className="h">Controlled change</div>
                        <div className="p">Versioned contracts, safe rollouts, and governance-first upgrades.</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* OUR TECHNOLOGY (non-box map) */}
      <section id="technology" className="pravidhi-section theme--teal">
        <div className="pravidhi-section__bg" aria-hidden>
          <div className="pravidhi-section__mesh" />
          <div className="pravidhi-section__grid" />
          <div className="pravidhi-section__noise" />
        </div>

        <div className="relative z-[1]">
          <div className="pravidhi-container">
            <Reveal threshold={0.35} rootMargin="0px 0px -35% 0px">
              <div className="grid gap-10 md:grid-cols-12 md:items-start">
                <div className="md:col-span-5">
                  <Eyebrow>Our Technology</Eyebrow>
                  <div className="mt-3 text-xs text-spaced text-[rgba(11,30,58,0.55)]">
                    MODERN STACK • SECURITY-FIRST • OPS-READY
                  </div>

                  <H2 className="mt-4">
                    Future-proof engineering that{" "}
                    <span className="studio-gradient-text font-extrabold">ships clean</span>{" "}
                    and stays maintainable.
                  </H2>

                  <P className="mt-4 max-w-xl">
                    We use a modern, proven stack and disciplined practices so systems remain fast,
                    secure, and evolvable for years—without rewrites.
                  </P>

                  <div className="mt-7">
                    <div className="pravidhi-rule" />
                    <div className="mt-5 space-y-4">
                      <div className="pravidhi-micro">
                        <div className="h">Security by design</div>
                        <div className="p">Least-privilege, audit trails, controlled data boundaries.</div>
                      </div>
                      <div className="pravidhi-micro">
                        <div className="h">Performance budgets</div>
                        <div className="p">Latency/reliability targets included in delivery gates.</div>
                      </div>
                      <div className="pravidhi-micro">
                        <div className="h">Ops-ready from day one</div>
                        <div className="p">Metrics, logs, alerting, and upgrade pathways.</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right: “technology map” (rows + rules, no cards) */}
                <div className="md:col-span-7">
                  <Reveal threshold={0.35} rootMargin="0px 0px -35% 0px" delayMs={120}>
                    <div className="pravidhi-map">
                      <div className="pravidhi-map__head">
                        <div className="k">Technology map</div>
                        <div className="t">A pragmatic stack, built for governance</div>
                      </div>

                      <div className="pravidhi-map__grid">
                        <div className="pravidhi-mapItem">
                          <div className="a a--blue" aria-hidden />
                          <div className="meta">
                            <div className="h">Frontend</div>
                            <div className="p">Next.js • TypeScript • Design systems</div>
                          </div>
                        </div>

                        <div className="pravidhi-mapItem">
                          <div className="a a--teal" aria-hidden />
                          <div className="meta">
                            <div className="h">Backend</div>
                            <div className="p">API architecture • services • integrations</div>
                          </div>
                        </div>

                        <div className="pravidhi-mapItem">
                          <div className="a a--violet" aria-hidden />
                          <div className="meta">
                            <div className="h">Data & AI</div>
                            <div className="p">Pipelines • analytics • practical ML</div>
                          </div>
                        </div>

                        <div className="pravidhi-mapItem">
                          <div className="a a--amber" aria-hidden />
                          <div className="meta">
                            <div className="h">Security</div>
                            <div className="p">Access control • auditability • policy enforcement</div>
                          </div>
                        </div>

                        <div className="pravidhi-mapItem">
                          <div className="a a--coral" aria-hidden />
                          <div className="meta">
                            <div className="h">Cloud & DevOps</div>
                            <div className="p">CI/CD • containers • reliability engineering</div>
                          </div>
                        </div>

                        <div className="pravidhi-mapItem">
                          <div className="a a--slate" aria-hidden />
                          <div className="meta">
                            <div className="h">Observability</div>
                            <div className="p">Metrics • logs • alerting • dashboards</div>
                          </div>
                        </div>
                      </div>

                      <div className="pravidhi-map__tags">
                        <span className="pravidhi-pill pill--blue">Architecture-first</span>
                        <span className="pravidhi-pill pill--teal">Automation</span>
                        <span className="pravidhi-pill pill--violet">Testing gates</span>
                        <span className="pravidhi-pill pill--amber">Governance</span>
                        <span className="pravidhi-pill pill--slate">Observability</span>
                      </div>
                    </div>
                  </Reveal>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* DELIVERY (already non-box, now made more colorful + sharper typography) */}
      <section id="deliver" className="pravidhi-section theme--amber">
        <div className="pravidhi-section__bg" aria-hidden>
          <div className="pravidhi-section__mesh" />
          <div className="pravidhi-section__grid" />
          <div className="pravidhi-section__noise" />
          <div className="pravidhi-section__sweep" />
        </div>

        <div className="relative z-[1]">
          <div className="pravidhi-container">
            <Reveal threshold={0.35} rootMargin="0px 0px -35% 0px">
              <div className="grid gap-10 md:grid-cols-12 md:items-start">
                <div className="md:col-span-5">
                  <Eyebrow>Delivery</Eyebrow>
                  <div className="mt-3 text-xs text-spaced text-[rgba(11,30,58,0.55)]">
                    OUTCOMES • RELIABILITY • LONG-TERM OWNERSHIP
                  </div>

                  <H2 className="mt-4">
                    From{" "}
                    <span className="studio-gradient-text font-extrabold">launch</span>{" "}
                    to{" "}
                    <span className="studio-gradient-text font-extrabold">lasting</span>{" "}
                    — with stability built-in.
                  </H2>

                  <P className="mt-4 max-w-xl">
                    We deliver systems that remain stable under real-world load, evolve safely,
                    and stay maintainable for internal teams—especially in regulated environments.
                  </P>

                  <div className="mt-8">
                    <div className="pravidhi-rule" />
                    <div className="pravidhi-lines mt-4">
                      <div className="pravidhi-line">
                        <span className="dot dot--blue" aria-hidden />
                        <div>
                          <div className="t">Dependable platforms</div>
                          <div className="s">Performance budgets, reliability targets, clean architecture.</div>
                        </div>
                      </div>

                      <div className="pravidhi-line">
                        <span className="dot dot--coral" aria-hidden />
                        <div>
                          <div className="t">Controlled integrations</div>
                          <div className="s">Versioned contracts, validation, safe rollouts.</div>
                        </div>
                      </div>

                      <div className="pravidhi-line">
                        <span className="dot dot--teal" aria-hidden />
                        <div>
                          <div className="t">Secure-by-default</div>
                          <div className="s">Auditability and governance built into delivery.</div>
                        </div>
                      </div>

                      <div className="pravidhi-line">
                        <span className="dot dot--violet" aria-hidden />
                        <div>
                          <div className="t">Measurable AI enablement</div>
                          <div className="s">Automation and insights tied to operational KPIs.</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 flex flex-wrap justify-center gap-6 text-center md:justify-start md:text-left">
                    <Link href="/services" className="pravidhi-linkAccent">
                      See delivery capabilities
                    </Link>
                    <Link href="#contact" className="pravidhi-linkMuted">
                      Start a conversation
                    </Link>
                  </div>
                </div>

                <div className="md:col-span-7">
                  <Reveal threshold={0.35} rootMargin="0px 0px -35% 0px" delayMs={120}>
                    <div className="pravidhi-rail2">
                      <div className="title">Outcome areas</div>

                      <div className="item">
                        <div className="k">Citizen-scale systems</div>
                        <div className="v">High availability, clean flows, predictable performance.</div>
                      </div>

                      <div className="item">
                        <div className="k">Workflow modernization</div>
                        <div className="v">From manual processes to governed digital operations.</div>
                      </div>

                      <div className="item">
                        <div className="k">Integrations that don’t break</div>
                        <div className="v">Contracts, validation, observability, safe evolution.</div>
                      </div>

                      <div className="item">
                        <div className="k">AI-assisted operations</div>
                        <div className="v">Decision-support—human in control.</div>
                      </div>

                      <div className="pravidhi-marquee" aria-label="Domains">
                        <div className="track">
                          <span>Public Sector</span><span>Healthcare</span><span>Education</span>
                          <span>Enterprise Systems</span><span>Cloud Platforms</span><span>Security</span>
                          <span>Integrations</span><span>AI/ML</span><span>Observability</span>
                        </div>
                        <div className="track" aria-hidden>
                          <span>Public Sector</span><span>Healthcare</span><span>Education</span>
                          <span>Enterprise Systems</span><span>Cloud Platforms</span><span>Security</span>
                          <span>Integrations</span><span>AI/ML</span><span>Observability</span>
                        </div>
                      </div>
                    </div>
                  </Reveal>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ENGAGEMENT MODEL (minimal + modern) */}
      <section id="engagement" className="pravidhi-section theme--coral">
        <div className="pravidhi-section__bg" aria-hidden>
          <div className="pravidhi-section__mesh" />
          <div className="pravidhi-section__grid" />
          <div className="pravidhi-section__noise" />
        </div>

        <div className="relative z-[1]">
          <div className="pravidhi-container">
            <Reveal threshold={0.35} rootMargin="0px 0px -35% 0px">
              <div className="grid gap-10 md:grid-cols-12 md:items-start">
                <div className="md:col-span-6">
                  <Eyebrow>Engagement model</Eyebrow>
                  <div className="mt-3 text-xs text-spaced text-[rgba(11,30,58,0.55)]">
                    BUILD • MODERNIZE • OPERATE
                  </div>

                  <H2 className="mt-4">
                    An engagement built for{" "}
                    <span className="studio-gradient-text font-extrabold">clarity</span>,
                    timeline discipline, and ownership.
                  </H2>

                  <P className="mt-4 max-w-xl">
                    Whether building from zero, upgrading legacy workflows, or stabilizing operations—
                    delivery stays transparent, measurable, and maintainable.
                  </P>

                  <div className="mt-8">
                    <div className="pravidhi-rule" />
                    <div className="pravidhi-steps">
                      <div className="row">
                        <div className="num">01</div>
                        <div className="body">
                          <div className="h">Build</div>
                          <div className="p">New platforms, portals, mobile apps, and workflows.</div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="num">02</div>
                        <div className="body">
                          <div className="h">Modernize</div>
                          <div className="p">Refactoring, integrations, performance & security uplift.</div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="num">03</div>
                        <div className="body">
                          <div className="h">Operate</div>
                          <div className="p">Monitoring, reliability, upgrades, continuous improvement.</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="md:col-span-6">
                  <Reveal threshold={0.35} rootMargin="0px 0px -35% 0px" delayMs={120}>
                    <div className="pravidhi-worklist2">
                      <div className="title">How we work with your team</div>

                      <div className="item">
                        <div className="k">Clear scope, clear milestones</div>
                        <div className="v">Deliverables, acceptance criteria, and governance built-in.</div>
                      </div>

                      <div className="item">
                        <div className="k">Weekly visibility</div>
                        <div className="v">Progress, risks, and decisions—communicated without noise.</div>
                      </div>

                      <div className="item">
                        <div className="k">Documentation-first</div>
                        <div className="v">Runbooks, architecture notes, and handover-ready delivery.</div>
                      </div>

                      <div className="item">
                        <div className="k">Measured quality</div>
                        <div className="v">Testing gates, performance checks, reliability targets.</div>
                      </div>

                      <div className="mt-8 flex flex-wrap justify-center gap-6 text-center md:justify-start md:text-left">
                        <Link href="#contact" className="pravidhi-btn-primary">
                          Request a proposal
                        </Link>
                        <Link href="/services" className="pravidhi-btn-secondary">
                          View service lines
                        </Link>
                      </div>
                    </div>
                  </Reveal>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CONTACT CTA (redesigned: not boxy, no hard borders) */}
      <section id="contact" className="pravidhi-cta">
        <div className="pravidhi-cta__bg" aria-hidden>
          <div className="pravidhi-cta__mesh" />
          <div className="pravidhi-cta__noise" />
          <div className="pravidhi-cta__halo" />
        </div>

        <div className="relative z-[1]">
          <div className="pravidhi-container">
            <Reveal threshold={0.3} rootMargin="0px 0px -30% 0px">
              <div className="pravidhi-cta__inner">
                <div className="text-xs text-spaced text-[rgba(11,30,58,0.55)]">
                  {home.finalCta.titleSpaced}
                </div>

                <div className="mt-4 max-w-3xl md:mx-auto">
                  <H2>{home.finalCta.title}</H2>
                  <P className="mt-4">
                    Tell us what you are building. We’ll respond with a clear plan, timeline, and next steps.
                  </P>

                  <div className="mt-8 flex flex-wrap justify-center gap-6 text-center">
                    <Button href={home.finalCta.cta.href} size="lg">
                      {home.finalCta.cta.label}
                    </Button>
                    <Link href="/services" className="pravidhi-btn-secondary">
                      View service lines
                    </Link>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  );
}
