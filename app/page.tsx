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
      <Section>
        <Reveal>
          <div className="grid items-center gap-10 md:grid-cols-12">
            <div className="space-y-4 md:col-span-6">
              <Eyebrow>{home.intro.kicker}</Eyebrow>
              <div className="text-xs text-spaced text-[rgba(var(--muted),0.95)]">
                {home.intro.titleSpaced}
              </div>
              <H2>{home.intro.title}</H2>
              <P className="max-w-xl">{home.intro.body}</P>
              <Button href={home.intro.cta.href} variant="secondary">
                {home.intro.cta.label}
              </Button>
            </div>

            <div className="md:col-span-6">
              <div className="rounded-xl2 glass overflow-hidden">
                <div className="p-4 md:p-6">
                  <div className="relative aspect-[16/10] overflow-hidden rounded-xl2 border border-[rgb(var(--border))] bg-[rgba(255,255,255,0.03)]">
                    <Image
                      src={home.intro.image}
                      alt={home.intro.imageAlt}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </Section>

      {/* FEATURES (anchor target) */}
      <div id="features" />
      <Section>
        <Reveal>
          <div className="space-y-4">
            <Eyebrow>{home.featureTabs.kicker}</Eyebrow>
            <div className="text-xs text-spaced text-[rgba(var(--muted),0.95)]">
              {home.featureTabs.titleSpaced}
            </div>
            <H2>{home.featureTabs.title}</H2>
            <P className="max-w-xl">{home.featureTabs.body}</P>
            <FeatureTabs
              items={home.featureTabs.items.map((i) => ({
                k: i.n,          // unique key used by tabs
                n: i.n,          // keep numbering
                title: i.title,
                desc: i.blurb,   // FeatureTabs expects desc
                img: i.image,    // FeatureTabs expects img
                alt: i.alt,
              }))}
            />
          </div>

        </Reveal>
      </Section>

      {/* PLATFORM / MODULES GRID */}
      <Section>
        <Reveal>
          <div className="space-y-4">
            <Eyebrow>{home.platforms.kicker}</Eyebrow>
            <div className="text-xs text-spaced text-[rgba(var(--muted),0.95)]">
              {home.platforms.titleSpaced}
            </div>
            <H2>{home.platforms.title}</H2>
            <P className="max-w-3xl">{home.platforms.body}</P>
            <Button href={home.platforms.cta.href} variant="secondary">
              {home.platforms.cta.label}
            </Button>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-4">
            {home.platforms.items.map((p) => (
              <Card key={p.tag} className="group">
                <CardBody className="space-y-3">
                  <div className="text-xs text-spaced text-[rgba(var(--muted),0.95)]">
                    {p.tag}
                  </div>
                  <H3>{p.title}</H3>
                  <P className="text-sm">{p.blurb}</P>
                  <div className="relative mt-3 aspect-[4/3] overflow-hidden rounded-xl border border-[rgb(var(--border))] bg-[rgba(255,255,255,0.03)]">
                    <Image
                      src={p.image}
                      alt={`${p.tag} visual`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                    />
                  </div>
                </CardBody>
              </Card>
            ))}
          </div>
        </Reveal>
      </Section>

      {/* OUTCOMES STRIP */}
      <Section className="py-12 md:py-14">
        <div className="grid gap-4 md:grid-cols-4">
          {home.outcomes.stats.map((s) => (
            <Card key={s.label}>
              <CardBody>
                <div className="text-2xl font-semibold tracking-tight">{s.value}</div>
                <div className="mt-1 text-xs text-spaced text-[rgba(var(--muted),0.95)]">
                  {s.label}
                </div>
                {s.note ? (
                  <div className="mt-2 text-xs text-[rgba(var(--fg),0.55)]">{s.note}</div>
                ) : null}
              </CardBody>
            </Card>
          ))}
        </div>
      </Section>

      {/* TRUST / COMPLIANCE */}
      <Section>
        <Reveal>
          <Card>
            <CardBody className="space-y-4">
              <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                <div className="space-y-2">
                  <div className="text-xs text-spaced text-[rgba(var(--muted),0.95)]">Trust</div>
                  <H2>{home.compliance.title}</H2>
                  <P className="max-w-2xl">
                    Replace these placeholders with your verified controls, certifications,
                    and implementation policies.
                  </P>
                </div>
                <Button href="/product#security" variant="secondary">
                  Security & governance →
                </Button>
              </div>

              <div className="grid gap-2 md:grid-cols-3">
                {home.compliance.items.map((it) => (
                  <div
                    key={it}
                    className="rounded-xl border border-[rgba(255,255,255,0.10)] bg-[rgba(255,255,255,0.03)] px-4 py-3 text-sm text-[rgba(var(--fg),0.78)]"
                  >
                    {it}
                  </div>
                ))}
              </div>
            </CardBody>
          </Card>
        </Reveal>
      </Section>

      {/* TEAM */}
      <Section>
        <Reveal>
          <div className="grid items-center gap-8 md:grid-cols-12">
            <div className="space-y-3 md:col-span-8">
              <div className="text-xs text-spaced text-[rgba(var(--muted),0.95)]">
                {home.team.titleSpaced}
              </div>
              <H2>{home.team.title}</H2>
              <P className="max-w-3xl">{home.team.body}</P>
            </div>
            <div className="flex md:col-span-4 md:justify-end">
              <Button href={home.team.cta.href} variant="secondary">
                {home.team.cta.label}
              </Button>
            </div>
          </div>
        </Reveal>
      </Section>

      {/* TESTIMONIALS */}
      <Section>
        <Reveal>
          <div className="space-y-3">
            <div className="text-xs text-spaced text-[rgba(var(--muted),0.95)]">
              {home.testimonials.titleSpaced}
            </div>
            <H2>What stakeholders say (placeholders)</H2>
            <P className="max-w-2xl">
              Replace with real program references, measurable outcomes, and procurement-friendly language.
            </P>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {home.testimonials.items.map((t, idx) => (
              <Card key={idx}>
                <CardBody className="space-y-4">
                  <p className="leading-relaxed text-[rgba(var(--fg),0.78)]">“{t.quote}”</p>
                  <div className="text-sm">
                    <div className="font-semibold">{t.name}</div>
                    <div className="text-[rgba(var(--fg),0.65)]">
                      {t.role} • {t.org}
                    </div>
                  </div>
                </CardBody>
              </Card>
            ))}
          </div>
        </Reveal>
      </Section>

      {/* INSIGHTS */}
      <Section>
        <Reveal>
          <div className="flex items-end justify-between gap-4">
            <div className="space-y-2">
              <Eyebrow>{home.insights.kicker}</Eyebrow>
              <div className="text-xs text-spaced text-[rgba(var(--muted),0.95)]">
                {home.insights.titleSpaced}
              </div>
            </div>
            <Button href={home.insights.cta.href} variant="ghost">
              {home.insights.cta.label} →
            </Button>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {home.insights.items.map((n) => (
              <Card key={n.title} className="group">
                <CardBody className="space-y-3">
                  <div className="text-xs text-[rgba(var(--fg),0.60)]">{n.date}</div>
                  <H3>{n.title}</H3>
                  <P className="text-sm">{n.blurb}</P>
                  <Link href={n.href} className="text-sm text-[rgba(var(--accent),0.95)] hover:underline">
                    Read more →
                  </Link>
                </CardBody>
              </Card>
            ))}
          </div>
        </Reveal>
      </Section>

      {/* FINAL CTA (anchor target) */}
      <div id="contact" />
      <Section className="pt-6">
        <Reveal>
          <div className="relative overflow-hidden rounded-xl2 border border-[rgba(255,255,255,0.10)] bg-[rgba(255,255,255,0.03)]">
            <div className="absolute inset-0 opacity-60">
              <Image src={home.finalCta.bg} alt="CTA background placeholder" fill className="object-cover" />
            </div>
            <div className="relative p-7 md:p-10">
              <div className="text-xs text-spaced text-[rgba(var(--muted),0.95)]">
                {home.finalCta.titleSpaced}
              </div>
              <div className="mt-3 max-w-3xl space-y-3">
                <H2>{home.finalCta.title}</H2>
                <Button href={home.finalCta.cta.href} size="lg">
                  {home.finalCta.cta.label}
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </Section>
    </main>
  );
}
