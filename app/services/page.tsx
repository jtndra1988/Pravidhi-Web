// app/services/page.tsx
import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import { Eyebrow, H2, H3, P } from "@/components/ui/Typography";

type Service = {
  tag: string;
  title: string;
  blurb: string;
  bullets: string[];
};

type Step = { n: string; title: string; blurb: string };
type FAQ = { q: string; a: string };

const SERVICES = {
  hero: {
    eyebrow: "Services",
    strap: "PRODUCT ENGINEERING • AI ENABLEMENT • CLOUD DELIVERY",
    title: "Engineering that scales from first release to long-term operations.",
    body:
      "Pravidhi Softtech helps teams design, build, and operate software that stays reliable as it grows. We combine strong architecture, delivery discipline, and pragmatic AI enablement so your platform remains fast, secure, and maintainable over years, not months.",
    ctas: {
      primary: { label: "Book a call", href: "/#contact" },
      secondary: { label: "Explore services", href: "#offerings" },
    },
    proof: [
      { k: "Optimized for", v: "Speed + quality" },
      { k: "Built for", v: "Scale + stability" },
      { k: "Designed for", v: "Security + ownership" },
    ],
  },

  outcomes: {
    eyebrow: "Outcomes",
    title: "What you get when we deliver",
    items: [
      {
        title: "Predictable delivery",
        blurb:
          "Clear milestones, clean handoffs, and quality gates so releases stay controlled no last-minute chaos.",
      },
      {
        title: "Production confidence",
        blurb:
          "Monitoring, logs, and runbooks so issues are detectable early and fixes are fast and measurable.",
      },
      {
        title: "AI that ships responsibly",
        blurb:
          "AI-enabled features integrated with guardrails, evaluation, and rollout discipline practical, not experimental.",
      },
      {
        title: "Systems that don’t rewrite themselves",
        blurb:
          "Architecture and engineering standards that keep the platform evolvable without constant refactoring.",
      },
    ],
  },

  offerings: {
    eyebrow: "Offerings",
    title: "Services across the full lifecycle",
    lead:
      "From discovery to build, from reliability to AI enablement each engagement is structured to keep delivery measurable and operations calm.",
    items: [
      {
        tag: "FOUNDATION",
        title: "Architecture & System Design",
        blurb:
          "Design a foundation that survives scale: clean domains, stable APIs, and reliable data flow.",
        bullets: [
          "System architecture and domain modeling",
          "Service boundaries & API contracts",
          "Performance and scalability planning",
          "Security-by-design patterns",
        ],
      },
      {
        tag: "PRODUCT BUILD",
        title: "Full-Stack Product Engineering",
        blurb:
          "Build production-grade web platforms with strong UX, clean code, and maintainable velocity.",
        bullets: [
          "Web apps and internal tools",
          "Design systems & reusable components",
          "Backend services and integrations",
          "Testing strategy and QA automation",
        ],
      },
      {
        tag: "AI ENABLEMENT",
        title: "AI/ML Feature Integration",
        blurb:
          "Add AI capabilities to products with measurable value and responsible deployment practices.",
        bullets: [
          "LLM-powered workflows (assist, summarize, search)",
          "Model inference APIs and orchestration",
          "Evaluation, monitoring, and safety checks",
          "Human-in-the-loop + audit-ready logging",
        ],
      },
      {
        tag: "DATA",
        title: "Data Engineering & Analytics",
        blurb:
          "Build trusted data pipelines and dashboards that leadership can use for real decisions.",
        bullets: [
          "Ingestion, transformation, and validation",
          "Data quality checks and observability",
          "Analytics dashboards and KPI definitions",
          "Reporting pipelines and governance",
        ],
      },
      {
        tag: "CLOUD",
        title: "Cloud, DevOps & Observability",
        blurb:
          "Make delivery repeatable and operations visible with CI/CD, monitoring, and incident readiness.",
        bullets: [
          "CI/CD pipelines & environment strategy",
          "Logging, metrics, tracing, and alerts",
          "SLOs, performance budgets, and tuning",
          "Runbooks and production readiness reviews",
        ],
      },
      {
        tag: "SECURITY",
        title: "Security & Compliance Engineering",
        blurb:
          "Build security controls into the platform not as a late-stage checklist.",
        bullets: [
          "RBAC, audit trails, and access patterns",
          "Threat modeling and risk reviews",
          "Secure configuration and hardening",
          "Release approvals and change governance",
        ],
      },
    ] as Service[],
  },

  method: {
    eyebrow: "Method",
    title: "How we keep delivery controlled",
    steps: [
      {
        n: "01",
        title: "Align scope and success metrics",
        blurb:
          "We lock goals, constraints, and measurable outcomes early so execution stays focused and predictable.",
      },
      {
        n: "02",
        title: "Ship with quality gates",
        blurb:
          "Automated checks, reviews, and staged rollouts reduce regressions and make releases rollback-ready.",
      },
      {
        n: "03",
        title: "Operate with visibility",
        blurb:
          "Monitoring, incident workflows, and continuous improvement keep the platform stable as usage grows.",
      },
    ] as Step[],
  },

  engagement: {
    eyebrow: "Engagement",
    title: "Ways to work with us",
    items: [
      {
        n: "01",
        title: "Discovery & Architecture Sprint",
        blurb:
          "A short engagement to map the system, define standards, and produce a delivery blueprint your team can execute.",
      },
      {
        n: "02",
        title: "Build Team (Delivery Squad)",
        blurb:
          "A dedicated cross-functional team to deliver features end-to-end with predictable releases and ownership-friendly documentation.",
      },
      {
        n: "03",
        title: "Modernize & Stabilize",
        blurb:
          "Reduce outages and tech debt: performance tuning, refactors, observability, and safer delivery pipelines.",
      },
      {
        n: "04",
        title: "Operate & Improve (Retainer)",
        blurb:
          "Ongoing reliability and improvement: incidents, monitoring, release governance, and steady platform enhancements.",
      },
    ] as Step[],
  },

  who: {
    eyebrow: "Best fit",
    title: "Teams we help most",
    items: [
      "Startups shipping v1→v2 and needing stability without slowing down",
      "Enterprises modernizing legacy systems and improving reliability",
      "Product teams adding AI features and needing safe rollout practices",
      "Platforms with integrations, compliance needs, or operational complexity",
    ],
  },

  faq: [
    {
      q: "Do you only do AI projects?",
      a: "No. We build full platforms. AI is applied where it improves outcomes search, automation, support workflows, analytics not as a gimmick.",
    },
    {
      q: "Can you work with our existing developers?",
      a: "Yes. We can lead architecture and delivery standards while your team builds, or we can embed as a delivery squad.",
    },
    {
      q: "How do you keep timelines predictable?",
      a: "By fixing scope boundaries, using staged releases, enforcing quality gates, and tracking measurable delivery and reliability metrics.",
    },
    {
      q: "What do you deliver beyond code?",
      a: "Operational readiness: CI/CD, monitoring, runbooks, logging discipline, and documentation so your team can own the system confidently.",
    },
    {
      q: "Do you support after launch?",
      a: "Yes. We offer stabilization and retainer models focused on reliability, improvements, and controlled releases.",
    },
  ] as FAQ[],

  closing: {
    eyebrow: "Next step",
    title: "If you want predictable delivery and calm operations, let’s talk.",
    body:
      "Share your goals and constraints. We’ll propose a practical approach architecture, delivery plan, and engagement model aligned to your product stage and timeline.",
    ctas: {
      primary: { label: "Contact", href: "/#contact" },
      secondary: { label: "View Product", href: "/product" },
    },
  },
};

