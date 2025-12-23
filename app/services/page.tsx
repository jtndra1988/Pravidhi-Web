import { services, site } from "@/lib/content";
import { Section } from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import { Card, CardBody } from "@/components/ui/Card";
import { Eyebrow, H2, H3, P } from "@/components/ui/Typography";
import Button from "@/components/ui/Button";

export default function ServicesPage() {
  return (
    <>
      <Section className="pt-10 md:pt-14">
        <Reveal>
          <Eyebrow>{services.hero.titleSpaced}</Eyebrow>
          <H2 className="mt-3">{services.hero.title}</H2>
          <P className="mt-4 max-w-3xl">{services.hero.body}</P>
          <div className="mt-6">
            <Button href={site.ctas.primary.href} size="lg">{site.ctas.primary.label}</Button>
          </div>
        </Reveal>
      </Section>

      <Section>
        <Reveal>
          <H2>What we deliver</H2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {services.offerings.map((o) => (
              <Card key={o.title}>
                <CardBody className="space-y-2">
                  <H3>{o.title}</H3>
                  <P className="text-sm">{o.blurb}</P>
                </CardBody>
              </Card>
            ))}
          </div>
        </Reveal>
      </Section>

      <Section>
        <Reveal>
          <H2>Engagement models</H2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {services.models.map((m) => (
              <Card key={m.title}>
                <CardBody className="space-y-2">
                  <H3>{m.title}</H3>
                  <P className="text-sm">{m.blurb}</P>
                </CardBody>
              </Card>
            ))}
          </div>
        </Reveal>
      </Section>

      <Section>
        <Reveal>
          <H2>Case studies (placeholders)</H2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {services.caseStudies.map((c) => (
              <Card key={c.title}>
                <CardBody className="space-y-2">
                  <H3>{c.title}</H3>
                  <P className="text-sm">{c.blurb}</P>
                </CardBody>
              </Card>
            ))}
          </div>
        </Reveal>
      </Section>
    </>
  );
}
