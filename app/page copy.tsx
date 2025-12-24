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
    <main className="bg-soft text-[#0b1e3a]">
      {/* FULL-SCREEN HERO */}
      <HeroAIStudio />

      {/* INTRO */}
      <section className="pravidhi-about">
        {/* Background layers to match hero language */}
        <div className="pravidhi-about__bg" aria-hidden>
          <div className="pravidhi-about__mesh" />
          <div className="pravidhi-about__grid" />
          <div className="pravidhi-about__noise" />
          <div className="pravidhi-about__orb orb--a" />
          <div className="pravidhi-about__orb orb--b" />
        </div>

        <div className="relative z-[1]">
          <div className="pravidhi-container">
            <Reveal threshold={0.35} rootMargin="0px 0px -35% 0px">
              <div className="grid items-start gap-10 md:grid-cols-12">
                {/* Right “capability canvas” (designer card) */}
                <div className="md:col-span-6">
                  <div className="pravidhi-about__canvas">
                    <div className="pravidhi-about__canvasSheen" aria-hidden />
                    <div className="pravidhi-about__canvasScan" aria-hidden />

                    <div className="pravidhi-about__canvasHeader">
                      <div className="tag">How we work</div>
                      <div className="title">A modern delivery system</div>
                      <div className="sub">
                        Minimal. Measurable. Built for long-term ownership.
                      </div>
                    </div>

                    <div className="pravidhi-about__steps">
                      <div className="step">
                        <div className="dot2" />
                        <div className="meta">
                          <div className="h">Discover</div>
                          <div className="p">
                            Stakeholder alignment, workflows, data surfaces, constraints.
                          </div>
                        </div>
                      </div>

                      <div className="step">
                        <div className="dot" />
                        <div className="meta">
                          <div className="h">Design</div>
                          <div className="p">
                            UX, information architecture, integration contracts, security.
                          </div>
                        </div>
                      </div>

                      <div className="step">
                        <div className="dot4" />
                        <div className="meta">
                          <div className="h">Build</div>
                          <div className="p">
                            Modular engineering, automation, QA gates, performance budgets.
                          </div>
                        </div>
                      </div>

                      <div className="step">
                        <div className="dot3" />
                        <div className="meta">
                          <div className="h">Operate</div>
                          <div className="p">
                            Monitoring, reliability, upgrades, and measurable outcomes.
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="pravidhi-about__chips">
                      <span className="chip1">AI/ML Engineering</span>
                      <span className="chip2">Web & Mobile</span>
                      <span className="chip3">Cloud & DevOps</span>
                      <span className="chip4">Security & Compliance</span>
                    </div>
                  </div>
                </div>
                {/* Right “capability canvas” */}
                {/* Left editorial column */}
                <div className="md:col-span-6">
                  <Eyebrow>About Pravidhi Softtech</Eyebrow>

                  <div className="mt-3 text-xs text-spaced text-[rgba(11,30,58,0.55)]">
                    ENGINEERING • AI • GOVERNMENT-GRADE DELIVERY
                  </div>

                  <H2 className="mt-4">
                    Building{" "}
                    <span className="studio-gradient-text font-extrabold">
                      trusted digital systems
                    </span>{" "}
                    with modern AI, data, and cloud engineering.
                  </H2>

                  <P className="mt-4 max-w-xl">
                    Pravidhi Softtech is a software development company focused on
                    building reliable, secure, and scalable platforms for public-sector
                    and enterprise use-cases, where availability, governance, and
                    measurable outcomes matter.
                  </P>

                  <div className="mt-7 grid gap-3 sm:grid-cols-3">
                    <div className="pravidhi-about__mini mini--delivery">
                      <div className="k">Delivery</div>
                      <div className="v">Government-grade execution</div>
                    </div>

                    <div className="pravidhi-about__mini mini--security">
                      <div className="k">Security</div>
                      <div className="v">Controls-first architecture</div>
                    </div>

                    <div className="pravidhi-about__mini mini--ai">
                      <div className="k">AI</div>
                      <div className="v">Practical, measurable automation</div>
                    </div>
                  </div>


                  <div className="mt-8 flex flex-wrap justify-center gap-6 text-center">
                    <Link href="/services" className="pravidhi-btn-primary">
                      Explore services
                    </Link>
                    <Link href="#contact" className="pravidhi-btn-secondary">
                      Talk to our team
                    </Link>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section >
      {/* OUR TECHNOLOGY */}
      <section id="technology" className="pravidhi-tech">
        {/* Background layers (match hero/about) */}
        <div className="pravidhi-tech__bg" aria-hidden>
          <div className="pravidhi-tech__mesh" />
          <div className="pravidhi-tech__grid" />
          <div className="pravidhi-tech__noise" />
          <div className="pravidhi-tech__scan" />
          <div className="pravidhi-tech__orb orb--a" />
          <div className="pravidhi-tech__orb orb--b" />
        </div>

        <div className="relative z-[1]">
          <div className="pravidhi-container">
            <Reveal threshold={0.35} rootMargin="0px 0px -35% 0px">
              <div className="grid items-start gap-10 md:grid-cols-12">
                {/* Left: editorial */}
                <div className="md:col-span-5">
                  <Eyebrow>Our Technology</Eyebrow>

                  <div className="mt-3 text-xs text-spaced text-[rgba(11,30,58,0.55)]">
                    MODERN STACK • SECURITY-FIRST • OPERATIONS-READY
                  </div>

                  <H2 className="mt-4">
                    Engineering that scales from{" "}
                    <span className="studio-gradient-text font-extrabold">
                      prototype to production
                    </span>{" "}
                    without rewrites.
                  </H2>

                  <P className="mt-4 max-w-xl">
                    We use a modern, proven technology stack with disciplined delivery
                    practices so systems remain fast, secure, and maintainable for years.
                  </P>

                  <div className="mt-6 space-y-3">
                    <div className="pravidhi-tech__principle">
                      <span className="tick" aria-hidden>✓</span>
                      <div>
                        <div className="t">Security by design</div>
                        <div className="s">Least-privilege, auditability, and controlled data flows.</div>
                      </div>
                    </div>

                    <div className="pravidhi-tech__principle">
                      <span className="tick" aria-hidden>✓</span>
                      <div>
                        <div className="t">Performance budgets</div>
                        <div className="s">Latency and reliability targets built into delivery.</div>
                      </div>
                    </div>

                    <div className="pravidhi-tech__principle">
                      <span className="tick" aria-hidden>✓</span>
                      <div>
                        <div className="t">Ops-ready from day one</div>
                        <div className="s">Monitoring, alerting, runbooks, and upgrade paths.</div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-7 flex flex-wrap justify-center gap-6 text-center md:justify-start md:text-left">
                    <Link href="/services" className="pravidhi-btn-primary">
                      View capabilities
                    </Link>
                    <Link href="#contact" className="pravidhi-btn-secondary">
                      Discuss your roadmap
                    </Link>
                  </div>
                </div>

                {/* Right: tech canvas */}
                <div className="md:col-span-7">
                  <Reveal threshold={0.35} rootMargin="0px 0px -35% 0px" delayMs={120}>
                    <div className="pravidhi-tech__canvas">
                      <div className="pravidhi-tech__canvasSheen" aria-hidden />
                      <div className="pravidhi-tech__canvasRim" aria-hidden />

                      <div className="pravidhi-tech__canvasHead">
                        <div className="tag">Technology stack</div>
                        <div className="title">Modern engineering, delivered cleanly</div>
                        <div className="sub">
                          A pragmatic set of tools that keeps systems fast and governable.
                        </div>
                      </div>

                      <div className="pravidhi-tech__gridCards">
                        <div className="techCard card--a">
                          <div className="ic">
                            <svg viewBox="0 0 24 24" aria-hidden>
                              <path d="M4 5h16v10H4z" fill="none" stroke="currentColor" strokeWidth="2" />
                              <path d="M8 19h8" fill="none" stroke="currentColor" strokeWidth="2" />
                            </svg>
                          </div>
                          <div className="k">Frontend</div>
                          <div className="v">Next.js • TypeScript • UI systems</div>
                        </div>

                        <div className="techCard card--b">
                          <div className="ic">
                            <svg viewBox="0 0 24 24" aria-hidden>
                              <path d="M7 7h10v10H7z" fill="none" stroke="currentColor" strokeWidth="2" />
                              <path d="M4 12h3M17 12h3M12 4v3M12 17v3" fill="none" stroke="currentColor" strokeWidth="2" />
                            </svg>
                          </div>
                          <div className="k">Backend</div>
                          <div className="v">API architecture • services • integrations</div>
                        </div>

                        <div className="techCard card--c">
                          <div className="ic">
                            <svg viewBox="0 0 24 24" aria-hidden>
                              <path d="M12 3l8 4v6c0 5-3.5 8-8 8s-8-3-8-8V7z" fill="none" stroke="currentColor" strokeWidth="2" />
                              <path d="M9 12l2 2 4-5" fill="none" stroke="currentColor" strokeWidth="2" />
                            </svg>
                          </div>
                          <div className="k">Security</div>
                          <div className="v">Auth • access control • audit trails</div>
                        </div>

                        <div className="techCard card--d">
                          <div className="ic">
                            <svg viewBox="0 0 24 24" aria-hidden>
                              <path d="M4 18V6m6 12V6m6 12V6m4 9H4" fill="none" stroke="currentColor" strokeWidth="2" />
                            </svg>
                          </div>
                          <div className="k">Data & AI</div>
                          <div className="v">Pipelines • analytics • practical ML</div>
                        </div>

                        <div className="techCard card--e">
                          <div className="ic">
                            <svg viewBox="0 0 24 24" aria-hidden>
                              <path d="M7 14a4 4 0 010-8 5 5 0 019.5 1.5A3.5 3.5 0 1117 14H7z" fill="none" stroke="currentColor" strokeWidth="2" />
                              <path d="M8 18h8" fill="none" stroke="currentColor" strokeWidth="2" />
                            </svg>
                          </div>
                          <div className="k">Cloud & DevOps</div>
                          <div className="v">CI/CD • containers • reliability</div>
                        </div>

                        <div className="techCard card--f">
                          <div className="ic">
                            <svg viewBox="0 0 24 24" aria-hidden>
                              <path d="M4 12c3-6 13-6 16 0-3 6-13 6-16 0z" fill="none" stroke="currentColor" strokeWidth="2" />
                              <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" fill="none" stroke="currentColor" strokeWidth="2" />
                            </svg>
                          </div>
                          <div className="k">Observability</div>
                          <div className="v">Metrics • logs • alerting • dashboards</div>
                        </div>
                      </div>

                      {/* Designer chip rail */}
                      <div className="pravidhi-tech__chips">
                        <span className="chip1">Architecture-first</span>
                        <span className="chip2">Documentation-first</span>
                        <span className="chip3">Automation</span>
                        <span className="chip4">Testing gates</span>
                        <span className="chip5">Scalable deployments</span>
                      </div>
                    </div>
                  </Reveal>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
     