function StatRow({ k, v }: { k: string; v: string }) {
  const tone =
    k.includes("Optimized") ? "amber" : k.includes("Built") ? "teal" : "blue";

  const map: Record<string, { bg: string; ring: string; dot: string }> = {
    blue: {
      bg: "bg-[rgba(27,89,167,0.08)]",
      ring: "border-[rgba(27,89,167,0.18)]",
      dot: "bg-[rgba(27,89,167,0.88)]",
    },
    teal: {
      bg: "bg-[rgba(20,212,177,0.10)]",
      ring: "border-[rgba(20,212,177,0.18)]",
      dot: "bg-[rgba(20,212,177,0.92)]",
    },
    amber: {
      bg: "bg-[rgba(245,158,11,0.12)]",
      ring: "border-[rgba(245,158,11,0.22)]",
      dot: "bg-[rgba(245,158,11,0.92)]",
    },
  };
  const t = map[tone];

  return (
    <div className={`flex items-center justify-between gap-4 rounded-2xl border ${t.ring} ${t.bg} px-4 py-3`}>
      <div className="flex items-center gap-3">
        <span className={`h-2.5 w-2.5 rounded-full ${t.dot}`} aria-hidden />
        <div className="text-xs font-extrabold tracking-[0.18em] text-[rgba(11,30,58,0.55)]">{k}</div>
      </div>
      <div className="text-sm font-extrabold text-[rgba(11,30,58,0.78)]">{v}</div>
    </div>
  );
}

