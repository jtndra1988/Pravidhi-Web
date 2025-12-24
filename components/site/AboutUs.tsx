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
import { Eyebrow, H2, P } from "../ui/Typography";
import { Reveal } from "@/components/site/Reveal";
import AutoRotatingGlobe from "@/components/site/AutoRotatingGlobe";
export default function AboutUs() {

  return (
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
              {/* Left: statement + numbers (no cards) */}
              <div className="md:col-span-6">
                 <AutoRotatingGlobe points={120} maxLinks={3} speed={1} />
              </div>
              {/* Right: statement + numbers (no cards) */}
              <div className="md:col-span-6">
                <div className="eco-tech__eyebrow">
                  <span className="eco-tech__dot" aria-hidden />
                  <Eyebrow>About Pravidhi Softtech</Eyebrow>
                </div>
                {/* <Eyebrow>About Pravidhi Softtech</Eyebrow> */}
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
                  reliable platforms for public-sector and enterprise programs where availability,
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
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
