"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { site } from "@/lib/content";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { cx } from "@/lib/utils";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50">
      <div
        className={cx(
          "transition-all",
          scrolled
            ? "bg-[rgba(250,250,250,0.85)] backdrop-blur border-b border-[rgb(var(--border))]"
            : "bg-transparent"
        )}
      >

        <Container className="h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2" aria-label={`${site.company} home`}>
            <span className="h-2.5 w-2.5 rounded-full bg-[rgba(var(--accent),0.95)]" />
            <span className="text-sm font-semibold tracking-tight">{site.company}</span>
          </Link>

          <nav className="hidden md:flex items-center gap-7 text-sm text-[rgba(var(--fg),0.70)]">
            {site.nav.slice(1).map((it) => (
              <Link key={it.href} href={it.href} className="hover:text-[rgba(var(--fg),0.95)]">
                {it.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <Button href={site.ctas.primary.href} size="sm">
              {site.ctas.primary.label}
            </Button>
          </div>

          <button
            className="md:hidden h-10 w-10 rounded-full border border-[rgba(255,255,255,0.10)] hover:bg-[rgba(255,255,255,0.06)]"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            ☰
          </button>
        </Container>

        {open ? (
          <div className="md:hidden border-t border-[rgba(255,255,255,0.08)]">
            <Container className="py-4 flex flex-col gap-3">
              {site.nav.map((it) => (
                <Link
                  key={it.href}
                  href={it.href}
                  onClick={() => setOpen(false)}
                  className="text-sm text-[rgba(var(--fg),0.85)]"
                >
                  {it.label}
                </Link>
              ))}
              <div className="pt-2">
                <Button href={site.ctas.primary.href} className="w-full">
                  {site.ctas.primary.label}
                </Button>
              </div>
            </Container>
          </div>
        ) : null}
      </div>
    </header>
  );
}