function FeatureList({ items }: { items: { title: string; blurb: string }[] }) {
  return (
    <div className="grid gap-5 sm:grid-cols-2">
      {items.map((it) => (
        <div key={it.title} className="zyposoft-quote">
          <div className="zyposoft-quote__bar" aria-hidden />
          <div className="zyposoft-quote__t">{it.title}</div>
          <div className="zyposoft-quote__s">{it.blurb}</div>
        </div>
      ))}
    </div>
  );
}

function ServicesCards({ items }: { items: Service[] }) {
  const themeFor = (tag: string) => {
    const t = tag.toLowerCase();
    if (t.includes("foundation")) return "blue";
    if (t.includes("product")) return "teal";
    if (t.includes("ai")) return "violet";
    if (t.includes("data")) return "amber";
    if (t.includes("cloud")) return "teal";
    if (t.includes("security")) return "blue";
    return "blue";
  };

  const theme = {
    blue: {
      pillBg: "bg-[rgba(27,89,167,0.10)]",
      pillRing: "ring-[rgba(27,89,167,0.22)]",
      dot: "bg-[rgba(27,89,167,0.90)]",
      line: "from-[rgba(27,89,167,0.58)]",
      wash:
        "radial-gradient(420px 220px at 16% 18%, rgba(27,89,167,0.18), transparent 60%)," +
        "radial-gradient(520px 260px at 90% 84%, rgba(27,89,167,0.10), transparent 62%)",
    },
    teal: {
      pillBg: "bg-[rgba(20,212,177,0.12)]",
      pillRing: "ring-[rgba(20,212,177,0.22)]",
      dot: "bg-[rgba(20,212,177,0.92)]",
      line: "from-[rgba(20,212,177,0.56)]",
      wash:
        "radial-gradient(420px 220px at 16% 18%, rgba(20,212,177,0.18), transparent 60%)," +
        "radial-gradient(520px 260px at 90% 84%, rgba(20,212,177,0.10), transparent 62%)",
    },
    amber: {
      pillBg: "bg-[rgba(245,158,11,0.14)]",
      pillRing: "ring-[rgba(245,158,11,0.20)]",
      dot: "bg-[rgba(245,158,11,0.92)]",
      line: "from-[rgba(245,158,11,0.55)]",
      wash:
        "radial-gradient(420px 220px at 16% 18%, rgba(245,158,11,0.18), transparent 60%)," +
        "radial-gradient(520px 260px at 90% 84%, rgba(245,158,11,0.10), transparent 62%)",
    },
    violet: {
      pillBg: "bg-[rgba(141,15,214,0.12)]",
      pillRing: "ring-[rgba(141,15,214,0.18)]",
      dot: "bg-[rgba(141,15,214,0.86)]",
      line: "from-[rgba(141,15,214,0.50)]",
      wash:
        "radial-gradient(420px 220px at 16% 18%, rgba(141,15,214,0.16), transparent 60%)," +
        "radial-gradient(520px 260px at 90% 84%, rgba(141,15,214,0.10), transparent 62%)",
    },
  } as const;

  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {items.map((s) => {
        const key = themeFor(s.tag);
        const t = theme[key];

        return (
          <div
            key={s.title}
            className="relative overflow-hidden rounded-[26px] border border-[rgba(11,30,58,0.10)] bg-[rgba(255,255,255,0.64)] shadow-[0_28px_80px_rgba(11,30,58,0.07)] backdrop-blur-md"
          >
            <div className="pointer-events-none absolute inset-0 opacity-95" style={{ background: t.wash }} aria-hidden />
            <div className={`absolute left-0 top-0 h-[3px] w-full bg-gradient-to-r ${t.line} to-transparent opacity-70`} aria-hidden />

            <div className="relative p-5">
              <div className="flex items-center justify-between gap-3">
                <div className={["inline-flex items-center gap-2 rounded-full px-3 py-2", "ring-1", t.pillRing, t.pillBg].join(" ")}>
                  <span className={`h-2.5 w-2.5 rounded-full ${t.dot}`} aria-hidden />
                  <span className="text-xs font-extrabold tracking-[0.22em] text-[rgba(11,30,58,0.62)]">{s.tag}</span>
                </div>
                <div className="text-[11px] font-extrabold tracking-[0.18em] text-[rgba(11,30,58,0.40)]">SERVICE</div>
              </div>

              <div className="mt-4 text-lg font-black tracking-[-0.02em] text-[rgba(11,30,58,0.86)]">{s.title}</div>
              <div className="mt-2 text-sm font-semibold leading-relaxed text-[rgba(11,30,58,0.62)]">{s.blurb}</div>

              <div className="mt-5 zyposoft-rule" />

              <ul className="mt-4 space-y-2 text-sm font-semibold text-[rgba(11,30,58,0.62)]">
                {s.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <span className={`mt-[7px] h-2 w-2 rounded-full ${t.dot}`} aria-hidden />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        );
      })}
    </div>
  );
}

