import Link from "next/link";
import Container from "@/components/ui/Container";
import { site } from "@/lib/content";
import Clock from "./Clock";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="zyposoft-footer" aria-label="Site footer">
      <div className="zyposoft-footer__bg" aria-hidden>
        <div className="zyposoft-footer__mesh" />
        <div className="zyposoft-footer__grid" />
        <div className="zyposoft-footer__noise" />
        <div className="zyposoft-footer__halo" />
      </div>

      <div className="zyposoft-footer__rule" aria-hidden />

      <Container className="relative z-[1] py-14">
        <div className="grid gap-10 md:grid-cols-12">
          {/* Brand */}
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <span className="zyposoft-footer__dot" aria-hidden />
              <div>
                <div className="text-sm font-semibold text-[rgba(11,30,58,0.92)]">
                  {site.company}
                </div>
                <div className="text-xs text-spaced text-[rgba(11,30,58,0.55)]">
                  SOFTWARE • AI • DELIVERY
                </div>
              </div>
            </div>

            <p className="text-sm leading-relaxed text-[rgba(11,30,58,0.66)] max-w-sm">
              Government-grade software engineering with security-first architecture,
              modern cloud delivery, and measurable AI enablement.
            </p>

            <p className="text-xs text-[rgba(11,30,58,0.50)] max-w-sm">
              {site.footer.note}
            </p>

            {/* Subtle color rail (ties to the new theme system) */}
            <div className="zyposoft-footer__rail" aria-hidden />
          </div>

          {/* Navigation */}
          <div className="md:col-span-3">
            <div className="zyposoft-footer__kicker">Navigation</div>
            <div className="mt-4 flex flex-col gap-2.5 text-sm">
              {site.nav.map((it) => (
                <Link key={it.href} href={it.href} className="zyposoft-footer__link">
                  {it.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="md:col-span-3 space-y-6">
            <div>
              <div className="zyposoft-footer__kicker">{site.footer.addressLabel}</div>
              <div className="mt-2 text-sm text-[rgba(11,30,58,0.70)]">
                {site.footer.address}
              </div>
            </div>

            <div>
              <div className="zyposoft-footer__kicker">{site.footer.emailLabel}</div>
              <div className="mt-2 text-sm">
                <a
                  className="zyposoft-footer__link"
                  href={`mailto:${site.footer.email}`}
                >
                  {site.footer.email}
                </a>
              </div>
            </div>
          </div>

          {/* Time + Legal */}
          <div className="md:col-span-2 space-y-4">
            <div>
              <div className="zyposoft-footer__kicker">{site.footer.cityClockLabel}</div>
              <div className="mt-2 text-sm text-[rgba(11,30,58,0.72)]">
                <Clock tz={site.footer.cityClockTz} />
              </div>
            </div>

            <div className="text-xs text-[rgba(11,30,58,0.52)]">
              ©{year} {site.company}. All rights reserved.
            </div>

            {/* Micro-links if you add them later */}
            <div className="zyposoft-footer__micro">
              <Link href="/privacy" className="zyposoft-footer__microLink">
                Privacy
              </Link>
              <span className="sep" aria-hidden>•</span>
              <Link href="/terms" className="zyposoft-footer__microLink">
                Terms
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom rule */}
        <div className="zyposoft-footer__bottomRule" aria-hidden />
      </Container>
    </footer>
  );
}
