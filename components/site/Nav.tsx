"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import { site } from "@/lib/content";
import { cx as cn } from "@/lib/utils";
import Button from "@/components/ui/Button";
import { Logo } from "@/components/site/Logo";

export function Nav() {
  const items = useMemo(() => site.nav, []);
  const pathname = usePathname();
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

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname?.startsWith(href);
  };

  return (
    <header className="pravidhi-navWrap" role="banner">
      <div className="pravidhi-navContainer">
        <div className="pravidhi-navBar">
          {/* Left: Logo */}
          <div className="pravidhi-navLeft">
            <Link href="/" className="pravidhi-navLogo" aria-label="Pravidhi Softtech home">
              <Logo />
            </Link>
          </div>

          {/* Center: Links */}
          <nav className="pravidhi-navLinks" aria-label="Primary">
            {items.map((it) => (
              <Link
                key={it.href}
                href={it.href}
                className={cn("pravidhi-navLink", isActive(it.href) && "is-active")}
              >
                {it.label}
              </Link>
            ))}
          </nav>

          {/* Right: CTA + mobile toggle */}
          <div className="pravidhi-navRight">
            <div className="hidden md:block">
              <Button href={site.ctas.primary.href} className="pravidhi-navBtn" size="sm">
                {site.ctas.primary.label}
              </Button>
            </div>

            <button
              className="md:hidden pravil-navBurger"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              <span className="sr-only">{open ? "Close" : "Menu"}</span>
              <span className={cn("line", open && "open a")} />
              <span className={cn("line", open && "open b")} />
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        <div className={cn("pravidhi-navMobile", open ? "open" : "")}>
          <div className="pravidhi-navMobilePanel">
            {items.map((it) => (
              <Link
                key={it.href}
                href={it.href}
                onClick={() => setOpen(false)}
                className={cn("pravidhi-navMobileLink", isActive(it.href) && "is-active")}
              >
                {it.label}
              </Link>
            ))}
            <div className="pt-2">
              <Button
                href={site.ctas.primary.href}
                onClick={() => setOpen(false)}
                className="pravidhi-navBtn w-full justify-center"
              >
                {site.ctas.primary.label}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
