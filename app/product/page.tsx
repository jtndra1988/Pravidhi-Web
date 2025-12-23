import { product, site } from "@/lib/content";
import { Section } from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import { Card, CardBody } from "@/components/ui/Card";
import { Eyebrow, H2, H3, P } from "@/components/ui/Typography";
import Button from "@/components/ui/Button";
import Carousel from "@/components/ui/Carousel";

export default function ProductPage() {
  return (
    <>
      <Section className="pt-10 md:pt-14">
        <Reveal>
          <Eyebrow>{product.hero.titleSpaced}</Eyebrow>
          <H2 className="mt-3">{product.hero.title}</H2>
          <P className="mt-4 max-w-3xl">{product.hero.body}</P>

          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <Button href={site.ctas.primary.href} size="lg">{site.ctas.primary.label}</Button>
            <Button href="#modules" variant="secondary" size="lg">{site.ctas.secondary.label}</Button>
          </div>
        </Reveal>
      </Section>

      <Section>
        <Reveal>
          <H2>{product.howItWorks.title}</H2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {product.howItWorks.steps.map((s) => (
              <Card key={s.title}>
                <CardBody className="space-y-2">
                  <H3>{s.title}</H3>
                  <P className="text-sm">{s.blurb}</P>
                </CardBody>
              </Card>
            ))}
          </div>
        </Reveal>
      </Section>

      <Section>
        <Reveal>
          <H2>{product.ai.title}</H2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {product.ai.items.map((it) => (
              <Card key={it.title}>
                <CardBody className="space-y-2">
                  <H3>{it.title}</H3>
                  <P className="text-sm">{it.blurb}</P>
                </CardBody>
              </Card>
            ))}
          </div>
        </Reveal>
      </Section>

      <Section id="modules">
        <Reveal>
          <H2>Modules</H2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {product.modules.map((m) => (
              <Card key={m.tag}>
                <CardBody className="space-y-3">
                  <div className="text-xs text-spaced text-[rgba(var(--muted),0.95)]">{m.tag}</div>
                  <H3>{m.title}</H3>
                  <P className="text-sm">{m.blurb}</P>
                  <ul className="mt-2 grid gap-2 text-sm text-[rgba(var(--fg),0.72)]">
                    {m.bullets.map((b) => (
                      <li key={b} className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[rgba(var(--accent),0.95)]" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </CardBody>
              </Card>
            ))}
          </div>
        </Reveal>
      </Section>

      <Section>
        <Reveal>
          <H2>Screenshots (placeholders)</H2>
          <div className="mt-6">
            <Carousel items={product.screenshots} />
          </div>
        </Reveal>
      </Section>

      <Section>
        <Reveal>
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardBody className="space-y-3">
                <H2>{product.integrations.title}</H2>
                <ul className="grid gap-2 text-sm text-[rgba(var(--fg),0.72)]">
                  {product.integrations.items.map((x) => (
                    <li key={x} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[rgba(var(--accent),0.95)]" />
                      <span>{x}</span>
                    </li>
                  ))}
                </ul>
              </CardBody>
            </Card>

            <Card id="security">
              <CardBody className="space-y-3">
                <H2>{product.security.title}</H2>
                <ul className="grid gap-2 text-sm text-[rgba(var(--fg),0.72)]">
                  {product.security.items.map((x) => (
                    <li key={x} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[rgba(var(--accent),0.95)]" />
                      <span>{x}</span>
                    </li>
                  ))}
                </ul>
              </CardBody>
            </Card>
          </div>
        </Reveal>
      </Section>

      <Section>
        <Reveal>
          <H2>FAQ</H2>
          <div className="mt-6 grid gap-4">
            {product.faq.map((f) => (
              <Card key={f.q}>
                <CardBody className="space-y-2">
                  <H3>{f.q}</H3>
                  <P className="text-sm">{f.a}</P>
                </CardBody>
              </Card>
            ))}
          </div>

          <div className="mt-8">
            <Button href={site.ctas.primary.href} size="lg">{site.ctas.primary.label}</Button>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