function StepsStack({ items }: { items: Step[] }) {
  return (
    <div className="zyposoft-stack">
      {items.map((s) => (
        <div className="row" key={s.n}>
          <div className="num">{s.n}</div>
          <div>
            <div className="h">{s.title}</div>
            <div className="p">{s.blurb}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

function FAQList({ items }: { items: FAQ[] }) {
  return (
    <div className="space-y-4">
      {items.map((f) => (
        <div key={f.q} className="zyposoft-quote">
          <div className="zyposoft-quote__bar" aria-hidden />
          <div className="zyposoft-quote__t">{f.q}</div>
          <div className="zyposoft-quote__s">{f.a}</div>
        </div>
      ))}
    </div>
  );
}

export default function ServicesPage() {
  return (
    <main className="zyposoft-site text-[#0b1e3a]">
      {/* HERO */}
      {/* <section className="zyposoft-section theme--teal">
        <div className="zyposoft-section__bg" aria-hidden>
          <div className="zyposoft-section__mesh" />
          <div className="zyposoft-section__grid" />
          <div className="zyposoft-section__noise" />
          <div className="zyposoft-section__sweep" />
        </div>

        <div className="relative z-[1]">
          <div className="zyposoft-container">
            <div className="grid gap-10 md:grid-cols-12 md:items-start">
              <div className="md:col-span-7">
                <Reveal>
                  <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(27,89,167,0.18)] bg-[rgba(27,89,167,0.08)] px-3 py-2">
                    <span className="dot dot--blue" aria-hidden />
                    <Eyebrow>{SERVICES.hero.eyebrow}</Eyebrow>
                  </div>

                  <div className="mt-6 inline-flex items-center rounded-full border border-[rgba(20,212,177,0.18)] bg-[rgba(20,212,177,0.08)] px-4 py-2 text-xs font-extrabold tracking-[0.22em] text-[rgba(11,30,58,0.62)]">
                    {SERVICES.hero.strap}
                  </div>

                  <div className="mt-4 rounded-[24px] border border-[rgba(11,30,58,0.10)] bg-[rgba(255,255,255,0.62)] p-5 shadow-[0_20px_60px_rgba(11,30,58,0.06)] backdrop-blur-md">
                    <H2 className="text-[rgba(11,30,58,0.86)]">{SERVICES.hero.title}</H2>

                    <div className="mt-4 rounded-2xl border border-[rgba(11,30,58,0.08)] bg-[rgba(141,15,214,0.06)] px-4 py-4">
                      <P className="max-w-2xl">{SERVICES.hero.body}</P>
                    </div>

                    <div className="mt-6 flex flex-wrap gap-4">
                      <Link
                        href={SERVICES.hero.ctas.primary.href}
                        className="inline-flex items-center justify-center rounded-full bg-[rgba(27,89,167,0.92)] px-5 py-3 text-sm font-extrabold text-white shadow-[0_18px_44px_rgba(27,89,167,0.22)] transition-transform hover:translate-y-[-1px] active:translate-y-0"
                      >
                        {SERVICES.hero.ctas.primary.label}
                      </Link>

                      <Link
                        href={SERVICES.hero.ctas.secondary.href}
                        className="inline-flex items-center justify-center rounded-full border border-[rgba(245,158,11,0.28)] bg-[rgba(245,158,11,0.10)] px-5 py-3 text-sm font-extrabold text-[rgba(11,30,58,0.72)] shadow-[0_16px_40px_rgba(11,30,58,0.06)] transition-transform hover:translate-y-[-1px] active:translate-y-0"
                      >
                        {SERVICES.hero.ctas.secondary.label}
                      </Link>
                    </div>
                  </div>
                </Reveal>
              </div>

              <div className="md:col-span-5">
                <Reveal>
                  <div className="zyposoft-quote">
                    <div className="zyposoft-quote__bar" aria-hidden />
                    <div className="zyposoft-quote__k">How we work</div>
                    <div className="zyposoft-quote__t">Clarity, discipline, and systems that stay maintainable.</div>
                    <div className="zyposoft-quote__s">
                      We structure delivery so progress is visible, quality is repeatable, and ownership is clean after launch.
                      The goal is not just shipping it's sustainable engineering velocity.
                    </div>
                  </div>

                  <div className="mt-8 grid gap-3">
                    {SERVICES.hero.proof.map((x) => (
                      <StatRow key={x.k} k={x.k} v={x.v} />
                    ))}
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      

      {/* OFFERINGS */}
      <section id="offerings" className="zyposoft-section theme--teal">
        <div className="zyposoft-section__bg" aria-hidden>
          <div className="zyposoft-section__mesh" />
          <div className="zyposoft-section__grid" />
          <div className="zyposoft-section__noise" />
          <div className="zyposoft-section__sweep" />
        </div>

        <div className="relative z-[1]">
          <div className="zyposoft-container">
            <Reveal>
              <div className="max-w-4xl">
                <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(27,89,167,0.14)] bg-[rgba(27,89,167,0.06)] px-3 py-2">
                  <Eyebrow>{SERVICES.offerings.eyebrow}</Eyebrow>
                </div>
                <H2 className="mt-4">{SERVICES.offerings.title}</H2>
                <P className="mt-4">{SERVICES.offerings.lead}</P>
                <div className="mt-8 zyposoft-rule" />
              </div>
            </Reveal>

            <div className="mt-8">
              <Reveal>
                <ServicesCards items={SERVICES.offerings.items} />
              </Reveal>
            </div>
          </div>
        </div>
      </section>
{/* OUTCOMES */}
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
                <Reveal>
                  <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(27,89,167,0.14)] bg-[rgba(27,89,167,0.06)] px-3 py-2">
                    <Eyebrow>{SERVICES.outcomes.eyebrow}</Eyebrow>
                  </div>
                  <H2 className="mt-4">{SERVICES.outcomes.title}</H2>
                  <P className="mt-4 max-w-xl">
                    Practical engineering outcomes that improve delivery, reliability, and long-term maintainability.
                  </P>
                </Reveal>
              </div>

              <div className="md:col-span-7">
                <Reveal>
                  <FeatureList items={SERVICES.outcomes.items} />
                </Reveal>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* METHOD */}
      <section className="zyposoft-section theme--amber">
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
                <Reveal>
                  <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(27,89,167,0.14)] bg-[rgba(27,89,167,0.06)] px-3 py-2">
                    <Eyebrow>{SERVICES.method.eyebrow}</Eyebrow>
                  </div>
                  <H2 className="mt-4">{SERVICES.method.title}</H2>
                  <P className="mt-4 max-w-xl">
                    A structured approach that keeps execution fast, releases safe, and operations visible.
                  </P>
                </Reveal>
              </div>

              <div className="md:col-span-7">
                <Reveal>
                  <StepsStack items={SERVICES.method.steps} />
                </Reveal>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ENGAGEMENT */}
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
                <Reveal>
                  <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(27,89,167,0.14)] bg-[rgba(27,89,167,0.06)] px-3 py-2">
                    <Eyebrow>{SERVICES.engagement.eyebrow}</Eyebrow>
                  </div>
                  <H2 className="mt-4">{SERVICES.engagement.title}</H2>
                  <P className="mt-4 max-w-xl">
                    Choose an engagement model that matches your stage prototype, scale-up, modernization, or long-term ops.
                  </P>
                </Reveal>
              </div>

              <div className="md:col-span-7">
                <Reveal>
                  <StepsStack items={SERVICES.engagement.items} />
                </Reveal>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BEST FIT */}
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
              <div className="md:col-span-6">
                <Reveal>
                  <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(27,89,167,0.14)] bg-[rgba(27,89,167,0.06)] px-3 py-2">
                    <Eyebrow>{SERVICES.who.eyebrow}</Eyebrow>
                  </div>
                  <H2 className="mt-4">{SERVICES.who.title}</H2>
                  <div className="mt-6 zyposoft-rule" />
                </Reveal>
              </div>

              <div className="md:col-span-6">
                <Reveal>
                  <ul className="mt-2 space-y-3 text-sm font-semibold text-[rgba(11,30,58,0.62)]">
                    {SERVICES.who.items.map((x) => (
                      <li key={x} className="flex items-start gap-3">
                        <span className="dot dot--teal mt-[7px]" aria-hidden />
                        <span>{x}</span>
                      </li>
                    ))}
                  </ul>
                </Reveal>
              </div>
            </div>
          </div>
        </div>
      </section>

      

      
    </main>
  );
}
