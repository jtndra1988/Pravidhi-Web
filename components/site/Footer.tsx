import Link from "next/link";
import Container from "@/components/ui/Container";
import { site } from "@/lib/content";
import Clock from "./Clock";

export default function Footer() {
  return (
    <footer className="mt-10 border-t border-[rgba(255,255,255,0.08)]">
      <Container className="py-12 grid gap-10 md:grid-cols-12">
        <div className="md:col-span-4 space-y-3">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-[rgba(var(--accent),0.95)]" />
            <span className="text-sm font-semibold">{site.company}</span>
          </div>
          <p className="text-sm text-[rgba(var(--fg),0.70)]">
            Government-grade software engineering and AI-enabled digital health platforms.
          </p>
          <p className="text-xs text-[rgba(var(--fg),0.55)]">{site.footer.note}</p>
        </div>

        <div className="md:col-span-3">
          <div className="text-xs text-spaced text-[rgba(var(--muted),0.95)]">Navigation</div>
          <div className="mt-3 flex flex-col gap-2 text-sm">
            {site.nav.map((it) => (
              <Link key={it.href} href={it.href} className="text-[rgba(var(--fg),0.75)] hover:text-[rgba(var(--fg),0.95)]">
                {it.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="md:col-span-3 space-y-3">
          <div>
            <div className="text-xs text-spaced text-[rgba(var(--muted),0.95)]">{site.footer.addressLabel}</div>
            <div className="mt-2 text-sm text-[rgba(var(--fg),0.75)]">{site.footer.address}</div>
          </div>
          <div>
            <div className="text-xs text-spaced text-[rgba(var(--muted),0.95)]">{site.footer.emailLabel}</div>
            <div className="mt-2 text-sm text-[rgba(var(--fg),0.75)]">{site.footer.email}</div>
          </div>
        </div>

        <div className="md:col-span-2 space-y-3">
          <div className="text-xs text-spaced text-[rgba(var(--muted),0.95)]">{site.footer.cityClockLabel}</div>
          <div className="text-sm text-[rgba(var(--fg),0.78)]">
            <Clock tz={site.footer.cityClockTz} />
          </div>
          <div className="text-xs text-[rgba(var(--fg),0.55)]">
            ©{new Date().getFullYear()} {site.company}. All rights reserved.
          </div>
        </div>
      </Container>
    </footer>
  );
}
