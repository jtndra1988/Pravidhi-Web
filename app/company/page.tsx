import { company, site } from "@/lib/content";
import { Section } from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import { Card, CardBody } from "@/components/ui/Card";
import { Eyebrow, H2, H3, P } from "@/components/ui/Typography";
import Button from "@/components/ui/Button";

export default function CompanyPage() {
  return (
    <>
      <Section className="pt-10 md:pt-14">
        <Reveal>
          <Eyebrow>{company.hero.titleSpaced}</Eyebrow>
          <H2 className="mt-3">{company.hero.title}</H2>
          <P className="mt-4 max-w-3xl">{company.hero.body}</P>
          <div className="mt-6">
            <Button href={site.ctas.primary.href} size="lg">{site.ctas.primary.label}</Button>
          </div>
        </Reveal>
      </Section>

      <Section>
        <Reveal>
          <H2>Mission</H2>
          <Card className="mt-6">
            <CardBody>
              <P>{company.mission}</P>
            </CardBody>
          </Card>
        </Reveal>
      </Section>

      <Section>
        <Reveal>
          <H2>Values</H2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {company.values.map((v) => (
              <Card key={v.title}>
                <CardBody className="space-y-2">
                  <H3>{v.title}</H3>
                  <P className="text-sm">{v.blurb}</P>
                </CardBody>
              </Card>
            ))}
          </div>
        </Reveal>
      </Section>

      <Section>
        <Reveal>
          <H2>Leadership (placeholders)</H2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {company.leadership.map((l) => (
              <Card key={l.title}>
                <CardBody className="space-y-2">
                  <H3>{l.title}</H3>
                  <P className="text-sm">{l.blurb}</P>
                </CardBody>
              </Card>
            ))}
          </div>
        </Reveal>
      </Section>
    </>
  );
}
