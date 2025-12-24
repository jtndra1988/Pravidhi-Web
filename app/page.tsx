import Image from "next/image";
import Link from "next/link";

import { home } from "@/lib/content";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/site/Reveal";
import Button from "@/components/ui/Button";
import { Card, CardBody } from "@/components/ui/Card";
import { Eyebrow, H2, H3, P } from "@/components/ui/Typography";
import { HeroAIStudio } from "@/components/site/HeroAIStudio";
import AboutUs from "@/components/site/AboutUs";
import  TechnologySection  from "@/components/site/TechnologyMap";
import DeliverySection from "@/components/site/DeliverySection";
export default function HomePage() {
  return (
    <main className="pravidhi-site text-[#0b1e3a]">
      {/* HERO Section */}
      <HeroAIStudio />

      {/* ABOUT Us Section */}
      <AboutUs />

      {/* OUR TECHNOLOGY */}

      <TechnologySection />

      {/* DELIVERY (already non-box, now made more colorful + sharper typography) */}
      <DeliverySection />

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
