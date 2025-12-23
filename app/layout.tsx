import type { Metadata } from "next";
import { site } from "@/lib/content";
import "./globals.css";
import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";

export const metadata: Metadata = {
  metadataBase: new URL(site.domain),
  title: {
    default: `${site.company} — Government-grade software and AI health platforms`,
    template: `%s — ${site.company}`
  },
  description:
    "Pravidhi Softtech builds secure, scalable digital health platforms for Indian State Governments and public hospitals. Flagship product: ArogyaSara.",
  openGraph: {
    title: `${site.company} — Government-grade software and AI health platforms`,
    description:
      "Secure, scalable systems for public hospitals and state programs. ArogyaSara: EHR, HMS, Telemedicine, analytics, AI surveillance.",
    type: "website",
    url: site.domain
  },
  robots: { index: true, follow: true }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>
        <Navbar />
        <main className="min-h-[70vh]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
