import { solutions, site } from "@/lib/content";
import { Section } from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import { Card, CardBody } from "@/components/ui/Card";
import { Eyebrow, H2, H3, P } from "@/components/ui/Typography";
import Button from "@/components/ui/Button";

export default function SolutionsPage() {
  return (
    <>
      <Section className="pt-10 md:pt-14">
        <Reveal>
          <Eyebrow>{solutions.hero.titleSpaced}</Eyebrow>
          <H2 className="mt-3">{solutions.hero.title}</H2>
          <P className="mt-4 max-w-3xl">{solutions.hero.body}</P>
          <div className="mt-6">
            <Button href={site.ctas.primary.href} size="lg">{site.ctas.primary.label}</Button>
          </div>
        </Reveal>
      </Section>

      <Section>
        <Reveal>
          <H2>Solution areas</H2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {solutions.items.map((s) => (
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
    </>
  );
}
