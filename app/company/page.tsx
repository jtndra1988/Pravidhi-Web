// app/about/page.tsx
import Link from "next/link";
import { Eyebrow, H2, H3, P } from "@/components/ui/Typography";

export default function AboutPage() {
  return (
    <main className="zyposoft-site text-[#0b1e3a]">
      {/* HERO / INTRO */}
      <section className="zyposoft-section theme--teal">
        <div className="zyposoft-section__bg" aria-hidden>
          <div className="zyposoft-section__mesh" />
          <div className="zyposoft-section__grid" />
          <div className="zyposoft-section__noise" />
          {/* keep sweep consistent with rest of site; remove if you want 100% static background */}
          <div className="zyposoft-section__sweep" />
        </div>

        <div className="relative z-[1]">
          <div className="zyposoft-container">
            <div className="grid gap-10 md:grid-cols-12 md:items-start">
              {/* Left */}
              <div className="md:col-span-7">
                <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(27,89,167,0.14)] bg-[rgba(27,89,167,0.06)] px-3 py-2">
                  <Eyebrow>About ZyloSoft</Eyebrow>
                </div>

                <div className="mt-6 text-xs font-extrabold tracking-[0.22em] text-[rgba(11,30,58,0.55)]">
                  TRUSTED ENGINEERING • AI ENABLEMENT • PUBLIC-SCALE DELIVERY
                </div>

                <H2 className="mt-4">
                  We build{" "}
                  <span className="studio-gradient-text font-black">
                    state-grade software
                  </span>{" "}
                  that stays reliable in the real world.
                </H2>

                <P className="mt-5 max-w-2xl">
                  ZyloSoft is a software engineering company focused on
                  building secure, governable platforms for governments and regulated
                  organizations. We combine product engineering discipline with applied AI
                  to deliver systems that scale, remain operable, and earn public trust.
                </P>

                <div className="mt-7 flex flex-wrap gap-2">
                  <span className="zyposoft-pill pill--blue">Security-first architecture</span>
                  <span className="zyposoft-pill pill--teal">Operational reliability</span>
                  <span className="zyposoft-pill pill--violet">AI for measurable outcomes</span>
                  <span className="zyposoft-pill pill--slate">Interoperable by design</span>
                </div>

                <div className="mt-8">
                  <div className="zyposoft-rule" />
                  <div className="mt-5 grid gap-4 md:grid-cols-3 zyposoft-micro">
                    <div>
                      <div className="h">Built for accountability</div>
                      <div className="p">
                        Clear ownership, auditability, and controls so systems remain
                        governable beyond launch.
                      </div>
                    </div>
                    <div>
                      <div className="h">Designed to scale</div>
                      <div className="p">
                        Performance budgets, observability, and resilience baked in early no
                        late-stage firefighting.
                      </div>
                    </div>
                    <div>
                      <div className="h">AI that is usable</div>
                      <div className="p">
                        Practical automation and insights tied to real KPIs reducing delays,
                        friction, and operational load.
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right */}
              <div className="md:col-span-5">
                <div className="zyposoft-quote">
                  <div className="zyposoft-quote__bar" aria-hidden />
                  <div className="zyposoft-quote__k">Our positioning</div>
                  <div className="zyposoft-quote__t">
                    “Engineering discipline first. AI second. Outcomes always.”
                  </div>
                  <div className="zyposoft-quote__s">
                    We do not treat AI as a feature. We treat it as an advantage that only
                    works when the foundation is secure, reliable, and measurable.
                  </div>
                </div>

                <div className="mt-8">
                  <div className="zyposoft-rule" />
                </div>

                <div className="mt-6">
                  <div className="text-xs font-extrabold tracking-[0.22em] text-[rgba(11,30,58,0.55)]">
                    WHERE WE ADD THE MOST VALUE
                  </div>

                  {/* Keep these to minimal “lines” not cards */}
                  <div className="mt-4 zyposoft-lines">
                    <div className="zyposoft-line">
                      <span className="dot dot--blue" aria-hidden />
                      <div>
                        <div className="t">State-scale health systems</div>
                        <div className="s">
                          Platforms like ArogyaCore where uptime, privacy, and governance are
                          non-negotiable.
                        </div>
                      </div>
                    </div>

                    <div className="zyposoft-line">
                      <span className="dot dot--teal" aria-hidden />
                      <div>
                        <div className="t">Citizen-facing experiences</div>
                        <div className="s">
                          Journeys that are fast, accessible, and consistent across mobile,
                          tablets, and desktops.
                        </div>
                      </div>
                    </div>

                    <div className="zyposoft-line">
                      <span className="dot dot--violet" aria-hidden />
                      <div>
                        <div className="t">AI-enabled operations</div>
                        <div className="s">
                          Triage support, anomaly detection, workflow automation, and
                          decision-support dashboards.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <div className="zyposoft-rule" />
                  <div className="mt-4 text-sm font-extrabold text-[rgba(11,30,58,0.72)]">
                    A simple promise:
                  </div>
                  <div className="mt-2 text-sm font-semibold leading-relaxed text-[rgba(11,30,58,0.60)]">
                    If it cannot be operated cleanly by internal teams, it is not finished.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION + VISION (no cards, editorial style) */}
      <section className="zyposoft-section theme--violet">
        <div className="zyposoft-section__bg" aria-hidden>
          <div className="zyposoft-section__mesh" />
          <div className="zyposoft-section__grid" />
          <div className="zyposoft-section__noise" />
          <div className="zyposoft-section__sweep" />
        </div>

        <div className="relative z-[1]">
          <div className="zyposoft-container">
            <div className="grid gap-10 md:grid-cols-12 md:items-start">
              <div className="md:col-span-5">
                <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(27,89,167,0.14)] bg-[rgba(27,89,167,0.06)] px-3 py-2">
                  <Eyebrow>Mission & Vision</Eyebrow>
                </div>
                <H2 className="mt-4">
                  Direction that stays consistent even as the system evolves.
                </H2>
                <P className="mt-4 max-w-xl">
                  We work best with organizations that need reliable platforms: systems that
                  must remain dependable, governable, and secure for years not quarters.
                </P>

                <div className="mt-7 flex flex-wrap gap-2">
                  <span className="zyposoft-pill pill--blue">Privacy & compliance</span>
                  <span className="zyposoft-pill pill--amber">Measurable delivery</span>
                  <span className="zyposoft-pill pill--teal">Operational readiness</span>
                </div>
              </div>

              <div className="md:col-span-7">
                <div className="grid gap-8 md:grid-cols-2">
                  <div className="zyposoft-quote">
                    <div className="zyposoft-quote__bar" aria-hidden />
                    <div className="zyposoft-quote__k">Mission</div>
                    <div className="zyposoft-quote__t">
                      Make public scale software reliable, secure, and decision ready.
                    </div>
                    <div className="zyposoft-quote__s">
                      We help organizations modernize systems with
                      a foundation of governance, availability, and user centered delivery
                      enhanced by AI where it genuinely improves outcomes.
                    </div>
                  </div>

                  <div className="zyposoft-quote">
                    <div className="zyposoft-quote__bar" aria-hidden />
                    <div className="zyposoft-quote__k">Vision</div>
                    <div className="zyposoft-quote__t">
                      A future where states can sense, respond, and improve population health
                      continuously.
                    </div>
                    <div className="zyposoft-quote__s">
                      Real-time signals, operational intelligence, and trustworthy digital
                      workflows so policy and execution can move faster than emerging risk.
                    </div>
                  </div>
                </div>

                <div className="mt-10">
                  <div className="zyposoft-rule" />
                  <div className="mt-5 zyposoft-stack">
                    <div className="row">
                      <div className="num">01</div>
                      <div>
                        <div className="h">Clarity before complexity</div>
                        <div className="p">
                          We define what “good” looks like (SLOs, outcomes, ownership) before
                          adding more moving parts.
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="num">02</div>
                      <div>
                        <div className="h">Systems that survive scale</div>
                        <div className="p">
                          Performance, resilience, and observability are built in earlyso
                          adoption does not break the system.
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="num">03</div>
                      <div>
                        <div className="h">AI with guardrails</div>
                        <div className="p">
                          We deploy AI where it reduces operational load and improves
                          decisions backed by privacy, audit, and governance controls.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES (worklist; minimal, no cards) */}
      <section className="zyposoft-section theme--teal">
        <div className="zyposoft-section__bg" aria-hidden>
          <div className="zyposoft-section__mesh" />
          <div className="zyposoft-section__grid" />
          <div className="zyposoft-section__noise" />
          <div className="zyposoft-section__sweep" />
        </div>

        <div className="relative z-[1]">
          <div className="zyposoft-container">
            <div className="grid gap-10 md:grid-cols-12 md:items-start">
              <div className="md:col-span-5">
                <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(27,89,167,0.14)] bg-[rgba(27,89,167,0.06)] px-3 py-2">
                  <Eyebrow>Values</Eyebrow>
                </div>

                <H2 className="mt-4">What we will not compromise on.</H2>
                <P className="mt-4 max-w-xl">
                  These values are practical engineering decisions. They shape how we
                  architect, ship, measure, and support every platform we deliver.
                </P>
              </div>

              <div className="md:col-span-7">
                <div className="zyposoft-worklist">
                  <div className="title">VALUES IN PRACTICE</div>

                  <div className="item">
                    <div className="k">Public trust by design</div>
                    <div className="v">
                      Privacy, security, and transparency are treated as first-class product
                      features not compliance paperwork.
                    </div>
                  </div>

                  <div className="item">
                    <div className="k">Evidence over hype</div>
                    <div className="v">
                      We measure outcomes with real metrics: latency, uptime, adoption,
                      turnaround time, and operational cost.
                    </div>
                  </div>

                  <div className="item">
                    <div className="k">Reliability is a product feature</div>
                    <div className="v">
                      SLOs, observability, and resilience are built in early so the system
                      remains stable under peak load.
                    </div>
                  </div>

                  <div className="item">
                    <div className="k">Governable AI</div>
                    <div className="v">
                      AI must be controllable: audit trails, human oversight, fallbacks, and
                      safe rollout patterns.
                    </div>
                  </div>

                  <div className="item">
                    <div className="k">Interoperability</div>
                    <div className="v">
                      Open integrations and clean interfaces so systems can evolve without
                      vendor lock-in or fragile dependencies.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
