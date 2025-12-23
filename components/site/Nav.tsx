"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { site } from "@/lib/content";
import { cx as cn } from "@/lib/utils";
import  Button  from "@/components/ui/Button";
import { Logo } from "@/components/site/Logo";

export function Nav() {
  const items = useMemo(() => site.nav, []);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("overflow-hidden", open);
    return () => document.documentElement.classList.remove("overflow-hidden");
  }, [open]);

  return (
    <header className="sticky top-0 z-50">
      <div className="border-b border-[rgb(var(--border))] bg-[rgba(var(--bg),0.82)] backdrop-blur-xl supports-[backdrop-filter]:bg-[rgba(var(--bg),0.62)]">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6">
          <Logo />

          <nav className="hidden items-center gap-6 md:flex" aria-label="Primary navigation">
            {items.map((it) => (
              <Link
                key={it.href}
                href={it.href}
                className="text-sm text-[rgba(var(--fg),0.78)] hover:text-[rgba(var(--fg),0.95)] transition-colors"
              >
                {it.label}
              </Link>
            ))}
            <Button href={site.ctas.primary.href} size="sm">
              {site.ctas.primary.label}
            </Button>
          </nav>

          <button
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[rgb(var(--border))] bg-[rgba(var(--card),0.7)]"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">{open ? "Close" : "Menu"}</span>
            <span className={cn("h-0.5 w-5 bg-[rgba(var(--fg),0.85)] transition-all", open && "translate-y-1.5 rotate-45")} />
            <span className={cn("mt-1.5 h-0.5 w-5 bg-[rgba(var(--fg),0.85)] transition-all", open && "-translate-y-0.5 -rotate-45")} />
          </button>
        </div>
      </div>

      {/* Mobile panel */}
      <div
        className={cn(
          "md:hidden overflow-hidden border-b border-[rgb(var(--border))] bg-[rgba(var(--bg),0.92)] backdrop-blur-xl transition-[max-height] duration-300",
          open ? "max-h-[420px]" : "max-h-0"
        )}
      >
        <div className="mx-auto max-w-6xl px-4 py-3">
          <div className="flex flex-col gap-2" role="menu" aria-label="Mobile navigation">
            {items.map((it) => (
              <Link
                key={it.href}
                href={it.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-2 text-sm text-[rgba(var(--fg),0.85)] hover:bg-[rgba(var(--fg),0.05)]"
                role="menuitem"
              >
                {it.label}
              </Link>
            ))}
            <div className="pt-2">
              <Button href={site.ctas.primary.href} onClick={() => setOpen(false)} className="w-full justify-center">
                {site.ctas.primary.label}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
