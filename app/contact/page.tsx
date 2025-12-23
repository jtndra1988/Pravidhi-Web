"use client";

import { contact, site } from "@/lib/content";
import { Section } from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import { Card, CardBody } from "@/components/ui/Card";
import { Eyebrow, H2, P } from "@/components/ui/Typography";
import Button from "@/components/ui/Button";
import { useState } from "react";

type Field = (typeof contact.form.fields)[number];

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState<string>("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setError("");

    const form = e.currentTarget;
    const fd = new FormData(form);
    const payload: Record<string, string> = {};
    fd.forEach((v, k) => (payload[k] = String(v)));

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(payload)
      });

      if (!res.ok) {
        const j = await res.json().catch(() => ({}));
        throw new Error(j?.error || "Request failed");
      }

      setStatus("sent");
      form.reset();
    } catch (err: any) {
      setStatus("error");
      setError(err?.message || "Something went wrong");
    }
  }

  return (
    <>
      <Section className="pt-10 md:pt-14">
        <Reveal>
          <Eyebrow>{contact.hero.titleSpaced}</Eyebrow>
          <H2 className="mt-3">{contact.hero.title}</H2>
          <P className="mt-4 max-w-3xl">{contact.hero.body}</P>
        </Reveal>
      </Section>

      <Section>
        <div className="grid gap-6 md:grid-cols-12">
          <div className="md:col-span-7">
            <Card>
              <CardBody>
                <form onSubmit={onSubmit} className="grid gap-4" aria-label="Government inquiry form">
                  {contact.form.fields.map((f: Field) => (
                    <div key={f.name} className="grid gap-2">
                      <label className="text-sm text-[rgba(var(--fg),0.75)]" htmlFor={f.name}>
                        {f.label} {f.required ? <span className="text-[rgba(var(--accent),0.95)]">*</span> : null}
                      </label>

                      {f.type === "textarea" ? (
                        <textarea
                          id={f.name}
                          name={f.name}
                          required={f.required}
                          rows={5}
                          className="rounded-xl border border-[rgba(255,255,255,0.10)] bg-[rgba(255,255,255,0.03)] px-4 py-3 text-sm outline-none focus:border-[rgba(var(--accent),0.55)]"
                        />
                      ) : (
                        <input
                          id={f.name}
                          name={f.name}
                          type={f.type}
                          required={f.required}
                          className="h-11 rounded-xl border border-[rgb(var(--border))] bg-white px-4 text-sm outline-none focus:border-[rgba(var(--accent),0.55)]"

                        />
                      )}
                    </div>
                  ))}

                  <div className="pt-2 flex flex-col sm:flex-row gap-3 items-center">
                    <Button type="submit" size="lg" ariaLabel="Submit request" className="w-full sm:w-auto">
                      {status === "sending" ? "Sending..." : "Submit"}
                    </Button>
                    <Button href={site.ctas.primary.href} variant="ghost" className="w-full sm:w-auto">
                      {site.ctas.primary.label} →
                    </Button>
                  </div>

                  {status === "sent" ? (
                    <div className="text-sm text-[rgba(var(--accent),0.95)]">Thank you. We’ll get back to you shortly.</div>
                  ) : null}

                  {status === "error" ? (
                    <div className="text-sm text-red-300">Error: {error}</div>
                  ) : null}
                </form>
              </CardBody>
            </Card>
          </div>

          <div className="md:col-span-5 space-y-4">
            <Card>
              <CardBody className="space-y-3">
                <div className="text-xs text-spaced text-[rgba(var(--muted),0.95)]">Primary CTA</div>
                <P className="text-sm">
                  This form is optimized for government inquiries (department, state, scope). Replace fields in{" "}
                  <code className="text-[rgba(var(--fg),0.85)]">lib/content.ts</code>.
                </P>
                <Button href={contact.calendly.href} variant="secondary">
                  {contact.calendly.label}
                </Button>
              </CardBody>
            </Card>

            <Card>
              <CardBody className="space-y-2">
                <div className="text-xs text-spaced text-[rgba(var(--muted),0.95)]">Email</div>
                <div className="text-sm text-[rgba(var(--fg),0.75)]">{site.footer.email}</div>
              </CardBody>
            </Card>
          </div>
        </div>
      </Section>
    </>
  );
}