{/* WHAT WE DELIVER (non-box, outcome-led) */}
<section id="deliver" className="pravidhi-deliver">
  <div className="pravidhi-deliver__bg" aria-hidden>
    <div className="pravidhi-deliver__mesh" />
    <div className="pravidhi-deliver__grid" />
    <div className="pravidhi-deliver__noise" />
    <div className="pravidhi-deliver__sweep" />
  </div>

  <div className="relative z-[1]">
    <div className="pravidhi-container">
      <Reveal threshold={0.35} rootMargin="0px 0px -35% 0px">
        <div className="grid gap-10 md:grid-cols-12 md:items-start">
          <div className="md:col-span-5">
            <Eyebrow>What we deliver</Eyebrow>
            <div className="mt-3 text-xs text-spaced text-[rgba(11,30,58,0.55)]">
              OUTCOMES • RELIABILITY • LONG-TERM OWNERSHIP
            </div>

            <H2 className="mt-4">
              Software that moves from{" "}
              <span className="studio-gradient-text font-extrabold">launch</span>{" "}
              to{" "}
              <span className="studio-gradient-text font-extrabold">lasting</span>{" "}
              — without fragility.
            </H2>

            <P className="mt-4 max-w-xl">
              We build systems that stay stable under real-world load, evolve cleanly over time,
              and remain maintainable for internal teams—especially in government and regulated environments.
            </P>

            {/* Minimal “signal lines” (not boxes) */}
            <div className="mt-7 space-y-3">
              <div className="pravidhi-lineItem">
                <span className="dot" aria-hidden />
                <div>
                  <div className="t">Fast, dependable platforms</div>
                  <div className="s">Performance budgets, reliability targets, and clean architecture.</div>
                </div>
              </div>

              <div className="pravidhi-lineItem">
                <span className="dot" aria-hidden />
                <div>
                  <div className="t">Secure-by-default delivery</div>
                  <div className="s">Access control, auditability, and controlled integrations.</div>
                </div>
              </div>

              <div className="pravidhi-lineItem">
                <span className="dot" aria-hidden />
                <div>
                  <div className="t">AI that is measurable</div>
                  <div className="s">Automation and insights tied to actual operational KPIs.</div>
                </div>
              </div>

              <div className="pravidhi-lineItem">
                <span className="dot" aria-hidden />
                <div>
                  <div className="t">Ownership-friendly engineering</div>
                  <div className="s">Documentation-first and maintainable codebases—no vendor lock.</div>
                </div>
              </div>
            </div>

            {/* Minimal links */}
            <div className="mt-8 flex flex-wrap justify-center gap-6 text-center md:justify-start md:text-left">
              <Link href="/services" className="pravidhi-linkAccent">
                See our delivery capabilities
              </Link>
              <Link href="#contact" className="pravidhi-linkMuted">
                Start a conversation
              </Link>
            </div>
          </div>

          {/* Right: typographic “Outcomes rail” (no cards) */}
          <div className="md:col-span-7">
            <Reveal threshold={0.35} rootMargin="0px 0px -35% 0px" delayMs={120}>
              <div className="pravidhi-rail">
                <div className="pravidhi-rail__title">Outcome areas</div>

                <div className="pravidhi-rail__item">
                  <div className="k">Citizen-scale systems</div>
                  <div className="v">High availability, clean flows, predictable performance.</div>
                </div>

                <div className="pravidhi-rail__item">
                  <div className="k">Data + workflow modernization</div>
                  <div className="v">From manual processes to governed digital operations.</div>
                </div>

                <div className="pravidhi-rail__item">
                  <div className="k">Integrations that don’t break</div>
                  <div className="v">Contracts, validation, observability, and safe evolution.</div>
                </div>

                <div className="pravidhi-rail__item">
                  <div className="k">AI-assisted operations</div>
                  <div className="v">Automation and decision-support—human in control.</div>
                </div>

                {/* Marquee (no boxes, just typography) */}
                <div className="pravidhi-marquee" aria-label="Domains">
                  <div className="track">
                    <span>Public Sector</span>
                    <span>Healthcare</span>
                    <span>Education</span>
                    <span>Finance</span>
                    <span>Enterprise Systems</span>
                    <span>Cloud Platforms</span>
                    <span>Integrations</span>
                    <span>Security & Compliance</span>
                    <span>AI/ML</span>
                  </div>
                  <div className="track" aria-hidden>
                    <span>Public Sector</span>
                    <span>Healthcare</span>
                    <span>Education</span>
                    <span>Finance</span>
                    <span>Enterprise Systems</span>
                    <span>Cloud Platforms</span>
                    <span>Integrations</span>
                    <span>Security & Compliance</span>
                    <span>AI/ML</span>
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
{/* ENGAGEMENT MODEL (non-box, elegant) */}
<section id="engagement" className="pravidhi-engage">
  <div className="pravidhi-engage__bg" aria-hidden>
    <div className="pravidhi-engage__mesh" />
    <div className="pravidhi-engage__grid" />
    <div className="pravidhi-engage__noise" />
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
              Choose an engagement built for{" "}
              <span className="studio-gradient-text font-extrabold">clarity</span>,
              timeline discipline, and long-term ownership.
            </H2>

            <P className="mt-4 max-w-xl">
              Whether you are building from zero, upgrading legacy workflows, or stabilizing
              operations at scale—our delivery stays transparent and measurable.
            </P>

            {/* Big typographic stack (not boxes) */}
            <div className="pravidhi-stack mt-8">
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
                  <div className="p">Legacy refactoring, integrations, performance & security uplift.</div>
                </div>
              </div>

              <div className="row">
                <div className="num">03</div>
                <div className="body">
                  <div className="h">Operate</div>
                  <div className="p">Monitoring, reliability, upgrades, and continuous improvement.</div>
                </div>
              </div>
            </div>
          </div>

          <div className="md:col-span-6">
            <Reveal threshold={0.35} rootMargin="0px 0px -35% 0px" delayMs={120}>
              {/* “How we work” as a refined list with a vertical accent (no cards) */}
              <div className="pravidhi-worklist">
                <div className="title">How we work with your team</div>

                <div className="item">
                  <div className="k">Clear scope, clear milestones</div>
                  <div className="v">Requirements, deliverables, acceptance, and governance built-in.</div>
                </div>

                <div className="item">
                  <div className="k">Weekly visibility</div>
                  <div className="v">Progress, risks, decisions—communicated without noise.</div>
                </div>

                <div className="item">
                  <div className="k">Documentation-first</div>
                  <div className="v">Runbooks, architecture notes, and handover-ready deliverables.</div>
                </div>

                <div className="item">
                  <div className="k">Measured quality</div>
                  <div className="v">Testing gates, performance checks, and reliability targets.</div>
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
     


      {/* FINAL CTA (anchor target) */}
      <div id="contact" />
      <Section className="pt-6">
        <Reveal>
          <div className="relative overflow-hidden rounded-xl2 border border-[rgba(255,255,255,0.10)] bg-[rgba(255,255,255,0.03)]">
            <div className="absolute inset-0 opacity-60">
              <Image src={home.finalCta.bg} alt="CTA background placeholder" fill className="object-cover" />
            </div>
            <div className="relative p-7 text-center md:p-10">
              <div className="text-xs text-spaced text-[rgba(var(--muted),0.95)]">
                {home.finalCta.titleSpaced}
              </div>
              <div className="mt-3 max-w-3xl space-y-3 text-center md:mx-auto">
                <H2>{home.finalCta.title}</H2>
                <Button href={home.finalCta.cta.href} size="lg">
                  {home.finalCta.cta.label}
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </Section>
    </main >
  );
}
